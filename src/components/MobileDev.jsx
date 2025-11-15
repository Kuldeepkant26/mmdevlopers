import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/MobileDev.css';
import { FaBuilding, FaHome, FaKey, FaMapMarkerAlt } from 'react-icons/fa';
import building3 from '../assets/building3.jpeg';

gsap.registerPlugin(ScrollTrigger);

const MobileDev = () => {
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

  const propertyFeatures = [
    {
      id: 1,
      icon: <FaBuilding />,
      title: 'Premium Properties',
      description: 'Curated selection of luxury residential and commercial spaces'
    },
    {
      id: 2,
      icon: <FaMapMarkerAlt />,
      title: 'Prime Locations',
      description: 'Strategic locations with excellent connectivity and amenities'
    },
    {
      id: 3,
      icon: <FaKey />,
      title: 'Seamless Process',
      description: 'End-to-end assistance from site visit to possession'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
    <section className="mobiledev-section" ref={sectionRef}>
      <motion.div 
        className="mobiledev-container"
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
            <p className="section-label">DISTINGUISHED PROPERTIES</p>
            <div className="section-line"></div>
          </div>
        </motion.div>
        
        {/* Left Content */}
        <motion.div 
          className="mobiledev-left"
          variants={containerVariants}
        >
          <motion.h1 
            className="mobiledev-main-title"
            variants={itemVariants}
          >
            Your Dream Property Awaits
          </motion.h1>

          <div className="mobiledev-features-list">
            {propertyFeatures.map((feature, index) => (
              <motion.div 
                key={feature.id} 
                className="mobiledev-feature-item"
                variants={itemVariants}
                custom={index}
              >
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Center - Building Image */}
        <motion.div 
          className="mobiledev-center"
          variants={imageVariants}
        >
          <div className="building-showcase">
            <div ref={imageRef}>
              <img 
                src={building3} 
                alt="Premium Real Estate Property"
                className="building-image"
              />
            </div>
            <div className="building-overlay">
              <div className="building-info">
                <div className="building-badge">
                  <FaHome />
                  <span>Premium Property</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          className="mobiledev-right"
          variants={containerVariants}
        >
          <motion.h2 
            className="mobiledev-secondary-title"
            variants={itemVariants}
          >
            Where Quality Meets Excellence
          </motion.h2>
          <motion.p 
            className="mobiledev-secondary-description"
            variants={itemVariants}
          >
            We specialize in delivering exceptional real estate solutions with a focus on quality, 
            transparency, and customer satisfaction. From residential villas to commercial spaces, 
            we bring your vision to life.
          </motion.p>
          <motion.button 
            className="mobiledev-learn-more"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Properties
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MobileDev;
