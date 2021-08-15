import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../../Shared/Sidebar/Sidebar';


const AddCourse = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState(null)

  const onSubmit = data => {
    const courseInfo = {
      title: data.title,
      instructor: data.instructor,
      description: data.description,
      price: data.price,
      imageURL: imageURL
    }
    const url = 'http://localhost:5000/addCourse'
    fetch(url, {
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(courseInfo)
    })
      .then(res => {
        alert("Course uploaded successfully!")
        console.log("server side response", res);
      })
    console.log(data);

  };
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData()
    imageData.set("key", "ff198deb36eef7595db686167f86a4dc")
    imageData.append("image", event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-2 mt-sm-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8 text-center mt-4">
          <h3 className="text-success text-center">Add a Course</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input className="form-control" type="text" name="title" placeholder="Course title" {...register("title", { required: true })} />
            </div>
            <div className="form-group">
              <input className="form-control" type="text" name="instructor" placeholder="Instructor" {...register("instructor", { required: true })} />
            </div>
            <div className="form-group">
              <textarea className="form-control" rows="6" type="text" name="description" placeholder="Description" {...register("description", { required: true })} />
            </div>
            <div className="form-group">
              <input className="form-control" type="text" name="price" placeholder="price" {...register("price", { required: true })} />
            </div>
            <div className="form-group">
              <input onChange={handleImageUpload} className="form-control-file" type="file" name="imageURL" />
            </div>
            <input type="submit" className="btn btn-block btn-info" />
          </form>
        </div>
      </div>
    </div>

  );
};

export default AddCourse;