import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/AboutUs.css';
import building5 from '../assets/building5.jpg';
import { FaBuilding, FaHome, FaKey } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
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
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="aboutus-section" ref={sectionRef}>
      <motion.div 
        className="aboutus-container"
        ref={intersectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Left Side - Icon and Image */}
        <motion.div 
          className="aboutus-left"
          variants={imageVariants}
        >
          <div className="icon-and-image">
            <div className="aboutus-icon">
              <svg viewBox="0 0 100 100" className="icon-svg">
                <g transform="translate(50, 50)">
                  {[...Array(16)].map((_, i) => (
                    <line
                      key={i}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="-40"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      transform={`rotate(${i * 22.5})`}
                    />
                  ))}
                </g>
              </svg>
            </div>
            <div className="aboutus-image" ref={imageRef}>
              <div className="image-placeholder">
                <img 
                  src={building5} 
                  alt="Premium real estate property"
                  className="aboutus-actual-image"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div 
          className="aboutus-right"
          variants={containerVariants}
        >
          <motion.h2 
            className="aboutus-title"
            variants={itemVariants}
          >
            OUR <span className="gradient-accent">EXPERTISE</span>
          </motion.h2>
          <motion.div 
            className="aboutus-text"
            variants={itemVariants}
          >
            <p className="aboutus-paragraph">
              At MMD, we specialize in delivering exceptional real estate solutions that transform your property dreams into reality. Our expertise spans across <span className="gradient-accent">Premium Properties</span>, where we curate stunning residences that blend luxury with comfort.
            </p>
            <p className="aboutus-paragraph">
              We present <span className="gradient-accent">Residential</span> and <span className="gradient-accent">Commercial Spaces</span> with modern architecture that captivates and inspires. Our team also provides <span className="gradient-accent">Investment Opportunities</span> and <span className="gradient-accent">Property Management</span> services designed to deliver exceptional value and seamless experiences for our clients. From consultation to closing, we ensure every transaction exceeds expectations.
            </p>
          </motion.div>

          <motion.div 
            className="aboutus-cta"
            variants={itemVariants}
          >
            <motion.button 
              className="circle-btn"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="btn-line"></span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
