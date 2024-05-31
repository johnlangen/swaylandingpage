import React, { useEffect } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import SwayWaySection from './components/SwayWaySection';
import NewSection from './components/NewSection'; // Import the new section

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const landingPage = document.querySelector('.landing-page');
      if (window.scrollY > 0) {
        landingPage.classList.add('animate-out');
      } else {
        landingPage.classList.remove('animate-out');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <LandingPage />
      <SwayWaySection />
      <NewSection /> {/* Add the new section here */}
    </div>
  );
}

export default App;
