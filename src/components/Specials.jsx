import React from 'react';
import img1 from '../assets/greek_salad.jpg';
import img2 from '../assets/lemon_dessert.jpg';
import './Specials.css';

const Specials = () => {
  return (
    <div className="highlight">
      <div className="highlight-header">
        <h1>This Week Specials!</h1>
        <button>Online Menu</button>
      </div>
      <div className="highlight-body">
        <div className="card">
          <img src={img1} alt="img1" />
          <div className="title">
            <h2>Greek Salad</h2>
            <p className="card-price">$5.99</p>
          </div>
          <p className="card-desc">
            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with
            crunchy garlic and rosemary croutons.
          </p>
          <span className="delivery">Order a devivery</span>
        </div>
        <div className="card">
          <img src={img2} alt="img2" />
          <div className="title">
            <h2>Bruchetta</h2>
            <p className="card-price">$7.99</p>
          </div>
          <p className="card-desc">
            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive
            oil.
          </p>
          <span className="delivery">Order a devivery</span>
        </div>
        <div className="card">
          <img src={img1} alt="" />
          <div className="title">
            <h2>Lemon Desert</h2>
            <p className="card-price">$10.99</p>
          </div>
          <p className="card-desc">
            This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic
            as can be imagined.
          </p>
          <span className="delivery">Order a devivery</span>
        </div>
      </div>
    </div>
  );
};

export default Specials;
