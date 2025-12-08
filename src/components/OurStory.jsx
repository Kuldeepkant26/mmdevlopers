import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/OurStory.css';
import { useTheme } from '../context/ThemeContext';

const OurStory = () => {
    const { isDark } = useTheme();
    const [activeYear, setActiveYear] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveYear((prev) => (prev + 1) % 5);
        }, 4000); // Auto-switch every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const timeline = [
        {
            year: "2014",
            title: "The Beginning",
            description: "MM Developers was founded with a vision to redefine luxury living. Starting with our first project, we set out to create homes that families could cherish for generations.",
            highlight: "First Project Launched"
        },
        {
            year: "2017",
            title: "Expansion & Growth",
            description: "Expanded our portfolio with 5 landmark projects across prime locations. Our commitment to quality and customer satisfaction earned us recognition in the industry.",
            highlight: "5 Projects Delivered"
        },
        {
            year: "2020",
            title: "Innovation Era",
            description: "Introduced sustainable building practices and smart home technologies. We pioneered eco-friendly construction methods while maintaining luxury standards.",
            highlight: "Green Building Certified"
        },
        {
            year: "2023",
            title: "Market Leader",
            description: "Achieved significant market presence with 150+ successful projects. Our unwavering focus on innovation and customer trust established us as industry leaders.",
            highlight: "150+ Projects Completed"
        },
        {
            year: "2025",
            title: "Future Forward",
            description: "Continuing our journey with cutting-edge designs and sustainable practices. We're committed to shaping the future of real estate with trust, quality, and innovation.",
            highlight: "Leading the Future"
        }
    ];

    return (
        <section className={`our-story ${isDark ? 'our-story--dark' : 'our-story--light'}`}>
            <div className="our-story__container">
                <motion.div 
                    className="our-story__header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="our-story__badge">Our Journey</span>
                    <h2 className="our-story__title">Growth Story</h2>
                    <p className="our-story__description">
                        From humble beginnings to industry leadership, explore our journey of innovation, trust, and sustainable growth.
                    </p>
                </motion.div>

                <div className="our-story__content">
                    <div className="our-story__timeline">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`our-story__timeline-item ${activeYear === index ? 'our-story__timeline-item--active' : ''}`}
                                onClick={() => setActiveYear(index)}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="our-story__year">{item.year}</div>
                                <div className="our-story__dot">
                                    <div className="our-story__dot-inner"></div>
                                </div>
                                <div className="our-story__line"></div>
                            </motion.div>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeYear}
                            className="our-story__details"
                            initial={{ opacity: 0, x: 50, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -50, scale: 0.95 }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                        >
                            <div className="our-story__card">
                                <div className="our-story__card-glow"></div>
                                <span className="our-story__highlight">{timeline[activeYear].highlight}</span>
                                <h3 className="our-story__card-title">{timeline[activeYear].title}</h3>
                                <p className="our-story__card-description">{timeline[activeYear].description}</p>
                                <div className="our-story__card-decoration"></div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Stats Section */}
                <motion.div 
                    className="our-story__stats"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="our-story__stat">
                        <div className="our-story__stat-number">150+</div>
                        <div className="our-story__stat-label">Projects Completed</div>
                    </div>
                    <div className="our-story__stat-divider"></div>
                    <div className="our-story__stat">
                        <div className="our-story__stat-number">25+</div>
                        <div className="our-story__stat-label">Industry Awards</div>
                    </div>
                    <div className="our-story__stat-divider"></div>
                    <div className="our-story__stat">
                        <div className="our-story__stat-number">10K+</div>
                        <div className="our-story__stat-label">Happy Families</div>
                    </div>
                    <div className="our-story__stat-divider"></div>
                    <div className="our-story__stat">
                        <div className="our-story__stat-number">100%</div>
                        <div className="our-story__stat-label">Customer Trust</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurStory;
