import React, { useState } from 'react';
import './Donate.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Donate = () => {
    const [activeTab, setActiveTab] = useState('one-time');
    const [amount, setAmount] = useState('');
    const [customAmount, setCustomAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [showForm, setShowForm] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const presetAmounts = [500, 1000, 2000, 5000];

    const impactCards = [
        { amount: 500, impact: 'Provides eye screening for 10 children', icon: '👓' },
        { amount: 1000, impact: 'Covers 1 cataract surgery', icon: '🩺' },
        { amount: 2000, impact: 'Supplies glasses for 20 patients', icon: '👁️' },
        { amount: 5000, impact: 'Funds 1 rural screening camp', icon: '🏕️' }
    ];

    const handleDonate = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setShowForm(false);
            setAmount('');
            setCustomAmount('');
        }, 3000);
    };

    return (
        <>
            <Navbar />
            <div className="donate-page">
                <div className="donate-container">

                    {/* Hero */}
                    <div className="donate-hero">
                        <h1>Your <span className="highlight">Generosity</span> Restores <span className="highlight">Sight</span></h1>
                        <p>Every rupee brings someone closer to the gift of vision. 100% of donations go towards free eye care services.</p>
                    </div>

                    {/* Impact Cards */}
                    <div className="impact-section">
                        <h2>What Your Donation Does</h2>
                        <div className="impact-grid">
                            {impactCards.map((item, i) => (
                                <div key={i} className="impact-card">
                                    <div className="impact-icon">{item.icon}</div>
                                    <div className="impact-amount">₹{item.amount}</div>
                                    <div className="impact-text">{item.impact}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Donation Box */}
                    <div className="donation-box">
                        <div className="donation-header">
                            <h2>Make a Donation</h2>
                            <p>Choose your contribution amount</p>
                        </div>

                        {/* Tabs */}
                        <div className="donation-tabs">
                            <button 
                                className={`tab-btn ${activeTab === 'one-time' ? 'active' : ''}`}
                                onClick={() => setActiveTab('one-time')}
                            >One-Time</button>
                            <button 
                                className={`tab-btn ${activeTab === 'monthly' ? 'active' : ''}`}
                                onClick={() => setActiveTab('monthly')}
                            >Monthly</button>
                        </div>

                        {/* Amount Options */}
                        <div className="amount-section">
                            <div className="preset-amounts">
                                {presetAmounts.map((amt) => (
                                    <button 
                                        key={amt}
                                        className={`amount-btn ${amount === amt ? 'active' : ''}`}
                                        onClick={() => { setAmount(amt); setCustomAmount(''); }}
                                    >
                                        ₹{amt}
                                    </button>
                                ))}
                            </div>
                            
                            <div className="custom-amount">
                                <input 
                                    type="number" 
                                    placeholder="Other amount (₹)"
                                    value={customAmount}
                                    onChange={(e) => { setCustomAmount(e.target.value); setAmount(''); }}
                                />
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div className="payment-section">
                            <h3>Payment Method</h3>
                            <div className="payment-options">
                                <label className="payment-option">
                                    <input 
                                        type="radio" 
                                        name="payment" 
                                        value="card"
                                        checked={paymentMethod === 'card'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <span>💳 Credit/Debit Card</span>
                                </label>
                                <label className="payment-option">
                                    <input 
                                        type="radio" 
                                        name="payment" 
                                        value="upi"
                                        checked={paymentMethod === 'upi'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <span>📱 UPI (GPay, PhonePe)</span>
                                </label>
                                <label className="payment-option">
                                    <input 
                                        type="radio" 
                                        name="payment" 
                                        value="netbanking"
                                        checked={paymentMethod === 'netbanking'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <span>🏦 Net Banking</span>
                                </label>
                            </div>
                        </div>

                        {/* Donate Button */}
                        <button 
                            className="donate-btn"
                            onClick={() => setShowForm(true)}
                            disabled={!amount && !customAmount}
                        >
                            Donate Now {(amount || customAmount) && `₹${amount || customAmount}`} →
                        </button>
                    </div>

                    {/* Tax Benefits */}
                    <div className="tax-benefits">
                        <div className="tax-icon">📋</div>
                        <div className="tax-text">
                            <h3>Tax Exemption Under 80G</h3>
                            <p>All donations are eligible for 50% tax exemption. Receipt will be sent to your email.</p>
                        </div>
                    </div>

                    {/* Other Ways to Give */}
                    <div className="other-ways">
                        <h2>Other Ways to Support</h2>
                        <div className="ways-grid">
                            <div className="way-card">
                                <div className="way-icon">🏢</div>
                                <h3>Corporate CSR</h3>
                                <p>Partner with us for your CSR initiatives</p>
                            </div>
                            <div className="way-card">
                                <div className="way-icon">🎁</div>
                                <h3>In-Kind Donation</h3>
                                <p>Equipment, medicines, or supplies</p>
                            </div>
                            <div className="way-card">
                                <div className="way-icon">💝</div>
                                <h3>Memorial Giving</h3>
                                <p>Donate in memory of a loved one</p>
                            </div>
                            <div className="way-card">
                                <div className="way-icon">📅</div>
                                <h3>Birthday Fundraiser</h3>
                                <p>Celebrate by giving back</p>
                            </div>
                        </div>
                    </div>

                    {/* Bank Details */}
                    <div className="bank-details">
                        <h3>🏦 Direct Bank Transfer</h3>
                        <div className="bank-grid">
                            <div><strong>Account Name:</strong> Sri Satya Sai Sanjeevani Eye Hospital</div>
                            <div><strong>Bank:</strong> State Bank of India</div>
                            <div><strong>Account No:</strong> 12345678901</div>
                            <div><strong>IFSC Code:</strong> SBIN0012345</div>
                            <div><strong>Branch:</strong> Yavatmal, Maharashtra</div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Payment Modal */}
            {showForm && (
                <div className="donate-modal" onClick={() => setShowForm(false)}>
                    <div className="donate-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setShowForm(false)}>×</button>
                        
                        {submitted ? (
                            <div className="success-message">
                                <div className="success-icon">✅</div>
                                <h3>Thank You for Your Donation!</h3>
                                <p>Your contribution of ₹{amount || customAmount} will help restore sight.</p>
                                <p className="small">Receipt sent to your email.</p>
                                <button className="done-btn" onClick={() => setShowForm(false)}>Close</button>
                            </div>
                        ) : (
                            <>
                                <h2>Complete Your Donation</h2>
                                <div className="donation-summary">
                                    <span>Amount:</span>
                                    <strong>₹{amount || customAmount}</strong>
                                </div>
                                
                                <form onSubmit={handleDonate} className="donate-form">
                                    <input type="text" placeholder="Full Name *" required />
                                    <input type="email" placeholder="Email Address *" required />
                                    <input type="tel" placeholder="Phone Number" />
                                    <input type="text" placeholder="PAN Card (for 80G receipt)" />
                                    <button type="submit" className="pay-btn">
                                        Pay ₹{amount || customAmount} Securely
                                    </button>
                                </form>
                                <p className="secure-note">🔒 Secure SSL Encrypted Payment</p>
                            </>
                        )}
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Donate;