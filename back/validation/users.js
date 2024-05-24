const Joi = require('joi');

const userValidation = Joi.object({
    name: Joi.string()
        .min(3)
        .max(100)
        .required()
        .messages({
            'string.base': 'User name should be a type of text',
            'string.empty': 'User name cannot be an empty field',
            'string.min': 'User name should have a minimum length of {#limit}',
            'string.max': 'User name should have a maximum length of {#limit}',
            'any.required': 'User name is a required field'
        }),

    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.base': 'Email should be a type of text',
            'string.empty': 'Email cannot be an empty field',
            'string.email': 'Email should be a valid email address',
            'any.required': 'Email is a required field'
        }),

    password: Joi.string()
        .min(8)
        .max(100)
        .required()
        .messages({
            'string.base': 'Password should be a type of text',
            'string.empty': 'Password cannot be an empty field',
            'string.min': 'Password should have a minimum length of {#limit}',
            'string.max': 'Password should have a maximum length of {#limit}',
            'any.required': 'Password is a required field'
        }),

    phone: Joi.string()
        .pattern(/^[0-9]{10,15}$/)
        .required()
        .messages({
            'string.base': 'Phone number should be a type of text',
            'string.empty': 'Phone number cannot be an empty field',
            'string.pattern.base': 'Phone number should contain only digits and have a length between 10 and 15',
            'any.required': 'Phone number is a required field'
        }),

    birthdate: Joi.date()
        .less('now')
        .required()
        .messages({
            'date.base': 'Birthdate should be a valid date',
            'date.less': 'Birthdate should be a date in the past',
            'any.required': 'Birthdate is a required field'
        }),

    createdAt: Joi.date()
        .default(() => new Date(), 'current date')
        .messages({
            'date.base': 'Created At should be a valid date'
        })
});

module.exports = userValidation;
