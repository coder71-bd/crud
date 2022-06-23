const express = require('express');
const {
  getAllUsers,
  createUser,
  updateUser,
  getUserById,
} = require('../Controller/userController.js');

const router = express.Router();

router.get('/all', getAllUsers);
router.post('/create', createUser);
router.put('/update', updateUser);
router.get('/getbyId', getUserById);

module.exports = router;
