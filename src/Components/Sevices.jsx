import React, { useState } from 'react';
import './Services.css';

const Services = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const activities = [
        {
            id: 1,
            title: "OPD & Diagnosis",
            description: "Free eye check-ups with expert doctors for early detection of eye issues.",
            image: "/images/opd-01.jpg" 
        },
        {
            id: 2,
            title: "Cataract Surgery",
            description: "Free cataract and essential surgeries to restore eyesight.",
            image: "/images/cataract.jpg"
        },
        {
            id: 3,
            title: "Food Distribution",
            description: "Committed to 'Feeding the Hungry', we deliver healthy meals to patients' caretakers, the elderly, and economically weaker communities.",
            image: "/images/serve3.jpg"
        },
        {
            id: 4,
            title: "Awareness Programs",
            description: "Educating communities about eye health and preventive care.",
            image: "/images/health.jpeg"
        },
        {
            id: 5,
            title: "Mass Marriage",
            description: "Uniting couples from all communities through a dignified, free-of-cost mass marriage ceremony.",
            image: "/images/merriage5.jpg"
        },
        {
            id: 6,
            title: "Sports Activities",
            description: "Encouraging children and young adults to channel their energy into healthy, productive, and goal-oriented activities.",
            image: "/images/sports.jpg"
        }
    ];

    return (
        <section className="services-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Activities</h2>
                    <p className="section-subtitle">
                        Delivering essential, free eye-care services to restore vision and
                        support underprivileged communities.
                    </p>
                </div>

                <div className="services-grid">
                    {activities.map((activity) => (
                        <div 
                            key={activity.id}
                            className={`service-card ${hoveredCard === activity.id ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredCard(activity.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Image Container */}
                            <div className="card-image-container">
                                <img 
                                    src={activity.image} 
                                    alt={activity.title}
                                    className="card-image"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzQ0YTg5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Fc3QgSG9zcGl0YWwgSW1hZ2U8L3RleHQ+PC9zdmc+";
                                    }}
                                />
                                <div className="image-overlay"></div>
                                <div className="image-number">{activity.id}</div>
                            </div>
                            {/* Card Content */}
                            <div className="card-content">
                                <h3 className="card-title">{activity.title}</h3>
                                <p className="card-description">{activity.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
