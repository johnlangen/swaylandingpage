import React, { useState } from 'react';
import './ConnectSection.css';
import footerImage from '../assets/images/footer.png';
import logo from '../assets/images/logo.png';
import { firestore } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function ConnectSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(firestore, 'landingPageEmails', 'Larimer', 'contacts'), {
        ...formData,
        timestamp: serverTimestamp()
      });
      alert('Message sent successfully');
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message: ', error);
      alert('Failed to send message');
    }
  };

  return (
    <div className="connect-section">
      <div className="connect-content">
        <div className="connect-info-section">
          <h2 className="connect-info-heading">Connect</h2>
          <p className="connect-info-item">contact@sway.com</p>
        </div>
        <div className="contact-section">
          <h2 className="contact-info-heading">Contact</h2>
          <p className="contact-info-item">Fill out the form below and we will get back to you shortly.</p>
          <form onSubmit={handleSubmit}>
            <div className="connect-form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="connect-form-group">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="connect-form-group">
              <textarea
                name="message"
                placeholder="Message *"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="connect-submit-button">Submit</button>
          </form>
        </div>
      </div>
      <div className="connect-footer">
        <img src={footerImage} alt="Footer" className="connect-footer-image" />
        <img src={logo} alt="Logo" className="connect-footer-logo" />
      </div>
    </div>
  );
}

export default ConnectSection;
