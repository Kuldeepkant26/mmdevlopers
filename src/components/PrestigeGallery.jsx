import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaExpand, FaAward, FaStar, FaCrown, FaGem } from 'react-icons/fa';
import '../css/PrestigeGallery.css';

const PrestigeGallery = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const prestigeSlides = [
        {
            id: 1,
            title: 'The Pinnacle of Excellence',
            subtitle: 'Award-Winning Architecture',
            description: 'Recognized globally for innovation and design mastery that transcends conventional boundaries.',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80',
            icon: FaAward,
            stat: '50+',
            statLabel: 'International Awards',
            accentColor: '#F8C64B'
        },
        {
            id: 2,
            title: 'Masterpieces in Motion',
            subtitle: 'Signature Living Spaces',
            description: 'Where artistry meets functionality in breathtaking harmony, creating timeless experiences.',
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80',
            icon: FaCrown,
            stat: '200+',
            statLabel: 'Luxury Projects',
            accentColor: '#0C6C0B'
        },
        {
            id: 3,
            title: 'Crafted Perfection',
            subtitle: 'Bespoke Interiors',
            description: 'Every detail meticulously curated to reflect your unique vision and sophisticated taste.',
            image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=80',
            icon: FaGem,
            stat: '98%',
            statLabel: 'Client Delight',
            accentColor: '#F8C64B'
        },
        {
            id: 4,
            title: 'Iconic Destinations',
            subtitle: 'Global Portfolio',
            description: 'Transforming skylines and landscapes across continents with visionary design excellence.',
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80',
            icon: FaStar,
            stat: '25+',
            statLabel: 'Countries',
            accentColor: '#0C6C0B'
        }
    ];

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % prestigeSlides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, prestigeSlides.length]);

    const handleSlideChange = (index) => {
        setActiveSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const currentSlide = prestigeSlides[activeSlide];
    const Icon = currentSlide.icon;

    return (
        <section className="prestige-gallery">
            {/* Animated Background */}
            <div className="prestige-bg-effects">
                <div className="prestige-gradient-orb prestige-orb-1"></div>
                <div className="prestige-gradient-orb prestige-orb-2"></div>
                <div className="prestige-gradient-orb prestige-orb-3"></div>
            </div>

            <div className="prestige-container">
                {/* Section Header */}
                <motion.div 
                    className="prestige-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <span className="prestige-label">Signature Portfolio</span>
                    <h2 className="prestige-title">Where Dreams Take Form</h2>
                    <p className="prestige-subtitle">
                        Experience the extraordinary through our collection of iconic projects that define luxury living
                    </p>
                </motion.div>

                {/* Main Gallery Display */}
                <div className="prestige-gallery-wrapper">
                    {/* Large Image Showcase */}
                    <div className="prestige-main-display">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSlide}
                                className="prestige-slide"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            >
                                {/* Background Image */}
                                <div 
                                    className="prestige-image"
                                    style={{ backgroundImage: `url(${currentSlide.image})` }}
                                >
                                    <div className="prestige-image-overlay"></div>
                                </div>

                                {/* Content Overlay */}
                                <div className="prestige-content">
                                    <motion.div
                                        className="prestige-icon-wrapper"
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                    >
                                        <Icon className="prestige-icon" />
                                    </motion.div>

                                    <motion.h3
                                        className="prestige-slide-title"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        {currentSlide.title}
                                    </motion.h3>

                                    <motion.p
                                        className="prestige-slide-subtitle"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.5 }}
                                    >
                                        {currentSlide.subtitle}
                                    </motion.p>

                                    <motion.p
                                        className="prestige-slide-description"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
                                    >
                                        {currentSlide.description}
                                    </motion.p>

                                    <motion.div
                                        className="prestige-stat-box"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 0.7 }}
                                        style={{ borderColor: currentSlide.accentColor }}
                                    >
                                        <span className="prestige-stat-number" style={{ color: currentSlide.accentColor }}>
                                            {currentSlide.stat}
                                        </span>
                                        <span className="prestige-stat-label">{currentSlide.statLabel}</span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Dots */}
                        <div className="prestige-dots">
                            {prestigeSlides.map((slide, index) => (
                                <button
                                    key={slide.id}
                                    className={`prestige-dot ${activeSlide === index ? 'active' : ''}`}
                                    onClick={() => handleSlideChange(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                >
                                    <span className="prestige-dot-inner"></span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Side Thumbnails */}
                    <div className="prestige-thumbnails">
                        {prestigeSlides.map((slide, index) => {
                            const ThumbIcon = slide.icon;
                            return (
                                <motion.div
                                    key={slide.id}
                                    className={`prestige-thumbnail ${activeSlide === index ? 'active' : ''}`}
                                    onClick={() => handleSlideChange(index)}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, x: -10 }}
                                >
                                    <div 
                                        className="prestige-thumb-image"
                                        style={{ backgroundImage: `url(${slide.image})` }}
                                    >
                                        <div className="prestige-thumb-overlay"></div>
                                    </div>
                                    <div className="prestige-thumb-content">
                                        <ThumbIcon className="prestige-thumb-icon" />
                                        <div className="prestige-thumb-text">
                                            <h4>{slide.title}</h4>
                                            <p>{slide.subtitle}</p>
                                        </div>
                                    </div>
                                    <div className="prestige-thumb-indicator"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Feature Cards */}
                <div className="prestige-features">
                    <motion.div 
                        className="prestige-feature-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="prestige-feature-icon">
                            <FaAward />
                        </div>
                        <h3>Timeless Design</h3>
                        <p>Creating spaces that remain elegant and relevant for generations</p>
                    </motion.div>

                    <motion.div 
                        className="prestige-feature-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="prestige-feature-icon">
                            <FaCrown />
                        </div>
                        <h3>Unmatched Quality</h3>
                        <p>Premium materials and craftsmanship in every detail</p>
                    </motion.div>

                    <motion.div 
                        className="prestige-feature-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="prestige-feature-icon">
                            <FaGem />
                        </div>
                        <h3>Bespoke Excellence</h3>
                        <p>Tailored solutions that reflect your unique vision</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PrestigeGallery;
