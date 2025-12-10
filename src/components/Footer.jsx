import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Footer.css';
import { 
    FaLinkedinIn, 
    FaTwitter, 
    FaInstagram, 
    FaFacebookF,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaWhatsapp
} from 'react-icons/fa';
import logoIcon from '../assets/mm-logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();

    // Scroll to section handler
    const scrollToSection = (path, sectionId) => {
        if (window.location.pathname === path) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            navigate(path);
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    };

    return (
        <footer className="footer-section">
            <div className="footer-container">
                {/* Top Section */}
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src={logoIcon} alt="MM Developers Logo" className="footer-logo-icon" />
                        </div>
                        <p className="footer-tagline">
                            Building dreams, creating homes. MM Developers is committed to redefining luxury in real estate with trust, comfort, and excellence at the heart of everything we do.
                        </p>
                        <div className="footer-social">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h3 className="footer-heading">Pages</h3>
                            <ul className="footer-list">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/residential">Residential</Link></li>
                                <li><Link to="/commercial">Commercial</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3 className="footer-heading">Quick Links</h3>
                            <ul className="footer-list">
                                <li>
                                    <button 
                                        className="footer-link-btn"
                                        onClick={() => scrollToSection('/', 'faq-section')}
                                    >
                                        FAQ
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        className="footer-link-btn"
                                        onClick={() => scrollToSection('/', 'testimonials-section')}
                                    >
                                        Testimonials
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        className="footer-link-btn"
                                        onClick={() => scrollToSection('/about', 'signature-projects-section')}
                                    >
                                        Our Projects
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3 className="footer-heading">Contact Us</h3>
                            <ul className="footer-contact">
                                <li>
                                    <FaEnvelope className="contact-icon" />
                                    <a href="mailto:info@mmdevelopers.in">info@mmdevelopers.in</a>
                                </li>
                                <li>
                                    <FaPhone className="contact-icon" />
                                    <a href="tel:+911234567890">+91 12345 67890</a>
                                </li>
                                <li>
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <span>MM Developers, Sector 62, Noida, UP 201301</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="footer-divider"></div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} MM Developers. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <Link to="/about">Privacy Policy</Link>
                        <span className="legal-divider">•</span>
                        <Link to="/about">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="footer-decoration footer-decoration-1"></div>
            <div className="footer-decoration footer-decoration-2"></div>
        </footer>
    );
};

export default Footer;
