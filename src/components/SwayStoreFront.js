import React from 'react';
import './SwayStoreFront.css';
import storefrontImage from '../assets/images/storefront.png'; // Use import to resolve the path

function SwayStoreFront() {
  return (
    <div className="sway-storefront">
      <img className="storefront-image" src={storefrontImage} alt="Storefront" />
    </div>
  );
}

export default SwayStoreFront;
