import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';


const Dashboard = () => {
  return (
    <section className="container py-5">
      <div className="row">
        <div className="col-md-2 mt-md-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-12 col-12 text-center">
          <h4 className="text-success font-weight-bold mt-5">Welcome to Dashboard</h4>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;