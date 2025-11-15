import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/Testimonials.css';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef(null);
    
    const { ref: intersectionRef, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Property Investor',
            image: 'https://i.pravatar.cc/150?img=1',
            rating: 5,
            text: 'MMD helped us find the perfect investment property. Their market knowledge and professional approach made the entire process seamless. We\'ve already seen a 25% ROI in just one year!',
            project: 'Investment Property'
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Business Owner',
            image: 'https://i.pravatar.cc/150?img=13',
            rating: 5,
            text: 'Finding our dream commercial space was effortless with MMD. They understood our requirements perfectly and delivered beyond expectations. The location has been instrumental to our business growth.',
            project: 'Commercial Property'
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Homeowner',
            image: 'https://i.pravatar.cc/150?img=5',
            rating: 5,
            text: 'Working with MMD was a game-changer for our family. They found us the perfect home in our dream neighborhood within our budget. Professional, responsive, and truly caring!',
            project: 'Residential Purchase'
        },
        {
            id: 4,
            name: 'David Williams',
            role: 'Real Estate Developer',
            image: 'https://i.pravatar.cc/150?img=12',
            rating: 5,
            text: 'MMD\'s expertise in luxury properties is unmatched. They helped us sell our premium developments at record prices. Their marketing strategy and client network are exceptional!',
            project: 'Luxury Development'
        },
        {
            id: 5,
            name: 'Lisa Anderson',
            role: 'First-time Buyer',
            image: 'https://i.pravatar.cc/150?img=9',
            rating: 5,
            text: 'As a first-time buyer, I was nervous about the process. MMD guided me through every step with patience and expertise. I found my perfect home and couldn\'t be happier!',
            project: 'First Home Purchase'
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
    };

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

    const cardVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }
        },
        exit: (direction) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }
        })
    };

    return (
        <section className="testimonials-section" ref={sectionRef}>
            <motion.div 
                className="testimonials-container"
                ref={intersectionRef}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {/* Header */}
                <motion.div 
                    className="testimonials-header"
                    variants={itemVariants}
                >
                    <h2 className="testimonials-title">
                        What Our <span className="gradient-text">Clients Say</span>
                    </h2>
                    <p className="testimonials-subtitle">
                        Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
                    </p>
                </motion.div>

                {/* Testimonial Slider */}
                <motion.div 
                    className="testimonial-slider"
                    variants={itemVariants}
                >
                    <motion.button 
                        className="slider-btn prev-btn" 
                        onClick={prevTestimonial}
                        aria-label="Previous testimonial"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaChevronLeft />
                    </motion.button>

                    <div className="testimonial-content">
                        <div className="quote-icon">
                            <FaQuoteLeft />
                        </div>
                        
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={currentIndex}
                                className="testimonial-card"
                                variants={cardVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                            >
                            <div className="client-info">
                                <img 
                                    src={testimonials[currentIndex].image} 
                                    alt={testimonials[currentIndex].name}
                                    className="client-image"
                                />
                                <div className="client-details">
                                    <h3 className="client-name">{testimonials[currentIndex].name}</h3>
                                    <p className="client-role">{testimonials[currentIndex].role}</p>
                                    <div className="rating">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, index) => (
                                            <FaStar key={index} className="star-icon" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="testimonial-text">
                                "{testimonials[currentIndex].text}"
                            </p>

                            <div className="project-badge">
                                Project: {testimonials[currentIndex].project}
                            </div>
                        </motion.div>
                        </AnimatePresence>
                    </div>

                    <motion.button 
                        className="slider-btn next-btn" 
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaChevronRight />
                    </motion.button>
                </motion.div>

                {/* Dots Navigation */}
                <motion.div 
                    className="slider-dots"
                    variants={itemVariants}
                >
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToTestimonial(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </motion.div>
            </motion.div>

            {/* Background Decorations */}
            <div className="testimonials-decoration testimonials-decoration-1"></div>
            <div className="testimonials-decoration testimonials-decoration-2"></div>
        </section>
    );
};

export default Testimonials;
