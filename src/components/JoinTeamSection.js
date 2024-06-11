import React from 'react';
import './JoinTeamSection.css';
import img10 from '../assets/images/10.png';
import img11 from '../assets/images/11.png';

function JoinTeamSection() {
  return (
    <div className="join-team-section">
      <div className="join-section-heading">
        JOIN OUR <br/>FOUNDING TEAM
      </div>
      <div className="join-description">
        We are looking for Expert Estheticians, Massage Therapists, and Wellness Coordinators to join the Sway fam
      </div>
      <div className="join-images-container">
        <img src={img10} alt="Team member 1" className="join-team-image" />
        <img src={img11} alt="Team member 2" className="join-team-image" />
      </div>
      <div className="join-divider"></div>
    </div>
  );
}

export default JoinTeamSection;
