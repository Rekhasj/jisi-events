import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow sticky-top"
      style={{
        background: "linear-gradient(to right, #f472b6, #fef08a, #93c5fd)",
      }}
    >
      <div className="container">
        {/* Brand with Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <div
            className="rounded-circle bg-white d-flex align-items-center justify-content-center fw-bold me-2"
            style={{
              width: "50px",
              height: "50px",
              color: "#ec4899",
            }}
          >
            JiSi
          </div>

          <span className="fw-bold">JiSi Events & Decorations</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/decoration" className="nav-link" onClick={closeMenu}>
                Decorations
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/services" className="nav-link" onClick={closeMenu}>
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/gallery" className="nav-link" onClick={closeMenu}>
                Gallery
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/packages" className="nav-link" onClick={closeMenu}>
                Packages
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeMenu}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className="btn btn-light shadow-sm ms-lg-2 mt-2 mt-lg-0"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        .navbar-brand {
          color: #1f2937 !important;
          font-weight: 600;
        }
        
        .nav-link {
          color: #1f2937 !important;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .nav-link.active {
          color: #ec4899 !important;
          font-weight: 600;
        }

        .nav-link:hover {
          color: #ec4899 !important;
          text-decoration: underline;
        }
        
        @media (max-width: 991px) {
          .navbar-collapse {
            background: white;
            padding: 1rem;
            margin-top: 0.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
          }
        }
      `}</style>
    </nav>
  );
}

export default NavBar;
