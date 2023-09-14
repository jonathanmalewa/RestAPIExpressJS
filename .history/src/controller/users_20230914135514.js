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
  try {
    const { body } = req;
    await UserModel.createNewUser(body);
    res.json({
      messege: "Create all user successs",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      messege: "Server Error",
      serverMessege: error,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { idUser } = req;
    await UserModel.createNewUser.updateUser(idUser);
    res.json({
      messege: "Update User Success",
      data: req.idUser,
    });
  } catch (error) {}
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
