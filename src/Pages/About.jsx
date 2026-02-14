import React, { useEffect, useRef } from 'react';
import './About.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const About = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Handle different element types
                    if (element.classList.contains('section')) {
                        element.classList.add('animate-fade');
                    }
                    
                    if (element.classList.contains('about-section')) {
                        const left = element.querySelector('.about-left');
                        const right = element.querySelector('.about-right');
                        if (left) left.classList.add('animate-left');
                        if (right) right.classList.add('animate-right');
                    }
                    
                    if (element.classList.contains('team-card')) {
                        element.style.animation = 'scaleUp 0.5s ease forwards';
                    }
                    
                    if (element.classList.contains('info-box')) {
                        element.classList.add('animate-scale');
                    }
                    
                    if (element.classList.contains('two-col')) {
                        const items = element.querySelectorAll('div');
                        items.forEach((item, idx) => {
                            item.classList.add(idx === 0 ? 'animate-left' : 'animate-right');
                            item.style.animationDelay = idx === 0 ? '0s' : '0.2s';
                        });
                    }
                    
                    // Stop observing after animation
                    observerRef.current.unobserve(element);
                }
            });
        }, observerOptions);

        // Start observing elements
        const elementsToObserve = document.querySelectorAll(
            '.section, .about-section, .team-card, .info-box, .two-col'
        );
        
        elementsToObserve.forEach(el => observerRef.current.observe(el));

        // Cleanup
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    const leadershipTeam = [
        {
            id: 1,
            name: "Dr. Prakash Nandurkar",
            position: "Secretary",
            image: "/images/logo.png"
        },
        {
            id: 2,
            name: "Shri XYZ Name",
            position: "President",
            image: "/images/hero.jpg"
        },
        {
            id: 3,
            name: "Shri ABC Name",
            position: "Coordinator",
            image: "/images/leader3.jpg"
        }
    ];

    const majorDonors = [
        "National Stock Exchange, Mumbai",
        "Owens Corning India, Mumbai",
        "Ekam Foundation, Mumbai",
        "Black & Veatch Pvt. Ltd., Mumbai"
    ];

    return (
        <main>
            {/* HERO SECTION */}
            <Navbar/>
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center gy-4">
                        <div className="col-lg-6">
                            <h1 className="hero-title">
                                SRI SATYA SAI SANJEEVANI EYE HOSPITAL
                            </h1>
                            <p>
                                We provide free, accessible eye-care services to underprivileged
                                and socio-economically weaker communities. Our mission is to
                                prevent avoidable blindness through cataract surgeries, awareness
                                programs, and regular eye check-ups. We aim to build a
                                <span className="hero-highlight"> super specialty eye hospital</span>
                                offering advanced treatment for various eye diseases, ensuring
                                quality vision care for all.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-image-wrapper">
                                <img 
                                    src="./images/about.jpg" 
                                    alt="Sri Satya Sai Sanjeevani Eye Hospital" 
                                    className="hero-image-main"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/600x400?text=Sri+Satya+Sai+Hospital";
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT US SECTION */}
            <section className="about-section">
                <div className="container">
                    <h2 className="about-title">About Us</h2>
                    <div className="about-content">
                        <div className="about-left">
                            <p>
                                To provide free eye-care facilities to restore and ensure eyesight
                                for underprivileged, socio-economically weaker, and neglected
                                sections of society. We aim to eradicate blindness through cataract
                                surgeries and promote awareness on the importance of eye health.
                            </p>
                        </div>
                        <div className="about-right">
                            <p>
                                We conduct awareness programs, regular check-ups, and educational
                                campaigns in rural and urban areas. Our goal is to establish a
                                super-speciality eye hospital to treat minor to major eye diseases
                                for the underprivileged community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* VISION & MISSION SECTION */}
            <section className="about-section">
                <div className="container">
                    <h2 className="about-title">Vision & Mission</h2>
                    <div className="about-content">
                        <div className="about-left">
                            <p>
                                Our mission is to provide free, accessible, and high-quality
                                eye-care facilities to restore and protect the vision of
                                underprivileged, socio-economically weaker, and neglected sections
                                of society. Through dedicated outreach, we identify individuals
                                suffering from preventable eye conditions and offer them timely
                                diagnosis and treatment. Our focus includes early detection,
                                comprehensive check-ups, corrective measures, and surgical
                                interventions for conditions such as cataracts—the leading cause of
                                blindness in India.
                            </p>
                        </div>
                        <div className="about-right">
                            <p>
                                Along with treatment, we aim to promote awareness about the
                                importance of eye health, preventive care, and regular screening
                                through educational programs and community-based initiatives. By
                                collaborating with local healthcare workers, volunteers, and rural
                                networks, we strive to reach remote and underserved areas. Our
                                long-term vision is to establish a super-speciality eye hospital
                                that provides world-class care for both minor and major eye
                                diseases, empowering individuals with the gift of sight and a
                                brighter future.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* GOALS & OBJECTIVE SECTION */}
            <section className="about-section">
                <div className="container">
                    <h2 className="about-title">Goals & Objective</h2>
                    <div className="about-content">
                        <div className="about-left">
                            <p>
                                We aim to eliminate avoidable blindness by providing timely cataract
                                surgeries and promoting awareness about eye health and regular
                                check-ups. Through eye camps, educational programs, and community
                                outreach, we support rural, urban, and underprivileged populations.
                            </p>
                        </div>
                        <div className="about-right">
                            <p>
                                Our Objective is to establish a super speciality eye hospital
                                offering comprehensive treatment for minor to major eye diseases,
                                ensuring accessible care for all.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* LEADERSHIP TEAM SECTION */}
            <section className="team-section">
                <div className="container">
                    <h2 className="team-title">Leadership Team</h2>
                    <div className="team-container">
                        {leadershipTeam.map((member) => (
                            <div key={member.id} className="team-card">
                                <div className="team-image-wrapper">
                                    <img 
                                        src={member.image} 
                                        alt={member.name}
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/150x150?text=Team+Member";
                                        }}
                                    />
                                </div>
                                <h3>{member.name}</h3>
                                <p>{member.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ORGANIZATION DETAILS */}
            <div className="wrapper">
                <div className="container">
                    <h1>Organization Details</h1>

                    {/* SECTION 1: ORGANIZATION OVERVIEW */}
                    <div className="section">
                        <div className="section-title">
                            <span></span>
                            <h3>Organization Overview</h3>
                        </div>
                        <div className="info-box">
                            <strong>Satchikitsa Prasarak Mandal — Sri Satya Sai Sanjeevani Eye Hospital</strong><br />
                            Vision for All — Free Eye Care Initiative<br />
                            Location: Shri Satya Sai Vidya Nagari, Dr. Nandurkar Vidyalaya Campus,
                            Yavatmal, Maharashtra - 445001.
                        </div>
                    </div>

                    {/* SECTION 2: COMMUNICATION DETAILS */}
                    <div className="section">
                        <div className="section-title">
                            <span></span>
                            <h3>Communication Details</h3>
                        </div>
                        <div className="communication-details">
                            <div className="detail-item">
                                <strong>Email:</strong>
                                <div className="detail-links">
                                    <a className="contact-link" href="mailto:prakashnandurkar9575@gmail.com">
                                        prakashnandurkar9575@gmail.com
                                    </a>
                                    <span className="separator">,</span>
                                    <a className="contact-link" href="mailto:spmtrustytl@gmail.com">
                                        spmtrustytl@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="detail-item">
                                <strong>Phone Numbers:</strong>
                                <div className="detail-links">
                                    <a className="contact-link" href="tel:+919011503530">
                                        9011503530
                                    </a>
                                    <span className="separator">,</span>
                                    <a className="contact-link" href="tel:+919763448555">
                                        9763448555
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 3: REGISTRATION DETAILS */}
                    <div className="section">
                        <div className="section-title">
                            <span></span>
                            <h3>Trust Registrations & Legal Information</h3>
                        </div>
                        <div className="two-col">
                            <div className="registration-col">
                                <dl>
                                    <dt>Legal Status:</dt>
                                    <dd>Public Trust</dd>
                                    
                                    <dt>Public Trust Registration No.:</dt>
                                    <dd>F/40.ytl (4/10/1962)</dd>
                                    
                                    <dt>Society Registration No.:</dt>
                                    <dd>39/1955-5 (24/8/1955)</dd>
                                    
                                    <dt>12A Registration:</dt>
                                    <dd>4/0005/12A/47/95-96/S-608 (14/8/1996)</dd>
                                </dl>
                            </div>
                            <div className="registration-col">
                                <dl>
                                    <dt>80G Registration:</dt>
                                    <dd>ITBA/EXM/S/80G/2019-20/1016482559(1)</dd>
                                    
                                    <dt>PAN No.:</dt>
                                    <dd>AAFTS0166E</dd>
                                    
                                    <dt>Niti Aayog Registration:</dt>
                                    <dd>Unique ID: MH/2014/0084891</dd>
                                    
                                    <dt>CSR Registration No.:</dt>
                                    <dd>CSR 00007572 (03/06/20-21)</dd>
                                </dl>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 4: MAJOR DONOR PARTNERS */}
                    <div className="section">
                        <div className="section-title">
                            <span></span>
                            <h3>Major Donor Partners</h3>
                        </div>
                        <div className="donor-badges">
                            {majorDonors.map((donor, index) => (
                                <div key={index} className="donor">
                                    {donor}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SECTION 5: MAJOR ACHIEVEMENT */}
                    <div className="section">
                        <div className="section-title">
                            <span></span>
                            <h3>Major Achievement</h3>
                        </div>
                        <div className="achievement-box">
                            <p>
                                Govt. of Maharashtra honoured the trust with the prestigious
                                <strong> "Shahu, Phule, Ambedkar Award 2022-23"</strong>
                                with a Cash Prize of Rs. 7,50,000/- for outstanding social services,
                                felicitated by:
                            </p>
                            <ul className="achievement-list">
                                <li>Chief Minister Shri Eknath Shinde</li>
                                <li>Dy. CM Shri Ajit Pawar</li>
                                <li>Dy. CM Shri Devendra Fadnavis</li>
                            </ul>
                        </div>
                    </div>

                    {/* SECTION 6: QUICK SUMMARY */}
                    <div className="section">
                        <div className="section-title">
                            <span></span>
                            <h3>Quick Summary</h3>
                        </div>
                        <div className="summary-card">
                            <p>
                                <strong>Secretary:</strong> Dr. Prakash Nandurkar<br />
                                <strong>Contact:</strong> <a className="contact-link" href="tel:+919011503530">9011503530</a>
                            </p>
                            <p>
                                This organization has been serving the community through eye care
                                services, social activities, nutrition support, education, and medical
                                outreach for decades under trusted leadership.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    );
};

export default About;