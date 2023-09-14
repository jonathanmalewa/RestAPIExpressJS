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
  const { body } = req;
  try {
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
  const { idUser } = req.params;
  const { body } = req;
  try {
    await UserModel.updateUser(body, idUser);
    res.json({
      message: "Update User Success",
      data: {
        id: idUser,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message, // Gunakan error.message untuk pesan kesalahan yang lebih spesifik
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    await UserModel.deleteUser(idUser);
    res.json({
      messege: "Deleted User Success",
      data: { id: idUser },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message, // Gunakan error.message untuk pesan kesalahan yang lebih spesifik
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
