const productschema = require('../models/products');
const productValidation = require('../validation/products');

const createproduct = async (req, res) => {
    console.log("Request body:", req.body);  // Add this line to log the request body
    const { error, value } = productValidation.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
        const newProduct = await productschema.create(value);
        res.status(201).json(newProduct);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Error while creating product' });
    }
};


const getAllproducts = async (req, res) => {
    try {
        const products = await productschema.find();
        res.status(200).json(products);
    } catch (e) {
        res.status(500).json({ message: 'Error retrieving products' });
    }
};

const getproductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productschema.findById(productId);
        res.json(product);
    } catch (e) {
        return res.status(400).json({ message: 'No product with id ' + productId });
    }
};

const updateproductById = async (req, res) => {
    const productId = req.params.id;
    const { error, value } = productValidation.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
        const product = await productschema.findByIdAndUpdate(productId, value, { new: true });
        res.json(product);
    } catch (e) {
        return res.status(404).json({ message: 'Product not found, wrong id' });
    }
};

const deleteproductById = async (req, res) => {
    const productId = req.params.id;
    try {
        await productschema.findByIdAndDelete(productId);
        res.json({ message: 'Deleted product with id ' + productId });
    } catch (e) {
        res.status(404).json({ message: 'No product with id ' + productId });
    }
};

module.exports = {
    createproduct,
    getAllproducts,
    getproductById,
    updateproductById,
    deleteproductById
};
