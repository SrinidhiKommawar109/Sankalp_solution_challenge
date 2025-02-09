import React from 'react';
import './Home.css'; 
import industries from './images/industries.jpg';
import job from './images/job.jpg';
import Rural from './images/Rural.jpeg';
import schemes from './images/schemes.png';
import training from './images/training.jpg';
import skill from './images/skill.jpg';


const Home = () => {
  const goToChatbot = () => {
    window.location.assign("/chat.html"); // Redirects to chatbot page
  };
  const goTofunction = () => {
    window.location.assign("/industries.html"); // Redirects to chatbot page
  };
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>Welcome to Connect with Sankalp</h1>
        <p>Empowering Rural Connections, Elevating Profits with Strategic Marketing.</p>
        <button onClick = {goTofunction} style={{
          padding :"12px 24px",
          fontSize: "18px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginTop: "20px",
          width: "200px"
        }}
        >Industrial Oppurtunities</button>
        
      </header>

      {/* Features Section */}
      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features">
          <div className="feature-item">
            <img src={industries} alt="Explore industries" />
            <h3>Explore Industries</h3>
            <p>Discover small, medium, and large-scale industries near you.</p>
          </div>
          <div className="feature-item">
          <img src={job} alt="Job oppurutunities" />
            <h3>Job Opportunities</h3>
            <p>Enter your PIN code to find job openings in your area.</p>
          </div>
          <div className="feature-item">
            <img src={skill} alt="Skill development" />
            <h3>Skill development resources</h3>
            <p>Learn, Grow, Succeed – Your Skill Journey Starts Here!</p>
          </div>
          <div className="feature-item">
            <img src={schemes} alt="Schemes for your success" />
            <h3>Government Schemes and Support</h3>
            <p>Explore Support and Schemes for Your Success</p>
          </div>
          <div className="feature-item">
            <img src={training} alt="Training and workshops" />
            <h3>Training and workshops</h3>
            <p>Hands-On Learning – Sharpen Your Skills for Tomorrow</p>
          </div>
          <div className="feature-item">
            <img src={Rural} alt="Marketplace for Rural Products" />
            <h3>Marketplace for Rural Products</h3>
            <p>Showcase. Sell. Shine – Empowering Rural Craftsmanship!</p>
          </div>
          
          <button
        onClick={goToChatbot}
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginTop: "20px",
          width: "200px"
        }}
      >
      Sankalp Seva
      </button>

        </div>
      </section>
      <section className="heroine-section">
  <h1>Work with NGO's</h1>
  <p>Work with NGOs, Enrich Your Skills..  
     Serve Society, Build a Brighter Future..</p>
  <button 
    className="cat-button" 
    onClick={() => window.location.href = '/Jobs'}>
    Explore More!!
  </button>
</section>

    </div>
  );
};

export default Home;
