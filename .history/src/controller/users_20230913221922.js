const getAllUsers = (req, res) => {
  const data = {
    id: 12312,
    name: "Jonathan",
    email: "laso@gmail.com",
  };
  res.json({
    messege: "GET all user successs",
    data: data,
  });
  console.log(data);
};

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    messege: "Create all user successs",
    data: req.body,
  });
};

const updateUser = (req, res) => {
  console.log(req.params);
  res.json({
    messege: "Update User Success",
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
};
