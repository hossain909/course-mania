
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const DeleteCourse = ({ course }) => {
  const [deleteCourse, setDeleteCourse] = useState(false)

  const handleDeleteCourse = (id) => {
    fetch(`https://mighty-badlands-04385.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setDeleteCourse(result)
      })
  }
  return (
    <div className="w-75 m-auto">
      <div className="d-flex justify-content-between" >
        <p className="mt-2 w-25">{course.title}</p>
        <p className="mt-2 w-25">{course.instructor}</p>
        <p className="mt-2 w-25">{course.price}</p>
        <Button onClick={() => handleDeleteCourse(course._id)} size="sm" className="btn-danger mb-3">Delete</Button>
      </div>
    </div>
  );
};

export default DeleteCourse;