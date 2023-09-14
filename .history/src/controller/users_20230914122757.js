const UserModel = require("../models/users");

const getAllUsers = async (req, res) => {
  const [data] = await UserModel.getAllUsers();
  try {
    res.json({
      messege: "GET all user successs",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      messege: "Server Error",
      serverMessege: error,
    });
  }
};

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    messege: "Create all user successs",
    data: req.body,
  });
};

const updateUser = (req, res) => {
  const { idUser } = req.params;
  console.log("idUser : ", idUser);
  res.json({
    messege: "Update User Success",
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  const { idUser } = req.params;
  res.json({
    messege: "Delete User Successs",
    data: {
      id: idUser,
      nama: "Yueneta",
      email: "yuenetasaputri@gmail.com",
    },
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
