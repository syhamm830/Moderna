const express = require('express');
const router = express.Router();
const {
  getAllOrders,
  getOrderById,
  addOrder,
  updateOrderById,
  deleteOrderById
} = require('../controllers/orders');

router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.post('/', addOrder);
router.put('/:id', updateOrderById);
router.delete('/:id', deleteOrderById);

module.exports = router;
