const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  fullName: {  
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  cardNumber: {
    type: String,
    required: true
  },
  totalCost: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Delivered'],
    default: 'Pending',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Order', orderSchema);
