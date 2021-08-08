import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import OrderTable from '../OrderTable/OrderTable';

const OrderList = () => {
  const [allOrders, setAllOrders] = useState([])
  useEffect(() => {
    fetch("https://mighty-badlands-04385.herokuapp.com/allOrders")
      .then(res => res.json())
      .then(data => setAllOrders(data))
  }, [])
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-2 mt-md-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <h3 className="text-center text-uppercase text-success my-4">All Orders</h3>
          {
            allOrders.map(order => <OrderTable key={order._id} order={order}></OrderTable>)
          }
        </div>
      </div>
    </div>
  );
};

export default OrderList;