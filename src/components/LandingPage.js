import React from 'react';
import './LandingPage.css';
import logo from '../assets/images/logo.png'; // Update the path to the logo

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <img src={logo} alt="Sway Logo" className="logo" />
      </header>
      <main className="landing-content">
        <h1 className="main-heading">Holistic Wellness Experience;<br />The Next Generation's Spa</h1>
        <h2 className="sub-heading">It's time to tune into what your soul craves</h2>
        <p className="description">
          Become a founding member and get access to an exclusive offer. Join the club!
        </p>
        <div className="email-signup">
          <input type="email" placeholder="Enter your email" className="email-input" />
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
