import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import BookingDetail from './UserOrderDetail';

const BookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    fetch("http://localhost:5000/order/user-order?email=" + loggedInUser.email)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [loggedInUser.email])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 mt-sm-5">
          <Sidebar></Sidebar>
        </div>
        {/* <h4 className="text-success text-center font-weight-bold text-uppercase my-5">Your Bookings</h4> */}
        <div className="col-md-8 border">
          {
            orders.map(order => <BookingDetail key={order._id} order={order}></BookingDetail>)
          }
        </div>
      </div>
    </div>

  );
};

export default BookingList;