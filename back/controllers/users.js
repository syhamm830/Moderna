const User = require('../models/User');
const userValidation = require('../validation/users');

const addUser = async (req, res) => {
    const { error, value } = userValidation.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
        const newUser = await User.create(value);
        res.status(201).json(newUser);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Error while adding user' });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (e) {
        res.status(500).json({ message: 'Error retrieving users' });
    }
};

const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (e) {
        return res.status(400).json({ message: 'No user with id ' + userId });
    }
};

const updateUserById = async (req, res) => {
    const userId = req.params.id;
    const { error, value } = userValidation.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
        const user = await User.findByIdAndUpdate(userId, value, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (e) {
        return res.status(404).json({ message: 'User not found, wrong id' });
    }
};

const deleteUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findByIdAndDelete(userId);
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
    deleteUserById
};
