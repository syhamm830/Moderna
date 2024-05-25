const Joi = require('joi');

const userValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  phone: Joi.string().required(),
  birthdate: Joi.date().required(),
  role: Joi.string().valid('admin', 'customer')
});

module.exports = userValidation;
