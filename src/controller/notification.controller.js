const {
  getAllNotificationService,
  getIdNotificationService,
} = require("../service/notification.service");


const getAllNtfController = async (req, res, next) => {
  try {
    const getAllNtf = await getAllNotificationService();
    res.status(200).json({
      message: "notification retrieved successfully.",
      data: getAllNtf,
    });
  } catch (error) {
    next(error);
  }
};

const getIdNtfController = async (req, res, next) => {
  const { notificationId } = req.params;

  try {
    const getIdNtf = await getIdNotificationService(notificationId);
    res.status(200).json({
      message: "notification retrieved successfully.",
      data: getIdNtf,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllNtfController,
  getIdNtfController
}