import React, { useState, useEffect } from "react";
import "./JoinMission.css";

const JoinMission = () => {
  const [points, setPoints] = useState(5000); // Example: starting points
  const [shared, setShared] = useState(false);

  useEffect(() => {
  }, []); // Runs when the component is mounted

  const handleShare = (platform) => {
    if (platform === "whatsapp") {
      window.open(
        "https://api.whatsapp.com/send?text=Join%20the%20mission%20to%20empower%20communities!%20Check%20out%20this%20amazing%20platform:%20https://example.com",
        "_blank"
      );
    } else {
      navigator.clipboard.writeText("https://example.com");
    }

    setShared(true);
    setPoints((prevPoints) => prevPoints + 1000);
  };

  return (
    <div className="mission-container">
      {/* User Dashboard */}
      <section className="dashboard">
        <div className="user-profile">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="User Icon"
            className="user-icon"
          />
          <div className="user-details">
            <h2>John Doe</h2>
            <p><strong>Role:</strong> Volunteer</p>
            <p><strong>Email:</strong> johndoe@example.com</p>
            <p><strong>Mobile:</strong> +91 9876543210</p>
            <p><strong>Points:</strong> {points}</p>
          </div>
        </div>
      </section>

      {/* Mission Importance Section */}
      <section className="mission-info">
        <h2>Join Our Mission</h2>
        <p>
          Empower your community by sharing this platform. Help others discover opportunities to educate, invest, and
          eradicate poverty.
        </p>
        <p>
          Together, we can build a better world where knowledge and collaboration transform lives. Your efforts in
          spreading awareness play a crucial role in achieving this goal.
        </p>
      </section>

      {/* Share Section */}
      <section className="share-section">
        <h2>Spread the Word</h2>
        <p>
          Share this platform with others and inspire them to join the mission. You will receive <strong>1000 points</strong> for every
          share!
        </p>
        <button
          className="btn share-btn"
          onClick={() => {
            handleShare("whatsapp");
          }}
        >
          Share via WhatsApp
        </button>
        <button
          className="btn share-btn"
          onClick={() => {
            handleShare("copy");
          }}
        >
          Copy Link
        </button>
        {shared && <p className="thanks-message">Thanks for sharing! Your points have been updated.</p>}
      </section>
    </div>
  );
};

export default JoinMission;
