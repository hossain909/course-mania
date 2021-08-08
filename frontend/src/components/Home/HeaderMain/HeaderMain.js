import React from 'react';
import { Button, Image } from 'react-bootstrap';
import headerBG from "../../../images/headerBG.jpg";

const HeaderMain = () => {
  return (
    <section id="showcase" className="py-5 h-100 my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5 align-self-center">
            <h1 className="display-4 text-info font-weight-bold">Learn From The Best</h1>
            <p>Get Hands On Experience in Real World Software Development from Industry Experts Through Practical and Real World Courses.</p>
            <Button className="btn-info">Read More</Button>
          </div>
          <div className="col-md-7 ml-auto">
            <Image className="img-fluid" src={headerBG} alt=""></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderMain;