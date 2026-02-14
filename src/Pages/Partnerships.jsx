import React, { useEffect, useRef } from 'react';
import './Partnerships.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Partnership = () => {
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

        document.querySelectorAll('.fade-up').forEach(el => {
            observerRef.current.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, []);

    const donors = [
        { id: 1, name: "National Stock Exchange, Mumbai", url: "https://www.nseindia.com/", icon: "🏛️" },
        { id: 2, name: "Owens Corning India, Mumbai", url: "https://www.owenscorning.com/en-in", icon: "🏭" },
        { id: 3, name: "Ekam Foundation, Mumbai", url: "https://www.ekamoneness.org/", icon: "❤️" },
        { id: 4, name: "Black & Veatch Pvt. Ltd., Mumbai", url: "https://www.bv.com/", icon: "🤝" }
    ];

    const categories = [
        { id: 1, title: "Cataract Surgery Support", desc: "Support life-changing cataract surgeries for rural communities.", image: "/images/cataract.jpg" },
        { id: 2, title: "Diagnostic Equipment", desc: "Help procure world-class diagnostic tools for eye-care facilities.", image: "/images/diagnostic.jpg" },
        { id: 3, title: "Ambulance & Outreach Support", desc: "Enable patient transportation and rural field outreach programmes.", image: "/images/ambulance.jpg" },
        { id: 4, title: "OPD & Medicine Support", desc: "Contribute to OPD operations and essential medicine distribution.", image: "/images/opd.jpg" }
    ];

    return (
      <>
      <Navbar/>
        <main className="partnership-page">
            <div className="container">
                {/* Header */}
                <div className="page-header fade-up">
                    <h1>Partnership & Support</h1>
                    <p>We seek financial support from you / your esteemed organization to help realise this noble initiative.</p>
                </div>

                {/* Support Card */}
                <section className="support-card fade-up">
                    <h2>About Partnership & Support</h2>
                    <p>Your valuable CSR contribution will directly support:</p>
                    <ul>
                        <li>🏥 Procurement of medical equipment</li>
                        <li>⚕️ Operational cost for cataract surgeries</li>
                        <li>👁️ Ophthalmic OPD strengthening</li>
                        <li>🚑 Ambulance & outreach vehicles</li>
                        <li>🔬 Diagnostic & surgical instruments</li>
                    </ul>
                    <p className="sustainability">The project will be sustained through public contributions, government aid and partnerships with agencies.</p>
                    <div className="highlight">
                        ✓ 80+ years of trust service • Sustainable impact • Transparent reporting • Valid CSR & 80G • Proven track record
                    </div>
                </section>

                {/* Donor Partners */}
                <section className="donors-section fade-up">
                    <h2>Our Donor Partners</h2>
                    <div className="donors-grid">
                        {donors.map(donor => (
                            <a key={donor.id} href={donor.url} target="_blank" rel="noopener noreferrer" className="donor-card">
                                <span className="donor-icon">{donor.icon}</span>
                                <span className="donor-name">{donor.name}</span>
                                <span className="donor-arrow">→</span>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Categories */}
                <section className="categories-section fade-up">
                    <h2>Partnership Categories</h2>
                    <div className="categories-grid">
                        {categories.map(cat => (
                            <div key={cat.id} className="category-card">
                                <div className="category-img">
                                    <img src={cat.image} alt={cat.title} loading="lazy" onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/400x250?text=Healthcare";
                                    }} />
                                    <span className="category-number">{cat.id}</span>
                                </div>
                                <div className="category-content">
                                    <h3>{cat.title}</h3>
                                    <p>{cat.desc}</p>
                                    <span className="category-link">Support →</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-section fade-up">
                    <div className="cta-content">
                        <h2>Join Hands With Us</h2>
                        <p>Your contribution can bring vision and hope to thousands</p>
                        <a href="/contact" className="cta-button">Become a Partner →</a>
                    </div>
                </section>
            </div>
        </main>
        <Footer/>
        </>
    );
};

export default Partnership;