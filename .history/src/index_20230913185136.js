// Membuat dan menjalankan server express

const express = require("express");

const userRoute = require("./routes/users.js");
const middlewere = require("./middleware/logs");

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

app.use("/users", userRoute);
app.use(middlewere);

// send data menggunakan Json
app.get("/", (req, res) => {
  res.json({
    id: 12321,
    nama: "Jonathan",
    email: "email@gmail.com",
  });
});

app.post("/", (req, res) => {
  res.send("Hello ini  Post Method");
});

app.listen(4000, () => {
  console.log("Server berhasil di running di port 4000");
});
