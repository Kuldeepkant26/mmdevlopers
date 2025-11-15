import React from 'react';
import '../css/Footer.css';
import { 
    FaLinkedinIn, 
    FaTwitter, 
    FaInstagram, 
    FaFacebookF,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt
} from 'react-icons/fa';
import logoIcon from '../assets/ourlogo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="footer-container">
                {/* Top Section */}
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src={logoIcon} alt="MMD Logo" className="footer-logo-icon" />
                            <span className="logo-text-footer">MMD</span>
                        </div>
                        <p className="footer-tagline">
                            Crafting premium digital experiences with innovation and excellence. We bring your vision to life with cutting-edge solutions.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="#" className="social-link" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h3 className="footer-heading">Services</h3>
                            <ul className="footer-list">
                                <li><a href="#service1">Service 1</a></li>
                                <li><a href="#service2">Service 2</a></li>
                                <li><a href="#service3">Service 3</a></li>
                                <li><a href="#service4">Service 4</a></li>
                                <li><a href="#consulting">Consulting</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3 className="footer-heading">Company</h3>
                            <ul className="footer-list">
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#careers">Careers</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3 className="footer-heading">Contact Us</h3>
                            <ul className="footer-contact">
                                <li>
                                    <FaEnvelope className="contact-icon" />
                                    <a href="mailto:info@mmd.com">info@mmd.com</a>
                                </li>
                                <li>
                                    <FaPhone className="contact-icon" />
                                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                                </li>
                                <li>
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <span>123 Business Street, City, State 12345</span>
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
                        © {currentYear} MMD. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <a href="#privacy">Privacy Policy</a>
                        <span className="legal-divider">•</span>
                        <a href="#terms">Terms of Service</a>
                        <span className="legal-divider">•</span>
                        <a href="#cookies">Cookie Policy</a>
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
