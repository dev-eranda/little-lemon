import React from 'react';
import CallToAction from './CallToAction';
// import CustomersSay from './CustomersSay ';
import './Homepage.css';
import Specials from './Specials';

const HomePage = () => {
  return (
    <div className="row">
      <CallToAction />
      <Specials />
      {/* <CustomersSay /> */}
    </div>
  );
};

export default HomePage;
