const express = require("express");
const UserController = require("../controller/users.js");

const route = express.Router();

// CREATE - POST
route.post("/", UserController.createNewUser);

//READ - GET
route.get("/", UserController.getAllUsers);

// UPDATE - PATCH
route.patch("/:idUser", UserController.updateUser);

module.exports = route;
