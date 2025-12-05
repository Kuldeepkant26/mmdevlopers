import React, { useState, useEffect } from 'react';
import '../css/Residentials.css';
import Footer from '../components/Footer';

// Import images from assets
import heroExterior1 from '../assets/homehero2.jpg';
import heroExterior2 from '../assets/homehero3.jpg';
import heroExterior3 from '../assets/building4.avif';
import heroExterior4 from '../assets/building5.jpg';
import heroExterior5 from '../assets/building6.jpg';
import interiorLobby from '../assets/buildinginterior.jpg';
import interior3 from '../assets/interior3.jpeg';
import interior4 from '../assets/interior4.jpeg';
import interior5 from '../assets/interior5.jpeg';
import interior6 from '../assets/interior6.jpeg';
import interior13 from '../assets/interior13.jpeg';

const Residentials = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentHeroImage, setCurrentHeroImage] = useState(0);
    const [currentPhilosophyImage, setCurrentPhilosophyImage] = useState(0);

    // Hero carousel images
    const heroImages = [heroExterior1, heroExterior2, heroExterior3, heroExterior4, heroExterior5];
    
    // Philosophy section carousel images
    const philosophyImages = [interiorLobby, interior3, interior4, interior5, interior6];

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Hero background carousel
    useEffect(() => {
        const heroInterval = setInterval(() => {
            setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(heroInterval);
    }, [heroImages.length]);

    // Philosophy image carousel
    useEffect(() => {
        const philosophyInterval = setInterval(() => {
            setCurrentPhilosophyImage((prev) => (prev + 1) % philosophyImages.length);
        }, 4000);
        return () => clearInterval(philosophyInterval);
    }, [philosophyImages.length]);

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'township', name: 'Townships' },
        { id: 'premium', name: 'Premium Apartments' },
        { id: 'mid-segment', name: 'Mid-Segment' },
        { id: 'villa', name: 'Villas' },
        { id: 'waterfront', name: 'Waterfront' },
        { id: 'plotted', name: 'Plotted' }
    ];

    // Featured Designs Data
    const featuredDesigns = [
        {
            id: 1,
            title: 'Skyline Residences – Sector 65',
            category: 'High-Rise',
            image: heroExterior3,
            description: 'Twin glass towers with 3 & 4 BHK residences, a rooftop sky lounge, and a curated retail plaza at the podium level.',
            features: [
                '30-storey towers with double-height lobbies',
                'Rooftop infinity deck and co-working lounge',
                'EV-ready parking with fast charging bays',
                'IGBC Gold pre-certification in progress'
            ],
            stats: {
                area: '1.2M sq ft',
                year: '2025',
                location: 'Gurugram, NCR'
            }
        },
        {
            id: 2,
            title: 'Lakeview Villas – Kokapet',
            category: 'Villas',
            image: interior13,
            description: 'Limited-edition 5,000 sq ft villas wrapped around a central lake park with jogging boards and clubhouse suites.',
            features: [
                'Five-bedroom layouts with private decks',
                'Smart home automation and solar rooftops',
                'Community hydroponic farm & pet park',
                '24x7 estate management desk on-site'
            ],
            stats: {
                area: '240 Acres',
                year: '2024',
                location: 'Hyderabad, Telangana'
            }
        },
        {
            id: 3,
            title: 'Midtown Courtyard Homes',
            category: 'Mid-Segment',
            image: heroExterior4,
            description: 'Efficient 2 & 3 BHK residences planned around a landscaped central court with daycare, creche, and work pods.',
            features: [
                'Passive ventilation and low-E glazing',
                'Smart lockers for e-commerce deliveries',
                'Clubhouse with work-from-anywhere suites',
                'Modular kitchen and wardrobe packages'
            ],
            stats: {
                area: '780K sq ft',
                year: '2023',
                location: 'Pune, Maharashtra'
            }
        },
        {
            id: 4,
            title: 'Harborfront Residences',
            category: 'Waterfront',
            image: heroExterior5,
            description: 'Premium seafront apartments with stepped terraces, concierge services, and curated F&B at ground level.',
            features: [
                'Three-sided open residences for sea breeze',
                'Wellness-focused clubhouse & lap pool',
                'Residents-only business lounge',
                'Dedicated facility partner for upkeep'
            ],
            stats: {
                area: '950K sq ft',
                year: '2026',
                location: 'Kochi, Kerala'
            }
        }
    ];

    const projects = [
        {
            id: 1,
            title: 'Urban Ridge Phase II',
            category: 'township',
            image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
            description: '60-acre mixed housing with neighborhood retail, clinics, and a primary school parcel.',
            location: 'Bengaluru, Karnataka',
            area: '60 Acres'
        },
        {
            id: 2,
            title: 'Verve Residences',
            category: 'premium',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            description: 'High-rise homes with managed rentals designed for young professionals and expats.',
            location: 'Mumbai, Maharashtra',
            area: '550K sq ft'
        },
        {
            id: 3,
            title: 'Serenity Villas',
            category: 'villa',
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
            description: 'Garden villas clustered around a private clubhouse and organic farm plots.',
            location: 'Ahmedabad, Gujarat',
            area: '3,800 sq ft'
        },
        {
            id: 4,
            title: 'Harbor Edge Residences',
            category: 'waterfront',
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
            description: 'Boardwalk apartments with boutique retail and weekend markets curated for residents.',
            location: 'Goa, India',
            area: '420K sq ft'
        },
        {
            id: 5,
            title: 'Cedar Court Homes',
            category: 'mid-segment',
            image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
            description: 'Value housing with efficient 2 BHK layouts, solar rooftops, and low CAM charges.',
            location: 'Chandigarh, Punjab',
            area: '310K sq ft'
        },
        {
            id: 6,
            title: 'Hillside Plots',
            category: 'plotted',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
            description: 'Ready-to-build plots with shared club amenities, STPs, and 12 m wide internal roads.',
            location: 'Dehradun, Uttarakhand',
            area: '120 Plots'
        }
    ];

    const services = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="14" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="3" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="14" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.5 6.5h0M17.5 6.5h0M6.5 17.5h0M17.5 17.5h0" strokeLinecap="round"/>
                </svg>
            ),
            title: 'Township\nPlanning',
            description: 'Macro and micro zoning that balances towers, villas, schools, and open spaces'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2l9 4.5v9L12 20l-9-4.5v-9L12 2z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11.5V20M12 11.5L3 6.5M12 11.5L21 6.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="11.5" r="1.5" fill="currentColor"/>
                </svg>
            ),
            title: 'Product\nStrategy',
            description: 'Market analysis, unit mixes, and amenity positioning tailored to local demand'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 3h6l6 6v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9l6-6z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 3v6h6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 13h8M8 17h5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: 'Project\nDelivery',
            description: 'Engineering oversight, quality audits, and digital progress tracking'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="8" width="18" height="12" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12h18M7 8V5a1 1 0 011-1h8a1 1 0 011 1v3" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="8" cy="16" r="0.5" fill="currentColor"/>
                    <circle cx="16" cy="16" r="0.5" fill="currentColor"/>
                </svg>
            ),
            title: 'Resident\nServices',
            description: 'Handover concierge, community activation, and long-term asset care'
        }
    ];

    const filteredProjects = activeCategory === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="interior-design-page">
            {/* Section 1 - Hero Section */}
            <div className="interior-section interior-section-1" style={{ zIndex: 1 }}>
                <div className={`interior-design-container ${isLoaded ? 'loaded' : ''}`}>
                    {/* Hero Section */}
                    <section className="interior-hero">
                        {/* Background Image Carousel */}
                        <div className="interior-hero-backgrounds">
                            {heroImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`interior-hero-bg ${index === currentHeroImage ? 'active' : ''}`}
                                    style={{ backgroundImage: `url(${image})` }}
                                ></div>
                            ))}
                        </div>
                        <div className="interior-hero-overlay"></div>
                        <div className="interior-hero-content">
                            <h1 className="interior-hero-title">
                                <span className="interior-hero-subtitle">Signature</span>
                                Residential Living
                            </h1>
                            <p className="interior-hero-description">
                                Boutique residences, villas, and gated communities curated by MM Developers for families seeking modern comfort and enduring value.
                            </p>
                            <div className="interior-hero-buttons">
                                <a href="#portfolio" className="interior-hero-btn primary">
                                    Explore Residences
                                </a>
                            </div>
                        </div>
                        <div className="interior-hero-scroll">
                            <div className="scroll-indicator">
                                <span></span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Section 2 - Content */}
            <div className="interior-section interior-section-2" style={{ zIndex: 2 }}>
                <div className={`interior-design-container ${isLoaded ? 'loaded' : ''}`}>

                {/* Immersive Showcase Section */}
                <section className="residential-showcase-immersive">
                    <div className="showcase-immersive-container">
                        {/* Animated Background Elements */}
                        <div className="showcase-bg-elements">
                            <div className="showcase-orb showcase-orb-1"></div>
                            <div className="showcase-orb showcase-orb-2"></div>
                            <div className="showcase-orb showcase-orb-3"></div>
                        </div>

                        {/* Main Content Grid */}
                        <div className="showcase-grid-wrapper">
                            {/* Left Side - Animated Numbers */}
                            <div className="showcase-metrics-column">
                                <div className="showcase-metric-card" data-index="0">
                                    <div className="metric-icon-wrap">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="metric-value">12,000+</div>
                                    <div className="metric-label">Happy Families</div>
                                    <div className="metric-glow"></div>
                                </div>

                                <div className="showcase-metric-card" data-index="1">
                                    <div className="metric-icon-wrap">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="metric-value">98%</div>
                                    <div className="metric-label">On-Time Delivery</div>
                                    <div className="metric-glow"></div>
                                </div>

                                <div className="showcase-metric-card" data-index="2">
                                    <div className="metric-icon-wrap">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="metric-value">8.2M</div>
                                    <div className="metric-label">Sq. Ft. Developed</div>
                                    <div className="metric-glow"></div>
                                </div>
                            </div>

                            {/* Center - Hero Content */}
                            <div className="showcase-hero-center">
                                <div className="showcase-label-pill">
                                    <span className="pill-dot"></span>
                                    Building Tomorrow's Communities
                                </div>
                                <h2 className="showcase-main-title">
                                    Where Vision Meets
                                    <span className="title-highlight"> Reality</span>
                                </h2>
                                <p className="showcase-description">
                                    We don't just develop properties—we craft ecosystems where architecture, sustainability, and human connection converge to create living experiences that transcend expectations.
                                </p>
                                
                                {/* Feature Tags */}
                                <div className="showcase-feature-tags">
                                    <div className="feature-tag">
                                        <div className="tag-icon">✓</div>
                                        <span>RERA Certified</span>
                                    </div>
                                    <div className="feature-tag">
                                        <div className="tag-icon">✓</div>
                                        <span>Green Building</span>
                                    </div>
                                    <div className="feature-tag">
                                        <div className="tag-icon">✓</div>
                                        <span>Smart Homes</span>
                                    </div>
                                    <div className="feature-tag">
                                        <div className="tag-icon">✓</div>
                                        <span>25 Years Legacy</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Visual Elements */}
                            <div className="showcase-visual-column">
                                <div className="visual-sphere-container">
                                    <div className="visual-sphere">
                                        <div className="sphere-ring ring-1"></div>
                                        <div className="sphere-ring ring-2"></div>
                                        <div className="sphere-ring ring-3"></div>
                                        <div className="sphere-core"></div>
                                    </div>
                                    <div className="visual-particles">
                                        {[...Array(12)].map((_, i) => (
                                            <div key={i} className="particle" data-particle={i}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Marquee */}
                        <div className="showcase-marquee">
                            <div className="marquee-content">
                                <span>Sustainable Living</span>
                                <span className="marquee-dot">•</span>
                                <span>Premium Amenities</span>
                                <span className="marquee-dot">•</span>
                                <span>Strategic Locations</span>
                                <span className="marquee-dot">•</span>
                                <span>Future-Ready Designs</span>
                                <span className="marquee-dot">•</span>
                                <span>Community First</span>
                                <span className="marquee-dot">•</span>
                                <span>Sustainable Living</span>
                                <span className="marquee-dot">•</span>
                                <span>Premium Amenities</span>
                                <span className="marquee-dot">•</span>
                                <span>Strategic Locations</span>
                                <span className="marquee-dot">•</span>
                                <span>Future-Ready Designs</span>
                                <span className="marquee-dot">•</span>
                                <span>Community First</span>
                                <span className="marquee-dot">•</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="interior-philosophy">
                    <div className="interior-philosophy-container">
                        <div className="interior-philosophy-content">
                            <span className="interior-section-label">Our Philosophy</span>
                            <h2 className="interior-section-title">
                                Crafting Spaces That Inspire
                            </h2>
                            <p className="interior-philosophy-text">
                                At MM Developers we see residential real estate as neighborhood building, not unit selling. Every tower, villa enclave, and plotted community is planned to balance green cover, social infrastructure, and thoughtful amenities so families thrive for generations.
                            </p>
                            <p className="interior-philosophy-text">
                                From land acquisition to handover, our teams collaborate with master planners, architects, and facility partners to deliver homes that feel personal and practical. Natural light, cross ventilation, shared gardens, and smart security are non-negotiables in every development we deliver.
                            </p>
                            <div className="interior-philosophy-stats">
                                <div className="interior-stat">
                                    <span className="interior-stat-number">25+</span>
                                    <span className="interior-stat-label">Residential Townships</span>
                                </div>
                                <div className="interior-stat">
                                    <span className="interior-stat-number">4.5M</span>
                                    <span className="interior-stat-label">Sq. Ft Delivered</span>
                                </div>
                                <div className="interior-stat">
                                    <span className="interior-stat-number">12</span>
                                    <span className="interior-stat-label">Cities Across India</span>
                                </div>
                            </div>
                        </div>
                        <div className="interior-philosophy-image">
                            <div className="interior-image-wrapper interior-slider-wrapper">
                                {/* Image Carousel */}
                                <div className="interior-image-carousel">
                                    {philosophyImages.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Interior Design ${index + 1}`}
                                            className={`interior-carousel-image ${index === currentPhilosophyImage ? 'active' : ''}`}
                                        />
                                    ))}
                                </div>
                                {/* Navigation Dots */}
                                <div className="interior-carousel-dots">
                                    {philosophyImages.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`interior-dot ${index === currentPhilosophyImage ? 'active' : ''}`}
                                            onClick={() => setCurrentPhilosophyImage(index)}
                                            aria-label={`Go to slide ${index + 1}`}
                                        ></button>
                                    ))}
                                </div>
                                <div className="interior-image-overlay"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="interior-services">
                    <div className="interior-services-header">
                        <span className="interior-section-label">What We Offer</span>
                        <h2 className="interior-section-title">Integrated Residential Services</h2>
                        <p className="interior-services-subtitle">
                            Development strategy, execution, and resident care managed under one roof
                        </p>
                    </div>
                    <div className="interior-services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="interior-service-card">
                                <div className="interior-service-icon">{service.icon}</div>
                                <h3 className="interior-service-title">{service.title}</h3>
                                <p className="interior-service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Featured Designs Section */}
                <section className="interior-featured-designs">
                    <div className="interior-featured-header">
                        <span className="interior-section-label">Flagship Communities</span>
                        <h2 className="interior-section-title">Featured Residences</h2>
                        <p className="interior-featured-subtitle">
                            Premium apartments, villas, and plotted developments crafted for different life stages and investment goals
                        </p>
                    </div>

                    <div className="interior-featured-grid">
                        {featuredDesigns.map((design, index) => (
                            <div 
                                key={design.id} 
                                className={`interior-featured-item ${index % 2 === 1 ? 'reverse' : ''}`}
                            >
                                <div className="interior-featured-image">
                                    <img src={design.image} alt={design.title} loading="lazy" />
                                    <div className="interior-featured-image-overlay"></div>
                                </div>
                                <div className="interior-featured-content">
                                    <span className="interior-featured-badge">{design.category}</span>
                                    <h3 className="interior-featured-title">{design.title}</h3>
                                    <p className="interior-featured-description">{design.description}</p>
                                    <ul className="interior-featured-features">
                                        {design.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                    <div className="interior-featured-stats">
                                        <div className="interior-stat-item">
                                            <span className="stat-label">Area</span>
                                            <span className="stat-value">{design.stats.area}</span>
                                        </div>
                                        <div className="interior-stat-item">
                                            <span className="stat-label">Year</span>
                                            <span className="stat-value">{design.stats.year}</span>
                                        </div>
                                        <div className="interior-stat-item">
                                            <span className="stat-label">Location</span>
                                            <span className="stat-value">{design.stats.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Process Section */}
                <section className="interior-process">
                    <div className="interior-process-header">
                        <span className="interior-section-label">Our Process</span>
                        <h2 className="interior-section-title">From Land Parcel to Community</h2>
                    </div>
                    <div className="interior-process-timeline">
                        <div className="interior-process-step">
                            <div className="interior-step-number">01</div>
                            <div className="interior-step-content">
                                <h3 className="interior-step-title">Land & Feasibility</h3>
                                <p className="interior-step-description">
                                    Market research, due diligence, and financial modeling for the parcel
                                </p>
                            </div>
                        </div>
                        <div className="interior-process-step">
                            <div className="interior-step-number">02</div>
                            <div className="interior-step-content">
                                <h3 className="interior-step-title">Design & Approvals</h3>
                                <p className="interior-step-description">
                                    Master plans, unit layouts, and statutory clearances coordinated in parallel
                                </p>
                            </div>
                        </div>
                        <div className="interior-process-step">
                            <div className="interior-step-number">03</div>
                            <div className="interior-step-content">
                                <h3 className="interior-step-title">Construction & Quality</h3>
                                <p className="interior-step-description">
                                    Procurement, site execution, ESG compliance, and third-party quality checks
                                </p>
                            </div>
                        </div>
                        <div className="interior-process-step">
                            <div className="interior-step-number">04</div>
                            <div className="interior-step-content">
                                <h3 className="interior-step-title">Handover & Community</h3>
                                <p className="interior-step-description">
                                    Phased possession, facility on-boarding, and long-term community programs
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="interior-cta">
                    <div className="interior-cta-content">
                        <h2 className="interior-cta-title">Plan Your Next Residential Launch</h2>
                        <p className="interior-cta-description">
                            Speak with our development advisory team to align land, finance, and product strategy for your next project.
                        </p>
                        <a href="#contact" className="interior-cta-btn">
                            Connect With Us
                        </a>
                    </div>
                </section>
                </div>
            <Footer />
            </div>

            {/* Footer */}
        </div>
    );
};

export default Residentials;
