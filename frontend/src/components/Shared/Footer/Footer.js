import { } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark text-white py-4 sticky">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 mt-3">
            <h5>Tech World</h5>
            <p className="font-size14 mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus cumque, veritatis deserunt sunt voluptates impedit?</p>
          </div>
          <div className="col-lg-4 col-12 mt-3">
            <h5>Newsletter</h5>
            <form action="#" className="form-row">
              <div className="col">
                <input type="text" className="form-control" placeholder="Email" />
              </div>
              <div className="col">
                <button className="btn btn-info">Subscribe</button>
              </div>
            </form>
          </div>
          <div className="col-lg-2 col-12 mt-3">
            <h5>Information</h5>
            <div className="d-flex flex-column flex-wrap">
              <small><Link className="text-white-50" to="/">About Us</Link></small>
              <small><Link className="text-white-50" to="/">Course Information</Link></small>
              <small><Link className="text-white-50" to="/">Privacy Policy</Link></small>
              <small><Link className="text-white-50" to="/">Terms & Condition</Link></small>
            </div>
          </div>
          <div className="col-lg-2 col-12 mt-3">
            <h5>Account</h5>
            <div className="d-flex flex-column flex-wrap">
              <small><Link className="text-white-50" to="/">My Account</Link></small>
              <small><Link className="text-white-50" to="/">Order History</Link></small>
              <small><Link className="text-white-50" to="/">Wishlist</Link></small>
              <small><Link className="text-white-50" to="/">Newsletters</Link></small>
            </div>
          </div>
        </div>
        <small className="d-block text-center mt-5">Copyright &copy; 2021, Tech World | All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;