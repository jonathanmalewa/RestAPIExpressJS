// Membuat dan menjalankan server express

const express = require("express");

const app = express();

// app.method(path, handler);

// .use dapat menghandle semua method middleware
app.use("/", (req, res, next) => {
  res.send("Hello World"); //mengirim respon kepada user berupa text hello world
});

app.listen(4000, () => {
  console.log("Server berhasil di running di port 4000");
});
