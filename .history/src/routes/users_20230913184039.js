const express = require("express");
const UserController = require("../controller/users.js");

const route = express.Router();

route.get("/", (req, res, next) => {
  res.json({
    messege: "Get Users Success",
  });
});

route.post("/", (req, res) => {
  res.json({
    messege: "POST users success",
  });
});
module.exports = route;
