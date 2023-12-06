import React from "react";
import "../stylesheets/Services.css";
import food from "../assets/Food.jpg";

const Services = () => {
  return (
    <div id="services">
      <div className="service-intro">
        <h1>services</h1>
        <h2>Our Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          vero!
        </p>
      </div>
      <div className="service-container">
        <div className="service-item">
          <div className="box">
            <div className="line">
              <i className="fa-solid fa-champagne-glasses"></i>
              <h3>Delicious Food</h3>
            </div>
          </div>
          <div className="box">
            <div className="line">
              <i className="fa-solid fa-person-biking"></i>
              <h3>Fitness</h3>
            </div>
          </div>
          <div className="box">
            <div className="line">
              <i className="fa-solid fa-utensils"></i>
              <h3>Inhouse Restaurants</h3>
            </div>
          </div>
          <div className="box">
            <div className="line">
              <i className="fa-solid fa-spa"></i>
              <h3>Beauty spa</h3>
            </div>
          </div>
        </div>
        <div className="img-sec">
          <img src={food} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
