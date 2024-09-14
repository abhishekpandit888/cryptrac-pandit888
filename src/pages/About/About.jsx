import React from "react";
import "./About.css";

const about = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="about" data-number="1" id="about1">
        <p className="about-content">
          Empowering Crypto Knowledge: At Cryptrac, our mission is to enhance
          people's understanding of cryptocurrencies. We provide essential
          insights and detailed information to help users make informed
          decisions in the rapidly evolving world of digital assets.
        </p>
      </div>
      <div className="about" data-number="2" id="about2">
        <p className="about-content">
          Simplified Crypto Tracking: We strive to make cryptocurrency tracking
          seamless and intuitive. Our platform allows users to effortlessly
          monitor market trends, view historical data, and stay updated with
          real-time changes across multiple currencies.
        </p>
      </div>
      <div className="about" data-number="3" id="about3">
        <p className="about-content">
          Insightful Market Analysis: With Cryptrac, users can explore
          comprehensive cryptocurrency data, including market rank, price
          fluctuations, and historical performance graphs. We aim to equip our
          users with the tools they need to navigate the crypto market.
        </p>
      </div>
    </div>
  );
};

export default about;
