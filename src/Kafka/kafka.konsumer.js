const WebSocket = require("ws");
const { Kafka } = require("kafkajs");


const kafka = new Kafka({
  clientId: "jsonConsumer",
  brokers: ["localhost:9092"], 
});

const consumer = kafka.consumer({ groupId: "json-group" });
let clients = [];


const websocketPort = 8080;
const wss = new WebSocket.Server({ port: websocketPort, path: '/realtimedrilling' });

wss.on("connection", (ws) => {
  console.log("Client connected");
  clients.push(ws);

  ws.on("close", () => {
    clients = clients.filter((client) => client !== ws);
    console.log("Client disconnected");
  });
});


const runKafkaConsumer = async (callback) => {
  await consumer.connect();


  const topics = ["topic_data1", "topic_data2", "topic_data3"];
  for (const topic of topics) {
    await consumer.subscribe({ topic, fromBeginning: true });
  }

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      try {
        const messageValue = JSON.parse(message.value.toString());
        clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            const wellId = messageValue.wellId || "defaultWellId";
            const formattedMessage = {
              topic,
              message: `Message for ${topic}`,
              wellId: wellId,
              data: [messageValue],
            };
        
            client.send(JSON.stringify(formattedMessage));
          }
        });

        if (callback && typeof callback === 'function') {
          await callback(topic, messageValue);
        }
      } catch (error) {
        console.error(`Error processing message from topic ${topic}:`, error);
      }
    },
  });
};

module.exports = { runKafkaConsumer };
