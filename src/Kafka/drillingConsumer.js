const { Kafka } = require("kafkajs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const kafka = new Kafka({
  clientId: "drillingConsumer",
  brokers: ["localhost:9092"], 
});

const consumer = kafka.consumer({ groupId: "drilling-group" });

const ConsumeDataDrilling = async (callback) => {
  try {
    await consumer.connect();
    console.log('Kafka consumer connected successfully');
    
    const topics = ["topic_data1", "topic_data2", "topic_data3"];
    for (const topic of topics) {
      await consumer.subscribe({ topic, fromBeginning: true });
      console.log(`Subscribed to topic: ${topic}`);
    }

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        try {
          const data = JSON.parse(message.value.toString());
          console.log(`Data received from topic: ${topic}`);
          // console.log(data);

          const well = await prisma.well.findUnique({
            where: { topic },
          });

          if (!well) {
            console.log(`No well found for topic: ${topic}. Skipping message.`);
            return;
          }

          if (topic === 'topic_data1') {
            // console.log("Processing data from topic_data1:", data);

          } else if (topic === 'topic_data2') {
            // console.log("Processing data from topic_data2:", data);

          } else if (topic === 'topic_data3') {
            // console.log("Processing data from topic_data3:", data);
          }

          if (callback && typeof callback === 'function') {
            await callback(data);
          }
        } catch (error) {
          console.error("Error processing message:", error);
        }
      },
    });
  } catch (error) {
    console.error("Error in Kafka consumer:", error);
  }
};

module.exports = { ConsumeDataDrilling };
