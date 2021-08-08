import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5 my-5">
      <div className="container-fluid row m-auto">
        <div className="col-md-8 m-auto">
          <div className="card w-100 border-0 text-center ">
            <div className="card-body">
              <h3 className="font-weight-bold text-uppercase text-info">Get In Touch</h3>
              <div className="row mt-5">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="d-block text-left font-weight-bold ml-2" htmlFor="name">Your Name</label>
                    <input className="form-control bg-dark text-light py-4 rounded-pill" placeholder="Name*" type="text" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="d-block text-left font-weight-bold ml-2" htmlFor="email">Email</label>
                    <input className="form-control bg-dark text-light py-4 rounded-pill" placeholder="Email*" type="text" required />
                  </div>
                </div>
                <div className="col-md-12 mt-5">
                  <div className="form-group">
                    <label className="d-block text-center font-weight-bold" htmlFor="message">Your Message</label>
                    <textarea name="meassage" cols="30" rows="8" className="bg-dark text-light form-control round rounded-pill pl-5" placeholder="Message*" required></textarea>
                  </div>
                </div>
                <div className="col-md-9 m-auto">
                  <input type="submit" className="btn btn-block btn-info font-weight-bold py-2 rounded-pill" defaultValue="Submit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;