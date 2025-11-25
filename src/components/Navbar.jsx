import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';
import logo from '../assets/mm-logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        setOpenDropdown(null);
    };

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    // Only 3 items shown in navbar on larger screens
    const navbarItems = [
        { name: 'HOME', path: '/' },
        { name: 'RESIDENTIAL', path: '/residential' },
        { name: 'COMMERCIAL', path: '/commercial' },
    ];

    // All menu items for sidebar
    const menuItems = [
        { name: 'HOME', path: '/' },
        { name: 'RESIDENTIAL', path: '/residential' },
        { name: 'COMMERCIAL', path: '/commercial' },
        { 
            name: 'ABOUT', 
            path: '/about',
            submenu: [
                { name: 'Our Story', path: '/about/story' },
                { name: 'Team', path: '/about/team' },
                { name: 'Vision & Mission', path: '/about/vision' }
            ]
        },
        { 
            name: 'INVESTOR', 
            path: '/investor',
            submenu: [
                { name: 'Opportunities', path: '/investor/opportunities' },
                { name: 'Portfolio', path: '/investor/portfolio' }
            ]
        },
        { name: 'NRI-CORNER', path: '/nri-corner' },
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

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    {/* Logo */}
                    <div className="navbar-logo">
                        <img src={logo} alt="MM Developers" />
                    </div>

                    {/* Desktop Menu - Only 3 items */}
                    <ul className="navbar-menu">
                        {navbarItems.map((item, index) => (
                            <li key={index} className="navbar-item">
                                <a href={item.path} className="navbar-link">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Hamburger Button */}
                    <button 
                        className={`hamburger ${isSidebarOpen ? 'active' : ''}`}
                        onClick={toggleSidebar}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
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
                <nav className="sidebar-nav">
                    {sidebarItems.map((item, index) => (
                        <div key={index} className="sidebar-item">
                            <a 
                                href={item.path} 
                                className="sidebar-link"
                                onClick={(e) => {
                                    if (item.submenu) {
                                        e.preventDefault();
                                        toggleDropdown(item.name);
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
                            {item.submenu && (
                                <div className={`sidebar-submenu ${openDropdown === item.name ? 'open' : ''}`}>
                                    {item.submenu.map((subitem, subindex) => (
                                        <a key={subindex} href={subitem.path}>
                                            {subitem.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Navbar;
