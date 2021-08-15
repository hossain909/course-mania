import { faListAlt, faPlusCircle, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const AdminOption = () => {
  return (
    <div className="sidebar bg-info rounded py-4">
      <div style={{ transition: "ease-in-out" }} className="d-flex flex-column">
        <Link to="/orderList" className="font-weight-bold text-decoration-none">
          <FontAwesomeIcon icon={faListAlt} /> <span>Order List</span>
        </Link>
        <Link to="/course/addCourse" className="font-weight-bold text-decoration-none">
          <FontAwesomeIcon icon={faPlusCircle} /> <span>Add Course</span>
        </Link>

        <Link to="makeAdmin" className="font-weight-bold text-decoration-none">
          <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
        </Link>
        <Link to="/manageCourse" className="text-white font-weight-bold text-decoration-none">
          <FontAwesomeIcon icon={faTasks} /> <span>Manage Course</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminOption;