const User = require('../Schemas/userSchema');
const getAllUsers = async (req, res) => {
  try {
    let { page } = req.query;
    const size = 10;
    let count = await User.count();

    let users = []; // all the available users for specific page will be stored here
    if (page) {
      users = await User.find()
        .skip(parseInt(page) * parseInt(size))
        .limit(parseInt(size)); // send users with pagination
    } else {
      users = await User.find(); // if the pagination query is missing send all data
    }

    res.json({
      success: true,
      count,
      users,
    });
  } catch (error) {
    console.log(error.message);
  }
};
const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const response = await User.create(userData);

    res.json({
      success: true,
      response,
    });
  } catch (error) {
    console.log(error.message);
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.query; // use the id to update the user
    const updateUserData = req.body; // udpate info

    const response = await User.findOneAndUpdate({ _id: id }, updateUserData, {
      new: true,
    }); // update and return the updated user info

    res.json({
      success: true,
      response,
    });
  } catch (error) {
    console.log(error.message);
  }
};
const getUserById = async (req, res) => {
  try {
    const { id } = req.query;
    const response = await User.findOne({ _id: id });
    res.json({
      success: true,
      response,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  getUserById,
};
