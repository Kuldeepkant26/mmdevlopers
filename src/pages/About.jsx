import React, { useRef } from 'react';
import '../css/About.css';
import Footer from '../components/Footer';
import CardSwap, { Card } from '../component/CardSwap';
import AboutShowcase from '../components/AboutShowcase';
import CreativeJourney from '../components/CreativeJourney';
import SignatureProjects from '../components/SignatureProjects';
import ImmersiveVision from '../components/ImmersiveVision';
import { useTheme } from '../context/ThemeContext';

const About = () => {
    const { isDark } = useTheme();
    const heroRef = useRef(null);
    const showcaseRef = useRef(null);

    const heroImages = [
        'https://i.pinimg.com/1200x/1c/42/dc/1c42dcc6a057b4bf4112309a44ace50c.jpg',
        'https://i.pinimg.com/736x/5d/05/8f/5d058f76d46196760a0f359036c8c094.jpg',
        'https://i.pinimg.com/1200x/45/f4/39/45f4398b1cfcaca0e86cd878f4718a45.jpg'
    ];



    return (
        <div className={`ventures-page ${isDark ? 'ventures-page--dark' : 'ventures-page--light'}`}>
            <section
                ref={heroRef}
                className={`ventures-page__hero-section ${isDark ? 'ventures-page__hero-section--dark' : 'ventures-page__hero-section--light'}`}
            >
                <div className="ventures-page__hero-container">
                    <div className="ventures-page__hero-left">
                        <CardSwap
                            cardDistance={60}
                            verticalDistance={70}
                            delay={5000}
                            pauseOnHover={false}
                        >
                            {heroImages.map((src, idx) => (
                                <Card key={idx}>
                                    <div className="ventures-page__card">
                                        <img src={src} alt={`About hero ${idx + 1}`} className="ventures-page__card-image" />
                                    </div>
                                </Card>
                            ))}
                        </CardSwap>
                    </div>

                    <div className="ventures-page__hero-right">
                        <div className="ventures-page__hero-content">
                            <h1 className="ventures-page__hero-title">
                                Building Dreams,
                                <span className="ventures-page__hero-title-gradient"> Creating Homes</span>
                            </h1>
                            <p className="ventures-page__hero-description">
                                At MM Developers, we aim to redefine luxury in real estate by placing trust, comfort, and connection at the heart of everything we do. True luxury isn't just about what you see; it's about how it makes you feel.
                            </p>

                            <div className="ventures-page__hero-stats">
                                <div className="ventures-page__stat-item">
                                    <div className="ventures-page__stat-number">150+</div>
                                    <div className="ventures-page__stat-label">Projects Delivered</div>
                                </div>
                                <div className="ventures-page__stat-item">
                                    <div className="ventures-page__stat-number">10K+</div>
                                    <div className="ventures-page__stat-label">Happy Families</div>
                                </div>
                                <div className="ventures-page__stat-item">
                                    <div className="ventures-page__stat-number">25+</div>
                                    <div className="ventures-page__stat-label">Years Experience</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <div ref={showcaseRef}>
                <AboutShowcase />
            </div>

            <CreativeJourney />

            <SignatureProjects />

            <ImmersiveVision />

            <Footer />
        </div>
    );
};

export default About;
