import React, { useState } from 'react';
import './LandingPage.css';
import logo from '../assets/images/logo.png';
import { firestore } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function LandingPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Add a new document with an auto-generated ID
      await addDoc(collection(firestore, 'landingPageEmails', 'Larimer', 'emails'), {
        Email: email,
        timestamp: serverTimestamp()
      });
      alert('Email saved successfully');
    } catch (error) {
      console.error('Error saving email: ', error);
      alert('Failed to save email');
    }
  };

  return (
    <div className="landing-page">
      <header className="landing-header">
        <img src={logo} alt="Sway Logo" className="logo" />
      </header>
      <main className="landing-content">
        <h1 className="main-heading">Holistic Wellness Experience;<br />The Next Generation's Spa</h1>
        <h2 className="sub-heading">It's time to tune into what your soul craves</h2>
        <p className="landing-description">
          Become a founding member and get access to an exclusive offer. Join the club!
        </p>
        <form className="email-signup" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
      <div className="gradient-overlay"></div> {/* Add gradient overlay */}
    </div>
  );
}

export default LandingPage;
