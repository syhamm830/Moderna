require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const productRoutes = require('./routes/products'); 
const userRoutes = require('./routes/users'); 

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());


const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://islemsyrine:270602@cluster0.rtae7dy.mongodb.net/');
    console.log("db connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1); 
  }
};


app.use('/products', productRoutes); 
app.use('/users', userRoutes); 


const startServer = async () => {
  await connectDb();
  
  app.listen(8001, () => {
    console.log("listening on port 8001!");
  });
};

startServer();
