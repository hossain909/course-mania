import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import CourseDetails from "../CourseDetails/CourseDetails";
const Courses = () => {

  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch("https://mighty-badlands-04385.herokuapp.com/courses")
      .then(res => res.json())
      .then(data => {
        setCourses(data)
      })
      .catch(error => console.log("error", error))
  }, [])
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center font-weight-bold text-info mb-5 pb-5">All Courses</h2>
        {courses.length === 0 && <h5 className="text-center">< Spinner animation="border" variant="success" /></h5>}
        <div className="row d-flex justify-content-around my-5 pb-5">
          {
            courses.map(course => <CourseDetails key={course._id} course={course}></CourseDetails>)
          }
        </div>
      </div>
    </section>
  );
};

export default Courses;