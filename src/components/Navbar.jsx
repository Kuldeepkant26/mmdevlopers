import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';
import logoIcon from '../assets/ourlogo.png';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        if (!isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsVisible(true);
    }, [location.pathname]);

    useEffect(() => {
        let lastScroll = 0;
        
        const controlNavbar = () => {
            // Check for scroll on both window and .home-page container
            const homePageElement = document.querySelector('.home-page');
            const currentScrollY = homePageElement ? homePageElement.scrollTop : window.scrollY;
            
            if (currentScrollY < 10) {
                // Always show at the top
                setIsVisible(true);
            } else if (currentScrollY > lastScroll && currentScrollY > 80) {
                // Scrolling down & past 80px - hide navbar
                setIsVisible(false);
            } else if (currentScrollY < lastScroll) {
                // Scrolling up - show navbar
                setIsVisible(true);
            }
            
            lastScroll = currentScrollY;
        };

        // Add scroll listener to both window and .home-page container
        const homePageElement = document.querySelector('.home-page');
        
        if (homePageElement) {
            homePageElement.addEventListener('scroll', controlNavbar, { passive: true });
        }
        window.addEventListener('scroll', controlNavbar, { passive: true });
        
        return () => {
            if (homePageElement) {
                homePageElement.removeEventListener('scroll', controlNavbar);
            }
            window.removeEventListener('scroll', controlNavbar);
        };
    }, []);

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <nav className={`navbar ${!isVisible ? 'navbar-hidden' : ''}`}>
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <img src={logoIcon} alt="MM Developers" className="logo-icon" />
                    <div className="logo-text">
                        <span className="logo-company">MM Developers</span>
                    </div>
                </Link>

                {/* Desktop Navigation - Center */}
                <div className="navbar-menu">
                    <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>Home</a>
                    <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>About</a>
                    <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>Properties</a>
                    <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>Services</a>
                </div>

                {/* Desktop Contact Button - Right */}
                <button className="contact-btn" onClick={(e) => e.preventDefault()}>Contact</button>

                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-toggle" onClick={toggleSidebar} aria-label="Toggle menu">
                    <span className={`hamburger ${isSidebarOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>

            {/* Mobile Sidebar */}
            {isSidebarOpen && (
                <div className="sidebar-overlay" onClick={closeSidebar}></div>
            )}
            <div className={`mobile-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <img src={logoIcon} alt="MM Developers" className="sidebar-logo-icon" />
                        <div className="logo-text">
                            <span className="logo-company">MM Developers</span>
                        </div>
                    </div>
                    <button className="sidebar-close" onClick={closeSidebar} aria-label="Close menu">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <nav className="sidebar-nav">
                    <a href="#" className="sidebar-link" onClick={(e) => { e.preventDefault(); closeSidebar(); }}>Home</a>
                    <a href="#" className="sidebar-link" onClick={(e) => { e.preventDefault(); closeSidebar(); }}>About</a>
                    <a href="#" className="sidebar-link" onClick={(e) => { e.preventDefault(); closeSidebar(); }}>Properties</a>
                    <a href="#" className="sidebar-link" onClick={(e) => { e.preventDefault(); closeSidebar(); }}>Services</a>
                </nav>
                
                <div className="sidebar-footer">
                    <button className="sidebar-contact-btn" onClick={(e) => e.preventDefault()}>
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
