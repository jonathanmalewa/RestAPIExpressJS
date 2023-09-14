const UserModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UserModel.getAllUsers();
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

const createNewUser = async (req, res) => {
  console.log(req.body);
  const { body } = req;
  try {
    await UserModel.createNewUser(body);
  } catch (error) {}

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
