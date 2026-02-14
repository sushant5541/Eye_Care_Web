import React, { useState } from 'react';
import './Recognitions.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Recognitions = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const documents = {
        pan: {
            id: 'pan',
            title: 'PAN Card',
            image: '/images/pan.png',
            alt: 'PAN Card'
        },
        annexure: [
            { id: 'ann1', title: 'Annexure 1', image: '/images/annexure-1.png', alt: 'Annexure 1' },
            { id: 'ann2', title: 'Annexure 2', image: '/images/annexure-2.png', alt: 'Annexure 2' },
            { id: 'ann3', title: 'Annexure 3', image: '/images/annexure-3.png', alt: 'Annexure 3' }
        ],
        registrations: [
            { id: 'reg', title: 'Registration Certificate', image: '/images/registration.png', alt: 'Registration Certificate' },
            { id: 'tax', title: 'Tax Certificate', image: '/images/tax.png', alt: 'Tax Certificate' }
        ]
    };

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
      <>
      <Navbar/>
        <main className="recognitions-page">
            <div className="container">
                {/* Page Header */}
                <div className="page-header">
                    <h1 className="page-title">Official Documents of SPM Trust</h1>
                    <div className="title-decoration">
                        <span className="line"></span>
                        <span className="icon">📄</span>
                        <span className="line"></span>
                    </div>
                </div>

                {/* PAN Card Section */}
                <section className="doc-section">
                    <h2 className="section-title">PAN Card</h2>
                    <div className="doc-grid">
                        <div 
                            className="doc-card"
                            onClick={() => openModal(documents.pan)}
                        >
                            <div className="doc-image-wrapper">
                                <img 
                                    src={documents.pan.image} 
                                    alt={documents.pan.alt}
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/400x300?text=PAN+Card";
                                    }}
                                />
                                <div className="doc-overlay">
                                    <span className="view-icon">🔍</span>
                                    <span className="view-text">Click to view</span>
                                </div>
                            </div>
                            <div className="doc-title">
                                <span className="doc-icon">📇</span>
                                <span>{documents.pan.title}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Annexure Documents Section */}
                <section className="doc-section">
                    <h2 className="section-title">Annexure Documents</h2>
                    <div className="doc-grid">
                        {documents.annexure.map((doc) => (
                            <div 
                                key={doc.id}
                                className="doc-card"
                                onClick={() => openModal(doc)}
                            >
                                <div className="doc-image-wrapper">
                                    <img 
                                        src={doc.image} 
                                        alt={doc.alt}
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/400x300?text=Annexure+Document";
                                        }}
                                    />
                                    <div className="doc-overlay">
                                        <span className="view-icon">🔍</span>
                                        <span className="view-text">Click to view</span>
                                    </div>
                                </div>
                                <div className="doc-title">
                                    <span className="doc-icon">📋</span>
                                    <span>{doc.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Registration Certificates Section */}
                <section className="doc-section">
                    <h2 className="section-title">Registration Certificates</h2>
                    <div className="doc-grid">
                        {documents.registrations.map((doc) => (
                            <div 
                                key={doc.id}
                                className="doc-card"
                                onClick={() => openModal(doc)}
                            >
                                <div className="doc-image-wrapper">
                                    <img 
                                        src={doc.image} 
                                        alt={doc.alt}
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/400x300?text=Certificate";
                                        }}
                                    />
                                    <div className="doc-overlay">
                                        <span className="view-icon">🔍</span>
                                        <span className="view-text">Click to view</span>
                                    </div>
                                </div>
                                <div className="doc-title">
                                    <span className="doc-icon">📜</span>
                                    <span>{doc.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Image Modal */}
                {selectedImage && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={closeModal}>×</button>
                            <button className="modal-back" onClick={closeModal}>← Back</button>
                            <div className="modal-image-wrapper">
                                <img 
                                    src={selectedImage.image} 
                                    alt={selectedImage.alt}
                                    className="modal-image"
                                />
                            </div>
                            <div className="modal-title">{selectedImage.title}</div>
                        </div>
                    </div>
                )}
            </div>
            <Footer/>
        </main>
        </>
    );
};

export default Recognitions;