const mysql = require("mysql2");

// configurasi ke database
const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "express_mysql",
  password: "",
});
