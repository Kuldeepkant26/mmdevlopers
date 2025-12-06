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

            {/* Premium Services Section */}
            <section className="commercial-premium-services">
                <div className="premium-services-container">
                    <div className="services-header" data-aos="fade-up">
                        <span className="section-badge-commercial">Our Expertise</span>
                        <h2 className="section-title-commercial">Crafting Business Ecosystems</h2>
                        <p className="section-description-commercial">
                            We transform visions into architectural masterpieces that redefine commercial excellence
                        </p>
                    </div>

                    <div className="services-grid">
                        {commercialServices.map((service, index) => (
                            <div 
                                key={index}
                                className="service-card-premium"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="service-card-glow"></div>
                                <div className="service-icon-wrapper">
                                    <div className="service-icon-commercial">{service.icon}</div>
                                </div>
                                <h3 className="service-title-commercial">{service.title}</h3>
                                <p className="service-description-commercial">{service.description}</p>
                                <div className="service-features-list">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="feature-item-commercial">
                                            <FiCheckCircle className="feature-check" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <button className="service-explore-btn">
                                    Explore <FiArrowRight />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Aesthetic Showcase Gallery */}
            <section className="commercial-aesthetic-showcase">
                <div className="aesthetic-showcase-container">
                    <div className="showcase-header-split">
                        <div className="showcase-header-left" data-aos="fade-right">
                            <span className="section-badge-commercial">Excellence Visualized</span>
                            <h2 className="section-title-commercial">Where Innovation<br />Meets Architecture</h2>
                        </div>
                        <div className="showcase-header-right" data-aos="fade-left">
                            <p className="section-description-commercial">
                                Experience the pinnacle of commercial design through our portfolio of landmark projects. 
                                Each space is meticulously crafted to inspire productivity, foster collaboration, 
                                and elevate your business presence.
                            </p>
                            <button className="view-all-btn-commercial">
                                View All Projects <FiArrowRight />
                            </button>
                        </div>
                    </div>

                    <div className="aesthetic-gallery-grid">
                        {/* Large Feature */}
                        <div className="gallery-card-commercial gallery-large" data-aos="zoom-in" data-aos-delay="100">
                            <div className="gallery-image-wrapper-commercial">
                                <img src={heroCommercial1} alt="Corporate Tower" />
                                <div className="gallery-overlay-commercial">
                                    <div className="overlay-content-commercial">
                                        <span className="overlay-badge-commercial">Featured</span>
                                        <h3 className="overlay-title-commercial">Corporate Excellence</h3>
                                        <p className="overlay-subtitle-commercial">Grade-A Office Tower</p>
                                        <div className="overlay-stats-commercial">
                                            <div className="overlay-stat-item">
                                                <FiMapPin />
                                                <span>Prime Location</span>
                                            </div>
                                            <div className="overlay-stat-item">
                                                <BsGraphUp />
                                                <span>95% Occupied</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Medium Cards */}
                        <div className="gallery-card-commercial gallery-medium" data-aos="fade-up" data-aos-delay="200">
                            <div className="gallery-image-wrapper-commercial">
                                <img src={interior3} alt="Modern Interior" />
                                <div className="gallery-overlay-commercial">
                                    <div className="overlay-content-commercial">
                                        <h3 className="overlay-title-commercial">Premium Interiors</h3>
                                        <p className="overlay-subtitle-commercial">Luxury Finishes</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="gallery-card-commercial gallery-medium" data-aos="fade-up" data-aos-delay="300">
                            <div className="gallery-image-wrapper-commercial">
                                <img src={interior4} alt="Executive Space" />
                                <div className="gallery-overlay-commercial">
                                    <div className="overlay-content-commercial">
                                        <h3 className="overlay-title-commercial">Executive Suites</h3>
                                        <p className="overlay-subtitle-commercial">Elegant Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tall Card */}
                        <div className="gallery-card-commercial gallery-tall" data-aos="fade-up" data-aos-delay="400">
                            <div className="gallery-image-wrapper-commercial">
                                <img src={building3} alt="Commercial Complex" />
                                <div className="gallery-overlay-commercial">
                                    <div className="overlay-content-commercial">
                                        <h3 className="overlay-title-commercial">Mixed-Use Complex</h3>
                                        <p className="overlay-subtitle-commercial">Integrated Development</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Small Cards */}
                        <div className="gallery-card-commercial gallery-small" data-aos="fade-up" data-aos-delay="500">
                            <div className="gallery-image-wrapper-commercial">
                                <img src={interior7} alt="Workspace" />
                                <div className="gallery-overlay-commercial">
                                    <div className="overlay-content-commercial">
                                        <h3 className="overlay-title-commercial">Collaborative Spaces</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="gallery-card-commercial gallery-small" data-aos="fade-up" data-aos-delay="600">
                            <div className="gallery-image-wrapper-commercial">
                                <img src={interior10} alt="Reception" />
                                <div className="gallery-overlay-commercial">
                                    <div className="overlay-content-commercial">
                                        <h3 className="overlay-title-commercial">Grand Lobbies</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Investment Value Proposition */}
            <section className="commercial-value-proposition">
                <div className="value-proposition-container">
                    <div className="value-content-grid">
                        {/* Left Side - Visual */}
                        <div className="value-visual-side" data-aos="fade-right">
                            <div className="value-image-stack">
                                <div className="stack-image stack-back">
                                    <img src={heroCommercial2} alt="Commercial Building" />
                                </div>
                                <div className="stack-image stack-front">
                                    <img src={interior5} alt="Interior Space" />
                                </div>
                                <div className="value-badge-float">
                                    <FiAward className="badge-icon-float" />
                                    <div>
                                        <div className="badge-number">20+</div>
                                        <div className="badge-label">Years Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="value-content-side" data-aos="fade-left">
                            <span className="section-badge-commercial">Investment Excellence</span>
                            <h2 className="section-title-commercial">Building Value That<br />Lasts Generations</h2>
                            <p className="section-description-commercial">
                                Our commercial properties aren't just buildings—they're strategic investments designed 
                                to deliver exceptional returns while fostering thriving business communities.
                            </p>

                            <div className="value-highlights">
                                {whyChooseUs.map((item, index) => (
                                    <div 
                                        key={index}
                                        className="value-highlight-item"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="highlight-icon-wrapper">
                                            {item.icon}
                                        </div>
                                        <div className="highlight-content">
                                            <h3 className="highlight-title">{item.title}</h3>
                                            <p className="highlight-description">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="value-cta-row">
                                <button className="value-primary-btn">
                                    Schedule Consultation
                                    <FiArrowRight />
                                </button>
                                <button className="value-secondary-btn">
                                    Download Brochure
                                </button>
                            </div>
                        </div>
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
