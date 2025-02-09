import React from 'react';
import "./BuisnessSchemes.css";
const BusinessSchemes = () => (
    <div className="business-schemes-container">
        <header className="schemes-header">
            <h2>Employment & Small Business Schemes</h2>
            <p>
                Empowering artisans and small businesses through dedicated government initiatives. These schemes provide financial assistance and welfare benefits for livelihoods, including those involved in saree weaving and bidi-making.
            </p>
        </header>

        {/* Section: Key Schemes */}
        <section className="key-schemes">
            <h3>Key Employment & Small Business Schemes</h3>
            <ul>
                <li>
                    <strong>Swarna Jayanti Gram Swarozgar Yojana (SGSY):</strong> Promotes self-employment in rural areas through financial and skill-based support.
                </li>
                <li>
                    <strong>Handloom Weavers Comprehensive Welfare Scheme:</strong> Provides financial assistance, health insurance, and infrastructure support for handloom workers.
                </li>
                <li>
                    <strong>Bidi Workers Welfare Fund:</strong> Benefits for bidi industry workers, including education, health, and housing assistance.
                </li>
            </ul>
        </section>
        <section className="application-process">
            <h3>How to Apply for These Schemes</h3>
            <ol>
                <li>Visit the official website of the scheme or the nearest government office.</li>
                <li>Check eligibility criteria and required documents.</li>
                <li>Complete the application form online or offline.</li>
                <li>Submit the form along with supporting documents (e.g., Aadhaar, income proof).</li>
                <li>Wait for approval and follow up with the relevant department if necessary.</li>
            </ol>
        </section>


        {/* Section: Benefits */}
        <section className="benefits">
            <h3>Benefits of These Schemes</h3>
            <p>By availing these schemes, individuals and communities can:</p>
            <ul>
                <li>Gain access to financial assistance and welfare funds.</li>
                <li>Enhance self-employment opportunities.</li>
                <li>Secure better working conditions and healthcare benefits.</li>
                <li>Improve skills for sustainable livelihoods.</li>
                <li>Ensure financial stability and growth.</li>
            </ul>
        </section>
        
        {/* Section: Video Tutorials */}
        <section className="video-tutorials">
            <h3>Watch and Learn</h3>
            <div className="videos">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/s58wA-B9z-g"
                    title="Employment Schemes Overview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/0GFwpnrGa-o"
                    title="Small Business Loans"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/iwz7s5-KGuU"
                    title="Handloom Industry Support"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    </div>
);

export default BusinessSchemes;
