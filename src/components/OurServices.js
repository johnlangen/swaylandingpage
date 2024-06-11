import React, { useState } from 'react';
import './OurServices.css';
import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/3.png';
import img4 from '../assets/images/4.png';
import img5 from '../assets/images/5.png';
import img6 from '../assets/images/6.png';

function OurServices() {
  const [showFirstSet, setShowFirstSet] = useState(true);

  const toggleSet = () => {
    setShowFirstSet(!showFirstSet);
  };

  return (
    <div className="our-services">
      <div className="our-services-heading">Our Services</div>
      <div className="our-services-cards">
        {showFirstSet ? (
          <>
            <div className="our-services-card">
              <div className="our-services-card-inner">
                <div className="our-services-card-front">
                  <img src={img1} alt="Service 1" className="our-services-card-image" />
                </div>
                <div className="our-services-card-back">
                  <div className="our-services-card-back-content">
                    <span className="dark-text">It’s not only a massage,</span>
                    <span className="accent-text"> </span>
                    <span className="light-text">it’s relaxing into your deepest state and unwinding the mind<br/></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="our-services-card">
              <div className="our-services-card-inner">
                <div className="our-services-card-front">
                  <img src={img2} alt="Service 2" className="our-services-card-image" />
                </div>
                <div className="our-services-card-back">
                  <div className="our-services-card-back-content">
                    <span className="dark-text">It’s not just high tech facials,</span>
                    <span className="accent-text"> </span>
                    <span className="light-text">it’s feeling your inner beauty and glow.<br/></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="our-services-card">
              <div className="our-services-card-inner">
                <div className="our-services-card-front">
                  <img src={img3} alt="Service 3" className="our-services-card-image" />
                </div>
                <div className="our-services-card-back">
                  <div className="our-services-card-back-content">
                    <span className="dark-text">It’s not just a cold plunge,</span>
                    <span className="accent-text"> </span>
                    <span className="light-text">it's experiencing exhilaration and mental clarity in the present moment.<br/></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="our-services-arrow-forward" onClick={toggleSet}>
              &rarr;
            </div>
          </>
        ) : (
          <>
            <div className="our-services-card">
              <div className="our-services-card-inner">
                <div className="our-services-card-front">
                  <img src={img4} alt="Service 4" className="our-services-card-image" />
                </div>
                <div className="our-services-card-back">
                  <div className="our-services-card-back-content">
                    <span className="dark-text">It’s not just an infrared sauna session,</span>
                    <span className="accent-text"> </span>
                    <span className="light-text">it’s 30 minutes of detoxifying, stress-releasing sweat.<br/></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="our-services-card">
              <div className="our-services-card-inner">
                <div className="our-services-card-front">
                  <img src={img5} alt="Service 5" className="our-services-card-image" />
                </div>
                <div className="our-services-card-back">
                  <div className="our-services-card-back-content">
                    <span className="dark-text">It’s not only LED light therapy,</span>
                    <span className="accent-text"> </span>
                    <span className="light-text">collagen production, improved circulation, and inflammation reduction.<br/></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="our-services-card">
              <div className="our-services-card-inner">
                <div className="our-services-card-front">
                  <img src={img6} alt="Service 6" className="our-services-card-image" />
                </div>
                <div className="our-services-card-back">
                  <div className="our-services-card-back-content">
                    <span className="dark-text">It’s not only pneumatic compression,</span>
                    <span className="accent-text"> </span>
                    <span className="light-text">it's lymphatic drainage of toxins and waste.<br/></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="our-services-arrow-back" onClick={toggleSet}>
              &larr;
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default OurServices;
