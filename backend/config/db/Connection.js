//import mongoose from "mongoose";

const mongoose = require('mongoose');

mongoose
  .connect("mongodb://localhost:27017/Keyword", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((_) => {
    console.log(`DB Connect`);
  })
  .catch((err) => {
    console.log(`Connection failed: ${err}`);
  });
