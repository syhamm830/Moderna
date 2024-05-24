const Joi = require('joi');

const categories = {
    Men: ["Skincare", "Haircare", "Fragrance", "Bodycare"],
    Women: ["Skincare", "Haircare", "Fragrance", "Bodycare"]
};

const categoryOptions = Object.keys(categories);
const subcategoryOptions = [].concat(...Object.values(categories));

const productValidation = Joi.object({
    name: Joi.string()
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

    price: Joi.number()
        .positive()
        .precision(2)
        .required()
        .messages({
            'number.base': 'Product price should be a type of number',
            'number.positive': 'Product price should be a positive number',
            'number.precision': 'Product price should have at most {#limit} decimal places',
            'any.required': 'Product price is a required field'
        }),

    description: Joi.string()
        .min(10)
        .required()
        .messages({
            'string.base': 'Product description should be a type of text',
            'string.empty': 'Product description cannot be an empty field',
            'string.min': 'Product description should have a minimum length of {#limit}',
            'any.required': 'Product description is a required field'
        }),

    imageUrl: Joi.string()
        .uri()
        .required()
        .messages({
            'string.base': 'Image URL should be a type of text',
            'string.empty': 'Image URL cannot be an empty field',
            'string.uri': 'Image URL should be a valid URI',
            'any.required': 'Image URL is a required field'
        }),

    category: Joi.string()
        .valid(...categoryOptions)
        .required()
        .messages({
            'any.only': `Category must be one of ${categoryOptions.join(', ')}`,
            'any.required': 'Product category is a required field'
        }),

    subcategory: Joi.string()
        .valid(...subcategoryOptions)
        .required()
        .messages({
            'any.only': `Subcategory must be one of ${subcategoryOptions.join(', ')}`,
            'any.required': 'Product subcategory is a required field'
        }),

    stock: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            'number.base': 'Stock should be a type of number',
            'number.integer': 'Stock should be an integer',
            'number.positive': 'Stock should be a positive number',
            'any.required': 'Stock is a required field'
        })
});

module.exports = productValidation;
