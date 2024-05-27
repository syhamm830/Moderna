const Joi = require('joi');

const orderValidation = Joi.object({
  fullName: Joi.string()
    .required()
    .messages({
      'string.base': 'Full Name should be a type of text',
      'string.empty': 'Full Name cannot be an empty field',
      'any.required': 'Full Name is a required field'
    }),

  phoneNumber: Joi.string()
    .required()
    .messages({
      'string.base': 'Phone number should be a type of text',
      'string.empty': 'Phone number cannot be an empty field',
      'any.required': 'Phone number is a required field'
    }),

  address: Joi.string()
    .required()
    .messages({
      'string.base': 'Address should be a type of text',
      'string.empty': 'Address cannot be an empty field',
      'any.required': 'Address is a required field'
    }),

  cardNumber: Joi.string()
    .required()
    .messages({
      'string.base': 'Card number should be a type of text',
      'string.empty': 'Card number cannot be an empty field',
      'any.required': 'Card number is a required field'
    }),

  totalCost: Joi.number()
    .required()
    .messages({
      'number.base': 'Total cost should be a type of number',
      'any.required': 'Total cost is a required field'
    }),

  status: Joi.string()
    .valid('Pending', 'Delivered')
    .default('Pending')
    .messages({
      'string.base': 'Status should be a type of text',
      'any.only': 'Status should be either pending or delivered'
    }),

  createdAt: Joi.date()
    .default(() => new Date())
    .messages({
      'date.base': 'Created At should be a valid date'
    })
});

module.exports = orderValidation;
