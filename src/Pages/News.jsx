import React, { useState, useEffect } from 'react';
import './News.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const News = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedArticle, setSelectedArticle] = useState(null);

    // Categories
    const categories = [
        { id: 'all', label: 'All News', icon: '📰' },
        { id: 'clinical', label: 'Clinical', icon: '🏥' },
        { id: 'community', label: 'Community', icon: '🤝' },
        { id: 'stories', label: 'Patient Stories', icon: '❤️' }
    ];

    // News articles with Unsplash images
    const newsArticles = [
        {
            id: 1,
            category: 'clinical',
            date: '10 Feb 2026',
            title: 'Advanced Blade-Free LASIK Now Available',
            summary: 'New laser technology offers faster recovery and enhanced precision for vision correction.',
            image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&auto=format',
            author: 'Dr. Prakash Nandurkar',
            content: `We are proud to introduce the latest generation of bladeless LASIK technology at Sri Satya Sai Sanjeevani Eye Hospital. This advanced procedure requires no corneal flap creation, resulting in faster healing time, reduced dry eye symptoms, and enhanced night vision quality. Patients can now return to normal activities within 24 hours.`,
            tags: ['LASIK', 'Technology']
        },
        {
            id: 2,
            category: 'community',
            date: '8 Feb 2026',
            title: 'Free Cataract Camp Reaches 500+ Rural Seniors',
            summary: 'Mobile eye unit screened patients in 5 remote villages, identifying 78 cataract surgeries.',
            image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&auto=format',
            author: 'Community Team',
            content: `Our week-long screening camp in Kelapur, Maregaon, and Zari villages examined 523 seniors. We identified 78 patients requiring immediate cataract surgery and prescribed 142 reading glasses. All surgeries will be performed free of cost through our CSR initiative.`,
            tags: ['Free Camp', 'Cataract']
        },
        {
            id: 3,
            category: 'stories',
            date: '28 Jan 2026',
            title: 'Farmer Sees First Sunrise After Corneal Transplant',
            summary: 'Ramaji Pawar, 67, returns to farming after bilateral corneal transplant surgery.',
            image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format',
            author: 'Patient Stories',
            content: `"I had forgotten the color of the sky," says Ramaji Pawar, a farmer from Pandharkawada. A fungal corneal ulcer left him with dense scars in both eyes. Our team arranged donor corneas within three weeks. Today, he has 20/60 vision and can work independently. "I saw my grandson's face for the first time yesterday," he shares.`,
            tags: ['Corneal Transplant', 'Success Story']
        },
        {
            id: 4,
            category: 'clinical',
            date: '25 Jan 2026',
            title: 'New Paediatric Glaucoma Clinic Inaugurated',
            summary: 'Specialized facility for early diagnosis and treatment of childhood glaucoma.',
            image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800&auto=format',
            author: 'Dr. Sneha Kulkarni',
            content: `Childhood glaucoma accounts for 5% of pediatric blindness in India. Our new dedicated clinic offers examination under anesthesia, microcatheter-assisted surgery, and family counseling services. Early signs parents should watch for: excessive tearing, light sensitivity, and cloudy corneas in infants.`,
            tags: ['Pediatric', 'Glaucoma']
        },
        {
            id: 5,
            category: 'community',
            date: '22 Jan 2026',
            title: 'World Sight Day 2026: Free Screenings',
            summary: 'October 10 - Register now for free eye check-ups and expert talks.',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format',
            author: 'Events Team',
            content: `Mark your calendars! On October 10, we're hosting free comprehensive eye screenings, glaucoma checks, and diabetic retinopathy evaluations. Children's vision screening and interactive awareness sessions will also be conducted. Pre-registration is mandatory.`,
            tags: ['Event', 'Free Check-up']
        },
        {
            id: 6,
            category: 'stories',
            date: '18 Jan 2026',
            title: '500th Free Retina Surgery Milestone',
            summary: 'Hospital achieves landmark under "Save Sight" program for diabetic patients.',
            image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800&auto=format',
            author: 'Medical Team',
            content: `We have successfully completed 500 free retina surgeries for diabetic retinopathy patients through our CSR-funded "Save Sight" program. Each surgery costs approximately ₹25,000 in private hospitals, but we provide them completely free. This milestone represents 500 families saved from blindness.`,
            tags: ['Retina', 'Diabetes', 'Milestone']
        }
    ];

    const filteredArticles = activeCategory === 'all' 
        ? newsArticles 
        : newsArticles.filter(a => a.category === activeCategory);

    const featuredArticle = newsArticles[0];

    return (
        <>
            <Navbar />
            <main className="news-page">
                <div className="container">
                    {/* Header */}
                    <div className="news-header">
                        <h1>News & Updates</h1>
                        <p>Stay informed about the latest advancements, community initiatives, and patient success stories from our hospital.</p>
                    </div>

                    {/* Featured Article */}
                    <div className="featured-article">
                        <div className="featured-image">
                            <img src={featuredArticle.image} alt={featuredArticle.title} />
                            <span className="featured-badge">✨ Featured</span>
                        </div>
                        <div className="featured-content">
                            <span className="article-category">{featuredArticle.category}</span>
                            <h2>{featuredArticle.title}</h2>
                            <p>{featuredArticle.summary}</p>
                            <div className="article-meta">
                                <span>📅 {featuredArticle.date}</span>
                                <span>👨‍⚕️ {featuredArticle.author}</span>
                            </div>
                            <button className="read-more" onClick={() => setSelectedArticle(featuredArticle)}>
                                Read Full Story →
                            </button>
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="category-filter">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat.id)}
                            >
                                <span>{cat.icon}</span> {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* News Grid */}
                    <div className="news-grid">
                        {filteredArticles.map(article => (
                            <article key={article.id} className="news-card">
                                <div className="card-image">
                                    <img src={article.image} alt={article.title} />
                                    <span className="card-category">{article.category}</span>
                                </div>
                                <div className="card-content">
                                    <div className="card-date">📅 {article.date}</div>
                                    <h3>{article.title}</h3>
                                    <p>{article.summary}</p>
                                    <div className="card-footer">
                                        <span className="card-author">👨‍⚕️ {article.author}</span>
                                        <button className="card-btn" onClick={() => setSelectedArticle(article)}>
                                            Read More →
                                        </button>
                                    </div>
                                    <div className="card-tags">
                                        {article.tags.map(tag => (
                                            <span key={tag} className="tag">#{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>

            {/* Article Modal */}
            {selectedArticle && (
                <div className="modal" onClick={() => setSelectedArticle(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedArticle(null)}>×</button>
                        <img src={selectedArticle.image} alt={selectedArticle.title} className="modal-image" />
                        <div className="modal-body">
                            <span className="modal-category">{selectedArticle.category}</span>
                            <h2>{selectedArticle.title}</h2>
                            <div className="modal-meta">
                                <span>📅 {selectedArticle.date}</span>
                                <span>👨‍⚕️ {selectedArticle.author}</span>
                            </div>
                            <p className="modal-summary">{selectedArticle.summary}</p>
                            <div className="modal-text">
                                {selectedArticle.content.split('\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                            <div className="modal-tags">
                                {selectedArticle.tags.map(tag => (
                                    <span key={tag} className="tag">#{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default News;