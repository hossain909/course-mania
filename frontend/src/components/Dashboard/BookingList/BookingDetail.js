import React from 'react';

const BookingDetail = ({ order }) => {
  console.log(order.bookings);
  const { status } = order
  console.log(status);
  return (
    <div className="card my-3 bg-dark text-light" style={{ width: "18rem" }}>
      <div className="card-body">

        {order.status === "On Going" && <button className="btn btn-warning btn-sm mb-3">{order.status}</button>
        }
        {order.status === "Pending" && <button className="btn btn-danger btn-sm mb-3">{order.status}</button>
        }
        {order.status === "Done" && <button className="btn btn-success btn-sm mb-3">{order.status}</button>
        }
        <h6 className="card-title"><span className="text-success">Course Title: </span>{order.title}</h6>
        <h6><span className="text-success">Price: </span> {order.price}</h6>
      </div>
    </div>
  );
};

export default BookingDetail;