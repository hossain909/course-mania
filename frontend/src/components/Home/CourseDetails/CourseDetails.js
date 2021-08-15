import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import { CourseContext } from '../../../App';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const CourseDetails = ({ course }) => {
  const [courseDetails, setCourseDetails] = useContext(CourseContext)
  const { title, description, imageURL, price, instructor } = course;

  const loadSingleCourse = (id) => {
    fetch(`https://mighty-badlands-04385.herokuapp.com/course/${id}`)
      .then(res => res.json())
      .then(data => {
        setCourseDetails(data)
      })
  }
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  return (
    <animated.div
      className="card mb-4"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <div style={{ width: "16rem" }}>
        <img className="img-fluid w-100" src={imageURL} style={{ height: "150px" }} alt="" />
        <div className="card-body ">
          <h5 className="card-title text-center text-info font-weight-bold">{title}</h5>
          <small className="text-success d-block text-center mb-3">Instructor: {instructor}</small>
          <small>{description}</small>
          <div className="mt-4 d-flex justify-content-between">
            <h5 className="mt-2">&#2547; {price}</h5>
            <Link to="/add-order" ><button onClick={() => loadSingleCourse(course._id)} className="btn btn-info">Enroll Now</button></Link>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default CourseDetails;