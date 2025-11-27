import React from 'react';
import '../css/Sustainability.css';
import { FaLeaf, FaSolarPanel, FaTint, FaSeedling } from 'react-icons/fa';

const Sustainability = () => {
  const items = [
    { title: 'Green Planning', desc: 'IGBC & EDGE-aligned masterplanning to reduce resource use.', icon: FaLeaf },
    { title: 'Energy Efficient', desc: 'Optimised MEP, passive-design and solar-ready rooftops.', icon: FaSolarPanel },
    { title: 'Water Conscious', desc: 'Rainwater harvesting and low-flow fixtures for savings.', icon: FaTint },
    { title: 'Healthy Materials', desc: 'Low-VOC finishes and responsibly sourced materials.', icon: FaSeedling }
  ];

  return (
    <section className="sustainability-section">
      <div className="sustainability-container">
        <div className="sustainability-header">
          <span className="home-section-label">Sustainability</span>
          <h2 className="home-section-title">Harmonizing Luxury With The Planet</h2>
          <p className="sustainability-sub">We integrate sustainability from concept to delivery—design that respects resources and builds resilient communities.</p>
        </div>
        <div className="sustainability-grid">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div key={i} className="sustain-card">
                <div className="sustain-icon">
                  <Icon />
                </div>
                <h4>{it.title}</h4>
                <p>{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
