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
});

const app = express();

//rendering
app.use(middlewereLogRequest);
// Jembatan Middlewere
app.use(express.json());

app.use("/users", userRoute);
app.use("/", (req, res) => {
  dbPool.execute("SELECT * FROM users", (err, rows) => {
    if (err) {
      return res.json({
        messege: "connection failed",
      });
    }
    res.json({
      messege: "connection succsess",
      data: rows,
    });
  });
});

// send data menggunakan Json

app.listen(4000, () => {
  console.log("Server berhasil di running di port 4000");
});
