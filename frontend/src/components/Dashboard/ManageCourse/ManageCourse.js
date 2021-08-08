import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import DeleteCourse from '../DeleteCourse/DeleteCourse';

const ManageCourse = () => {
  const [allCourses, setAllCourses] = useState([])
  useEffect(() => {
    fetch("https://mighty-badlands-04385.herokuapp.com/courses")
      .then(res => res.json())
      .then(data => {
        setAllCourses(data)
      })
      .catch(error => console.log("error", error))
  }, [])
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-2 mt-sm-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 px-5">
          <h3 className="text-center text-success my-4">All Courses</h3>
          {
            allCourses.map(course => <DeleteCourse key={course._id} course={course}></DeleteCourse>)
          }
        </div>
      </div>
    </div>
  );
};

export default ManageCourse;