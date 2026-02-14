import React, { useState, useEffect } from 'react';
import './Hero.css';

const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Track mouse movement for parallax effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 10;
            const y = (e.clientY / window.innerHeight) * 10;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="hero-section">
            {/* Single Background Image with Parallax */}
            <div 
                className="background-container"
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                }}
            >
                <div className="background-image"></div>
                <div className="background-overlay"></div>
                
                {/* Floating Particles */}
                <div className="floating-particles">
                    {[...Array(20)].map((_, i) => (
                        <div 
                            key={i}
                            className="particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                width: `${Math.random() * 6 + 2}px`,
                                height: `${Math.random() * 6 + 2}px`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="title-line">SRI SATYA SAI</span>
                        <span className="title-line highlight">SANJEEVANI EYE HOSPITAL</span>
                    </h1>
                    
                    <div className="hero-description">
                        <p className="fade-in">
                            We provide <span className="highlight-text">free, accessible eye-care</span> services to underprivileged
                            and socio-economically weaker communities.
                        </p>
                        <p className="fade-in delay-1">
                            Our mission is to prevent avoidable blindness through cataract surgeries,
                            awareness programs, and regular eye check-ups.
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;