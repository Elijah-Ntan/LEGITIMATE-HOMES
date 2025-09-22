import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Legitimate Homes</h3>
            <p>
              Your trusted partner in land banking and real estate investment. 
              Building wealth through strategic land acquisition and development opportunities.
            </p>
            <p>
              <strong>Licensed Real Estate Company</strong><br />
              License #RE-2025-LH-NG-001<br />
              Registered with Corporate Affairs Commission (CAC)
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#properties">Properties</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <a href="#services">Land Acquisition</a>
            <a href="#services">Market Analysis</a>
            <a href="#services">Development Planning</a>
            <a href="#services">Investment Consulting</a>
            <a href="#services">Legal Support</a>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>📍 Plot 123 Adeola Odeku Street<br />Victoria Island, Lagos State<br />Nigeria</p>
            <p>📞 +234 (0) 1 234 5678</p>
            <p>✉️ info@legitimatehomes.com.ng</p>
            <p>🌐 www.legitimatehomes.com.ng</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Legitimate Homes. All rights reserved. | Privacy Policy | Terms of Service | Equal Housing Opportunity</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer