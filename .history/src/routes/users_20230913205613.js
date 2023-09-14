const express = require("express");
const UserController = require("../controller/users.js");

const route = express.Router();

// CREATE - POST
route.post("/", UserController.createNewUser);
route.get("/", UserController.getAllUsers);

module.exports = route;
