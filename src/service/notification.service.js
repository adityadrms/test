const { prismaClient } = require("../app/database");

const getAllNotificationService = async () => {
    return prismaClient.notification.findMany();
};

const getIdNotificationService = async (notificationId) => {
    return await prismaClient.notification.findUnique({
        where: {id: notificationId}
    })
}

module.exports = {
    getAllNotificationService,
    getIdNotificationService
}