import React from 'react';
import { motion } from 'framer-motion';
import '../css/VisionMission.css';
import { useTheme } from '../context/ThemeContext';

const VisionMission = () => {
    const { isDark } = useTheme();

    const visionPoints = [
        {
            icon: "🏡",
            title: "Thoughtful Design",
            description: "Homes that foster connection, well-being, and comfort."
        },
        {
            icon: "💎",
            title: "Value-Driven Living",
            description: "Creating spaces that balance luxury with affordability."
        },
        {
            icon: "🌟",
            title: "Purposeful Living",
            description: "Inspiring a sense of belonging and community in every space."
        },
        {
            icon: "🌱",
            title: "Sustainable Luxury",
            description: "Setting new standards for inclusive and eco-friendly luxury."
        }
    ];

    const missionPoints = [
        {
            icon: "🏗️",
            title: "Innovative Homes",
            description: "Building high-quality homes that reflect modern living needs."
        },
        {
            icon: "✨",
            title: "Seamless Experience",
            description: "Prioritizing trust and transparency throughout the journey."
        },
        {
            icon: "♻️",
            title: "Sustainability Focused",
            description: "Designing with care, shaping the future of the planet and its people."
        },
        {
            icon: "🤝",
            title: "Collaborative Excellence",
            description: "Partnering with the best minds to deliver exceptional results."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <section className={`vision-mission ${isDark ? 'vision-mission--dark' : 'vision-mission--light'}`}>
            <div className="vision-mission__container">
                {/* Vision Section */}
                <motion.div 
                    className="vision-mission__section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <motion.div className="vision-mission__header" variants={itemVariants}>
                        <span className="vision-mission__badge">Our Vision</span>
                        <h2 className="vision-mission__title">Building Dreams Into Reality</h2>
                        <p className="vision-mission__description">
                            At MM Developers, we envision a world where everyone can own a home that offers true value for money—a place where quality, trust, and comfort converge. We aim to make luxury living accessible, meaningful, and deeply connected to the lives of those who call it home.
                        </p>
                    </motion.div>

                    <motion.div className="vision-mission__grid" variants={containerVariants}>
                        {visionPoints.map((point, index) => (
                            <motion.div 
                                key={index}
                                className="vision-mission__card"
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="vision-mission__icon-wrapper">
                                    <span className="vision-mission__icon">{point.icon}</span>
                                    <div className="vision-mission__icon-glow"></div>
                                </div>
                                <h3 className="vision-mission__card-title">{point.title}</h3>
                                <p className="vision-mission__card-description">{point.description}</p>
                                <div className="vision-mission__card-shine"></div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Mission Section */}
                <motion.div 
                    className="vision-mission__section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <motion.div className="vision-mission__header" variants={itemVariants}>
                        <span className="vision-mission__badge">Our Mission</span>
                        <h2 className="vision-mission__title">Committed to Excellence</h2>
                        <p className="vision-mission__description">
                            Our mission is to make the dream of owning a home achievable, by delivering innovative and customer-first solutions that blend quality, trust, and sustainability in every project.
                        </p>
                    </motion.div>

                    <motion.div className="vision-mission__grid" variants={containerVariants}>
                        {missionPoints.map((point, index) => (
                            <motion.div 
                                key={index}
                                className="vision-mission__card"
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="vision-mission__icon-wrapper">
                                    <span className="vision-mission__icon">{point.icon}</span>
                                    <div className="vision-mission__icon-glow"></div>
                                </div>
                                <h3 className="vision-mission__card-title">{point.title}</h3>
                                <p className="vision-mission__card-description">{point.description}</p>
                                <div className="vision-mission__card-shine"></div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default VisionMission;
