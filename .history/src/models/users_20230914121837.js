const dbPool = require("../config/database");

const getAllUsers = () => {
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
};
