import React from "react";
import "./Service.css";

const Services = () => {
    return (
      <div className="services-container">
        <h1 className="services-title">Services</h1>
        <div className="service" data-number="1" id="service1">
          <p className="service-content">
            Comprehensive Cryptocurrency Details: Users can search for any
            specific cryptocurrency and access essential details such as its
            market rank, current price, 24-hr high, and 24-hr low.
            This provides users with a detailed snapshot of the cryptocurrency's
            current performance.
          </p>
        </div>
        <div className="service" data-number="2" id="service2">
          <p className="service-content">
            Historical Performance Graphs: The website provides graphical
            representations of how a cryptocurrency has been performing over the
            past days. This feature helps users visualize trends and make informed
            decisions based on historical data.
          </p>
        </div>
        <div className="service" data-number="3" id="service3">
          <p className="service-content">
            Multi-Currency Tracking: Users can view cryptocurrency details and
            performance in different currencies, such as INR, USD, and EUR. This
            feature allows for a more tailored experience based on the user’s
            preferred currency.
          </p>
        </div>
      </div>
    );
  };

export default Services;
