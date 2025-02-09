import React from 'react';
import './About.css';
import workshops from './images/workshops.jpeg';
import budgets from './images/budgets.jpg';
import entre from './images/entre.jpg'

const About = () => {
  return (
    
    <div className="about-page">
      <div className="about-container">
      <h2>About Financial Literacy for Rural Women</h2>
      <p>
        Empowering rural women in India with financial literacy is crucial for driving socio-economic progress 
        and ensuring equitable opportunities. Financial education enables women to manage resources effectively, 
        make informed decisions, and contribute to their households and communities.
      </p>

      <h3>Objectives</h3>
      <ul>
        <li>Provide awareness about banking systems, digital payments, and savings accounts.</li>
        <li>Encourage women to manage budgets and prioritize spending effectively.</li>
        <li>Promote knowledge of microloans and financial resources for rural entrepreneurs.</li>
        <li>Foster confidence in using modern financial tools such as UPI, mobile banking, and government schemes.</li>
      </ul>

      <h3>Our Mission</h3>
      <p>
        To bridge the financial literacy gap for rural women in India by conducting workshops, 
        developing easy-to-understand educational materials, and collaborating with community organizations. 
        We aim to build a generation of empowered women who can make financial decisions confidently, 
        lead entrepreneurial ventures, and secure their futures with dignity.
      </p>
    </div>

      {/* History Section */}
      <section className="history-section">
        <h2>Our History</h2>
        <p>
          Since our inception in 2010, we have worked tirelessly to promote
          financial literacy among rural women. By collaborating with local
          communities, NGOs, and government agencies, we have brought
          transformative change across several villages in India.
        </p>
        <div className="history-images">
        <img src={workshops} alt="Workshops in villages" />
        <img src={entre} alt="Successful entreprenurs" />
        <img src={budgets} alt="Women managing budgets" />
        
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>FAQs</h2>
        <div className="faq">
          <h4>1. What is financial literacy?</h4>
          <p>
            Financial literacy involves understanding and effectively using
            financial skills such as saving, budgeting, and investing.
          </p>
        </div>
        <div className="faq">
          <h4>2. How does this program help rural women?</h4>
          <p>
            Our program educates rural women about banking, digital payments,
            managing household budgets, and accessing financial resources.
          </p>
        </div>
        <div className="faq">
          <h4>3. How can I participate or support this initiative?</h4>
          <p>
            You can volunteer with us, donate, or collaborate to organize
            workshops in your area.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us:</p>
        <ul>
          <li>
            <strong>Email:</strong> support@financialliteracyindia.org
          </li>
          <li>
            <strong>Phone:</strong> +91 98765 43210
          </li>
          <li>
            <strong>Address:</strong> Rural Empowerment Hub, New Delhi, India.
          </li>
        </ul>
      </section>

    </div>
  );
};

export default About;
