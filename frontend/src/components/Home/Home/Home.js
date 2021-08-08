import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Courses from '../Courses/Courses';
import HeaderMain from '../HeaderMain/HeaderMain';
import Review from '../Review/Review';
import Team from '../Team/Team';

const Home = () => {
  return (
    <div>
      <HeaderMain></HeaderMain>
      <Courses></Courses>
      <Team></Team>
      <Review></Review>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;