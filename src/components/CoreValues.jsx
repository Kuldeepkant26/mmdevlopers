import React from 'react';
import { motion } from 'framer-motion';
import '../css/CoreValues.css';
import { useTheme } from '../context/ThemeContext';

const CoreValues = () => {
    const { isDark } = useTheme();

    const values = [
        {
            title: "FAMILY-CENTRIC LIVING",
            description: "Creating homes that bring families closer, offering comfort, togetherness, and a true sense of belonging.",
            icon: "👨‍👩‍👧‍👦",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        {
            title: "LUXURY WITH HEART",
            description: "Making premium living accessible by blending quality, trust, and emotional connection in every detail.",
            icon: "💝",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        },
        {
            title: "CRAFTED TO PERFECTION",
            description: "Delivering unmatched quality, innovative design, and meticulous attention to detail in everything we build.",
            icon: "⚡",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0,
            scale: 0.8,
            rotateY: -30
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8
            }
        }
    };

    return (
        <section className={`core-values ${isDark ? 'core-values--dark' : 'core-values--light'}`}>
            <div className="core-values__container">
                <motion.div 
                    className="core-values__header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="core-values__badge">Core Values</span>
                    <h2 className="core-values__title">
                        The Foundation of Our Success
                    </h2>
                    <p className="core-values__description">
                        At MM Developers, our core values reflect our unwavering commitment to redefining real estate through innovation, trust, and purpose-driven design.
                    </p>
                </motion.div>

                <motion.div 
                    className="core-values__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className="core-values__card"
                            variants={cardVariants}
                            whileHover={{ 
                                y: -15,
                                scale: 1.03,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                        >
                            <div className="core-values__card-inner">
                                <div className="core-values__card-background" style={{ background: value.gradient }}></div>
                                
                                <div className="core-values__icon-container">
                                    <span className="core-values__icon">{value.icon}</span>
                                    <div className="core-values__icon-ring"></div>
                                    <div className="core-values__icon-ring core-values__icon-ring--delayed"></div>
                                </div>

                                <div className="core-values__content">
                                    <h3 className="core-values__card-title">{value.title}</h3>
                                    <p className="core-values__card-description">{value.description}</p>
                                </div>

                                <div className="core-values__glow" style={{ background: value.gradient }}></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="core-values__decoration core-values__decoration--1"></div>
            <div className="core-values__decoration core-values__decoration--2"></div>
            <div className="core-values__decoration core-values__decoration--3"></div>
        </section>
    );
};

export default CoreValues;
