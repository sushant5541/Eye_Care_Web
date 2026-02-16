import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn, MdMedicalServices } from 'react-icons/md';
import { GiHealthNormal, GiHeartPlus } from 'react-icons/gi';
import { BiLogoGmail } from 'react-icons/bi';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Column 1 - Organization Info */}
                <div className="footer-col footer-col-brand">
                    <img src="/images/logo.png" alt="Sri Satya Sai Sanjeevani Eye Hospital Logo" className="footer-logo" />
                    <h3 className="footer-brand-title">Satchikitsa Prasarak Mandal</h3>
                    <p className="footer-brand-subtitle"><strong>Sri Satya Sai Sanjeevani Eye Hospital</strong></p>
                    
                    <div className="footer-address">
                        <MdLocationOn className="address-icon" />
                        <p>
                            Shri Satya Sai Vidya Nagari,<br />
                            Dr. Nandurkar Vidyalaya Campus,<br />
                            Yavatmal, Maharashtra - 445001.
                        </p>
                    </div>
                    
                    <p className="footer-tagline">
                        <GiHeartPlus className="tagline-icon" />
                        Vision for All — Free Eye Care & Social Service Initiative
                    </p>

                    <div className="social-links">
                        <a href="https://www.facebook.com/" className="social-icon facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com/" className="social-icon twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com/" className="social-icon linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://www.instagram.com/" className="social-icon instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com/" className="social-icon youtube" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Column 2 - About & Resources */}
                <div className="footer-col">
                    <h4 className="footer-heading">About Us</h4>
                    <ul className="footer-list">
                        <li><a href="/about">Who We Are</a></li>
                        <li><a href="/about">Vision & Mission</a></li>
                        <li><a href="/about">Goals & Objectives</a></li>
                        <li><a href="/about">Leadership Team</a></li>
                        <li><a href="/achievements">Achievements</a></li>
                    </ul>

                    <h4 className="footer-heading footer-heading-margin">Resources</h4>
                    <ul className="footer-list">
                        <li><a href="/news">News</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/partnerships">Partnerships</a></li>
                        <li><a href="/volunteering">Volunteering</a></li>
                        <li><a href="/donate">Donation</a></li>
                    </ul>
                </div>

                {/* Column 3 - Our Work & Certificates */}
                <div className="footer-col">
                    <h4 className="footer-heading">Our Work</h4>
                    <ul className="footer-list">
                        <li><a href="/social-services">Social Services</a></li>
                        <li><a href="/mass-marriages">Religious Mass Marriages</a></li>
                        <li><a href="/sports">Sports Achievements</a></li>
                        <li><a href="/health-camps">Health Camps</a></li>
                        <li><a href="/events">Events & Cultural Activities</a></li>
                    </ul>

                    <h4 className="footer-heading footer-heading-margin">Certificates</h4>
                    <ul className="footer-list">
                        <li><a href="/achievements">Achievements</a></li>
                        <li><a href="/expenses">Expenses</a></li>
                        <li><a href="/recognitions">Recognition</a></li>
                    </ul>
                </div>

                {/* Column 4 - Contact & Donors */}
                <div className="footer-col">
                    <h4 className="footer-heading">Contact Details</h4>
                    
                    <div className="footer-contact-item">
                        <BiLogoGmail className="contact-icon" />
                        <div className="contact-detail">
                            <a href="mailto:prakashnandurkar9575@gmail.com">prakashnandurkar9575@gmail.com</a><br />
                            <a href="mailto:spmtrustytl@gmail.com">spmtrustytl@gmail.com</a>
                        </div>
                    </div>

                    <div className="footer-contact-item">
                        <MdPhone className="contact-icon" />
                        <div className="contact-detail">
                            <a href="tel:+919011503530">+91 90115 03530</a>, <a href="tel:+919763448555">+91 97634 48555</a>
                        </div>
                    </div>

                    <div className="footer-contact-item">
                        <MdMedicalServices className="contact-icon" />
                        <div className="contact-detail">
                            <strong>Secretary:</strong><br />Dr. Prakash Nandurkar
                        </div>
                    </div>

                    <h4 className="footer-heading footer-heading-margin">Major Donors</h4>
                    <ul className="footer-list donor-list">
                        <li><a href="https://www.nseindia.com/" target="_blank" rel="noopener noreferrer">🏦 National Stock Exchange, Mumbai</a></li>
                        <li><a href="https://www.owenscorning.com/en-in/composites/showcases/india" target="_blank" rel="noopener noreferrer">🏭 Owens Corning India</a></li>
                        <li><a href="https://ekam.ngo/" target="_blank" rel="noopener noreferrer">🤝 Ekam Foundation</a></li>
                        <li><a href="https://www.bv.com/" target="_blank" rel="noopener noreferrer">⚡ Black & Veatch Pvt. Ltd.</a></li>
                    </ul>

                    <div className="footer-btn-container">
                        <a href="/Contact" className="footer-btn">
                            <span>Contact Us</span>
                            <span className="btn-arrow">→</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p className="copyright">
                        © 2025 SPM — Sri Satya Sai Sanjeevani Eye Hospital
                    </p>
                    <p className="credit">
                        Designed & Developed by <span className="developer">Guru Software Solutions</span>
                    </p>
                    <p className="rights">
                        All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;