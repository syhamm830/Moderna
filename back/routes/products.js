const express = require('express');
const router = express.Router();
const requireRole = require('../middleware/auth');
const Product = require('../models/products');
const {
  getAllproducts,
  getproductById,
  getproductByCategory,
  getproductBySubCategory,
  createProduct,
  updateproductById,
  deleteproductById
} = require('../controllers/products');

router.get('/', getAllproducts);
router.get('/:id', getproductById);
router.post('/', createProduct);
router.put('/:id', updateproductById);
router.delete('/:id', deleteproductById);

router.get('/subcategory/:subcategory',getproductBySubCategory);
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const { subcategory } = req.query;

    let filter = { category };
    if (subcategory) {
      filter.subcategory = subcategory;
    }

    const products = await Product.find(filter);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products', error });
  }
});


router.get('/results/search', async (req, res) => {
  try {
    const query = req.query.q;
    let products;
    
    if (query) {
      const regex = new RegExp(query, 'i');
      products = await Product.find({
        $or: [
          { name: regex },
          { description: regex },
          { category: regex },
          { subcategory: regex }
        ]
      });
    } else {
      products = await Product.find();
    }

    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found' });
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products', error: error.message });
  }
});


module.exports = router;
