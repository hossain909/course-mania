import React, { useState } from 'react';

const OrderTable = ({ order }) => {
  const [status, setStatus] = useState(null)

  const handleBlur = (event) => {
    setStatus(event.target.value)
  }
  const updateStatus = (id) => {
    const orderStatus = { status: status }
    console.log(id, status);
    fetch(`https://mighty-badlands-04385.herokuapp.com/update/${id}`, {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(orderStatus)
    })
      .then(res => res.json())
      .then(data => console.log("updated"))

  }
  // console.log(order);
  return (
    <div className="px-3 py-2">
      <div className="d-md-flex justify-content-between">
        <div className="mt-2">
          <h6 style={{ width: "150px", fontWeight: "bold" }}>{order.name}</h6>
          <small style={{ width: "220px", display: "block", color: "green" }}>{order.email}</small>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <h6 style={{ width: "150px", textAlign: "left", color: "blue", }}>{order.title}</h6>
          <h6 style={{ width: "150px", color: "red", textAlign: "right" }}>&#2547;{order.price}</h6>
        </div>
        <div className="d-flex mb-4">
          <select onBlur={handleBlur} className="custom-select" id="inlineFormCustomSelect">
            <option defaultValue>Status</option>
            <option value="On Going">On Going</option>
            <option value="Pending">Pending</option>
            <option value="Done">Done</option>
          </select>
          <button onClick={() => updateStatus(order._id)} className="btn btn-sm btn-primary">Update</button>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;