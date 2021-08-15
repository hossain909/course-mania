require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    console.log("Connection Successfull!");
  } catch (error) {
    console.log("Connection Failed!");
    // process.exit(1)
  }
}
module.exports = connectDB;