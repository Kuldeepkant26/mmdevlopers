import React, { useState, useEffect, useRef } from 'react';
import '../css/ImmersiveVision.css';
import { useTheme } from '../context/ThemeContext';
import { FaEye, FaLightbulb, FaHeart, FaRocket, FaQuoteLeft } from 'react-icons/fa';

const ImmersiveVision = () => {
    const { isDark } = useTheme();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState(null);

    const visionData = [
        {
            id: 1,
            icon: FaEye,
            title: "Vision",
            description: "To be the most trusted name in real estate, creating spaces that inspire generations.",
            accent: "var(--color-yellow-gold)"
        },
        {
            id: 2,
            icon: FaLightbulb,
            title: "Innovation",
            description: "Pioneering sustainable construction methods and smart home technologies.",
            accent: "var(--color-forest-green)"
        },
        {
            id: 3,
            icon: FaHeart,
            title: "Passion",
            description: "Every project is built with love, dedication, and unwavering commitment to quality.",
            accent: "var(--color-yellow-gold)"
        },
        {
            id: 4,
            icon: FaRocket,
            title: "Growth",
            description: "Expanding horizons while maintaining the personal touch that defines us.",
            accent: "var(--color-forest-green)"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section 
            ref={sectionRef}
            id="immersive-vision-section"
            className={`immersive-vision ${isDark ? 'immersive-vision--dark' : 'immersive-vision--light'} ${isVisible ? 'immersive-vision--visible' : ''}`}
        >
            {/* Simple gradient background */}
            <div className="immersive-vision__bg">
                <div className="immersive-vision__bg-gradient"></div>
                <div className="immersive-vision__bg-accent"></div>
            </div>

            <div className="immersive-vision__container">
                {/* Header */}
                <div className={`immersive-vision__header ${isVisible ? 'immersive-vision__header--animate' : ''}`}>
                    <span className="immersive-vision__label">Our Philosophy</span>
                    <h2 className="immersive-vision__title">
                        Building <span className="immersive-vision__title-highlight">Tomorrow's</span> Legacy
                    </h2>
                    <p className="immersive-vision__subtitle">
                        Where architectural excellence meets heartfelt craftsmanship
                    </p>
                </div>

                {/* Vision Cards Grid */}
                <div className="immersive-vision__grid">
                    {visionData.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={item.id}
                                className={`immersive-vision__card ${isVisible ? 'immersive-vision__card--animate' : ''} ${activeCard === item.id ? 'immersive-vision__card--active' : ''}`}
                                style={{ 
                                    '--card-delay': `${index * 0.15}s`,
                                    '--card-accent': item.accent
                                }}
                                onMouseEnter={() => setActiveCard(item.id)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                <div className="immersive-vision__card-icon">
                                    <IconComponent />
                                </div>
                                <h3 className="immersive-vision__card-title">{item.title}</h3>
                                <p className="immersive-vision__card-desc">{item.description}</p>
                                <div className="immersive-vision__card-line"></div>
                            </div>
                        );
                    })}
                </div>

                {/* Quote Section */}
                <div className={`immersive-vision__quote ${isVisible ? 'immersive-vision__quote--animate' : ''}`}>
                    <FaQuoteLeft className="immersive-vision__quote-icon" />
                    <blockquote className="immersive-vision__quote-text">
                        We don't just build structures, we craft the foundations of cherished memories and lasting legacies.
                    </blockquote>
                    <cite className="immersive-vision__quote-author">— MM Developers</cite>
                </div>

                {/* Stats Row */}
                <div className={`immersive-vision__stats ${isVisible ? 'immersive-vision__stats--animate' : ''}`}>
                    <div className="immersive-vision__stat">
                        <span className="immersive-vision__stat-number">25+</span>
                        <span className="immersive-vision__stat-label">Years of Excellence</span>
                    </div>
                    <div className="immersive-vision__stat-divider"></div>
                    <div className="immersive-vision__stat">
                        <span className="immersive-vision__stat-number">150+</span>
                        <span className="immersive-vision__stat-label">Projects Delivered</span>
                    </div>
                    <div className="immersive-vision__stat-divider"></div>
                    <div className="immersive-vision__stat">
                        <span className="immersive-vision__stat-number">10K+</span>
                        <span className="immersive-vision__stat-label">Happy Families</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImmersiveVision;
