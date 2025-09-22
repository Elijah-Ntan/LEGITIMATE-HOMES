import React from 'react'

const About = () => {
  return (
    <section id="about" className="about section bg-pattern">
      <div className="container">
        <h2 className="section-title">About Legitimate Homes</h2>
        <p className="section-subtitle">
          Building communities, creating opportunities, and securing your future through strategic land investments across Nigeria.
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              At Legitimate Homes, we are committed to providing our clients with exceptional 
              land banking opportunities across Nigeria that offer long-term value and sustainable growth. 
              Our expertise in land acquisition, development planning, and market analysis 
              ensures that every investment is backed by thorough research and strategic planning.
            </p>
            
            <p>
              With over a decade of experience in the Nigerian real estate industry, we have helped 
              hundreds of investors build wealth through carefully selected land investments. 
              Our team of experts understands the complexities of Nigerian land banking laws, 
              regulations, and provides personalized guidance to help you make informed decisions.
            </p>
            
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">🏆</div>
                <div className="feature-text">Award-Winning Service</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📈</div>
                <div className="feature-text">Proven ROI Track Record</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <div className="feature-text">Trusted Partnerships</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🛡️</div>
                <div className="feature-text">Secure Investments</div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="about-image-container">
              <div className="land-showcase">
                <h4>Premium Land Development</h4>
                <div className="land-elements">
                  <div className="element">
                    <div className="element-icon">🌲</div>
                    <span>Natural Beauty</span>
                  </div>
                  <div className="element">
                    <div className="element-icon">🏗️</div>
                    <span>Development Ready</span>
                  </div>
                  <div className="element">
                    <div className="element-icon">📍</div>
                    <span>Prime Locations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About