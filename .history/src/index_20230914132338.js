require("dotenv").config();
const PORT = process.env.PORT || 5000;

// Membuat dan menjalankan server express
const express = require("express");

const userRoute = require("./routes/users.js");
const middlewereLogRequest = require("./middleware/logs");

const app = express();
//rendering
app.use(middlewereLogRequest);
// Jembatan Middlewere
app.use(express.json());

app.use("/users", userRoute);

// send data menggunakan Json

app.listen(PORT, () => {
  console.log(`Server berhasil di running di port ${port}`);
});
