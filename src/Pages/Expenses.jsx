import React, { useEffect, useRef } from 'react';
import './Expenses.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Expenses = () => {
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

        document.querySelectorAll('.fade-up').forEach(el => {
            observerRef.current.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, []);

    const patientData = [
        { category: 'OPD / Medical Camps', perDay: '300 – 400', perMonth: '6,000 – 8,000', perYear: '70,000 – 80,000' },
        { category: 'Surgery', perDay: '40 – 50', perMonth: '800 – 1,000', perYear: '8,000 – 10,000' },
        { category: 'Student Screening', perDay: '150 – 200', perMonth: '3,000 – 4,000', perYear: '24,000 – 25,000' }
    ];

    const trainingData = [
        { beneficiary: 'Doctors', count: '100' },
        { beneficiary: 'Medical Personnel', count: '150' },
        { beneficiary: 'Asha Workers', count: '500' },
        { beneficiary: 'Anganwadi Sevika', count: '500' }
    ];

    const infrastructureData = [
        { no: 1, facility: 'Hospital Infrastructure 30,000 Sq.ft.', cost: '₹ 6,10,00,000' },
        { no: 2, facility: 'Furniture, Chambers', cost: '₹ 20,00,000' },
        { no: 3, facility: 'Operation Theatres', cost: '₹ 20,30,000' },
        { no: 4, facility: 'Diagnostic & Surgical Equipment', cost: '₹ 60,00,000' },
        { no: 5, facility: 'Ambulance', cost: '₹ 18,00,000' },
        { no: 6, facility: 'Bus (Transportation)', cost: '₹ 20,00,000' },
        { no: 7, facility: 'Training Facilities', cost: '₹ 4,00,000' }
    ];

    const expensePerPatient = [
        { no: 1, category: 'Personnel Program (Surgeons, Doctors, Support Staff)', cost: '1,548' },
        { no: 2, category: 'Administration (PR, Security, Housekeeping)', cost: '422.40' },
        { no: 3, category: 'Medical Consumables (Lenses, Medicines, Spectacles, Printing, Disposables)', cost: '2,654.40' },
        { no: 4, category: 'Overhead Cost (Electricity, Water, Tea, Meals)', cost: '774' }
    ];

    const handlePrint = () => {
        window.print();
    };

    return (
      <>
      <Navbar/>
        <main className="expenses-page">
            <div className="container">
                {/* Print Button */}
                <div className="print-section fade-up">
                    <button className="btn-print" onClick={handlePrint}>
                        <span className="print-icon">📄</span>
                        Download / Print PDF
                    </button>
                </div>

                {/* Page Header */}
                <div className="page-header fade-up">
                    <h1 className="page-title">Project Data Summary — SPM Trust</h1>
                    <p className="page-subtitle">
                        A comprehensive overview of patient services, training, facilities and
                        funding requirements for Sri Satya Sai Sanjeevani Eye Hospital.
                    </p>
                    <div className="header-decoration">
                        <span className="line"></span>
                        <span className="icon">📊</span>
                        <span className="line"></span>
                    </div>
                </div>

                {/* Data Collection Section */}
                <section className="data-section fade-up">
                    <h2 className="section-title">
                        <span className="title-icon">📋</span>
                        Data Collection & Documentation
                    </h2>
                    <div className="summary-card">
                        <p>
                            The data of patients examined, surgeries performed, and patient
                            outcomes are collected and documented properly to assess the impact
                            across the region.
                        </p>
                    </div>
                </section>

                {/* Expected Patients Section */}
                <section className="data-section fade-up">
                    <h2 className="section-title">
                        <span className="title-icon">👥</span>
                        Expected Patient Details
                    </h2>
                    <div className="table-wrapper">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Per Day</th>
                                    <th>Per Month</th>
                                    <th>Per Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patientData.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.category}</td>
                                        <td>{row.perDay}</td>
                                        <td>{row.perMonth}</td>
                                        <td>{row.perYear}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Training Section */}
                <section className="data-section fade-up">
                    <h2 className="section-title">
                        <span className="title-icon">🎓</span>
                        Training & Capacity Building
                    </h2>
                    <div className="table-wrapper">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Beneficiary</th>
                                    <th>Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trainingData.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.beneficiary}</td>
                                        <td className="text-right">{row.count}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Infrastructure Section */}
                <section className="data-section fade-up">
                    <h2 className="section-title">
                        <span className="title-icon">🏥</span>
                        Existing Infrastructure and Facilities
                    </h2>
                    <div className="table-wrapper">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Facility</th>
                                    <th>Capital Cost (INR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {infrastructureData.map((row) => (
                                    <tr key={row.no}>
                                        <td className="text-center">{row.no}</td>
                                        <td>{row.facility}</td>
                                        <td className="text-right cost">{row.cost}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2" className="text-right"><strong>Total</strong></td>
                                    <td className="text-right total-cost"><strong>₹ 7,52,30,000</strong></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </section>

                {/* Funding Requests Section */}
                <section className="data-section fade-up">
                    <h2 className="section-title">
                        <span className="title-icon">💰</span>
                        Funding Requests
                    </h2>
                    <div className="table-wrapper">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Cost (INR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Operational cost for 10,000 Cataract Patients @ ₹5400 each</td>
                                    <td className="text-right cost">₹ 5,40,00,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Expense Per Patient Section */}
                <section className="data-section fade-up">
                    <h2 className="section-title">
                        <span className="title-icon">💉</span>
                        Details of Expenses per Patient Surgery
                    </h2>
                    <div className="table-wrapper">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Expense Category</th>
                                    <th>Total Cost (₹)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expensePerPatient.map((row) => (
                                    <tr key={row.no}>
                                        <td className="text-center">{row.no}</td>
                                        <td>{row.category}</td>
                                        <td className="text-right">₹ {row.cost}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2" className="text-right"><strong>Grand Total</strong></td>
                                    <td className="text-right total-cost"><strong>₹ 5,398.80</strong></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </section>

                {/* Conclusion Section */}
                <section className="data-section fade-up">
                    <h2 className="section-title">
                        <span className="title-icon">🤝</span>
                        Conclusion
                    </h2>
                    <div className="summary-card highlight-card">
                        <p>
                            We seek financial support from you / your esteemed organization to
                            help realise this noble initiative. CSR funding will be utilized
                            for medical equipment, surgeries, OPD facilities, and outreach
                            vehicles. Funds will be allocated as per Annexure.
                        </p>
                        <div className="conclusion-footer">
                            <a href="/contact" className="cta-button">
                                Partner With Us
                                <span className="arrow">→</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        <Footer/>
        </>
    );
};

export default Expenses;