import React from 'react';
import './JoinUsSection.css';
import greenBackground from '../assets/images/greenbackground.png';
import gradient from '../assets/images/gradient.png';

function JoinUsSection() {
  return (
    <div className="join-us-section">
      <div className="divider"></div>
      <div className="background-container">
        <img src={greenBackground} alt="Green Background" className="background-image" />
        <img src={gradient} alt="Gradient Overlay" className="gradient-overlay" />
        <div className="text-container">
          <div className="text-large">
            Experience the wellness you've been longing for.<br />
            Become a founding member today.
          </div>
          <div className="text-small">Exclusive Founding Member Offer - Limited Availability</div>
        </div>
        <div className="arrow" onClick={() => {/* Handle the arrow click */}}>
          &rarr;
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default JoinUsSection;
