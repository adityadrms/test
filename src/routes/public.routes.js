const express = require("express");
const {
  loginEmployeeController,
} = require("../controller/Employee.controller.js");

const publicRouter = new express.Router();

publicRouter.post("/api/employee/login/", loginEmployeeController);

module.exports = publicRouter;
