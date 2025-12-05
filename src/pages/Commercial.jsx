import React, { useState, useEffect } from 'react';
import '../css/Commercial.css';
import Footer from '../components/Footer';
import { FiTrendingUp, FiMapPin, FiUsers, FiAward, FiCheckCircle, FiArrowRight, FiClock, FiDollarSign, FiShield, FiTarget } from 'react-icons/fi';
import { HiOutlineOfficeBuilding, HiOutlineShoppingCart, HiOutlineLightBulb } from 'react-icons/hi';
import { BsBuilding, BsGraphUp, BsLightning } from 'react-icons/bs';

// Import images
import heroCommercial1 from '../assets/building4.avif';
import heroCommercial2 from '../assets/building5.jpg';
import heroCommercial3 from '../assets/building6.jpg';
import interior13 from '../assets/interior13.jpeg';
import interior3 from '../assets/interior3.jpeg';
import interior4 from '../assets/interior4.jpeg';
import interior5 from '../assets/interior5.jpeg';
import interior6 from '../assets/interior6.jpeg';
import interior7 from '../assets/interior7.jpeg';
import interior9 from '../assets/interior9.jpeg';
import interior10 from '../assets/interior10.jpeg';
import interior11 from '../assets/interior11.jpeg';
import building3 from '../assets/building3.jpeg';

const Commercial = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentHeroImage, setCurrentHeroImage] = useState(0);
    const [activeTab, setActiveTab] = useState('office');
    const [counters, setCounters] = useState({ projects: 0, sqft: 0, clients: 0, cities: 0 });

    const heroImages = [heroCommercial1, heroCommercial2, heroCommercial3];

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Hero carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    // Counter animation
    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        const targets = { projects: 150, sqft: 18, clients: 500, cities: 15 };
        let current = { projects: 0, sqft: 0, clients: 0, cities: 0 };

        const interval = setInterval(() => {
            current = {
                projects: Math.min(current.projects + Math.ceil(targets.projects / steps), targets.projects),
                sqft: Math.min(current.sqft + Math.ceil(targets.sqft / steps), targets.sqft),
                clients: Math.min(current.clients + Math.ceil(targets.clients / steps), targets.clients),
                cities: Math.min(current.cities + Math.ceil(targets.cities / steps), targets.cities),
            };
            setCounters(current);

            if (
                current.projects >= targets.projects &&
                current.sqft >= targets.sqft &&
                current.clients >= targets.clients &&
                current.cities >= targets.cities
            ) {
                clearInterval(interval);
            }
        }, stepDuration);

        return () => clearInterval(interval);
    }, []);

    const commercialServices = [
        {
            icon: <HiOutlineOfficeBuilding />,
            title: 'Office Spaces',
            description: 'Grade-A corporate offices designed for productivity, innovation, and employee well-being with modern amenities.',
            features: ['LEED Certified', 'Smart Building Tech', '24/7 Security', 'Premium Finishes'],
            category: 'office'
        },
        {
            icon: <HiOutlineShoppingCart />,
            title: 'Retail Complexes',
            description: 'High-footfall retail destinations with strategic locations, modern infrastructure, and excellent connectivity.',
            features: ['Prime Locations', 'Anchor Tenants', 'Ample Parking', 'Food Courts'],
            category: 'retail'
        },
        {
            icon: <BsBuilding />,
            title: 'Mixed-Use Developments',
            description: 'Integrated spaces combining commercial, retail, and hospitality creating vibrant urban ecosystems.',
            features: ['Multi-Purpose', 'High ROI', 'Flexible Spaces', 'Modern Design'],
            category: 'mixed'
        },
        {
            icon: <HiOutlineLightBulb />,
            title: 'Co-Working Hubs',
            description: 'Collaborative workspaces for startups and enterprises with flexible terms and premium facilities.',
            features: ['Flexible Plans', 'Community Events', 'High-Speed Internet', 'Meeting Rooms'],
            category: 'coworking'
        },
    ];

    const showcaseProjects = [
        {
            id: 1,
            name: 'Skyline Corporate Tower',
            location: 'Gurugram',
            type: 'Office Space',
            area: '3.5M Sq. Ft.',
            occupancy: '95%',
            image: heroCommercial1,
            highlights: ['LEED Platinum', 'Grade A++', '50 Floors']
        },
        {
            id: 2,
            name: 'Metro Plaza Mall',
            location: 'Mumbai',
            type: 'Retail',
            area: '1.2M Sq. Ft.',
            occupancy: '100%',
            image: heroCommercial2,
            highlights: ['400+ Brands', 'Multiplex', 'Premium F&B']
        },
        {
            id: 3,
            name: 'Tech Park Innovation Hub',
            location: 'Bangalore',
            type: 'IT Park',
            area: '4M Sq. Ft.',
            occupancy: '92%',
            image: heroCommercial3,
            highlights: ['SEZ Status', 'Green Building', '24/7 Operations']
        },
    ];

    const whyChooseUs = [
        {
            icon: <FiTarget />,
            title: 'Strategic Locations',
            description: 'Prime locations with excellent connectivity to business hubs, airports, and metro stations.'
        },
        {
            icon: <FiDollarSign />,
            title: 'High ROI',
            description: 'Proven track record of delivering superior returns on investment with consistent rental yields.'
        },
        {
            icon: <FiShield />,
            title: 'Quality Construction',
            description: 'International standards in construction with use of premium materials and advanced technology.'
        },
        {
            icon: <BsLightning />,
            title: 'Fast-Track Delivery',
            description: 'Efficient project management ensuring on-time or early delivery without compromising quality.'
        },
    ];

    const processSteps = [
        {
            step: '01',
            title: 'Consultation & Needs Analysis',
            description: 'Understanding your business requirements, space needs, and investment goals.',
            icon: <FiUsers />
        },
        {
            step: '02',
            title: 'Site Selection & Due Diligence',
            description: 'Identifying optimal locations and conducting comprehensive legal and technical checks.',
            icon: <FiMapPin />
        },
        {
            step: '03',
            title: 'Design & Approvals',
            description: 'Creating functional designs and securing all necessary regulatory approvals.',
            icon: <HiOutlineLightBulb />
        },
        {
            step: '04',
            title: 'Construction & Quality Control',
            description: 'Building with precision, adhering to timelines, and maintaining highest quality standards.',
            icon: <FiShield />
        },
        {
            step: '05',
            title: 'Handover & After-Sales',
            description: 'Smooth possession process with comprehensive after-sales support and facility management.',
            icon: <FiCheckCircle />
        },
    ];

    const testimonials = [
        {
            id: 1,
            name: 'Rajesh Kumar',
            designation: 'CEO, TechVision Solutions',
            company: 'IT Services',
            text: 'MM Developers delivered our corporate office ahead of schedule. The quality and attention to detail exceeded our expectations.',
            rating: 5
        },
        {
            id: 2,
            name: 'Priya Sharma',
            designation: 'Director, Retail Ventures',
            company: 'Retail Chain',
            text: 'Our mall has become the most successful retail destination in the city. The footfall and brand mix are exceptional.',
            rating: 5
        },
        {
            id: 3,
            name: 'Amit Patel',
            designation: 'Founder, StartHub',
            company: 'Co-working Space',
            text: 'The flexible design and modern amenities have made our co-working space a preferred choice for startups and enterprises.',
            rating: 5
        },
    ];

    return (
        <div className={`commercial-page ${isLoaded ? 'loaded' : ''}`}>
            {/* Hero Section - 3D Modern Design */}
            <section className="commercial-hero">
                {/* Animated Background */}
                <div className="hero-bg-wrapper">
                    <div className="hero-gradient-orb orb-1"></div>
                    <div className="hero-gradient-orb orb-2"></div>
                    <div className="hero-gradient-orb orb-3"></div>
                    <div className="hero-grid-pattern"></div>
                </div>

                <div className="hero-container">
                    {/* Left Content */}
                    <div className="hero-left" data-aos="fade-right">
                        <h1 className="hero-title">
                            Building
                            <span className="gradient-text"> Tomorrow's</span>
                            <br />
                            Business Landmarks
                        </h1>
                        <p className="hero-description">
                            World-class commercial developments that drive growth, inspire innovation, 
                            and deliver exceptional returns on investment.
                        </p>

                        {/* Mini Stats */}
                        <div className="hero-mini-stats">
                            <div className="mini-stat">
                                <div className="mini-stat-value">{counters.projects}+</div>
                                <div className="mini-stat-label">Projects</div>
                            </div>
                            <div className="mini-stat">
                                <div className="mini-stat-value">{counters.sqft}M+</div>
                                <div className="mini-stat-label">Sq. Ft.</div>
                            </div>
                            <div className="mini-stat">
                                <div className="mini-stat-value">{counters.cities}+</div>
                                <div className="mini-stat-label">Cities</div>
                            </div>
                        </div>
                    </div>

                    {/* Right 3D Cards */}
                    <div className="hero-right" data-aos="fade-left" data-aos-delay="200">
                        <div className="floating-cards-container">
                            {/* Card 1 - Office */}
                            <div className="float-card card-1" data-aos="fade-up" data-aos-delay="300">
                                <div className="card-glow"></div>
                                <div className="card-content">
                                    <HiOutlineOfficeBuilding className="card-icon" />
                                    <h3>Office Spaces</h3>
                                    <p>Grade-A Corporate Towers</p>
                                    <div className="card-stat">3.5M+ Sq. Ft.</div>
                                </div>
                            </div>

                            {/* Card 2 - Retail */}
                            <div className="float-card card-2" data-aos="fade-up" data-aos-delay="400">
                                <div className="card-glow"></div>
                                <div className="card-content">
                                    <HiOutlineShoppingCart className="card-icon" />
                                    <h3>Retail Malls</h3>
                                    <p>Premium Shopping Destinations</p>
                                    <div className="card-stat">1.2M+ Sq. Ft.</div>
                                </div>
                            </div>

                            {/* Card 3 - Mixed Use */}
                            <div className="float-card card-3" data-aos="fade-up" data-aos-delay="500">
                                <div className="card-glow"></div>
                                <div className="card-content">
                                    <BsBuilding className="card-icon" />
                                    <h3>Mixed-Use</h3>
                                    <p>Integrated Developments</p>
                                    <div className="card-stat">4M+ Sq. Ft.</div>
                                </div>
                            </div>

                            {/* Central Achievement Badge */}
                            <div className="achievement-badge" data-aos="zoom-in" data-aos-delay="600">
                                <FiAward className="badge-icon" />
                                <div className="badge-text">
                                    <div className="badge-title">Award Winning</div>
                                    <div className="badge-subtitle">Excellence in Real Estate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Aesthetic Image Gallery */}
            <section className="commercial-gallery">
                <div className="gallery-container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">Visual Journey</span>
                        <h2 className="section-title">Our Masterpieces</h2>
                        <p className="section-description">
                            Experience excellence through our architectural achievements
                        </p>
                    </div>

                    <div className="gallery-grid">
                        <div className="gallery-item gallery-item-large" data-aos="fade-up" data-aos-delay="100">
                            <img src={building3} alt="Commercial Building" />
                            <div className="gallery-overlay">
                                <h3>Corporate Excellence</h3>
                                <p>Grade-A Office Spaces</p>
                            </div>
                        </div>
                        
                        <div className="gallery-item gallery-item-tall" data-aos="fade-up" data-aos-delay="200">
                            <img src={interior3} alt="Modern Interior" />
                            <div className="gallery-overlay">
                                <h3>Premium Interiors</h3>
                                <p>Luxury Finishes</p>
                            </div>
                        </div>
                        
                        <div className="gallery-item" data-aos="fade-up" data-aos-delay="300">
                            <img src={interior4} alt="Elegant Space" />
                            <div className="gallery-overlay">
                                <h3>Elegant Design</h3>
                                <p>Contemporary Style</p>
                            </div>
                        </div>
                        
                        <div className="gallery-item" data-aos="fade-up" data-aos-delay="400">
                            <img src={interior5} alt="Spacious Lobby" />
                            <div className="gallery-overlay">
                                <h3>Grand Lobbies</h3>
                                <p>Impressive Entrances</p>
                            </div>
                        </div>
                        
                        <div className="gallery-item gallery-item-wide" data-aos="fade-up" data-aos-delay="500">
                            <img src={interior6} alt="Modern Workspace" />
                            <div className="gallery-overlay">
                                <h3>Modern Workspaces</h3>
                                <p>Collaborative Environments</p>
                            </div>
                        </div>
                        
                        <div className="gallery-item" data-aos="fade-up" data-aos-delay="600">
                            <img src={interior7} alt="Luxury Amenities" />
                            <div className="gallery-overlay">
                                <h3>Luxury Amenities</h3>
                                <p>Premium Features</p>
                            </div>
                        </div>
                        
                        <div className="gallery-item gallery-item-tall" data-aos="fade-up" data-aos-delay="700">
                            <img src={interior9} alt="Sophisticated Space" />
                            <div className="gallery-overlay">
                                <h3>Sophisticated</h3>
                                <p>Attention to Detail</p>
                            </div>
                        </div>
                        
                        <div className="gallery-item" data-aos="fade-up" data-aos-delay="800">
                            <img src={interior10} alt="Executive Offices" />
                            <div className="gallery-overlay">
                                <h3>Executive Suites</h3>
                                <p>Private Offices</p>
                            </div>
                        </div>
                        
                        <div className="gallery-item" data-aos="fade-up" data-aos-delay="900">
                            <img src={interior11} alt="Conference Rooms" />
                            <div className="gallery-overlay">
                                <h3>Meeting Spaces</h3>
                                <p>Conference Facilities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Showcase Projects */}
            <section className="commercial-showcase">
                <div className="showcase-container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">Portfolio</span>
                        <h2 className="section-title">Featured Developments</h2>
                        <p className="section-description">
                            Landmark projects that define excellence in commercial real estate
                        </p>
                    </div>

                    <div className="showcase-grid">
                        {showcaseProjects.map((project, index) => (
                            <div 
                                key={project.id} 
                                className="showcase-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="showcase-image">
                                    <img src={project.image} alt={project.name} />
                                    <div className="showcase-overlay">
                                        <button className="view-details-btn">
                                            View Details <FiArrowRight />
                                        </button>
                                    </div>
                                </div>
                                <div className="showcase-content">
                                    <div className="showcase-header">
                                        <h3 className="showcase-name">{project.name}</h3>
                                        <div className="showcase-location">
                                            <FiMapPin />
                                            <span>{project.location}</span>
                                        </div>
                                    </div>
                                    <div className="showcase-meta">
                                        <span className="meta-item">{project.type}</span>
                                        <span className="meta-item">{project.area}</span>
                                        <span className="meta-occupancy">{project.occupancy} Occupied</span>
                                    </div>
                                    <div className="showcase-highlights">
                                        {project.highlights.map((highlight, idx) => (
                                            <span key={idx} className="highlight-badge">{highlight}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="commercial-why-choose">
                <div className="why-choose-container">
                    <div className="why-choose-content">
                        <div className="content-left" data-aos="fade-right">
                            <span className="section-badge">Why MM Developers</span>
                            <h2 className="section-title">Your Trusted Partner in Commercial Real Estate</h2>
                            <p className="section-description">
                                With over two decades of excellence, we've established ourselves as a leader in developing 
                                world-class commercial properties that deliver exceptional value to businesses and investors.
                            </p>
                            <div className="achievement-stats">
                                <div className="achievement-item">
                                    <FiAward className="achievement-icon" />
                                    <div>
                                        <div className="achievement-value">25+ Years</div>
                                        <div className="achievement-label">Industry Experience</div>
                                    </div>
                                </div>
                                <div className="achievement-item">
                                    <FiTrendingUp className="achievement-icon" />
                                    <div>
                                        <div className="achievement-value">18% Avg.</div>
                                        <div className="achievement-label">Annual ROI</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="content-right">
                            <div className="why-choose-grid">
                                {whyChooseUs.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="why-choose-card"
                                        data-aos="fade-left"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="why-icon">{item.icon}</div>
                                        <h3 className="why-title">{item.title}</h3>
                                        <p className="why-description">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="commercial-process">
                <div className="process-container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">Our Approach</span>
                        <h2 className="section-title">Development Process</h2>
                        <p className="section-description">
                            A systematic approach ensuring excellence at every stage
                        </p>
                    </div>

                    <div className="process-timeline">
                        {processSteps.map((step, index) => (
                            <div 
                                key={index} 
                                className="timeline-item"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="timeline-marker">
                                    <div className="marker-circle">{step.icon}</div>
                                    <span className="step-number">{step.step}</span>
                                </div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">{step.title}</h3>
                                    <p className="timeline-description">{step.description}</p>
                                </div>
                            </div>
                        ))}
                        <div className="timeline-line"></div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="commercial-testimonials">
                <div className="testimonials-container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">Client Success Stories</span>
                        <h2 className="section-title">What Our Clients Say</h2>
                    </div>

                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={testimonial.id} 
                                className="testimonial-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="testimonial-stars">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">{testimonial.name}</div>
                                        <div className="author-designation">{testimonial.designation}</div>
                                        <div className="author-company">{testimonial.company}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="commercial-cta">
                <div className="cta-container" data-aos="zoom-in">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Invest in Your Business Future?</h2>
                        <p className="cta-description">
                            Discover premium commercial spaces that drive growth and deliver exceptional returns
                        </p>
                        <div className="cta-buttons">
                            <button className="cta-btn-primary">
                                Schedule Site Visit
                                <FiArrowRight />
                            </button>
                            <button className="cta-btn-secondary">
                                Download Brochure
                            </button>
                        </div>
                    </div>
                    <div className="cta-features">
                        <div className="cta-feature" data-aos="fade-up" data-aos-delay="100">
                            <FiClock />
                            <span>24/7 Support</span>
                        </div>
                        <div className="cta-feature" data-aos="fade-up" data-aos-delay="200">
                            <FiShield />
                            <span>Transparent Deals</span>
                        </div>
                        <div className="cta-feature" data-aos="fade-up" data-aos-delay="300">
                            <FiAward />
                            <span>Award Winning</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Commercial;
