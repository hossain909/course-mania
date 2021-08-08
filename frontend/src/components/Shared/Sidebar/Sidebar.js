import { faCartPlus, faCommentDots, faGripHorizontal, faListAlt, faPlusCircle, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [isAdmin, setIsAdmin] = useState(false)
  useEffect(() => {
    fetch("https://mighty-badlands-04385.herokuapp.com/isAdmin", {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email })
    })
      .then(res => res.json())
      .then(data => setIsAdmin(data));
  }, [loggedInUser.email])
  return (
    <div id="sidebar" className="bg-info rounded pl-3 py-4">

      {isAdmin
        ?
        <div style={{ transition: "ease-in-out" }} className="d-flex flex-column">
          <span>
            <Link to="/orderList" className="font-weight-bold text-decoration-none">
              <FontAwesomeIcon icon={faListAlt} /> <span>Order List</span>
            </Link>
          </span>
          <span className="py-4">
            <Link to="/addCourse" className="font-weight-bold text-decoration-none">
              <FontAwesomeIcon icon={faPlusCircle} /> <span>Add Course</span>
            </Link>
          </span>
          <span>
            <Link to="makeAdmin" className="font-weight-bold text-decoration-none">
              <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
            </Link>
          </span>
          <span className="pt-4">
            <Link to="/manageCourse" className="text-white font-weight-bold text-decoration-none">
              <FontAwesomeIcon icon={faTasks} /> <span>Manage Course</span>
            </Link>
          </span>
        </div>
        :
        <div className="d-flex flex-column">
          <span>
            <Link to="/myOrder" className="text-decoration-none font-weight-bold">
              <FontAwesomeIcon icon={faCartPlus} /> <span>Your Order</span>
            </Link>
          </span>
          <span className="py-4">
            <Link to="/bookingList" className="text-decoration-none font-weight-bold">
              <FontAwesomeIcon icon={faGripHorizontal} /> <span>Booking List</span>
            </Link>
          </span>
          <span>
            <Link to="/addReview" className="text-decoration-none font-weight-bold">
              <FontAwesomeIcon icon={faCommentDots} /> <span>Give a review</span>
            </Link>
          </span>
        </div>
      }

    </div>
  );
};

export default Sidebar;

