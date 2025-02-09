import React from "react";
import "./GovernmentSchemes.css"; // Add styling here

const GovernmentSchemes = () => (
  <div className="rural-schemes-container">
    <header className="schemes-header">
      <h2>Government Schemes</h2>
      <p>
        Empowering rural communities through financial assistance and skill-building opportunities. Explore these government initiatives to enhance your income and improve your livelihood.
      </p>
    </header>

    {/* Section: Key Schemes */}
    <section className="key-schemes">
      <h3>Key Government Schemes</h3>
      <ul>
        <li>
          <strong>Pradhan Mantri MUDRA Yojana (PMMY):</strong> Provides loans up to ₹10 lakhs to small and micro enterprises. Helps rural entrepreneurs start or expand their businesses.
        </li>
        <li>
          <strong>Deendayal Antyodaya Yojana – NRLM:</strong> Promotes self-employment and entrepreneurship among women through self-help groups (SHGs) and financial support.
        </li>
        <li>
          <strong>PM-KISAN:</strong> Offers income support of ₹6,000 annually to small and marginal farmers, directly credited to their bank accounts.
        </li>
        <li>
          <strong>National Rural Livelihood Mission (NRLM):</strong> Aims to reduce poverty by promoting rural livelihoods through skill development, capacity building, and financial assistance.
        </li>
        <li>
          <strong>Prime Minister’s Employment Generation Programme (PMEGP):</strong> Provides financial assistance to individuals or SHGs to establish micro-enterprises in rural areas.
        </li>
        <li>
          <strong>Kisan Credit Card (KCC):</strong> Ensures farmers have timely access to credit for agricultural needs at affordable interest rates.
        </li>
      </ul>
    </section>

    {/* Section: How to Apply */}
    <section className="application-process">
      <h3>How to Apply</h3>
      <ol>
        <li>Visit the official website of the scheme or your nearest bank.</li>
        <li>Check eligibility criteria and required documents.</li>
        <li>Fill out the application form online or offline.</li>
        <li>Submit the form along with supporting documents (Aadhaar, income proof, etc.).</li>
        <li>Wait for approval and follow up with the concerned department if necessary.</li>
      </ol>
    </section>

 {/* Section: Benefits */}
    <section className="benefits">
      <h3>Benefits of Government Schemes</h3>
      <ul>
        <li>Start small businesses or expand existing ones.</li>
        <li>Access affordable loans and credit facilities.</li>
        <li>Improve agricultural productivity with financial support.</li>
        <li>Enhance skills for better job opportunities.</li>
        <li>Achieve financial independence and stability.</li>
      </ul>
    </section>
    
    {/* Section: Video Tutorials */}
    <section className="video-tutorials">
      <h3>Watch and Learn</h3>
      <div className="videos">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VA_T5vgiEsY?si=gIN-SMXcGbH1JXtb&amp;start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0GFwpnrGa-o"
          title="MUDRA Loan Details"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iwz7s5-KGuU"
          title="Livelihood Mission Overview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  </div>
);

export default GovernmentSchemes;
