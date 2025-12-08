import React, { useEffect, useRef, useState } from 'react';
import '../css/AboutShowcase.css';
import { useTheme } from '../context/ThemeContext';

const AboutShowcase = () => {
    const { isDark } = useTheme();
    const [activeCard, setActiveCard] = useState(0);

    const ventures = [
        {
            title: "Trust of a Family",
            description: "Going for a property is a huge deal. We do our best to get you a dream home that makes every penny spent worth it.",
            icon: "🏡",
            color: "#667eea"
        },
        {
            title: "Quality Excellence",
            description: "Every plan addresses smartly utilized, functional, well-designed space priced right with value appreciation over time.",
            icon: "✨",
            color: "#f093fb"
        },
        {
            title: "Customer First",
            description: "Prioritizing trust and transparency throughout your journey to finding the perfect home for your family.",
            icon: "💼",
            color: "#4facfe"
        }
    ];

    return (
        <section className={`ventures-showcase ${isDark ? 'ventures-showcase--dark' : 'ventures-showcase--light'}`}>
            <div className="ventures-showcase__content">
                <div className="ventures-showcase__header" data-aos="fade-up">
                    <span className="ventures-showcase__subtitle">About MM Developers</span>
                    <h2 className="ventures-showcase__title">Transforming Ideas Into Reality</h2>
                    <p className="ventures-showcase__description">
                        Discover our story, values, and the innovative spirit shaping every project we deliver.
                    </p>
                </div>

                <div className="ventures-showcase__grid">
                    {ventures.map((venture, index) => (
                        <div
                            key={index}
                            className={`ventures-showcase__card ${activeCard === index ? 'ventures-showcase__card--active' : ''}`}
                            onMouseEnter={() => setActiveCard(index)}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="ventures-showcase__card-inner">
                                <div className="ventures-showcase__icon-wrapper">
                                    <span className="ventures-showcase__icon">{venture.icon}</span>
                                    <div 
                                        className="ventures-showcase__icon-bg" 
                                        style={{ background: `linear-gradient(135deg, ${venture.color}, ${venture.color}dd)` }}
                                    />
                                </div>
                                
                                <div className="ventures-showcase__card-content">
                                    <h3 className="ventures-showcase__card-title">{venture.title}</h3>
                                    <p className="ventures-showcase__card-text">{venture.description}</p>
                                </div>

                                <div className="ventures-showcase__hover-effect" style={{ background: venture.color }} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="ventures-showcase__stats" data-aos="fade-up" data-aos-delay="300">
                    <div className="ventures-showcase__stat-item">
                        <div className="ventures-showcase__stat-number">
                            <span className="ventures-showcase__counter" data-target="50">50</span>+
                        </div>
                        <div className="ventures-showcase__stat-label">Active Projects</div>
                    </div>
                    <div className="ventures-showcase__stat-divider" />
                    <div className="ventures-showcase__stat-item">
                        <div className="ventures-showcase__stat-number">
                            <span className="ventures-showcase__counter" data-target="100">100</span>M+
                        </div>
                        <div className="ventures-showcase__stat-label">Investment Value</div>
                    </div>
                    <div className="ventures-showcase__stat-divider" />
                    <div className="ventures-showcase__stat-item">
                        <div className="ventures-showcase__stat-number">
                            <span className="ventures-showcase__counter" data-target="25">25</span>+
                        </div>
                        <div className="ventures-showcase__stat-label">Success Stories</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutShowcase;
