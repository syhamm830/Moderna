const userSchema = require('../models/users');
const userValidation = require('../validation/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const addUser = async (req, res) => {
  const { error, value } = userValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  try {
    const newUser = await userSchema.create(value);
    res.status(201).json(newUser);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Error while adding user' });
  }
};

const getRole = async (req, res) => {
  try {
    const role = await userSchema.find({ role: req.params.role }).exec();
    res.status(200).json(role);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Error while getting role' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userSchema.find();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: 'Error retrieving users' });
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userSchema.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (e) {
    return res.status(400).json({ message: 'No user with id ' + userId });
  }
};

const updateUserById = async (req, res) => {
  const userId = req.params.id;
  const { error, value } = userValidation.validate(req.body, { abortEarly: false });
  if (error) {
      return res.status(400).json({ message: error.details.map(x => x.message).join(', ') });
  }
  try {
      if (value.password) {
          value.password = await bcrypt.hash(value.password, 10);
      } else {
          delete value.password;
      }

      const user = await User.findByIdAndUpdate(userId, value, { new: true });
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
  } catch (e) {
      res.status(500).json({ message: 'Error updating user', error: e.message });
  }
};

const deleteUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userSchema.findByIdAndDelete(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'Deleted user with id ' + userId });
  } catch (e) {
    res.status(404).json({ message: 'No user with id ' + userId });
  }
};

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  getRole
};
