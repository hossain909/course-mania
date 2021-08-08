import React, { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';


const MakeAdmin = () => {
  const [adminInfo, setAdminInfo] = useState(null)

  const handleBlur = (e) => {
    const newAdminInfo = { ...adminInfo }
    newAdminInfo[e.target.name] = e.target.value;
    setAdminInfo(newAdminInfo)
  }
  const makeAdmin = (e) => {
    const formData = new FormData()
    formData.append("email", adminInfo.email)

    fetch("https://mighty-badlands-04385.herokuapp.com/makeAdmin", {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      })

    e.preventDefault()
  }
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-2 mt-sm-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8 text-center my-5">
          <h4 className="text-center text-success">Add An Admin</h4>
          <form className="w-75 m-auto" onSubmit={makeAdmin}>
            <div className="form-group">
              <label htmlFor="title">Admin Email</label>
              <input onBlur={handleBlur} type="text" className="form-control" name="email" placeholder="Email" />
            </div>
            <button className="btn btn-primary btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default MakeAdmin;