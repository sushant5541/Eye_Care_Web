import React, { useState, useEffect } from 'react';
import './Gallery.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Gallery = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);

    // Gallery images data with Unsplash URLs
    const galleryImages = [
        {
            id: 1,
            title: 'Free Eye Screening Camp',
            category: 'camps',
            location: 'Kelapur Village',
            date: 'Feb 2026',
            image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&auto=format',
            patients: 156
        },
        {
            id: 2,
            title: 'Advanced LASIK Surgery',
            category: 'procedures',
            location: 'Operation Theatre',
            date: 'Jan 2026',
            image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format',
            doctor: 'Dr. Prakash Nandurkar'
        },
        {
            id: 3,
            title: 'Pediatric Eye Check-up',
            category: 'pediatric',
            location: 'Children\'s Clinic',
            date: 'Feb 2026',
            image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800&auto=format',
            children: 42
        },
        {
            id: 4,
            title: 'Corneal Transplant Success',
            category: 'surgeries',
            location: 'OT Complex',
            date: 'Jan 2026',
            image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800&auto=format',
            doctor: 'Dr. Sneha Kulkarni'
        },
        {
            id: 5,
            title: 'Rural Outreach Program',
            category: 'camps',
            location: 'Maregaon Block',
            date: 'Dec 2025',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format',
            patients: 203
        },
        {
            id: 6,
            title: 'Retina Surgery Milestone',
            category: 'surgeries',
            location: 'Retina Department',
            date: 'Jan 2026',
            image: 'https://images.unsplash.com/photo-1580281657527-47f249e24585?w=800&auto=format',
            milestone: '500th surgery'
        }
    ];

    // Get unique categories for filter dropdown
    const categories = ['all', ...new Set(galleryImages.map(img => img.category))];

    // Filter images based on search and category
    const filteredImages = galleryImages.filter(image => {
        const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (image.location && image.location.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Category display names
    const categoryNames = {
        all: 'All Categories',
        camps: 'Free Camps',
        procedures: 'Procedures',
        pediatric: 'Pediatric',
        surgeries: 'Surgeries',
        awareness: 'Awareness',
        events: 'Events',
        patients: 'Patient Stories'
    };

    return (
        <>
            <Navbar />
            <main className="gallery-page">
                <div className="container py-4">
                    {/* Page Header */}
                    <div className="gallery-header">
                        <h1 className="fw-bold">Our Gallery</h1>
                        <p className="gallery-subtitle">
                            Glimpses of our journey in restoring vision and serving communities
                        </p>
                    </div>

                    {/* Search & Filter Section */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mb-4">
                        <h2 className="section-title m-0">Moments of Care</h2>

                        <div className="d-flex gap-2 w-100 w-md-auto">
                            <input
                                id="searchInput"
                                type="text"
                                className="form-control search-box"
                                placeholder="🔍 Search by title or location..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <select
                                id="categoryFilter"
                                className="form-select filter-box"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {categoryNames[category] || category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="results-count">
                        Showing <span>{filteredImages.length}</span> {filteredImages.length === 1 ? 'photo' : 'photos'}
                    </div>

                    {/* Gallery Grid */}
                    {filteredImages.length > 0 ? (
                        <div id="galleryContainer" className="gallery-grid">
                            {filteredImages.map(image => (
                                <div
                                    key={image.id}
                                    className="gallery-item"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <div className="gallery-image-wrapper">
                                        <img
                                            src={image.image}
                                            alt={image.title}
                                            className="gallery-image"
                                            loading="lazy"
                                        />
                                        <div className="gallery-overlay">
                                            <span className="overlay-icon">🔍</span>
                                        </div>
                                    </div>
                                    <div className="gallery-caption">
                                        <h3 className="caption-title">{image.title}</h3>
                                        <div className="caption-details">
                                            <span className="caption-location">📍 {image.location}</span>
                                            <span className="caption-date">📅 {image.date}</span>
                                        </div>
                                        <span className="caption-category">
                                            {categoryNames[image.category]}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <div className="no-results-icon">🖼️</div>
                            <h3>No images found</h3>
                            <p>Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </div>
            </main>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="lightbox-modal" onClick={() => setSelectedImage(null)}>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="lightbox-image"
                        />
                        <div className="lightbox-info">
                            <h2>{selectedImage.title}</h2>
                            <div className="lightbox-meta">
                                <p><strong>📍 Location:</strong> {selectedImage.location}</p>
                                <p><strong>📅 Date:</strong> {selectedImage.date}</p>
                                {selectedImage.doctor && (
                                    <p><strong>👨‍⚕️ Doctor:</strong> {selectedImage.doctor}</p>
                                )}
                                {selectedImage.patients && (
                                    <p><strong>👥 Patients screened:</strong> {selectedImage.patients}</p>
                                )}
                                {selectedImage.children && (
                                    <p><strong>🧒 Children examined:</strong> {selectedImage.children}</p>
                                )}
                                {selectedImage.volunteers && (
                                    <p><strong>🤝 Volunteers:</strong> {selectedImage.volunteers}</p>
                                )}
                                {selectedImage.students && (
                                    <p><strong>🎒 Students:</strong> {selectedImage.students}</p>
                                )}
                                {selectedImage.milestone && (
                                    <p><strong>🏆 Milestone:</strong> {selectedImage.milestone}</p>
                                )}
                            </div>
                            <span className="lightbox-category">
                                {categoryNames[selectedImage.category]}
                            </span>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Gallery;