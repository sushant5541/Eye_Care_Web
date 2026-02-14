// src/components/Carousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    const autoPlayRef = useRef(null);

    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
            title: "Modern Hospital Facility",
            description: "State-of-the-art infrastructure for world-class eye care",
            icon: "🏥"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1350",
            title: "Advanced Diagnostics",
            description: "Cutting-edge technology for accurate eye examinations",
            icon: "🔬"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
            title: "Surgical Excellence",
            description: "Minimally invasive procedures with high success rates",
            icon: "⚕️"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1586773860418-dc22f8b874bc?w=1350",
            title: "Patient-Centered Care",
            description: "Compassionate treatment with personalized attention",
            icon: "❤️"
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (isAutoPlaying && !isHovering) {
            autoPlayRef.current = setInterval(() => {
                nextSlide();
            }, 3000);
        } else {
            clearInterval(autoPlayRef.current);
        }

        return () => clearInterval(autoPlayRef.current);
    }, [isAutoPlaying, isHovering]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };


    return (
        <div className="carousel-container">
            <div className="carousel-header">
                <h2 className="carousel-title">
                    <span className="title-icon">🌟</span>
                    Our Eye Care Excellence
                </h2>
                <p className="carousel-subtitle">Discover our state-of-the-art facilities and services</p>
            </div>
            
            <div 
                className="custom-carousel"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Progress Bar */}


                {/* Slides */}
                <div 
                    className="carousel-track" 
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div 
                            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`} 
                            key={slide.id}
                        >
                            <div className="slide-image-container">
                                <img 
                                    src={slide.image} 
                                    alt={slide.title} 
                                    className="slide-image"
                                />
                                <div className="image-overlay"></div>
                            </div>
                            
                            <div className="carousel-caption">
                                <div className="caption-icon">{slide.icon}</div>
                                <h3>{slide.title}</h3>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Navigation Buttons */}
                <div className="carousel-controls">
                    <button 
                        className="carousel-btn prev-btn" 
                        onClick={prevSlide}
                        aria-label="Previous slide"
                    >
                        <span className="btn-icon">←</span>

                    </button>
                    <button 
                        className="carousel-btn next-btn" 
                        onClick={nextSlide}
                        aria-label="Next slide"
                    >
                        <span className="btn-icon">→</span>
                    </button>
                </div>

                {/* Slide counter */}
                {/* <div className="slide-counter">
                    <span className="current-slide">{currentIndex + 1}</span>
                    <span className="counter-separator">/</span>
                    <span className="total-slides">{slides.length}</span>
                </div> */}
            </div>

            {/* Quick Stats */}
            <div className="carousel-stats">
                <div className="stat-item">
                    <div className="stat-number">{slides.length}</div>
                    <div className="stat-label">Services</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Care Available</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Success Rate</div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;