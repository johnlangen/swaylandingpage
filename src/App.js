import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import SwayWaySection from './components/SwayWaySection';
import SwayStoreFront from './components/SwayStoreFront';
import OurServices from './components/OurServices';
import JoinUsSection from './components/JoinUsSection';
import ConnectSection from './components/ConnectSection';
import JoinTeamSection from './components/JoinTeamSection';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <SwayWaySection />
      <SwayStoreFront />
      <OurServices />
      <JoinUsSection />
      <JoinTeamSection />
      <ConnectSection /> {/* Add the new section here */}
    </div>
  );
}

export default App;
