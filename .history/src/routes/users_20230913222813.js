const express = require("express");
const UserController = require("../controller/users.js");

const route = express.Router();

// CREATE - POST
route.post("/", UserController.createNewUser);

//READ - GET
route.get("/", UserController.getAllUsers);

// UPDATE - PATCH
route.patch("/:idUser", UserController.updateUser);

// DELETE - DELETE
route.delete("/:idUser", UserController.deleteUser);
module.exports = route;
