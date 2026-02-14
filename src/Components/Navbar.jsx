import React from "react";
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg mt-0">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src="/images/logo.png" alt="Sri Satya Sai logo" className="logo" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-3 gap-2">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="resourcesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/gallery">
                      Gallery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/news">
                      News
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="supportDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Support Us
                </a>
                <ul className="dropdown-menu" aria-labelledby="supportDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/partnerships">
                      Partnerships
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/volunteering">
                      Volunteering
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/donate">
                      Donations
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/recognitions">
                  Recognitions
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="workDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Work
                </a>
                <ul className="dropdown-menu" aria-labelledby="workDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/activities">
                      Activities
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/expenses">
                      Expenses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/achievements">
                      Achievements
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>

              <li className="nav-item ms-lg-3">
                <NavLink to="/donate" className="btn btn-donate">
                  ❤️ DONATE
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Marquee placed directly after navbar with no gap */}
      <div className="marquee-container">
        <div className="marquee-track">
          <span>
            Welcome to Satchikitsa Prasarak Mandal — Sri Satya Sai Sanjeevani Eye
            Hospital • Vision for All — Free Eye Care Initiative • Welcome to
            Satchikitsa Prasarak Mandal — Sri Satya Sai Sanjeevani Eye Hospital •
            Vision for All — Free Eye Care Initiative •
          </span>
        </div>
      </div>

        </>
    )
}