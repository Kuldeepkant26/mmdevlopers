import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/WebSaaSDev.css';
import { FaHome, FaMapMarkerAlt, FaRulerCombined } from 'react-icons/fa';
import building4 from '../assets/building4.avif';

gsap.registerPlugin(ScrollTrigger);

const WebSaaSDev = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  
  const { ref: intersectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { y: 50, scale: 0.95 },
        {
          y: -20,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const propertyHighlights = [
    {
      id: 1,
      icon: <FaHome />,
      title: 'Premium Developments',
      description: 'Exclusive residential and commercial projects in prime locations'
    },
    {
      id: 2,
      icon: <FaMapMarkerAlt />,
      title: 'Strategic Locations',
      description: 'Properties with excellent connectivity and growth potential'
    },
    {
      id: 3,
      icon: <FaRulerCombined />,
      title: 'Flexible Options',
      description: 'Wide range of configurations to suit every lifestyle'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="websaas-section" ref={sectionRef}>
      <motion.div 
        className="websaas-container"
        ref={intersectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div 
          className="section-header-center"
          variants={itemVariants}
        >
          <div className="section-tagline-wrapper">
            <p className="section-label">INVESTMENT OPPORTUNITIES</p>
            <div className="section-line"></div>
          </div>
        </motion.div>
        
        {/* Left Content */}
        <motion.div 
          className="websaas-left"
          variants={containerVariants}
        >
          <motion.h1 
            className="websaas-main-title"
            variants={itemVariants}
          >
            Invest in Your Future Today
          </motion.h1>

          <div className="websaas-features-list">
            {propertyHighlights.map((highlight, index) => (
              <motion.div 
                key={highlight.id} 
                className="websaas-feature-item"
                variants={itemVariants}
                custom={index}
              >
                <div className="feature-icon">{highlight.icon}</div>
                <div className="feature-content">
                  <h3 className="feature-title">{highlight.title}</h3>
                  <p className="feature-description">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Center - Building Image */}
        <motion.div 
          className="websaas-center"
          variants={imageVariants}
        >
          <div className="building-showcase">
            <div ref={imageRef}>
              <img 
                src={building4} 
                alt="Premium Real Estate Development"
                className="building-image"
              />
            </div>
            <div className="building-overlay">
              <div className="building-info">
                <div className="building-badge">
                  <FaHome />
                  <span>Investment Ready</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          className="websaas-right"
          variants={containerVariants}
        >
          <motion.h2 
            className="websaas-secondary-title"
            variants={itemVariants}
          >
            Building Dreams, Creating Value
          </motion.h2>
          <motion.p 
            className="websaas-secondary-description"
            variants={itemVariants}
          >
            Our portfolio features meticulously selected properties that promise excellent returns 
            and long-term value appreciation. From modern residences to commercial spaces, we offer 
            investment opportunities that align with your financial goals.
          </motion.p>
          <motion.button 
            className="websaas-learn-more"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View Investments
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WebSaaSDev;
