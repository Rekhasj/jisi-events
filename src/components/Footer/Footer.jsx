import React from "react";
import { Link } from "react-router-dom";

// FOOTER
function Footer() {
  const PhoneNumber = "+91 12345 67890";
  const Email = "info@jisievents.com";

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const policyLinks = [
    { name: "FAQ", path: "/faq" },
    { name: "Things to Remember", path: "/thingstoremember" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Refund & Cancellation", path: "/refund" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <footer className="bg-dark text-white py-5 mt-auto">
      <div className="container">
        {/* Main Footer Content */}
        <div className="row mb-4">
          {/* Company Info */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">JiSi Events & Decorations</h5>
            <p className="mb-3 small">
              Making your events extraordinary with creative decorations and
              memorable experiences.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white" aria-label="Facebook">
                <i
                  className="bi bi-facebook"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
              <a href="#" className="text-white" aria-label="Instagram">
                <i
                  className="bi bi-instagram"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
              <a href="#" className="text-white" aria-label="Twitter">
                <i className="bi bi-twitter" style={{ fontSize: "1.5rem" }}></i>
              </a>
              <a href="#" className="text-white" aria-label="YouTube">
                <i className="bi bi-youtube" style={{ fontSize: "1.5rem" }}></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              {quickLinks.map((link, idx) => (
                <li key={idx} className="mb-2">
                  <Link
                    to={link.path}
                    className="text-white-50 text-decoration-none small"
                    style={{ transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Info */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h6 className="fw-semibold mb-3">Policies & Info</h6>
            <ul className="list-unstyled">
              {policyLinks.map((link, idx) => (
                <li key={idx} className="mb-2">
                  <Link
                    to={link.path}
                    className="text-white-50 text-decoration-none small"
                    style={{ transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-semibold mb-3">Contact Us</h6>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center">
                <span className="me-3" style={{ fontSize: "1.2rem" }}>
                  📞
                </span>
                <div>
                  <small className=" d-block">Phone</small>
                  {/* text-muted */}
                  <a
                    href={`tel:${"9441880054"}`}
                    className="text-white text-decoration-none"
                  >
                    {PhoneNumber}
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <span className="me-3" style={{ fontSize: "1.2rem" }}>
                  ✉️
                </span>
                <div>
                  <small className=" d-block">Email</small>

                  <a
                    href={`mailto:${"rekhasj21@gmail.com"}`}
                    className="text-white text-decoration-none"
                  >
                    {Email}
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <span className="me-3" style={{ fontSize: "1.2rem" }}>
                  📍
                </span>
                <div>
                  {/* text-muted */}
                  <small className=" d-block">Location</small>
                  <span className="text-white small">Kuppam, AP,517425</span>
                </div>
              </div>
            </div>

            <hr className="my-4 opacity-25" />

            {/* Bottom Footer */}
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <p className="mb-0 small">
                  © 2025
                  {/* {new Date().getFullYear()}  */}
                  ,JiSi Events & Decorations. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <small className="text-muted">
                  Designed with ❤️ for memorable celebrations
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
