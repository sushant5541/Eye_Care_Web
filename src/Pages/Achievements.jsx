import React, { useEffect, useRef } from 'react';
import './Achievements.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Achievements = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observerRef.current.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.award-card, .section-title, .awards-title, .subtitle').forEach(el => {
            observerRef.current.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, []);

    const maharashtraAwards = [
        {
            id: 1,
            title: "Shahu, Phule, Ambedkar Award 2022-23",
            description: "Govt. of Maharashtra honoured the trust with the prestigious 'Shahu, Phule, Ambedkar Award 2022-23' for outstanding social services felicitated by Chief Minister & Dy. C.M.",
            image: "/images/awd1.png",
            alt: "Shahu Phule Ambedkar Award"
        },
        {
            id: 2,
            title: "Certificate of Appreciation",
            description: "Awarded in recognition of outstanding commitment and valuable contribution to community service.",
            image: "/images/awd2.png",
            alt: "Certificate of Appreciation"
        }
    ];

    const governmentAwards = [
        {
            id: 3,
            title: "Shahu, Phule, Ambedkar Award 2022-23",
            description: "Certificates given by Govt. of Maharashtra honoured the trust with the prestigious for outstanding social services",
            image: "/images/awd3.png",
            alt: "Government Award Certificate"
        },
        {
            id: 4,
            title: "National Excellence in Education",
            description: "Recognized for transforming education through inclusive and accessible schooling for rural students.",
            image: "/images/award6.jpg",
            alt: "National Excellence in Education Award"
        }
    ];

    return (
      <>
      <Navbar/>
        <main className="achievements-page">
            <div className="container">
                {/* Page Header */}
                <div className="page-header">
                    <h1 className="page-title fade-up">Awards & Achievements</h1>
                    <p className="page-subtitle fade-up">
                        Recognitions received from Government of Maharashtra & Government of India
                    </p>
                    <div className="header-decoration fade-up">
                        <span className="line"></span>
                        <span className="icon">🏆</span>
                        <span className="line"></span>
                    </div>
                </div>

                {/* Maharashtra Government Awards */}
                <section className="awards-section">
                    <h2 className="section-title fade-up">
                        <span className="title-icon">🏅</span>
                        Maharashtra Government Awards
                    </h2>
                    
                    <div className="awards-grid">
                        {maharashtraAwards.map((award) => (
                            <div key={award.id} className="award-card fade-up">
                                <div className="award-image-wrapper">
                                    <img 
                                        src={award.image} 
                                        alt={award.alt}
                                        className="award-image"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/400x300?text=Award+Certificate";
                                        }}
                                    />
                                    <div className="award-badge">
                                        <span className="badge-icon">🏆</span>
                                    </div>
                                </div>
                                <div className="award-content">
                                    <h3 className="award-title">{award.title}</h3>
                                    <p className="award-description">{award.description}</p>
                                    <div className="award-footer">
                                        <span className="award-year">2022-23</span>
                                        <span className="award-type">Maharashtra Government</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Government of Maharashtra Recognitions */}
                <section className="awards-section">
                    <h2 className="section-title fade-up">
                        <span className="title-icon">🎖️</span>
                        Government of Maharashtra Recognitions
                    </h2>
                    
                    <div className="awards-grid">
                        {governmentAwards.map((award) => (
                            <div key={award.id} className="award-card fade-up">
                                <div className="award-image-wrapper">
                                    <img 
                                        src={award.image} 
                                        alt={award.alt}
                                        className="award-image"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/400x300?text=Government+Award";
                                        }}
                                    />
                                    <div className="award-badge">
                                        <span className="badge-icon">🎖️</span>
                                    </div>
                                </div>
                                <div className="award-content">
                                    <h3 className="award-title">{award.title}</h3>
                                    <p className="award-description">{award.description}</p>
                                    <div className="award-footer">
                                        <span className="award-year">2022-23</span>
                                        <span className="award-type">Government Recognition</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Achievement Stats */}
                <section className="stats-section fade-up">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon">🏆</div>
                            <div className="stat-number">2</div>
                            <div className="stat-label">Major State Awards</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">📜</div>
                            <div className="stat-number">4+</div>
                            <div className="stat-label">Certificates of Recognition</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">🎯</div>
                            <div className="stat-number">65+</div>
                            <div className="stat-label">Years of Service</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">👥</div>
                            <div className="stat-number">7L+</div>
                            <div className="stat-label">Lives Impacted</div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="cta-section fade-up">
                    <div className="cta-content">
                        <h3>Support Our Award-Winning Initiatives</h3>
                        <p>Join hands with SPM Trust to continue making a difference in communities.</p>
                        <a href="/donate" className="cta-button">
                            Partner With Us
                            <span className="arrow">→</span>
                        </a>
                    </div>
                </section>
            </div>
        </main>
<Footer/>
        </>
    );
};

export default Achievements;