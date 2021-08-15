const Course = require("../models/course.js")

const getAllCourses = async () => {
  try {
    const courses = await Course.find({})
    res.json(courses)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" })
  }
}
const getCourseById = async () => {
  try {
    const course = await Course.find({ _id: ObjectId(req.params.id) })
    res.json(course)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" })
  }
}
const addCourse = (req, res) => {
  const newCourse = req.body;
  const course = new Course(newCourse)
  try {
    course.save()
      .then(result => {
        console.log(result);
        res.send(result)
      })
  } catch (error) {
    console.log(err);
  }
}

module.exports = {
  getAllCourses,
  getCourseById,
  addCourse
}