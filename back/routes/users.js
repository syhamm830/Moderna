const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const requireRole = require('../middleware/auth');
const {
  getAllUsers,
  getUserById,
  addUser,
  getRole,
  updateUserById,
  deleteUserById
} = require('../controllers/users');

router.get('/', getAllUsers); 
router.get('/:id', getUserById); 
router.get('/:id/Role', getRole); 
router.post('/', addUser); 
router.put('/:id', updateUserById); 
router.delete('/:id', deleteUserById);
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, phone, birthdate, role } = req.body;

    if (!name || !email || !password || !phone || !birthdate) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      birthdate,
      role 
    });

    await newUser.save();

    const token = jwt.sign({ user: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    newUser.token = token;
    newUser.password = undefined;

    res.status(201).json(newUser);

  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user', error });
  }
});
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

   
    
    

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true
    };

    res.status(200).cookie("token", token, options).json({
      success: true,
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        birthdate: user.birthdate,
        role: user.role,
      }
    });

  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Error logging in user', error });
  }
});







module.exports = router;
