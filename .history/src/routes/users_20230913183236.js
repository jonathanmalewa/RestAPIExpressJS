const express = require("express");

const route = express.Router();

route.get("/users", (req, res, next) => {
  res.json({
    messege: "Get Users Success",
  });
});

module.exports = route;
