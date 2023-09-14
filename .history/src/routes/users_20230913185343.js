const express = require("express");
const UserController = require("../controller/users.js");

const route = express.Router();

route.get("/", UserController.getAllUsers);

route.post("/", UserController.createNewUser);

module.exports = route;
