const express = require("express");
const UserController = require("../controller/users.js");

const route = express.Router();

route.get("/", UserController.getAllUsers);

route.post("/", (req, res) => {
  res.json({
    messege: "POST users success",
  });
});
module.exports = route;
