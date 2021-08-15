import { faCartPlus, faCommentDots, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const UserOption = () => {
  return (
    <div className="sidebar bg-info rounded py-4">
      <div className="d-flex flex-column">
        <Link to="/add-order" className="text-decoration-none font-weight-bold">
          <FontAwesomeIcon icon={faCartPlus} /> <span>Your Order</span>
        </Link>
        <Link to="/user-order" className="text-decoration-none font-weight-bold">
          <FontAwesomeIcon icon={faGripHorizontal} /> <span>Booking List</span>
        </Link>
        <Link to="/addReview" className="text-decoration-none font-weight-bold">
          <FontAwesomeIcon icon={faCommentDots} /> <span>Give a review</span>
        </Link>
      </div>
    </div>
  );
};

export default UserOption;