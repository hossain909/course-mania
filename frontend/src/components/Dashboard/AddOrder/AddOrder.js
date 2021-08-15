import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { CourseContext, UserContext } from '../../../App';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const Book = () => {
  const [courseDetails, setCourseDetails] = useContext(CourseContext)
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [bookingData, setBookingData] = useState(null)
  const [paymentDetails, setPaymentDetails] = useState(null)

  const { title, price } = courseDetails
  const { name, email } = loggedInUser

  const onSubmit = data => {
    setBookingData(data)
    console.log(data);
  }
  const handlePaymentSuccess = (paymentId) => {
    setPaymentDetails(paymentId)
    const orderInfo = {
      ...bookingData,
      paymentId

    }
    fetch("http://localhost:5000/order/add-order", {
      method: 'POST',
      body: JSON.stringify(orderInfo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    // fetch(URL, {
    //   method: "POST",
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    //   body: JSON.stringify(orderInfo)
    // })
    //   .then(res => {
    //     if (res.status === 200) {
    //       alert("Your order placed successfully")
    //     }
    //     console.log("server side response", res);
    //   })

  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 mt-md-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8  my-5">
          <h4 className="text-success font-weight-bold">Order Course</h4>
          {bookingData
            ?
            <div className="text-center">
              <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
            </div>
            :
            <form onSubmit={handleSubmit(onSubmit)}>
              <input className="form-control mb-3" defaultValue={name} type="text" name="name" {...register("name", { required: true })} placeholder="name" />
              <input className="form-control mb-3" defaultValue={email} type="email" name="email" {...register("email", { required: true })} placeholder="email" />
              <input className="form-control mb-3" defaultValue={title} type="text" name="title" {...register("title", { required: true })} placeholder="course name" />
              <input className="form-control" defaultValue={price} type="text" name="price" {...register("price", { required: true })} placeholder="course price" />
              <input type="submit" value="Order" className="btn btn-info btn-block mt-3" />
            </form>
          }
        </div>
      </div>
    </div>

  );
};

export default Book;