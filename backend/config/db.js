const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/myHub")
    .then(() => {
      console.log("MongoDb Connected");
    })
    .catch((err) => {
      console.log("MongoDb Error : ", err);
    });
};

module.exports = connectDB;
