const getAllUsers = async (req, res) => {
  try {
    res.send('working');
  } catch (error) {
    console.log(error.message);
  }
};
const createUser = async (req, res) => {
  try {
    res.send('working');
  } catch (error) {
    console.log(error.message);
  }
};
const updateUser = async (req, res) => {
  try {
    res.send('working');
  } catch (error) {
    console.log(error.message);
  }
};
const getUserById = async (req, res) => {
  try {
    res.send('working');
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
