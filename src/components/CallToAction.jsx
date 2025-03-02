import React from 'react';
import { useNavigate } from 'react-router-dom';
import Restaurantfood from '../assets/restauranfood.jpg';
import './CallToAction.css';

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-section">
      <div className="description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to
          fill empty spaces in a layout that does not yet have content.
        </p>
        <button onClick={() => navigate('/booking')}>Reserve a Table</button>
      </div>
      <div className="img-container">
        <img src={Restaurantfood} alt="restaurantfood" />
      </div>
    </div>
  );
};

export default CallToAction;
