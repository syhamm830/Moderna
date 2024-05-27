const jwt = require('jsonwebtoken');
const User = require('../models/users'); 
const requireRole = (role) => {
  return async (req, res, next) => {
    try {
      const token = req.header('Authorization').replace('Bearer ', '');
      const decoded = jwt.verify(token, process.env.JWT_SECRET); 

      const user = await User.findOne({ _id: decoded._id });
      if (!user || user.role !== role) {
        throw new Error();
      }

      req.user = user;
      next();
    } catch (error) {
      res.status(403).json({ message: 'Access denied' });
    }
  };
};

module.exports = requireRole;
