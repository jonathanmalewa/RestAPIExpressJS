const getAllUsers = (req, res) => {
  const data = {
    id: 12312,
    name: "Jonathan",
    email: "laso@gmail.com",
  };
  res.json({
    messege: "GET all user successs",
    console.log(data)
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
