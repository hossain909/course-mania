import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const AddReview = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const imageURL = loggedInUser.photo

  const onSubmit = (data) => {
    console.log(data);
    const review = {
      name: data.name,
      image: imageURL,
      company: data.company,
      description: data.description
    }
    const url = `https://mighty-badlands-04385.herokuapp.com/addReview`
    fetch(url, {
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(review)
    })
      .then(res => {
        console.log("server side response", res);
      })
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 mt-md-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8 text-center my-5">
          <h4 className="text-success font-weight-bold text-center">Add a Review</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className="form-control mb-3" type="text" name="name" placeholder="Your name" {...register("name", { required: true })} />
            <input className="form-control mb-3" type="text" name="company" placeholder="Company's name,Designation" {...register("company", { required: true })} />
            <textarea className="form-control mb-3" rows="5" type="text" name="description" placeholder="Description" {...register("description", { required: true })} />
            <input type="submit" className="btn btn-info btn-block mt-3" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;