const fs = require("fs");
const path = require("path");
const { Kafka } = require("kafkajs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const kafka = new Kafka({
  clientId: "producer-client",
  brokers: ["localhost:9092"],
});
const producer = kafka.producer();

const formatDate = (data) => {
  return data.map((item) => {
    return {
      ...item,
      dt: new Date(item.dt).toISOString(),
    };
  });
};

const checkTopic = async (topic) => {
  while (true) {
    const well = await prisma.well.findUnique({
      where: { topic },
    });

    if (well) {
      return well;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};

const sendMessageAndSaveToDB = async () => {
  try {
    const fileConfigs = [
      {
        path: path.join(__dirname, "../Kafka/data_drilling/data1.json"),
        topic: "topic_data1",
      },
      {
        path: path.join(__dirname, "../Kafka/data_drilling/data2.json"),
        topic: "topic_data2",
      },
      {
        path: path.join(__dirname, "../Kafka/data_drilling/data3.json"),
        topic: "topic_data3",
      },
    ];

    await producer.connect();

    const promises = fileConfigs.map(async ({ path: filePath, topic }) => {
      const jsonData = fs.readFileSync(filePath, "utf8");
      const rawData = JSON.parse(jsonData);

      const formattedData = formatDate(rawData);

      const well = await checkTopic(topic); 
      const wellId = well.id;

      for (const currentData of formattedData) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); 

        const record = await prisma.record.create({
          data: {
            ...currentData,
            wellId,
          },
        });

        const message = {
          value: JSON.stringify({ ...currentData, wellId }),
        };

        await producer.send({
          topic,
          messages: [message],
        });

        console.log(
          `Data from ${filePath} (Topic: ${topic}) processed: Record ID ${record.id}, Well ID ${wellId}`
        );
      }
    });

    await Promise.all(promises);

    console.log("All messages sent successfully and data saved to DB.");
    await producer.disconnect();
    await prisma.$disconnect();
  } catch (error) {
    console.error("Error processing data:", error.message);
    await producer.disconnect();
    await prisma.$disconnect();
  }
};

module.exports = { sendMessageAndSaveToDB };
