import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="hero bg-pattern">
      <div className="container">
        <div className="hero-content">
          <h1>
            Your Trusted <span className="highlight">Land Banking</span> Partner
          </h1>
          <p>
            Discover premium land opportunities across Nigeria with Legitimate Homes. We specialize in 
            strategic land acquisition and development, helping you build wealth through 
            smart real estate investments with proven results and expert guidance.
          </p>
          <div className="hero-buttons">
            <a href="#properties" className="btn-primary">View Properties</a>
            <a href="#about" className="btn-secondary">Learn More</a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Properties Sold</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">₦50B+</span>
              <span className="stat-label">Land Value</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero