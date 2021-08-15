const express = require("express");
const router = express.Router()
const { getAllCourses, getCourseById, addCourse } = require("../controllers/courseControllers.js");

// course routes
router.get("/", getAllCourses)
router.get("/:id", getCourseById)
router.post("/addCourse", addCourse)


module.exports = router;