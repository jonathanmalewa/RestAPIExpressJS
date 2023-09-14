// Membuat dan menjalankan server express

const express = require("express");

const userRoute = require("./routes/users.js");
const middlewereLogRequest = require("./middleware/logs");

const app = express();

//rendering
app.use(middlewereLogRequest);
app.use(express.json());
app.get(express.json());
app.use("/users", userRoute);

// send data menggunakan Json

app.listen(4000, () => {
  console.log("Server berhasil di running di port 4000");
});
