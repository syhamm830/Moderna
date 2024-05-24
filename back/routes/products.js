const express = require('express');
const router = express.Router();
const {
  getAllproducts,
  getproductById,
  createProduct,
  updateproductById,
  deleteproductById
} = require('../controllers/products');

router.get('/', getAllproducts);
router.get('/:id', getproductById);
router.post('/', createProduct);
router.put('/:id', updateproductById);
router.delete('/:id', deleteproductById);

module.exports = router;
