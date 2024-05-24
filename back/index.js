const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const productRoutes = require('./routes/products'); 

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Database Connection
const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://islemsyrine:270602@cluster0.rtae7dy.mongodb.net/');
    console.log("db connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1); // Exit process with failure
  }
};

// Use Routes
app.use('/products', productRoutes); // Use the product routes

// Start Server
const startServer = async () => {
  await connectDb();
  
  app.listen(8001, () => {
    console.log("listening on port 8001!");
  });
};

startServer();
