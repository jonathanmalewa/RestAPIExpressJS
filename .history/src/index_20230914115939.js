// Membuat dan menjalankan server express

const express = require("express");
const mysql = require("mysql2");

const userRoute = require("./routes/users.js");
const middlewereLogRequest = require("./middleware/logs");

const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "express_mysql",
  password: "",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

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
