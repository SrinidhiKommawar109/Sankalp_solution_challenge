import React from "react";
import "./InvestmentSchemes.css"; // Style the page as needed

const InvestmentSchemes = () => (
  <div className="investment-schemes-container">
    <header className="investment-header">
      <h2>Investment Schemes</h2>
      <p>
        Discover investment schemes designed to promote savings and financial
        security, especially in rural areas. Learn about their benefits and how
        to apply.
      </p>
    </header>

    {/* Section: Key Schemes */}
    <section className="key-schemes">
      <h2>Key Investment Schemes</h2>
      <ul>
        <li>
          <strong>Pradhan Mantri Jan Dhan Yojana (PMJDY)</strong> - A financial
          inclusion initiative offering no-frills savings accounts and
          affordable insurance.
        </li>
        <li>
          <strong>Post Office Savings Scheme</strong> - Secure and reliable
          investments with attractive interest rates.
        </li>
        <li>
          <strong>Kisan Vikas Patra</strong> - A government-backed scheme to
          double your investment in a fixed period.
        </li>
      </ul>
    </section>

    {/* Section: Application Process */}
    <section className="application-process">
      <h3>How to Apply</h3>
      <ol>
        <li>Visit your nearest bank or post office offering the scheme.</li>
        <li>Fill out the application form with required details.</li>
        <li>Provide necessary documents such as Aadhaar, PAN, and proof of income.</li>
        <li>Deposit the required amount as per the scheme guidelines.</li>
        <li>Receive your account/passbook or investment certificate.</li>
      </ol>
    </section>

    {/* Section: Benefits */}
    <section className="benefits">
      <h3>Benefits of Investment Schemes</h3>
      <p>
        By investing in these schemes, you can enjoy financial stability,
        long-term savings, and secure returns.
      </p>
    </section>

    {/* Section: Video Tutorials */}
    <section className="video-tutorials">
      <h3>Watch and Learn</h3>
      <div className="videos">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VjSMRtkiedc?si=EwUKCB4VN2JpfORn&amp;start=9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/54z4IHOdh-0?si=_nMcD-iZ2EGqcDv5&amp;start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AwIV1HkLeXc?si=-jvHgMjKIDfc-276" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </section>
  </div>
);

export default InvestmentSchemes;
