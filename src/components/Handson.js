import React from 'react';
import './Handson.css'; // Ensure this file contains appropriate styling

const Handson = () => {
  return (
    <div className="hands-on-experience">
      {/* Hero Section */}
      <section className="hero">
        <h1>Hands-On Service Experience</h1>
        <p>Empowering you to contribute through action. Choose a path and make a difference today!</p>
        <div className="buttons">
          <a href="/buy" className="hero-button buy-button">Buy Products</a>
          <a href="/get" className="hero-button get-button">Get Service</a>
        </div>
      </section>

      {/* Information Cards Section */}
      <section className="info-cards">
        <div className="card">
          <h2>Buy</h2>
          <p>Access a variety of services and products from our partners that support social causes. Your purchase makes an impact!</p>
          <a href="/Buy" className="card-link">Explore Buy Options</a>
        </div>
        <div className="card">
          <h2>Get</h2>
          <p>Leverage community-driven resources and support. Request services or join our initiatives to receive hands-on help.</p>
          <a href="/Get" className="card-link">Explore Get Options</a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="call-to-action">
        <h2>Join Us in Making a Difference</h2>
        <p>Be part of a transformative movement. Whether you choose to buy or get, every action counts!</p>
        <a href="/contact-us" className="cta-button">Contact Us</a>
      </section>
    </div>
  );
};

export default Handson;
