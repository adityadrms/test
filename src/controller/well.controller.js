const {
  createWellService,
  getAllWellService,
  getIdWellService,
  updateWellService,
  deleteWellservice,
} = require("../service/well.service");

const createWellController = async (req, res, next) => {
  try {
    const well = await createWellService(req.body);
    res.status(200).json({ message: "Well created successfully.", data: well });
  } catch (error) {
    next(error);
  }
};

const getAllWellController = async (req, res, next) => {
  try {
    const getAllWellController = await getAllWellService();
    res
      .status(200)
      .json({
        message: "Well retrieved successfully.",
        data: getAllWellController,
      });
  } catch (error) {
    next(error);
  }
};

const getIdWellController = async (req, res, next) => {
  const { wellId } = req.params;
  try {
    const getIdWell = await getIdWellService(wellId);
    res
      .status(200)
      .json({ message: "Well retrieved successfully.", data: getIdWell });
  } catch (error) {
    next(error);
  }
};

const updateWellController = async (req, res, next) => {
  const { wellId } = req.params;
  const { well, placeId } = req.body;

  try {
    const updatedWell = await updateWellService({ well, wellId, placeId });
    res
      .status(200)
      .json({ message: "Well updates successfully.", data: updatedWell });
  } catch (error) {
    next(error);
  }
};

const deteleWellController = async (req, res, next) => {
  const { wellId } = req.params;

  try {
    const deleteWell = await deleteWellservice(wellId);
    res
      .status(200)
      .json({ message: "Well deleted successfully.", data: deleteWell });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createWellController,
  getAllWellController,
  getIdWellController,
  updateWellController,
  deteleWellController,
};
