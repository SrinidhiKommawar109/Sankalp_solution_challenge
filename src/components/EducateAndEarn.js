import React, { useState } from "react";
import "./EducateAndEarn.css";

const EducateAndEarn = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="educate-container">
      {submitted ? (
        <div className="thank-you-message">
          <h2>Thank You for Motivating Others!</h2>
          <p>Your points will be updated after verification. We appreciate your efforts in making a difference.</p>
        </div>
      ) : (
        <>
          <section className="educate-header">
            <h1>Educate and Empower</h1>
            <p>
              By identifying individuals who lack knowledge about investing and educating them, you contribute to their
              growth and the betterment of the community. Follow the steps below to start your journey.
            </p>
          </section>

          <section className="steps-section">
            <h2>Steps to Educate and Earn:</h2>
            <ol>
              <li>Identify someone who lacks knowledge about investing.</li>
              <li>Explain the benefits of investing and how it can transform their lives.</li>
              <li>Encourage them to take part in this program to earn redeem points.</li>
              <li>Submit proof of your efforts using the form below.</li>
            </ol>
          </section>

          <section className="proof-form-section">
            <h2>Submit Proof</h2>
            <p>Upload a file (image, document, or video) as proof of your effort in educating others.</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="file-upload">Upload Proof:</label>
              <input type="file" id="file-upload"  />
              <button type="submit" className="btn">Submit Proof</button>
            </form>
          </section>
        </>
      )}
    </div>
  );
};

export default EducateAndEarn;
