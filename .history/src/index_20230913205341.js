// Membuat dan menjalankan server express

const express = require("express");

const userRoute = require("./routes/users.js");
const middlewereLogRequest = require("./middleware/logs");

const app = express();

// app.method(path, handler);

// .use dapat menghandle semua method middleware
// app.use("/", (req, res, next) => {
//   res.send("Hello World"); //mengirim respon kepada user berupa text hello world
// });

// bisa lebih spesifik
// app.get("/", (req, res) => {
//   res.send("<h1>Hello World<h1/>");
// });

//rendering
app.use(middlewereLogRequest);
app.use("/users", userRoute);

// send data menggunakan Json

app.listen(4000, () => {
  console.log("Server berhasil di running di port 4000");
});
