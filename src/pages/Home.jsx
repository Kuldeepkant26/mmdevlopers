import React, { useState, useEffect } from 'react';
import '../css/Home.css';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import MobileDev from '../components/MobileDev';
import WebSaaSDev from '../components/WebSaaSDev';
import InteriorShowcase from '../components/InteriorShowcase';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import HeroStats from '../components/HeroStats';
import Sustainability from '../components/Sustainability';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import homeheroImage from '../assets/homehero3.jpg';
import building3 from '../assets/building3.jpeg';
import building4 from '../assets/building4.avif';
import building5 from '../assets/building5.jpg';
import building6 from '../assets/building6.jpg';
import buildingInterior from '../assets/buildinginterior.jpg';
import homehero2 from '../assets/homehero2.jpg';

const Home = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentPhilosophyImage, setCurrentPhilosophyImage] = useState(0);
    const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

    const philosophyImages = [
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80'
    ];

    // Hero carousel data
    const heroCarouselData = [
        {
            image: homeheroImage,
            title: "NEW RESIDENCE",
            description: "Finding the perfect place to call home can be challenging. Our distinguished team of creative visionaries and real estate specialists delivers an exceptional, seamless experience."
        },
        {
            image: building3,
            title: "LUXURY LIVING",
            description: "Experience the pinnacle of modern architecture and sophisticated design. Every detail is crafted to perfection, creating spaces that inspire and elevate your lifestyle."
        },
        {
            image: building5,
            title: "MODERN SPACES",
            description: "Contemporary designs that blend functionality with aesthetic excellence. Our innovative approach transforms ordinary spaces into extraordinary living experiences."
        },
        {
            image: building6,
            title: "PREMIUM HOMES",
            description: "Discover exceptional properties that redefine luxury living. From concept to completion, we create homes that reflect your unique vision and aspirations."
        },
        {
            image: buildingInterior,
            title: "ELEGANT INTERIORS",
            description: "Step into beautifully designed interiors where every element harmoniously comes together. Our attention to detail creates environments that are both stunning and livable."
        },
        {
            image: homehero2,
            title: "DREAM PROPERTIES",
            description: "Turn your vision into reality with our comprehensive real estate solutions. We guide you through every step of finding and creating your perfect sanctuary."
        }
    ];

    useEffect(() => {
        setIsLoaded(true);

        // Ensure text visibility (removed dynamic color changing that was causing issues)
        const ensureTextVisibility = () => {
            const title = document.getElementById('hero-title');
            if (title) {
                // Force consistent styling
                title.style.color = '#2d2d2d';
                title.style.background = 'none';
                title.style.webkitTextFillColor = 'initial';
                title.style.webkitBackgroundClip = 'initial';
                title.style.backgroundClip = 'initial';
            }
        };

        // Ensure text is visible on mount
        ensureTextVisibility();
        
        // Re-ensure visibility after each hero change
        const interval = setInterval(ensureTextVisibility, 100);
        
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const philosophyInterval = setInterval(() => {
            setCurrentPhilosophyImage((prev) => (prev + 1) % philosophyImages.length);
        }, 4000);
        return () => clearInterval(philosophyInterval);
    }, [philosophyImages.length]);

    // Hero carousel effect
    useEffect(() => {
        const heroInterval = setInterval(() => {
            setCurrentHeroIndex((prev) => (prev + 1) % heroCarouselData.length);
        }, 5000); // Change every 5 seconds
        return () => clearInterval(heroInterval);
    }, [heroCarouselData.length]);

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'residential', name: 'Residential' },
        { id: 'commercial', name: 'Commercial' },
        { id: 'luxury', name: 'Luxury Spaces' },
        { id: 'minimalist', name: 'Minimalist' }
    ];

    const featuredDesigns = [
        {
            id: 1,
            title: 'Contemporary Luxury Villa',
            category: 'Luxury',
            image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
            description: 'A masterpiece of modern architecture harmoniously blending with nature. This stunning villa showcases our expertise in creating spaces that breathe elegance while maintaining functional excellence.',
            features: [
                'Open-concept living with floor-to-ceiling windows',
                'Premium Italian marble and custom woodwork',
                'Smart home integration throughout',
                'Infinity pool with panoramic views'
            ],
            stats: {
                area: '8,500 sq ft',
                year: '2024',
                location: 'Beverly Hills, CA'
            }
        },
        {
            id: 2,
            title: 'Modern Minimalist Penthouse',
            category: 'Residential',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            description: 'Minimalism meets sophistication in this breathtaking penthouse design. Every element is carefully curated to create a serene sanctuary above the city, where less truly becomes more.',
            features: [
                'Clean lines with neutral color palette',
                'Custom-designed furniture pieces',
                'Hidden storage solutions',
                'Natural light optimization'
            ],
            stats: {
                area: '4,200 sq ft',
                year: '2024',
                location: 'Manhattan, NY'
            }
        },
        {
            id: 3,
            title: 'Executive Office Headquarters',
            category: 'Commercial',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
            description: 'Redefining corporate spaces with this innovative office design that inspires creativity and collaboration. A perfect blend of professionalism and contemporary aesthetics.',
            features: [
                'Flexible workspace configurations',
                'Biophilic design elements',
                'State-of-the-art meeting facilities',
                'Wellness-focused break areas'
            ],
            stats: {
                area: '12,000 sq ft',
                year: '2023',
                location: 'London, UK'
            }
        },
        {
            id: 4,
            title: 'Boutique Hotel Suites',
            category: 'Luxury',
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
            description: 'Each suite tells a unique story, combining opulence with intimate comfort. Our design creates an unforgettable experience that guests will cherish long after their stay.',
            features: [
                'Bespoke furniture and fixtures',
                'Luxury spa-inspired bathrooms',
                'Private balconies with city views',
                'Art-focused interior curation'
            ],
            stats: {
                area: '1,800 sq ft',
                year: '2024',
                location: 'Paris, France'
            }
        },
        {
            id: 5,
            title: 'Scandinavian Family Home',
            category: 'Residential',
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
            description: 'Warmth meets functionality in this beautiful family residence. Inspired by Scandinavian design principles, every space encourages togetherness while respecting individual needs.',
            features: [
                'Sustainable materials throughout',
                'Multi-functional living spaces',
                'Built-in family organization systems',
                'Indoor-outdoor connectivity'
            ],
            stats: {
                area: '3,600 sq ft',
                year: '2023',
                location: 'Stockholm, Sweden'
            }
        },
        {
            id: 6,
            title: 'Modern Coastal Retreat',
            category: 'Luxury',
            image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
            description: 'Where luxury meets the ocean. This coastal masterpiece captures the essence of seaside living with sophisticated design that celebrates natural beauty and refined comfort.',
            features: [
                'Panoramic ocean views',
                'Weather-resistant premium finishes',
                'Outdoor entertainment spaces',
                'Coastal-inspired color schemes'
            ],
            stats: {
                area: '6,200 sq ft',
                year: '2024',
                location: 'Malibu, CA'
            }
        }
    ];

    const projects = [
        {
            id: 1,
            title: 'Modern Minimalist Residence',
            category: 'residential',
            image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
            description: 'A serene living space combining functionality with aesthetic beauty',
            location: 'Beverly Hills, CA',
            area: '4,500 sq ft'
        },
        {
            id: 2,
            title: 'Executive Office Suite',
            category: 'commercial',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
            description: 'Contemporary workspace designed for productivity and elegance',
            location: 'Manhattan, NY',
            area: '3,200 sq ft'
        },
        {
            id: 3,
            title: 'Luxury Penthouse',
            category: 'luxury',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            description: 'Opulent living at its finest with panoramic city views',
            location: 'Dubai Marina',
            area: '6,800 sq ft'
        },
        {
            id: 4,
            title: 'Scandinavian Retreat',
            category: 'minimalist',
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
            description: 'Clean lines and natural materials create a peaceful sanctuary',
            location: 'Stockholm, Sweden',
            area: '2,800 sq ft'
        },
        {
            id: 5,
            title: 'Boutique Hotel Lobby',
            category: 'commercial',
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
            description: 'Welcoming guests with timeless elegance and sophistication',
            location: 'Paris, France',
            area: '5,000 sq ft'
        },
        {
            id: 6,
            title: 'Contemporary Villa',
            category: 'luxury',
            image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
            description: 'Where modern architecture meets luxurious comfort',
            location: 'Malibu, CA',
            area: '7,200 sq ft'
        }
    ];

    const services = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Residential\nProperties',
            description: 'Find your dream home from our curated selection of premium residences'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="7" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 11h2M15 11h2M7 15h2M15 15h2" strokeLinecap="round" />
                </svg>
            ),
            title: 'Commercial\nSpaces',
            description: 'Strategic investment opportunities in prime commercial locations'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2l9 4.5v9L12 20l-9-4.5v-9L12 2z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 11.5V20M12 11.5L3 6.5M12 11.5L21 6.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="11.5" r="1.5" fill="currentColor" />
                </svg>
            ),
            title: 'Investment\nConsulting',
            description: 'Expert guidance for maximizing your real estate portfolio returns'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 3h6l6 6v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9l6-6z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 3v6h6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 13h8M8 17h5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Property\nManagement',
            description: 'Comprehensive management services for hassle-free ownership'
        }
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="home-page">
            {/* Section 1 - Hero Section */}
            <div className="home-section home-section-1" style={{ zIndex: 1 }}>
                <div className={`home-container ${isLoaded ? 'loaded' : ''}`}>
                    <section className="home-hero-screenshot">
                        <div className="home-hero-screenshot-content">
                            <div className="home-hero-screenshot-left">
                                <div className="home-hero-screenshot-tagline-wrapper">
                                    <p className="home-hero-screenshot-tagline">TIME TO MEET YOUR</p>
                                    <div className="home-hero-screenshot-line"></div>
                                </div>
                                <h1 className="home-hero-screenshot-title" id="hero-title">
                                    <span key={currentHeroIndex} className="hero-title-text">
                                        {heroCarouselData[currentHeroIndex].title}
                                    </span>
                                </h1>
                                <p className="home-hero-screenshot-description">
                                    <span key={`desc-${currentHeroIndex}`} className="hero-description-text">
                                        {heroCarouselData[currentHeroIndex].description}
                                    </span>
                                </p>
                                <button className="home-hero-screenshot-btn">
                                    Explore Properties
                                </button>
                            </div>
                            <div className="home-hero-screenshot-right">
                                <div className="home-hero-screenshot-image-wrapper">
                                    {heroCarouselData.map((item, index) => (
                                        <img
                                            key={index}
                                            src={item.image}
                                            alt={`${item.title} - Modern Architecture`}
                                            className={`home-hero-screenshot-image ${
                                                index === currentHeroIndex ? 'active' : ''
                                            }`}
                                        />
                                    ))}
                                    <div className="hero-carousel-indicators">
                                        {heroCarouselData.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`carousel-indicator ${
                                                    index === currentHeroIndex ? 'active' : ''
                                                }`}
                                                onClick={() => setCurrentHeroIndex(index)}
                                                aria-label={`Go to slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Section 2 - Content */}
            <div className="home-section home-section-2" style={{ zIndex: 2 }}>
                <div className={`home-container ${isLoaded ? 'loaded' : ''}`}>
                    <MobileDev></MobileDev>
                    <AboutUs></AboutUs>
                    <WebSaaSDev></WebSaaSDev>
                    <InteriorShowcase></InteriorShowcase>

                    {/* New premium sections added - retain existing flow */}
                    <HeroStats />
                    <Sustainability />


                    {/* Philosophy Section */}
                    {/* <section className="home-philosophy">
                        <div className="home-philosophy-container">
                            <div className="home-philosophy-content">
                                <span className="home-section-label">Our Philosophy</span>
                                <h2 className="home-section-title">
                                    Crafting Spaces That Inspire
                                </h2>
                                <p className="home-philosophy-text">
                                    At MMD, we believe that interior design is more than just aesthetics—it's about creating environments that enhance the way you live, work, and experience life. Our approach combines timeless elegance with contemporary innovation, resulting in spaces that are both beautiful and functional.
                                </p>
                                <p className="home-philosophy-text">
                                    Each project is a unique journey, guided by your vision and elevated by our expertise. We meticulously curate every detail, from the grandest architectural elements to the finest finishing touches, ensuring a harmonious blend of form and function.
                                </p>
                                <div className="home-philosophy-stats">
                                    <div className="home-stat">
                                        <span className="home-stat-number">200+</span>
                                        <span className="home-stat-label">Projects Completed</span>
                                    </div>
                                    <div className="home-stat">
                                        <span className="home-stat-number">15+</span>
                                        <span className="home-stat-label">Years Experience</span>
                                    </div>
                                    <div className="home-stat">
                                        <span className="home-stat-number">98%</span>
                                        <span className="home-stat-label">Client Satisfaction</span>
                                    </div>
                                </div>
                            </div>
                            <div className="home-philosophy-image">
                                <div className="home-image-wrapper home-slider-wrapper">
                                    <div className="home-image-carousel">
                                        {philosophyImages.map((image, index) => (
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`Interior Design ${index + 1}`}
                                                className={`home-carousel-image ${index === currentPhilosophyImage ? 'active' : ''}`}
                                            />
                                        ))}
                                    </div>
                                    <div className="home-carousel-dots">
                                        {philosophyImages.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`home-dot ${index === currentPhilosophyImage ? 'active' : ''}`}
                                                onClick={() => setCurrentPhilosophyImage(index)}
                                                aria-label={`Go to slide ${index + 1}`}
                                            ></button>
                                        ))}
                                    </div>
                                    <div className="home-image-overlay"></div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    {/* Services Section */}
                    <section className="home-services">
                        <div className="home-services-header">
                            <span className="home-section-label">What We Offer</span>
                            <h2 className="home-section-title">Premier Real Estate Services</h2>
                            <p className="home-services-subtitle">
                                From property search to ownership, we provide comprehensive real estate solutions
                            </p>
                        </div>
                        <div className="home-services-grid">
                            {services.map((service, index) => (
                                <div key={index} className="home-service-card">
                                    <div className="home-service-icon">{service.icon}</div>
                                    <h3 className="home-service-title">{service.title}</h3>
                                    <p className="home-service-description">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <Testimonials></Testimonials>
                    <FAQ></FAQ>
                    {/* Featured Designs Section */}
                    {/* <section className="home-featured-designs">
                        <div className="home-featured-header">
                            <span className="home-section-label">Our Masterpieces</span>
                            <h2 className="home-section-title">Featured Designs</h2>
                            <p className="home-featured-subtitle">
                                Discover our most celebrated projects that showcase innovation, elegance, and timeless design excellence
                            </p>
                        </div>

                        <div className="home-featured-grid">
                            {featuredDesigns.map((design, index) => (
                                <div
                                    key={design.id}
                                    className={`home-featured-item ${index % 2 === 1 ? 'reverse' : ''}`}
                                >
                                    <div className="home-featured-image">
                                        <img src={design.image} alt={design.title} loading="lazy" />
                                        <div className="home-featured-image-overlay"></div>
                                    </div>
                                    <div className="home-featured-content">
                                        <span className="home-featured-badge">{design.category}</span>
                                        <h3 className="home-featured-title">{design.title}</h3>
                                        <p className="home-featured-description">{design.description}</p>
                                        <ul className="home-featured-features">
                                            {design.features.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                        <div className="home-featured-stats">
                                            <div className="home-stat-item">
                                                <span className="stat-label">Area</span>
                                                <span className="stat-value">{design.stats.area}</span>
                                            </div>
                                            <div className="home-stat-item">
                                                <span className="stat-label">Year</span>
                                                <span className="stat-value">{design.stats.year}</span>
                                            </div>
                                            <div className="home-stat-item">
                                                <span className="stat-label">Location</span>
                                                <span className="stat-value">{design.stats.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section> */}

                    {/* Process Section */}
                    {/* <section className="home-process">
                        <div className="home-process-header">
                            <span className="home-section-label">Our Process</span>
                            <h2 className="home-section-title">From Vision to Reality</h2>
                        </div>
                        <div className="home-process-timeline">
                            <div className="home-process-step">
                                <div className="home-step-number">01</div>
                                <div className="home-step-content">
                                    <h3 className="home-step-title">Discovery</h3>
                                    <p className="home-step-description">
                                        Understanding your vision, lifestyle, and unique requirements
                                    </p>
                                </div>
                            </div>
                            <div className="home-process-step">
                                <div className="home-step-number">02</div>
                                <div className="home-step-content">
                                    <h3 className="home-step-title">Concept Design</h3>
                                    <p className="home-step-description">
                                        Creating mood boards, sketches, and 3D visualizations
                                    </p>
                                </div>
                            </div>
                            <div className="home-process-step">
                                <div className="home-step-number">03</div>
                                <div className="home-step-content">
                                    <h3 className="home-step-title">Development</h3>
                                    <p className="home-step-description">
                                        Detailed planning, material selection, and technical drawings
                                    </p>
                                </div>
                            </div>
                            <div className="home-process-step">
                                <div className="home-step-number">04</div>
                                <div className="home-step-content">
                                    <h3 className="home-step-title">Execution</h3>
                                    <p className="home-step-description">
                                        Bringing the design to life with meticulous attention to detail
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    {/* CTA Section */}
                    {/* <section className="home-cta">
                        <div className="home-cta-content">
                            <h2 className="home-cta-title">Ready to Transform Your Space?</h2>
                            <p className="home-cta-description">
                                Let's create something extraordinary together. Schedule a consultation with our design experts.
                            </p>
                            <a href="#contact" className="home-cta-btn">
                                Get Started Today
                            </a>
                        </div>
                    </section> */}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
