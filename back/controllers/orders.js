const orderSchema = require('../models/orders');
const orderValidation = require('../validation/orders');

const addOrder = async (req, res) => {
  const { error, value } = orderValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  try {
    const newOrder = await orderSchema.create({
      ...value,
      createdAt: new Date() 
    });
    res.status(201).json(newOrder);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Error while adding order' });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderSchema.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (e) {
    res.status(500).json({ message: 'Error retrieving orders' });
  }
};

const getOrderById = async (req, res) => {
  const orderId = req.params.id;
  try {
    const order = await orderSchema.findById(orderId);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (e) {
    return res.status(400).json({ message: 'No order with id ' + orderId });
  }
};

const updateOrderById = async (req, res) => {
  const orderId = req.params.id;
  const { error, value } = orderValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  try {
    const order = await orderSchema.findByIdAndUpdate(orderId, value, { new: true });
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (e) {
    return res.status(404).json({ message: 'Order not found, wrong id' });
  }
};

const deleteOrderById = async (req, res) => {
  const orderId = req.params.id;
  try {
    const order = await orderSchema.findByIdAndDelete(orderId);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json({ message: 'Deleted order with id ' + orderId });
  } catch (e) {
    res.status(404).json({ message: 'No order with id ' + orderId });
  }
};

module.exports = {
  addOrder,
  getAllOrders,
  getOrderById,
  updateOrderById,
  deleteOrderById
};
