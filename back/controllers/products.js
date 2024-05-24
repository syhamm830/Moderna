const productSchema = require("../models/products");
const productValidation = require("../validation/products");

const createProduct = async (req, res) => {
    const { error, value } = productValidation.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
        const newProduct = await productSchema.create(value);
        res.status(201).json(newProduct);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Error while creating product' });
    }
};


const getAllproducts = async (req, res) => {
    try {
        const products = await productSchema.find();
        res.status(200).json(products);
    } catch (e) {
        res.status(500).json({ message: 'Error retrieving products' });
    }
};

const getproductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productSchema.findById(productId);
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
        const product = await productSchema.findByIdAndUpdate(productId, value, { new: true });
        res.json(product);
    } catch (e) {
        return res.status(404).json({ message: 'Product not found, wrong id' });
    }
};

const deleteproductById = async (req, res) => {
    const productId = req.params.id;
    try {
        await productSchema.findByIdAndDelete(productId);
        res.json({ message: 'Deleted product with id ' + productId });
    } catch (e) {
        res.status(404).json({ message: 'No product with id ' + productId });
    }
};

module.exports = {
    createProduct,
    getAllproducts,
    getproductById,
    updateproductById,
    deleteproductById
};
