const dbPool = require("../config/database");

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";

  return dbPool.execute(SQLQuery);
};

const createNewUser = () => {
  const SQLQuery = `INSERT INTO users(name, email, address) VALUES('Azzamy', 'laso@gamil.com', 'Jakarta')`;
};

module.exports = {
  getAllUsers,
};
