require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(express.json())
app.use(morgan("dev"));
app.use(cors("*"))

connectDb = async () => {
    try {
      await mongoose.connect('mongodb+srv://islemsyrine:270602@cluster0.rtae7dy.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log("db connected")
    } catch (error) {
      console.log(error.message)
    }
  }

  app.listen(8001, () => {
    connectDb()
    console.log("listening on port 8001 ! ");
  });