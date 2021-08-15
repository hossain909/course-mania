const mongoose = require("mongoose");
const Schema = mongoose.Schema

const courseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  }

});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;