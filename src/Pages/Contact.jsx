import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Contact = () => {
    const observerRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

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

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name || formData.name.length < 3) {
            newErrors.name = 'Please enter at least 3 characters.';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        const mobileRegex = /^[0-9]{10}$/;
        if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
            newErrors.mobile = 'Please enter a valid 10-digit mobile number.';
        }

        if (!formData.subject || formData.subject.length < 3) {
            newErrors.subject = 'Please enter at least 3 characters.';
        }

        if (!formData.message || formData.message.length < 10) {
            newErrors.message = 'Please enter at least 10 characters.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
        // Clear error when user starts typing
        if (errors[id]) {
            setErrors(prev => ({
                ...prev,
                [id]: null
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitted(true);
            // Reset form after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    subject: '',
                    message: ''
                });
            }, 3000);
        }
    };

    const socialLinks = [
        { icon: '📘', url: 'https://facebook.com', label: 'Facebook' },
        { icon: '🐦', url: 'https://twitter.com', label: 'Twitter' },
        { icon: '📷', url: 'https://instagram.com', label: 'Instagram' },
        { icon: '🔗', url: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: '▶️', url: 'https://youtube.com', label: 'YouTube' },
        { icon: '💬', url: 'https://wa.me/919011503530', label: 'WhatsApp' }
    ];

    return (
      <>
      <Navbar/>
        <main className="contact-page">
            <div className="container">
                {/* Page Header */}
                <div className="page-header-wrapper fade-up">
                    <h1 className="page-title">Contact Us</h1>
                    <p className="page-subtitle">
                        Reach out to Sri Satya Sai Sanjeevani Eye Hospital — we're here to
                        help with enquiries, partnerships, volunteering and patient support.
                    </p>
                    <div className="header-decoration">
                        <span className="line"></span>
                        <span className="icon">📞</span>
                        <span className="line"></span>
                    </div>
                </div>

                {/* Intro Card */}
                <section className="intro-section fade-up">
                    <div className="intro-card">
                        <p>
                            For any questions about our services, free eye-care initiatives,
                            partnerships, CSR collaboration or volunteering opportunities,
                            please fill out the form below or contact us directly using the
                            details provided.
                        </p>
                    </div>
                </section>

                {/* Contact Grid */}
                <section className="contact-grid-section fade-up">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="info-card">
                            <h2 className="info-title">Get in Touch</h2>
                            
                            <div className="info-items">
                                <div className="info-item">
                                    <span className="info-icon">📍</span>
                                    <div className="info-text">
                                        Shri Satya Sai Vidya Nagari,<br />
                                        Dr. Nandurkar Vidyalaya Campus,<br />
                                        Yavatmal, Maharashtra - 445001.
                                    </div>
                                </div>

                                <div className="info-item">
                                    <span className="info-icon">📧</span>
                                    <div className="info-text">
                                        prakashnandurkar9575@gmail.com<br />
                                        spmtrustytl@gmail.com
                                    </div>
                                </div>

                                <div className="info-item">
                                    <span className="info-icon">📞</span>
                                    <div className="info-text">
                                        9011503530, 9763448555
                                    </div>
                                </div>

                                <div className="info-item">
                                    <span className="info-icon">👤</span>
                                    <div className="info-text">
                                        <strong>Secretary:</strong> Dr. Prakash Nandurkar
                                    </div>
                                </div>

                                <div className="info-item">
                                    <span className="info-icon">⏰</span>
                                    <div className="info-text">
                                        <strong>Timings:</strong> Mon – Sat, 9:00 AM to 6:00 PM
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="social-links">
                                <h3 className="social-title">Follow Us</h3>
                                <div className="social-icons">
                                    {socialLinks.map((social, index) => (
                                        <a 
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-icon"
                                            aria-label={social.label}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="form-card">
                            <h2 className="form-title">Send us a Message</h2>
                            
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`form-input ${errors.name ? 'error' : ''}`}
                                        placeholder="Enter your full name"
                                    />
                                    {errors.name && <div className="error-message">{errors.name}</div>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`form-input ${errors.email ? 'error' : ''}`}
                                        placeholder="name@example.com"
                                    />
                                    {errors.email && <div className="error-message">{errors.email}</div>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="mobile">Mobile Number</label>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className={`form-input ${errors.mobile ? 'error' : ''}`}
                                        placeholder="10-digit mobile number"
                                        maxLength="10"
                                    />
                                    {errors.mobile && <div className="error-message">{errors.mobile}</div>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`form-input ${errors.subject ? 'error' : ''}`}
                                        placeholder="Subject of your message"
                                    />
                                    {errors.subject && <div className="error-message">{errors.subject}</div>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                                        placeholder="Write your message here"
                                        rows="5"
                                    ></textarea>
                                    {errors.message && <div className="error-message">{errors.message}</div>}
                                </div>

                                <button type="submit" className="submit-button">
                                    <span className="button-icon">📨</span>
                                    Send Message
                                    <span className="button-arrow">→</span>
                                </button>

                                {isSubmitted && (
                                    <div className="success-message">
                                        ✅ Thank you! Your message has been submitted.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </section>

                {/* Map */}
                <section className="map-section fade-up">
                    <div className="map-container">
                        <iframe
                            title="Hospital Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14959.2411118624!2d78.0989895871582!3d20.390710899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3e8addfe3db15%3A0x9180a3a869c83907!2sDr.%20Bhausaheb%20Nandurkar%20School!5e0!3m2!1sen!2sin!4v1763366128999!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </section>
            </div>
        </main>
        <Footer/>
        </>
    );
};

export default Contact;