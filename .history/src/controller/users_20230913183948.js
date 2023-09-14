const getAllUsers = (req, res) => {
  res.json({
    messege: "GET all user successs",
  });
};

const createNewUser = (req, res) => {
  res.json({
    messege: "POST all user successs",
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
};
