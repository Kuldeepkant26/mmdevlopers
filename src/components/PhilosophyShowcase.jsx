import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../css/PhilosophyShowcase.css';
import { useTheme } from '../context/ThemeContext';

const PhilosophyShowcase = () => {
    const { isDark } = useTheme();
    const [activeSection, setActiveSection] = useState(0);
    const sectionRef = useRef(null);

    const philosophies = [
        {
            title: "VISION",
            subtitle: "Building Dreams Into Reality",
            content: "At MM Developers, we envision a world where everyone can own a home that offers true value for money—a place where quality, trust, and comfort converge. We aim to make luxury living accessible, meaningful, and deeply connected to the lives of those who call it home.",
            features: ["Thoughtful Design", "Value-Driven Living", "Purposeful Living", "Sustainable Luxury"],
            color: "#F8C64B",
            gradientStart: "#F8C64B",
            gradientEnd: "#0C6C0B"
        },
        {
            title: "MISSION",
            subtitle: "Committed to Excellence",
            content: "Our mission is to make the dream of owning a home achievable, by delivering innovative and customer-first solutions that blend quality, trust, and sustainability in every project.",
            features: ["Innovative Homes", "Seamless Experience", "Sustainability Focused", "Collaborative Excellence"],
            color: "#0C6C0B",
            gradientStart: "#0C6C0B",
            gradientEnd: "#00123A"
        },
        {
            title: "VALUES",
            subtitle: "The Foundation of Our Success",
            content: "Our core values reflect our unwavering commitment to redefining real estate through innovation, trust, and purpose-driven design.",
            features: ["Family-Centric Living", "Luxury with Heart", "Crafted to Perfection", "Trust & Transparency"],
            color: "#00123A",
            gradientStart: "#00123A",
            gradientEnd: "#F8C64B"
        },
        {
            title: "STORY",
            subtitle: "Our Journey",
            content: "From humble beginnings to industry leadership, we've built a legacy of trust, innovation, and excellence in real estate.",
            features: ["150+ Projects", "10K+ Families", "25+ Awards", "Industry Leader"],
            color: "#F8C64B",
            gradientStart: "#F8C64B",
            gradientEnd: "#00123A"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            
            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Start counting from when section enters viewport
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                // Calculate progress based on section visibility
                const sectionHeight = rect.height;
                const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
                const progress = Math.min(Math.max(visibleHeight / windowHeight, 0), 1);
                
                // Calculate active section based on scroll progress
                const totalSections = philosophies.length;
                const sectionIndex = Math.floor(progress * totalSections);
                setActiveSection(Math.min(sectionIndex, totalSections - 1));
            } else if (rect.top > windowHeight) {
                setActiveSection(0);
            } else if (rect.bottom < 0) {
                setActiveSection(philosophies.length - 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [philosophies.length]);

    return (
        <section 
            ref={sectionRef}
            className={`philosophy-showcase ${isDark ? 'philosophy-showcase--dark' : 'philosophy-showcase--light'}`}
        >
            {/* Animated Background Shapes */}
            <div className="philosophy-showcase__bg-shapes">
                {[...Array(6)].map((_, i) => (
                    <div 
                        key={i} 
                        className="philosophy-showcase__shape"
                        style={{
                            animationDelay: `${i * 0.5}s`,
                            left: `${(i * 20) % 100}%`,
                            top: `${(i * 15) % 100}%`
                        }}
                    />
                ))}
            </div>

            <div className="philosophy-showcase__container">
                {/* Circular Progress Indicator */}
                {/* Progress indicator removed */}

                {/* Main Content */}
                <div className="philosophy-showcase__content">
                    {philosophies.map((philosophy, index) => (
                        <motion.div
                            key={index}
                            className={`philosophy-showcase__panel ${activeSection === index ? 'philosophy-showcase__panel--active' : ''}`}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{
                                opacity: activeSection === index ? 1 : 0.3,
                                x: activeSection === index ? 0 : activeSection > index ? -100 : 100,
                                scale: activeSection === index ? 1 : 0.9
                            }}
                            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                        >
                            {/* Large Background Text */}
                            <div 
                                className="philosophy-showcase__bg-text"
                                style={{
                                    background: `linear-gradient(135deg, ${philosophy.gradientStart}, ${philosophy.gradientEnd})`
                                }}
                            >
                                {philosophy.title}
                            </div>

                            <div className="philosophy-showcase__panel-content">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ 
                                        opacity: activeSection === index ? 1 : 0,
                                        y: activeSection === index ? 0 : 30 
                                    }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >
                                    <h2 
                                        className="philosophy-showcase__title"
                                        style={{ color: philosophy.color }}
                                    >
                                        {philosophy.title}
                                    </h2>
                                    <h3 className="philosophy-showcase__subtitle">
                                        {philosophy.subtitle}
                                    </h3>
                                    <p className="philosophy-showcase__description">
                                        {philosophy.content}
                                    </p>

                                    {/* Features in a creative layout */}
                                    <div className="philosophy-showcase__features">
                                        {philosophy.features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                className="philosophy-showcase__feature"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ 
                                                    opacity: activeSection === index ? 1 : 0,
                                                    x: activeSection === index ? 0 : -20 
                                                }}
                                                transition={{ delay: 0.4 + (idx * 0.1), duration: 0.5 }}
                                                whileHover={{ x: 10, scale: 1.05 }}
                                            >
                                                <div 
                                                    className="philosophy-showcase__feature-dot"
                                                    style={{ background: philosophy.color }}
                                                />
                                                <span className="philosophy-showcase__feature-text">
                                                    {feature}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Decorative Number */}
                            <div 
                                className="philosophy-showcase__panel-number"
                                style={{
                                    background: `linear-gradient(135deg, ${philosophy.gradientStart}, ${philosophy.gradientEnd})`
                                }}
                            >
                                0{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation Dots */}
            </div>
        </section>
    );
};

export default PhilosophyShowcase;
