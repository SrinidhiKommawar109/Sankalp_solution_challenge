// Opportunities.js
import React from 'react';
import opportunities from './Oppurtunities near you'; // Importing the opportunities data
import './Oppurtunities.css'; // Make sure to import the CSS file

function Oppurtunities() {
  return (
    <div className="opportunities-container">
      <h1>Opportunities Near You</h1>
      <div className="opportunities-list">
        {opportunities.map((opportunity) => (
          <div key={opportunity.id} className="opportunity-card">
            <div className="opportunity-content">
              {/* Referencing images stored in the 'public/images' folder */}
              {/*<Link to={`/Oppurtunities/${opportunity.links}`*/}
              <a href = {opportunity.links}>
              <img margin="0" padding="0"
                src={`./images/${opportunity.image}`}
                alt={opportunity.type}
                className="opportunity-image"
              /></a>
              {/*</Link>*/}
              <div className="opportunity-details">
                <h3>{opportunity.type}</h3>
                <p>{opportunity.description}</p>
                <p><strong>Risk Level:</strong> {opportunity.riskLevel}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Reviews Section */}
      <section className="reviews">
        <h2>What Our Users Say</h2>
        <div className="review-cards">
          <div className="review-card">
            <p>“This platform changed my perspective. It’s more than just earning points; it’s about empowering others to dream and achieve!” - Lakshmi</p>
          </div>
          <div className="review-card">
            <p>“A truly transformative experience. Educating others not only gave me points but also a sense of fulfillment.” - Rajesh</p>
          </div>
          <div className="review-card">
            <p>“I started with nothing, and now I’m investing in my small business thanks to this amazing initiative!” - Priya</p>
          </div>
        </div>
      </section>
      
      <section className="feedback-form">
        <h2>We Value Your Feedback</h2>
        <p>Let us know how we can improve and continue making a difference.</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <textarea placeholder="Your Feedback" rows="4" required></textarea>
          <button type="submit" className="btn">Submit Feedback</button>
        </form>
      </section>


    </div>
    
  );
}

export default Oppurtunities;
