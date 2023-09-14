const dbPool = require("../config/database");

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM usersssss";

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllUsers,
};
