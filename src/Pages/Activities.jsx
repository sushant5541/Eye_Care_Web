import React, { useEffect, useRef } from 'react';
import './Activities.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Activities = () => {
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

        document.querySelectorAll('.fade-up, .project-block, .counter-card, .gallery-card').forEach(el => {
            observerRef.current.observe(el);
        });

        // Counter Animation
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const updateCounter = () => {
                const target = parseInt(counter.getAttribute('data-target'));
                const current = parseInt(counter.innerText.replace(/,/g, ''));
                const increment = target / 50;
                
                if (current < target) {
                    counter.innerText = Math.ceil(current + increment).toLocaleString();
                    setTimeout(updateCounter, 30);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });

        return () => observerRef.current?.disconnect();
    }, []);

    const projects = [
        {
            id: 1,
            title: "Sai Dhanwantri Hospital — Covid Response",
            icon: "🦠",
            tagline: "Rapid, large-scale intervention during the pandemic.",
            description: [
                "In a challenging situation of Covid-19, SPM Trust took initiative to meet the crisis head-on. A building of 30,000 sq.ft. was dedicated to start a full-fledged Sai Dhanwantri Covid Hospital in Yavatmal.",
                "The trust procured an oxygen concentrator plant on loan of ₹80 lakh and made available 150 beds with oxygen out of a 250-bed facility — saving hundreds of lives. Services were offered at minimum fees as per Government guidelines."
            ],
            meta: "250 beds • 150 oxygen beds • ₹80L oxygen plant",
            cta: "Donate for Healthcare",
            ctaIcon: "❤️"
        },
        {
            id: 2,
            title: "Sri Satya Sai Narayan Seva — Feed the Hungry (Since 1995)",
            icon: "🍚",
            tagline: "Sustained free meal service for caretakers & the needy.",
            description: [
                "Providing free meals to needy patients' relatives and caretakers at Government Medical College, Yavatmal. The program began on 1st November 1995 and runs continuously, having served more than 7,00,000 people.",
                "Caretakers often lose daily wages to stand beside their loved ones. Narayan Seva ensures they receive dignified, wholesome food during this period, reflecting the trust's deep social commitment."
            ],
            meta: "Over 7 lakh free meals served",
            cta: "Sponsor Meals",
            ctaIcon: "🍽️"
        },
        {
            id: 3,
            title: "Eye Check-up & Surgery Camps",
            icon: "👁️",
            tagline: "Thousands of cataract patients served in rural areas.",
            description: [
                "• Rural Eye Camps: Health check-up camps organized across multiple villages, providing free eye examinations and spectacles.",
                "• Surgery Assistance: Cataract and other eye surgeries supported at Yavatmal & Nagpur hospitals — with over 3,000 patients benefited.",
                "• Impact: Reduced avoidable blindness among senior citizens and economically weaker sections."
            ],
            meta: "Free camps • Spectacles • Surgeries",
            cta: "Support Eye Care",
            ctaIcon: "👓"
        },
        {
            id: 4,
            title: "Mother & Child Care",
            icon: "👶",
            tagline: "Free maternal & child health services for rural communities.",
            description: [
                "The Trust established Sri Satya Sai Sanjeevani Mother & Child Hospital in Yavatmal to secure healthy motherhood and childhood.",
                "Regular services provided free of cost include maternal care, antenatal care, ultrasonography, lab investigations, fetal echocardiography, normal & C-section deliveries, medicines, nutritional supplements and counselling.",
                "• Regular camps in 3 Primary Health Centers & 1 Rural Hospital",
                "• Free medicines & protein supplements (Sai Sure)",
                "• Over 5,000 women supported since 2017"
            ],
            meta: "Mother & child care • Nutrition • Camps",
            cta: "Support Mothers & Children",
            ctaIcon: "🤱"
        },
        {
            id: 5,
            title: "Heart Screening & Diagnostic Camps",
            icon: "🫀",
            tagline: "Large-scale pediatric screenings and life-saving referrals.",
            description: [
                "Regular heart screening camps were organized for needy children. Counselling and travel arrangements were provided wherever needed.",
                "Over 1,00,000 children were screened, and around 90 critical cases were diagnosed and referred for free corrective surgery."
            ],
            meta: "Screenings • Diagnosis • Free surgeries",
            cta: "Help Save a Child",
            ctaIcon: "❤️"
        },
        {
            id: 6,
            title: "Charitable Homeopathic Dispensary (Since 1958)",
            icon: "🌿",
            tagline: "Low-cost, long-term care for chronic conditions.",
            description: [
                "A charitable homeopathic dispensary has been functioning for over 65 years, serving more than 3,50,000 patients with continued care and follow-up.",
                "Common ailments treated include asthma, eczema, gastric disorders, rheumatic arthritis and chronic skin diseases — providing much needed relief to economically weaker sections."
            ],
            meta: "Since 1958 • 3.5 lakh+ patients",
            cta: "Support Dispensary",
            ctaIcon: "💊"
        },
        {
            id: 7,
            title: "Sri Satya Sai All Religions Mass Marriage (Since 1994)",
            icon: "💑",
            tagline: "Removing financial burden — celebrating unity & dignity.",
            description: [
                "To reduce the heavy financial burden of marriage on poor families, the Trust conducts multi-religion mass marriages. The program covers:",
                "• Marriage registration and legal documentation",
                "• Clothing, mangalsutra and household utensils",
                "• Meal arrangements for relatives and invitees",
                "Over 2,000 marriages have been supported and the concept has inspired similar initiatives across Maharashtra, with government incentives added later."
            ],
            meta: "All religions • 2,000+ marriages",
            cta: "Sponsor a Marriage",
            ctaIcon: "💍"
        },
        {
            id: 8,
            title: "Sports: Building Youth & Champions",
            icon: "⚽",
            tagline: "State, national & international achievements.",
            description: [
                "• Grassroots Clubs: Sports clubs and district associations created to encourage youth participation, with over 600 players competing at state level.",
                "• National Recognition: Around 150 players selected for higher-level sports camps and events; 11 players received state awards.",
                "• International Exposure: Players participated in international street football tournaments in countries like Germany and Australia."
            ],
            meta: "Clubs • Camps • Awards • Tours",
            cta: "Support Young Athletes",
            ctaIcon: "🏆"
        },
        {
            id: 9,
            title: "Education & Schools",
            icon: "📚",
            tagline: "Three schools — cultural, academic & holistic growth.",
            description: [
                "The Trust runs three schools from primary classes to board exams. Emphasis is laid on:",
                "• Cultural and value-based grooming",
                "• Academic excellence and competitive preparation",
                "• Sports and co-curricular development",
                "Admissions are inclusive — irrespective of caste, creed or economic background. Education is viewed as a tool for transformation: 'When one educates many, one can change the world.'"
            ],
            meta: "3 schools • holistic development",
            cta: "Support Education",
            ctaIcon: "🎓"
        },
        {
            id: 10,
            title: "Disaster Relief & Environment",
            icon: "🌍",
            tagline: "Relief operations and long-term environmental action.",
            description: [
                "• National Calamity Response: Teams mobilized to Gujarat (Bhuj earthquake), Orissa cyclone, Nagapattnam tsunami and other disaster sites — recognized by local administration.",
                "• Local Flood Relief: During Kolhapur, Sangli and Yavatmal floods, students and volunteers collected and distributed essential items.",
                "• Environment Drives: Tree plantation (one student one tree), plastic elimination campaigns, sapling distribution and cleanliness drives."
            ],
            meta: "Relief kits • Trees • Clean environment",
            cta: "Support Relief & Green Drives",
            ctaIcon: "🌱"
        }
    ];

    const gallery = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80",
            label: "Sai Dhanwantri Covid Hospital, Yavatmal"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
            label: "Sri Satya Sai Narayan Seva — Free Meals"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
            label: "Eye Check-up & Cataract Surgery Camps"
        }
    ];

    return (
        <>
        <Navbar/>
        <main className="activities-page">
            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="hero-bg"></div>
                <div className="hero-content">
                    <div className="hero-left">
                        <div className="hero-badge">
                            <span className="badge-icon">🤝</span>
                            SPM Trust • Health, Education & Social Welfare
                        </div>
                        <h1>Projects Implemented / Completed by SPM Trust</h1>
                        <p className="hero-text">
                            From Covid hospital support to eye care, Narayan Seva, maternal & child health, 
                            education, sports and disaster relief — SPM Trust has consistently served communities 
                            across Yavatmal and beyond.
                        </p>
                        <div className="hero-tags">
                            <span className="tag">🏥 Healthcare Programs</span>
                            <span className="tag">🎓 Education & Sports</span>
                            <span className="tag">❤️ Social Service</span>
                        </div>
                        <div className="hero-buttons">
                            <a href="/donate" className="btn-primary">
                                Donate Now <span className="arrow">→</span>
                            </a>
                            <a href="#covid" className="btn-secondary">
                                View Key Projects <span className="arrow">↓</span>
                            </a>
                        </div>
                    </div>
                    <div className="hero-right">
                        <div className="hero-card">
                            <img 
                                src="https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&w=900&q=80" 
                                alt="SPM Trust community programs"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&w=900&q=80";
                                }}
                            />
                            <p>SPM Trust serves through hospitals, camps, mass marriages, sports, schools and relief activities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMPACT COUNTERS */}
            <section className="impact-section">
                <div className="section-header">
                    <h2>
                        <span className="header-icon">📊</span>
                        Impact Snapshot
                    </h2>
                    <p>Live counters showing the scale of SPM Trust's long-term interventions.</p>
                </div>

                <div className="impact-grid">
                    <div className="counter-card fade-up">
                        <div className="counter" data-target="700000">7,00,000</div>
                        <div className="counter-label">Meals served in Narayan Seva</div>
                        <div className="counter-note">Since 1995</div>
                    </div>
                    <div className="counter-card fade-up">
                        <div className="counter" data-target="100000">1,00,000</div>
                        <div className="counter-label">Children screened for heart issues</div>
                        <div className="counter-note">Across multiple camps</div>
                    </div>
                    <div className="counter-card fade-up">
                        <div className="counter" data-target="3000">3,000</div>
                        <div className="counter-label">Eye surgeries supported</div>
                        <div className="counter-note">Cataract & other procedures</div>
                    </div>
                    <div className="counter-card fade-up">
                        <div className="counter" data-target="2000">2,000</div>
                        <div className="counter-label">Mass marriages conducted</div>
                        <div className="counter-note">All religions, all communities</div>
                    </div>
                </div>
            </section>

            {/* GALLERY SECTION */}
            <section className="gallery-section">
                <div className="section-header">
                    <h2>
                        <span className="header-icon">🖼️</span>
                        Project Glimpses
                    </h2>
                    <p>Visual highlights from key programs and on-ground activities.</p>
                </div>

                <div className="gallery-grid">
                    {gallery.map((item) => (
                        <div key={item.id} className="gallery-card fade-up">
                            <div className="gallery-image-wrapper">
                                <img 
                                    src={item.image} 
                                    alt={item.label}
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.src = "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80";
                                    }}
                                />
                            </div>
                            <div className="gallery-label">{item.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* PROJECTS LIST */}
            <section className="projects-section">
                {projects.map((project, index) => (
                    <div key={project.id} id={`project-${project.id}`} className="project-block fade-up">
                        <div className="project-header">
                            <h3 className="project-title">
                                <span className="title-icon">{project.icon}</span>
                                {index + 1}) {project.title}
                            </h3>
                            <p className="project-tagline">{project.tagline}</p>
                        </div>

                        <div className="project-body">
                            {project.description.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>

                        <div className="project-footer">
                            <span className="project-meta">{project.meta}</span>
                            <a href="/donate" className="project-cta">
                                <span className="cta-icon">{project.ctaIcon}</span>
                                {project.cta}
                                <span className="arrow">→</span>
                            </a>
                        </div>
                    </div>
                ))}
            </section>

            {/* CONTACT SECTION */}
            <section className="contact-section fade-up">
                <div className="contact-card">
                    <h3>
                        <span className="contact-icon">🤝</span>
                        Get Involved / Contact
                    </h3>
                    <p className="contact-tagline">Support programs, volunteer, or partner through CSR.</p>
                    
                    <div className="contact-body">
                        <p>
                            To support or partner with SPM Trust, you can reach out for volunteering, donations, 
                            or institutional partnerships. Your contribution strengthens healthcare, education, 
                            sports, and social welfare in the region.
                        </p>
                        <ul>
                            <li>✓ CSR partnerships for health & eye-care projects</li>
                            <li>✓ Support for Narayan Seva & Mother-Child programs</li>
                            <li>✓ Scholarships & sports sponsorships for youth</li>
                        </ul>
                        <div className="contact-info">
                            <div className="info-item">
                                <span className="info-icon">📧</span>
                                <strong>Email:</strong> spmtrustytl@gmail.com
                            </div>
                            <div className="info-item">
                                <span className="info-icon">📞</span>
                                <strong>Phone:</strong> +91 9763448555 / 9011503530
                            </div>
                        </div>
                    </div>

                    <div className="contact-footer">
                        <span className="contact-meta">Every contribution creates real impact.</span>
                        <a href="/donate" className="contact-cta">
                            <span className="cta-icon">❤️</span>
                            Donate Now
                            <span className="arrow">→</span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    );
};

export default Activities;