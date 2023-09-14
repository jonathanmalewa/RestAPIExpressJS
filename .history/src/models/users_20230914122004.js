const dbPool = require("../config/database");

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";
  dbPool.execute(SQLQuery);

  return dbPool;
};
