const express = require('express');
const router = express.Router();
const {
  getAllproducts,
  getproductById,
  createproduct,
  updateproductById,
  deleteproductById
} = require('../controllers/products');

<<<<<<< HEAD
router.get("/products",getAllproducts)
router.get("/:id",getproductById)
router.post("/",createproduct)
router.put("/:id",updateproductById)
router.delete("/:id",deleteproductById)
=======
router.get('/', getAllproducts);
router.get('/:id', getproductById);
router.post('/', createproduct);
router.put('/:id', updateproductById);
router.delete('/:id', deleteproductById);
>>>>>>> 63cf420a4f99b1457adb8435728e04e921d7a5dc

module.exports = router;
