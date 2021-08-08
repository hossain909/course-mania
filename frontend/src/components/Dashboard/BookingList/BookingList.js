import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import BookingDetail from './BookingDetail';

const BookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    fetch("https://mighty-badlands-04385.herokuapp.com/orders?email=" + loggedInUser.email)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [loggedInUser.email])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 mt-sm-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8 text-center">
          <h4 className="text-success text-center font-weight-bold text-uppercase my-5">Your Bookings</h4>
          {
            orders.map(order => <BookingDetail key={order._id} order={order}></BookingDetail>)
          }
        </div>
      </div>
    </div>

  );
};

export default BookingList;