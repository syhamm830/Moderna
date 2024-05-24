const Joi = require('joi');

const orderValidation = Joi.object({
  productName: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages({
      'string.base': 'Product name should be a type of text',
      'string.empty': 'Product name cannot be an empty field',
      'string.min': 'Product name should have a minimum length of {#limit}',
      'string.max': 'Product name should have a maximum length of {#limit}',
      'any.required': 'Product name is a required field'
    }),

  productImage: Joi.string()
    .required()
    .messages({
      'string.base': 'Product image should be a type of text',
      'string.empty': 'Product image cannot be an empty field',
      'any.required': 'Product image is a required field'
    }),

  user: Joi.string()
    .required()
    .messages({
      'string.base': 'User should be a type of text',
      'string.empty': 'User cannot be an empty field',
      'any.required': 'User is a required field'
    }),

  status: Joi.string()
    .valid('pending', 'delivered')
    .default('pending')
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
