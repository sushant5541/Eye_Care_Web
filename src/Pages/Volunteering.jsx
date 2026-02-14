import React, { useState } from 'react';
import './Volunteering.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Volunteering = () => {
    const [showForm, setShowForm] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

    const opportunities = [
        {
            id: 1,
            title: 'Patient Support',
            icon: '❤️',
            desc: 'Guide patients during clinic hours',
            image: 'https://images.unsplash.com/photo-1576765974823-b4b62e5d1306?w=600&auto=format',
            spots: 12
        },
        {
            id: 2,
            title: 'Rural Camps',
            icon: '🏕️',
            desc: 'Join village screening camps',
            image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=600&auto=format',
            spots: 8
        },
        {
            id: 3,
            title: 'Medical Students',
            icon: '🩺',
            desc: 'Assist doctors in OPD',
            image: 'https://images.unsplash.com/photo-1584036553516-bf632ceeea09?w=600&auto=format',
            spots: 6
        },
        {
            id: 4,
            title: 'Awareness',
            icon: '📢',
            desc: 'Spread eye health awareness',
            image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=600&auto=format',
            spots: 15
        }
    ];

    const stats = [
        { number: '250+', label: 'Volunteers', icon: '👥' },
        { number: '45k+', label: 'Hours', icon: '⏰' },
        { number: '75+', label: 'Camps', icon: '🏕️' },
        { number: '15k+', label: 'Patients', icon: '❤️' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setShowForm(false);
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '' });
        }, 2000);
    };

    return (
        <>
            <Navbar />
            <div className="vol-page">
                <div className="vol-container">
                    
                    {/* Hero */}
                    <div className="vol-hero">
                        <div className="vol-hero-text">
                            <span className="vol-badge">⚕️ VOLUNTEER</span>
                            <h1>Lend Your <span className="vol-highlight">Time</span>,<br />Restore <span className="vol-highlight">Sight</span></h1>
                            <p>Join 250+ volunteers. No medical background needed. Training provided.</p>
                            <button className="vol-btn vol-btn-primary" onClick={() => setShowForm(true)}>
                                Apply Now →
                            </button>
                        </div>
                        <div className="vol-hero-img">
                            <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&auto=format" alt="Volunteer" />
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="vol-stats">
                        {stats.map((stat, i) => (
                            <div key={i} className="vol-stat-item">
                                <div className="vol-stat-icon">{stat.icon}</div>
                                <div className="vol-stat-number">{stat.number}</div>
                                <div className="vol-stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Opportunities */}
                    <div className="vol-opportunities">
                        <div className="vol-section-header">
                            <h2>Current Opportunities</h2>
                            <p>Choose a role that fits your schedule</p>
                        </div>
                        <div className="vol-grid">
                            {opportunities.map(opp => (
                                <div key={opp.id} className="vol-card">
                                    <div className="vol-card-img">
                                        <img src={opp.image} alt={opp.title} />
                                        <span className="vol-card-spots">{opp.spots} spots</span>
                                    </div>
                                    <div className="vol-card-body">
                                        <h3><span className="vol-card-icon">{opp.icon}</span> {opp.title}</h3>
                                        <p>{opp.desc}</p>
                                        <button className="vol-card-btn" onClick={() => { setSelectedRole(opp); setShowForm(true); }}>
                                            Apply →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="vol-cta">
                        <h2>Ready to Make a Difference?</h2>
                        <p>Flexible timings • Certificate provided • All are welcome</p>
                        <button className="vol-btn vol-btn-primary vol-btn-large" onClick={() => setShowForm(true)}>
                            Start Your Journey →
                        </button>
                    </div>

                </div>
            </div>

            {/* Modal */}
            {showForm && (
                <div className="vol-modal" onClick={() => setShowForm(false)}>
                    <div className="vol-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="vol-modal-close" onClick={() => setShowForm(false)}>×</button>
                        
                        {submitted ? (
                            <div className="vol-success">
                                <div className="vol-success-icon">✅</div>
                                <h3>Application Sent!</h3>
                                <p>We'll contact you within 3 days.</p>
                                <button className="vol-btn vol-btn-primary" onClick={() => setShowForm(false)}>Close</button>
                            </div>
                        ) : (
                            <>
                                <h2>Volunteer Application</h2>
                                {selectedRole && (
                                    <div className="vol-selected-role">
                                        {selectedRole.icon} {selectedRole.title}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit} className="vol-form">
                                    <input type="text" placeholder="Full Name *" required 
                                        value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                                    <input type="email" placeholder="Email Address *" required
                                        value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                                    <input type="tel" placeholder="Phone Number *" required
                                        value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                                    <button type="submit" className="vol-btn vol-btn-submit">Submit Application</button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Volunteering;