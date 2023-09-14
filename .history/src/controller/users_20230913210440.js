const getAllUsers = (req, res) => {
  console.log(req.body);
  res.json({
    messege: "GET all user successs",
  });
};

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    messege: "Create all user successs",
    data: req.body,
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
};
