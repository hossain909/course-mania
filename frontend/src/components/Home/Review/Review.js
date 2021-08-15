import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ReviewCard from '../ReviewCard/ReviewCard';
import "./Review.css";
const Review = () => {
  const [allReviews, setAllReviews] = useState([])
  useEffect(() => {
    fetch("https://mighty-badlands-04385.herokuapp.com/reviews")
      .then(res => res.json())
      .then(data => setAllReviews(data))
  }, [allReviews])
  return (
    <section id="review-section" className="py-5">
      <div className="container py-5">
        <h2 className="text-center font-weight-bold text-info mb-5 pb-5">Student's Feedback</h2>
        {allReviews.length === 0 && <h5 className="text-center">< Spinner animation="border" variant="success" /></h5>}
        <div className="row">
          {
            allReviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
          }
        </div>
      </div>
    </section>
  );
};

export default Review;