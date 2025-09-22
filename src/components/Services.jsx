import React from 'react'

const Services = () => {
  const services = [
    {
      icon: "🏞️",
      title: "Land Acquisition",
      description: "Strategic identification and acquisition of high-potential land parcels in growing areas with strong development prospects and infrastructure plans."
    },
    {
      icon: "📊",
      title: "Market Analysis", 
      description: "In-depth market research and feasibility studies to ensure your land investment aligns with future growth patterns and zoning regulations."
    },
    {
      icon: "🏗️",
      title: "Development Planning",
      description: "Professional development planning services including permits, approvals, and strategic timing to maximize your land's potential value."
    },
    {
      icon: "💼",
      title: "Investment Consulting",
      description: "Personalized investment strategies and portfolio management to help you build wealth through diversified land banking opportunities."
    },
    {
      icon: "📋",
      title: "Legal Support",
      description: "Complete legal assistance including title verification, due diligence, contract negotiation, and closing services for peace of mind."
    },
    {
      icon: "🎯",
      title: "Exit Strategy",
      description: "Strategic exit planning and execution to help you realize maximum returns when the time is right to sell your land investments."
    }
  ]

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive land banking solutions tailored to your investment goals and timeline.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services