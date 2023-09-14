const getAllUsers = (req, res) => {
  res.json({
    messege: "GET all user successs",
  });
};

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    messege: "Create all user successs",
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
};
