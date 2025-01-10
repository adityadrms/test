const express = require("express");
const { authMiddleWare } = require("../middleware/auth.middleware");
const {
  createConditionController,
  getallConditionController,
  deleteAllConditionController,
  deleteRulesController,
  updateConditionsController,
  getIdConditionController,
} = require("../controller/conditionController");

const {
  createPlcController,
  getAllPlcController,
  getIdPlcController,
  updatePlcController,
  deletePlcController,
} = require("../controller/place.controller.js");

const {
  createWellController,
  getAllWellController,
  getIdWellController,
  updateWellController,
  deteleWellController,
} = require("../controller/well.controller.js");

const {
  createCmpController,
  getAllCmpController,
  getIdCmpController,
  updateCmpController,
  deleteCmpController,
} = require("../controller/company.controller.js");

const {
  createEmpController,
  getAllEmpController,
  getIdEmpController,
  updateEmpController,
  deleteEmpController,
} = require("../controller/Employee.controller.js");

const {
  getAllNtfController,
  getIdNtfController,
} = require("../controller/notification.controller");

const privateRouter = new express.Router();

// Place
privateRouter.post("/api/place/", authMiddleWare, createPlcController);
privateRouter.get("/api/place/", authMiddleWare, getAllPlcController);
privateRouter.get("/api/place/:placeId", authMiddleWare, getIdPlcController);
privateRouter.put("/api/place/:placeId", authMiddleWare, updatePlcController);
privateRouter.delete(
  "/api/place/:placeId",
  authMiddleWare,
  deletePlcController
);

//WELL
privateRouter.post("/api/well/", authMiddleWare, createWellController);
privateRouter.get("/api/well/", authMiddleWare, getAllWellController);
privateRouter.get("/api/well/:wellId", authMiddleWare, getIdWellController);
privateRouter.put("/api/well/:wellId", authMiddleWare, updateWellController);
privateRouter.delete("/api/well/:wellId", authMiddleWare, deteleWellController);

//Company
privateRouter.post("/api/company/", createCmpController);
privateRouter.get("/api/company/", getAllCmpController);
privateRouter.get(
  "/api/company/:companyId",
  authMiddleWare,
  getIdCmpController
);
privateRouter.put(
  "/api/company/:companyId",
  authMiddleWare,
  updateCmpController
);
privateRouter.delete(
  "/api/company/:companyId",
  authMiddleWare,
  deleteCmpController
);

// Employee
privateRouter.post("/api/employee/", authMiddleWare, createEmpController);
privateRouter.get("/api/employee/", authMiddleWare, getAllEmpController);
privateRouter.get(
  "/api/employee/:employeeId",
  authMiddleWare,
  getIdEmpController
);
privateRouter.put(
  "/api/employee/:employeeId",
  authMiddleWare,
  updateEmpController
);
privateRouter.delete(
  "/api/employee/:employeeId",
  authMiddleWare,
  deleteEmpController
);

// Condition
privateRouter.post("/api/condition/", createConditionController);
privateRouter.get("/api/condition/", getallConditionController);
privateRouter.get(
  "/api/condition/:conditionId",
  authMiddleWare,
  getIdConditionController
);
privateRouter.put("/api/condition/:conditionId", updateConditionsController);
privateRouter.delete(
  "/api/condition/:conditionId",
  authMiddleWare,
  deleteAllConditionController
);
privateRouter.delete(
  "/api/rulescondition/:ruleId",
  authMiddleWare,
  deleteRulesController
);

// Notification
privateRouter.get("/api/notification/", authMiddleWare, getAllNtfController);
privateRouter.get(
  "/api/notification/:notificationId",
  authMiddleWare,
  getIdNtfController
);

module.exports = privateRouter;
