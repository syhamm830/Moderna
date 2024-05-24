<<<<<<< HEAD
const productSchema = require("../models/products");
const productValidation = require("../validation/products");

const createProduct = async (req, res) => {
=======
const productschema = require('../models/products');
const productValidation = require('../validation/products');

const createproduct = async (req, res) => {
    console.log("Request body:", req.body);  // Add this line to log the request body
>>>>>>> 63cf420a4f99b1457adb8435728e04e921d7a5dc
    const { error, value } = productValidation.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
<<<<<<< HEAD
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
=======
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
>>>>>>> 63cf420a4f99b1457adb8435728e04e921d7a5dc
    const productId = req.params.id;
    const { error, value } = productValidation.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
<<<<<<< HEAD
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
=======
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
>>>>>>> 63cf420a4f99b1457adb8435728e04e921d7a5dc
    }
};

module.exports = {
<<<<<<< HEAD
    getAllProducts,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById
=======
    createproduct,
    getAllproducts,
    getproductById,
    updateproductById,
    deleteproductById
>>>>>>> 63cf420a4f99b1457adb8435728e04e921d7a5dc
};
