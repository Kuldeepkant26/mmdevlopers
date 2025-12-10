import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../assets/mm-logo.png';
import { FaQuestionCircle, FaComments, FaLightbulb, FaBuilding, FaPhone } from 'react-icons/fa';

const THEME_STORAGE_KEY = 'mmdev-theme';

const SunIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="5" strokeWidth="1.5" stroke="currentColor" fill="none" />
        <line x1="12" y1="1.5" x2="12" y2="4.5" strokeWidth="1.5" stroke="currentColor" />
        <line x1="12" y1="19.5" x2="12" y2="22.5" strokeWidth="1.5" stroke="currentColor" />
        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" strokeWidth="1.5" stroke="currentColor" />
        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" strokeWidth="1.5" stroke="currentColor" />
        <line x1="1.5" y1="12" x2="4.5" y2="12" strokeWidth="1.5" stroke="currentColor" />
        <line x1="19.5" y1="12" x2="22.5" y2="12" strokeWidth="1.5" stroke="currentColor" />
        <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" strokeWidth="1.5" stroke="currentColor" />
        <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" strokeWidth="1.5" stroke="currentColor" />
    </svg>
);

const MoonIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
            d="M21 14.5A8.5 8.5 0 0 1 10.5 4 7.5 7.5 0 1 0 21 14.5z"
            strokeWidth="1.5"
            fill="none"
            stroke="currentColor"
        />
    </svg>
);

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [showMaintenancePopup, setShowMaintenancePopup] = useState(false);
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined') return 'light';
        const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
        if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    });
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Check if we're on mobile (where scroll stack is disabled)
        const isMobile = window.innerWidth <= 768;
        
        const homeScrollElement = document.querySelector('.home-page');
        const residentialScrollElement = document.querySelector('.interior-design-page');
        
        // On mobile, always use window scroll; on desktop, use container scroll for home/residential
        let scrollElement = window;
        if (!isMobile) {
            if (location.pathname === '/' && homeScrollElement) {
                scrollElement = homeScrollElement;
            } else if (location.pathname === '/residential' && residentialScrollElement) {
                scrollElement = residentialScrollElement;
            }
        }
        
        const getPosition = () => (scrollElement === window ? window.scrollY : scrollElement.scrollTop);
        let animationFrame = null;

        const updateState = () => {
            animationFrame = null;
            setIsScrolled(getPosition() > 20);
        };

        const handleScroll = () => {
            if (animationFrame) return;
            animationFrame = window.requestAnimationFrame(updateState);
        };

        handleScroll();
        scrollElement.addEventListener('scroll', handleScroll, { passive: true });
        
        // Also listen to window scroll as fallback
        if (scrollElement !== window) {
            window.addEventListener('scroll', handleScroll, { passive: true });
        }
        
        return () => {
            scrollElement.removeEventListener('scroll', handleScroll);
            if (scrollElement !== window) {
                window.removeEventListener('scroll', handleScroll);
            }
            if (animationFrame) {
                window.cancelAnimationFrame(animationFrame);
            }
        };
    }, [location.pathname]);

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);
        window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    }, [theme]);

    useEffect(() => {
        if (!window.matchMedia) return undefined;
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handlePreferenceChange = (event) => {
            const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
            if (stored === 'light' || stored === 'dark') return;
            setTheme(event.matches ? 'dark' : 'light');
        };

        mediaQuery.addEventListener('change', handlePreferenceChange);
        return () => mediaQuery.removeEventListener('change', handlePreferenceChange);
    }, []);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        setOpenDropdown(null);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
        setOpenDropdown(null);
    };

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const handleNavClick = (e, itemName) => {
        if (itemName !== 'HOME' && itemName !== 'RESIDENTIAL') {
            e.preventDefault();
            setShowMaintenancePopup(true);
            closeSidebar();
        }
    };

    const closeMaintenancePopup = () => {
        setShowMaintenancePopup(false);
    };

    // Scroll to section handler - works across pages
    const scrollToSection = (path, sectionId) => {
        closeSidebar();
        
        if (location.pathname === path) {
            // Already on the page, just scroll
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            // Navigate to the page first, then scroll
            navigate(path);
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    };

    // Only 4 items shown in navbar on larger screens
    const navbarItems = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/about' },
        { name: 'RESIDENTIAL', path: '/residential' },
        { name: 'COMMERCIAL', path: '/commercial' },
    ];

    const clientRouteItems = new Set(['HOME', 'ABOUT', 'RESIDENTIAL', 'COMMERCIAL']);

    // All menu items for sidebar
    const menuItems = [
        { name: 'HOME', path: '/' },
        { name: 'RESIDENTIAL', path: '/residential' },
        { name: 'COMMERCIAL', path: '/commercial' },
        { name: 'ABOUT', path: '/about' },
    ];

    const sidebarItems = [
        ...menuItems,
        { 
            name: 'PLAYBOOK', 
            path: '/playbook',
            submenu: [
                { name: 'Guides', path: '/playbook/guides' },
                { name: 'Resources', path: '/playbook/resources' }
            ]
        },
        { name: 'NEWS & MEDIA', path: '/news' },
        { name: 'BLOGS & ARTICLES', path: '/blogs' },
        { name: 'CAREER', path: '/career' },
        { name: 'CONTACT US', path: '/contact' },
    ];

    // Quick links for sidebar - scrolls to sections
    const quickLinks = [
        { name: 'FAQ', icon: FaQuestionCircle, path: '/', sectionId: 'faq-section' },
        { name: 'Testimonials', icon: FaComments, path: '/', sectionId: 'testimonials-section' },
        { name: 'Our Vision', icon: FaLightbulb, path: '/about', sectionId: 'immersive-vision-section' },
        { name: 'Our Projects', icon: FaBuilding, path: '/about', sectionId: 'signature-projects-section' },
        { name: 'Contact Us', icon: FaPhone, path: '/', sectionId: 'cta-section' },
    ];

    return (
        <>
            <nav 
                className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            >
                <div className="navbar-container">
                    {/* Logo */}
                    <div className="navbar-logo">
                        <img src={logo} alt="MM Developers" />
                    </div>

                    {/* Desktop Menu - Only 3 items */}
                    <ul className="navbar-menu">
                        {navbarItems.map((item, index) => (
                            <li key={index} className="navbar-item">
                                {clientRouteItems.has(item.name) ? (
                                    <Link
                                        to={item.path}
                                        className="navbar-link"
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <a 
                                        href={item.path} 
                                        className="navbar-link"
                                        onClick={(e) => handleNavClick(e, item.name)}
                                    >
                                        {item.name}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="navbar-actions">
                        <button
                            className={`theme-toggle ${theme}`}
                            onClick={toggleTheme}
                            aria-label="Toggle color theme"
                            type="button"
                        >
                            <span className="theme-toggle-icon theme-toggle-icon--sun">
                                <SunIcon />
                            </span>
                            <span className="theme-toggle-track">
                                <span className="theme-toggle-thumb" />
                            </span>
                            <span className="theme-toggle-icon theme-toggle-icon--moon">
                                <MoonIcon />
                            </span>
                        </button>

                        {/* Hamburger Button */}
                        <button 
                            className={`hamburger ${isSidebarOpen ? 'active' : ''}`}
                            onClick={toggleSidebar}
                            aria-label="Toggle menu"
                            type="button"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Sidebar Overlay */}
            <div 
                className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
                onClick={toggleSidebar}
            ></div>

            {/* Sidebar */}
            <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
                <div className="sidebar-header">
                    <img src={logo} alt="MM Developers" className="sidebar-logo" />
                    <button className="sidebar-close" onClick={toggleSidebar}>
                        ✕
                    </button>
                </div>
                
                {/* Scrollable Content */}
                <div className="sidebar-content">
                    {/* Main Navigation */}
                    <nav className="sidebar-nav">
                        {menuItems.map((item, index) => (
                            <div key={index} className="sidebar-item">
                                {clientRouteItems.has(item.name) ? (
                                    <Link 
                                        to={item.path} 
                                    className="sidebar-link"
                                    onClick={closeSidebar}
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <a 
                                    href={item.path} 
                                    className="sidebar-link"
                                    onClick={(e) => {
                                        if (item.submenu) {
                                            e.preventDefault();
                                            toggleDropdown(item.name);
                                        } else {
                                            handleNavClick(e, item.name);
                                        }
                                    }}
                                >
                                    {item.name}
                                    {item.submenu && (
                                        <span className={`sidebar-arrow ${openDropdown === item.name ? 'open' : ''}`}>
                                            ▼
                                        </span>
                                    )}
                                </a>
                            )}
                            {item.submenu && (
                                <div className={`sidebar-submenu ${openDropdown === item.name ? 'open' : ''}`}>
                                    {item.submenu.map((subitem, subindex) => (
                                        <a 
                                            key={subindex} 
                                            href={subitem.path}
                                            onClick={(e) => handleNavClick(e, subitem.name)}
                                        >
                                            {subitem.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Quick Links Section */}
                <div className="sidebar-quicklinks">
                    <h4 className="sidebar-quicklinks-title">Quick Links</h4>
                    {quickLinks.map((link, index) => {
                        const IconComponent = link.icon;
                        return (
                            <button
                                key={index}
                                className="sidebar-quicklink"
                                onClick={() => scrollToSection(link.path, link.sectionId)}
                            >
                                <IconComponent className="sidebar-quicklink-icon" />
                                <span>{link.name}</span>
                            </button>
                        );
                    })}
                </div>
                </div>
            </aside>

            {/* Maintenance Popup */}
            {showMaintenancePopup && (
                <div className="maintenance-overlay" onClick={closeMaintenancePopup}>
                    <div className="maintenance-popup" onClick={(e) => e.stopPropagation()}>
                        <div className="maintenance-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h2>Under Maintenance</h2>
                        <p>This page is currently under construction. We're working hard to bring you an amazing experience!</p>
                        <button className="maintenance-close-btn" onClick={closeMaintenancePopup}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
