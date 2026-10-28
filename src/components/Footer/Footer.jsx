import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  EMAIL,
  LOCATION,
  PHONE_DISPLAY,
  mailLink,
  telLink,
  whatsAppLink,
} from "../../data/contactInfo";

// FOOTER
function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Decorations", path: "/decoration" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Packages", path: "/packages" },
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

  const socialLinks = [
    {
      label: "WhatsApp",
      icon: faWhatsapp,
      href: whatsAppLink("Hi, I'd like to know more about JiSi Events"),
      external: true,
    },
    { label: "Call", icon: faPhone, href: telLink },
    { label: "Email", icon: faEnvelope, href: mailLink() },
  ];

  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row g-4 mb-4">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">JiSi Events & Decorations</h5>
            <p className="mb-3 small text-white-50">
              Making your events extraordinary with creative decorations and
              memorable experiences.
            </p>
            <div className="d-flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer-social d-inline-flex align-items-center justify-content-center rounded-circle text-white"
                  aria-label={s.label}
                  {...(s.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              {quickLinks.map((link) => (
                <li key={link.path} className="mb-2">
                  <Link to={link.path} className="footer-link small">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Info */}
          <div className="col-lg-3 col-md-6 col-6">
            <h6 className="fw-semibold mb-3">Policies & Info</h6>
            <ul className="list-unstyled">
              {policyLinks.map((link) => (
                <li key={link.path} className="mb-2">
                  <Link to={link.path} className="footer-link small">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-semibold mb-3">Contact Us</h6>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center">
                <span className="me-3 fs-5">📞</span>
                <div>
                  <small className="d-block text-white-50">Phone</small>
                  <a href={telLink} className="text-white text-decoration-none">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <span className="me-3 fs-5">✉️</span>
                <div>
                  <small className="d-block text-white-50">Email</small>
                  <a
                    href={mailLink()}
                    className="text-white text-decoration-none text-break"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <span className="me-3 fs-5">📍</span>
                <div>
                  <small className="d-block text-white-50">Location</small>
                  <span className="text-white small">{LOCATION}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <hr className="opacity-25" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="mb-0 small text-white-50">
            © {new Date().getFullYear()} JiSi Events & Decorations. All rights
            reserved.
          </p>
          <small className="text-white-50">
            Designed with ❤️ for memorable celebrations
          </small>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-link:hover {
          color: #fff;
        }
        .footer-social {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          transition: background 0.3s;
        }
        .footer-social:hover {
          background: var(--brand-pink);
          color: #fff;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
