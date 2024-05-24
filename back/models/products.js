const mongoose = require("mongoose");

<<<<<<< HEAD
const productSchema = mongoose.Schema({
  title: {
=======
const productSchema = new mongoose.Schema({
  name: {
>>>>>>> 63cf420a4f99b1457adb8435728e04e921d7a5dc
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  category: {
    /*type : mongoose.Schema.Types.ObjectId,
    ref : 'Category',
    required : true,*/
    type: String,
    required: true,
    enum: ["Men", "Women"]
  },
  subcategory: {
    type: String,
    required: true,
    enum: ["Skincare", "Haircare", "Fragrance", "Bodycare"]
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
