import React from 'react'

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "Riverside Development Plot",
      price: "₦125,000,000",
      location: "Lekki, Lagos State",
      size: "2.5 acres",
      type: "Residential Development",
      description: "Prime location near proposed metro expansion with approved zoning for residential development.",
      badge: "Hot Deal",
      landIcons: ["🌊", "🌳", "🏘️"]
    },
    {
      id: 2,
      title: "Commercial Land Parcel",
      price: "₦275,000,000", 
      location: "Victoria Island, Lagos State",
      size: "1.8 acres",
      type: "Commercial Development",
      description: "High-traffic commercial zone with excellent visibility and access to major highways.",
      badge: "Prime Location",
      landIcons: ["🏪", "🛣️", "🏢"]
    },
    {
      id: 3,
      title: "Suburban Expansion Land",
      price: "₦89,000,000",
      location: "Gwarinpa, Abuja FCT", 
      size: "3.2 acres",
      type: "Residential Development",
      description: "Growing suburban area with planned infrastructure improvements and school district expansion.",
      badge: "Growth Area",
      landIcons: ["🏡", "🎓", "🌿"]
    },
    {
      id: 4,
      title: "Industrial Development Site",
      price: "₦450,000,000",
      location: "Agbara, Ogun State",
      size: "5.1 acres", 
      type: "Industrial Development",
      description: "Strategic location near major transportation hubs with utility access and industrial zoning.",
      badge: "Strategic",
      landIcons: ["🏭", "🚛", "⚡"]
    },
    {
      id: 5,
      title: "Mixed-Use Development",
      price: "₦320,000,000",
      location: "Ikoyi, Lagos State",
      size: "2.8 acres",
      type: "Mixed-Use Development", 
      description: "Versatile plot approved for mixed-use development in rapidly growing downtown district.",
      badge: "Versatile",
      landIcons: ["🏢", "🛍️", "🍽️"]
    },
    {
      id: 6,
      title: "Future Residential Community",
      price: "₦195,000,000",
      location: "Ibadan, Oyo State",
      size: "4.0 acres",
      type: "Residential Development",
      description: "Large parcel perfect for residential community development with lake access and scenic views.",
      badge: "Lake Access",
      landIcons: ["🏖️", "🌅", "🦢"]
    }
  ]

  return (
    <section id="properties" className="properties section">
      <div className="container">
        <h2 className="section-title">Featured Properties</h2>
        <p className="section-subtitle">
          Explore our carefully curated selection of premium land investment opportunities 
          across Nigeria's high-growth markets and developing regions.
        </p>
        
        <div className="properties-grid">
          {properties.map(property => (
            <div key={property.id} className="property-card">
              <div className="property-image">
                <div className="property-badge">{property.badge}</div>
                <div className="land-visual">
                  <div className="land-icons">
                    {property.landIcons.map((icon, index) => (
                      <div key={index} className="land-icon">{icon}</div>
                    ))}
                  </div>
                  <div>{property.location}</div>
                </div>
              </div>
              <div className="property-info">
                <h3>{property.title}</h3>
                <div className="property-price">{property.price}</div>
                <div className="property-details">
                  <div className="detail-item">
                    <span className="detail-icon">📏</span>
                    <span>{property.size}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">🏷️</span>
                    <span>{property.type}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">📍</span>
                    <span>{property.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">⭐</span>
                    <span>Premium</span>
                  </div>
                </div>
                <p className="property-description">{property.description}</p>
                <div className="property-action">
                  <a href="#contact" className="property-btn">
                    Learn More →
                  </a>
                  <div className="property-status">
                    <div className="status-dot"></div>
                    Available
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Properties