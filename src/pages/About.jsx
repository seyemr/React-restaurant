import React from "react";
import BannerImage from "../assets/1beef.jpg";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illo
          amet! Magnam odit temporibus porro fugit accusamus accusantium, unde
          ad officia cupiditate eos debitis velit, est praesentium.
          Perspiciatis, voluptatum expedita!
        </p>
      </div>
    </div>
  );
};

export default About;
