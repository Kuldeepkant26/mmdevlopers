import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import '../css/SignatureApproach.css';
import { FaLeaf, FaDraftingCompass, FaUsers } from 'react-icons/fa';

const approaches = [
    {
        id: 1,
        title: "Eco-Centric Design",
        subtitle: "Sustainability at Core",
        description: "We don't just build homes; we cultivate ecosystems. Our projects integrate vertical gardens, solar harvesting, and rainwater systems to ensure a greener tomorrow.",
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2560&auto=format&fit=crop",
        color: "var(--color-forest-green)",
        icon: FaLeaf
    },
    {
        id: 2,
        title: "Architectural Mastery",
        subtitle: "Form Meets Function",
        description: "Every curve, corner, and cornice is calculated. We blend contemporary aesthetics with timeless structural integrity to create landmarks, not just buildings.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
        color: "var(--color-navy-blue)",
        icon: FaDraftingCompass
    },
    {
        id: 3,
        title: "Community Living",
        subtitle: "Connected Lifestyles",
        description: "Beyond four walls, we design spaces that foster connection. From shared workspaces to recreational zones, we build vibrant communities that thrive together.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
        color: "var(--color-yellow-gold)",
        icon: FaUsers
    }
];

const SignatureApproach = () => {
    const { isDark } = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={`signature-section ${isDark ? 'dark' : 'light'}`}>
            <div className="signature-bg-container">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        className="signature-bg-image"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        style={{ backgroundImage: `url(${approaches[activeIndex].image})` }}
                    />
                </AnimatePresence>
                <div className="signature-overlay" />
            </div>

            <div className="signature-content">
                <motion.div 
                    className="signature-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="signature-label">Our Philosophy</span>
                    <h2 className="signature-title">The MM Standard</h2>
                    <p className="signature-intro">
                        Redefining luxury through the lens of innovation, sustainability, and human connection.
                    </p>
                </motion.div>

                <div className="signature-accordion">
                    {approaches.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`signature-item ${activeIndex === index ? 'active' : ''}`}
                            onMouseEnter={() => setActiveIndex(index)}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="signature-item-header">
                                <span className="signature-index">0{index + 1}</span>
                                <h3 className="signature-item-title">{item.title}</h3>
                            </div>
                            
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        className="signature-item-body"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    >
                                        <div className="signature-divider" style={{ backgroundColor: item.color }} />
                                        <h4 className="signature-subtitle" style={{ color: item.color }}>{item.subtitle}</h4>
                                        <p className="signature-description">{item.description}</p>
                                        <div className="signature-icon-box" style={{ borderColor: item.color }}>
                                            <item.icon style={{ color: item.color }} />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SignatureApproach;
