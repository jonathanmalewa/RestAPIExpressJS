const dbPool = require("../config/database");

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";
  dbPool.execute(SQLQuery, (err, rows) => {
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

  return;
};
