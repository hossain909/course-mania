import React from 'react';
import "./ReviewCard.css";
const ReviewCard = ({ review }) => {
  const { image, name, company, description } = review
  return (
    // <div className=" col-md-6">
    //   <div className="d-flex mt-5">
    //     <div className="border border-primary w-50">
    //       <img style={{ width: "80px", borderRadius: "50%" }} src={image} alt="" />
    //     </div>
    //     <div className="border border-danger">
    //       <h5>{name}</h5>
    //       <small>{company}</small>
    //     </div>
    //   </div>
    //   <div>
    //     <q className="client-review bg-dark mt-3">{review.description}</q>
    //   </div>
    // </div>
    <div className="col-md-5 m-auto">
      <div className="d-flex mt-5">
        <div className="client-photo">
          <img src={image} alt="Channel Iman" />
        </div>
        <div className="mt-4 ml-3">
          <h5 className="text-left font-weight-bold text-uppercase mb-1">{name}</h5>
          <small className="d-block text-left text-success font-weight-bold">{company}</small>
        </div>
      </div>
      <div className="client-review">
        <blockquote className="text-left bg-dark text-center mt-4 rounded-pill p-4">{description}</blockquote>
      </div>
    </div>
  );
};

export default ReviewCard;