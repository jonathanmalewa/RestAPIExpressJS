const express = require("express");

const route = express.Router();

route.get("/users", (req, res, next) => {
  res.json({
    messege: "Get Users Success",
  });
});



route.post('/users', (req, res) => {
    res.json(P{
        messege:'POST users success'
    })
})
module.exports = route;
