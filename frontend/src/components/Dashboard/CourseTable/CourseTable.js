import React, { useState } from 'react';

const CourseTable = ({ allCourses }) => {
  const [deleteCourse, setDeleteCourse] = useState(false)

  const handleDeleteCourse = (id) => {
    fetch(`https://mighty-badlands-04385.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(result => {
        setDeleteCourse(result)
      })
  }
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-secondary text-left" scope="col">Sr No</th>
          <th className="text-secondary" scope="col">Course Title</th>
          <th className="text-secondary" scope="col">Instructor</th>
          <th className="text-secondary" scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {
          allCourses.map((course, index) =>
            <tr>
              <td>{index + 1}</td>
              <td>{course.title}</td>
              <td>{course.instructor}</td>
              <td>{course.price}</td>
              <p onClick={() => handleDeleteCourse(course._id)} size="sm" className="btn-danger mb-3">Delete</p>
            </tr>

          )
        }
      </tbody>
    </table>
  );
};

export default CourseTable;