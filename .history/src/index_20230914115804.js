// Membuat dan menjalankan server express

const express = require("express");
const mysql = require("mysql2");

const userRoute = require("./routes/users.js");
const middlewereLogRequest = require("./middleware/logs");

const app = express();

//rendering
app.use(middlewereLogRequest);
// Jembatan Middlewere
app.use(express.json());

app.use("/users", userRoute);

// send data menggunakan Json

app.listen(4000, () => {
  console.log("Server berhasil di running di port 4000");
});
