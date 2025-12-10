import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../css/CTA.css';
import { FaRocket, FaArrowRight, FaPhone, FaEnvelope } from 'react-icons/fa';

const CTA = () => {
    const { ref: intersectionRef, inView } = useInView({
        threshold: 0.3,
        triggerOnce: false,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.04,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="cta-section" id="cta-section">
            <div className="cta-container">
                <motion.div 
                    className="cta-content"
                    ref={intersectionRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {/* Icon */}
                    <motion.div 
                        className="cta-icon"
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                        <FaRocket />
                    </motion.div>

                    {/* Main Content */}
                    <motion.h2 
                        className="cta-title"
                        variants={itemVariants}
                    >
                        Ready to <span className="gradient-text">Transform</span> Your Vision?
                    </motion.h2>
                    <motion.p 
                        className="cta-subtitle"
                        variants={itemVariants}
                    >
                        Let's bring your ideas to life with cutting-edge technology and innovative solutions. 
                        Our team is ready to help you achieve your business goals.
                    </motion.p>

                    {/* Features */}
                    <motion.div 
                        className="cta-features"
                        variants={itemVariants}
                    >
                        <div className="cta-feature">
                            <span className="feature-check">✓</span>
                            <span>Free Consultation</span>
                        </div>
                        <div className="cta-feature">
                            <span className="feature-check">✓</span>
                            <span>Expert Team</span>
                        </div>
                        <div className="cta-feature">
                            <span className="feature-check">✓</span>
                            <span>24/7 Support</span>
                        </div>
                        <div className="cta-feature">
                            <span className="feature-check">✓</span>
                            <span>Fast Delivery</span>
                        </div>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div 
                        className="cta-buttons"
                        variants={itemVariants}
                    >
                        <motion.button 
                            className="cta-btn primary-btn"
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get Started Now
                            <FaArrowRight />
                        </motion.button>
                        <motion.button 
                            className="cta-btn secondary-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <FaPhone />
                            Schedule a Call
                        </motion.button>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div 
                        className="cta-contact"
                        variants={itemVariants}
                    >
                        <a href="mailto:info@oneaxis.com" className="contact-link">
                            <FaEnvelope />
                            info@oneaxis.com
                        </a>
                        <span className="contact-divider">|</span>
                        <a href="tel:+918954535455" className="contact-link">
                            <FaPhone />
                            +91 89545 35455
                        </a>
                    </motion.div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="cta-shape cta-shape-1"></div>
                <div className="cta-shape cta-shape-2"></div>
                <div className="cta-shape cta-shape-3"></div>
            </div>
        </section>
    );
};

export default CTA;
