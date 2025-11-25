import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../css/FAQ.css';
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    
    const { ref: intersectionRef, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What types of properties does MMD specialize in?",
            answer: "MMD specializes in Residential Properties, Commercial Spaces, Luxury Estates, and Investment Properties. We provide comprehensive real estate solutions tailored to meet your specific needs, whether you're buying, selling, or investing."
        },
        {
            question: "How long does it take to buy or sell a property?",
            answer: "Transaction timelines vary based on market conditions and property type. Typically, residential purchases take 30-60 days, commercial transactions 60-90 days, and luxury properties 90-120 days. We provide detailed timelines during consultation and keep you updated throughout the process."
        },
        {
            question: "Do you provide property management services?",
            answer: "Yes! We offer comprehensive property management including tenant screening, rent collection, maintenance coordination, and financial reporting. Our dedicated team ensures your investment properties are well-maintained and generating optimal returns."
        },
        {
            question: "What areas do you serve?",
            answer: "We serve premium locations across major metropolitan areas including Beverly Hills, Manhattan, Dubai Marina, and exclusive coastal communities. Our extensive network allows us to find properties in sought-after neighborhoods that match your lifestyle and investment goals."
        },
        {
            question: "How do you determine property valuations?",
            answer: "We use comprehensive market analysis including recent comparable sales, current market trends, property condition assessments, and location premium factors. Our valuations comply with industry standards and are backed by detailed reports to ensure accurate pricing."
        },
        {
            question: "What are your fees and commission structure?",
            answer: "We offer transparent pricing with competitive commission rates. Our fees vary based on property type, value, and services required. Contact us for a detailed consultation where we'll provide a customized fee structure tailored to your specific transaction."
        },
        {
            question: "Can you help with property financing and legal matters?",
            answer: "Absolutely! We work with trusted mortgage brokers, financial advisors, and real estate attorneys. We can connect you with the right professionals to handle financing, legal documentation, title insurance, and ensure a smooth transaction from start to finish."
        },
        {
            question: "How do I get started with MMD?",
            answer: "Getting started is easy! Simply reach out through our contact form, email, or phone. We'll schedule a complimentary consultation to understand your property goals, discuss available options, and create a personalized strategy. From there, we'll guide you through every step of your real estate journey."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.03,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const headerVariants = {
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

    return (
        <section className="faq-section">
            <motion.div 
                className="faq-container"
                ref={intersectionRef}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {/* Header */}
                <motion.div 
                    className="faq-header"
                    variants={headerVariants}
                >
                    <motion.div 
                        className="faq-icon-wrapper"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <FaQuestionCircle className="faq-main-icon" />
                    </motion.div>
                    <h2 className="faq-title">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="faq-subtitle">
                        Find answers to common questions about our services, processes, and how we can help transform your business.
                    </p>
                </motion.div>

                {/* FAQ List */}
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={index} 
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            variants={itemVariants}
                        >
                            <button 
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span className="question-text">{faq.question}</span>
                                <motion.span 
                                    className="faq-icon"
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                </motion.span>
                            </button>
                            <motion.div 
                                className={`faq-answer ${activeIndex === index ? 'show' : ''}`}
                                initial={false}
                                animate={{
                                    height: activeIndex === index ? "auto" : 0,
                                    opacity: activeIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <p>{faq.answer}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div 
                    className="faq-cta"
                    variants={itemVariants}
                >
                    <p className="faq-cta-text">Still have questions?</p>
                    <motion.button 
                        className="faq-cta-button"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Contact Us
                        <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Background Decorations */}
            <div className="faq-decoration faq-decoration-1"></div>
            <div className="faq-decoration faq-decoration-2"></div>
        </section>
    );
};

export default FAQ;
