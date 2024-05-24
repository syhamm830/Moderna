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
        res.status(500).json({ message: "Error while creating product" });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await productSchema.find();
        res.status(200).json(products);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Error retrieving products" });
    }
};

const getProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productSchema.findById(productId);
        if (!product) {
            return res.status(404).json({ message: `No product found with id ${productId}` });
        }
        res.json(product);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: `Error retrieving product with id ${productId}` });
    }
};

const updateProductById = async (req, res) => {
    const productId = req.params.id;
    const { error, value } = productValidation.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
        const updatedProduct = await productSchema.findByIdAndUpdate(productId, value, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: `Product not found with id ${productId}` });
        }
        res.json(updatedProduct);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: `Error updating product with id ${productId}` });
    }
};

const deleteProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const deletedProduct = await productSchema.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: `No product found with id ${productId}` });
        }
        res.json({ message: `Deleted product with id ${productId}` });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: `Error deleting product with id ${productId}` });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById
};
