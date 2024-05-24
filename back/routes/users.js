const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  addUser,
  updateUserById,
  deleteUserById
} = require('../controllers/users');

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', addUser);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);

module.exports = router;