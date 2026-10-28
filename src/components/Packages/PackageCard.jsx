import React from "react";
import { mailLink, whatsAppLink } from "../../data/contactInfo";

// PACKAGES
function PackageCard({ title, price, items, accentColor = "#ec4899" }) {
  return (
    <div
      className="p-4 bg-white rounded-4 shadow-sm text-center h-100 d-flex flex-column hover-lift"
      style={{ borderTop: `4px solid ${accentColor}` }}
    >
      <h3 className="h4 fw-bold mb-3">{title}</h3>
      {price && <p className="h3 fw-bold text-primary mb-4">{price}</p>}

      <ul className="list-unstyled mb-4 flex-grow-1 text-start">
        {items.map((it, idx) => (
          <li key={idx} className="mb-2 d-flex">
            <span className="me-2" style={{ color: accentColor }}>
              ✓
            </span>
            {it}
          </li>
        ))}
      </ul>

      <div className="d-flex gap-2 justify-content-center flex-wrap">
        <a
          href={whatsAppLink(`Hi, I'd like to book the ${title} package`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp rounded-pill px-4 py-2"
        >
          📱 Book on WhatsApp
        </a>

        <a
          href={mailLink(`Package Inquiry - ${title}`)}
          className="btn btn-outline-dark rounded-pill px-4 py-2"
        >
          ✉️ Email
        </a>
      </div>
    </div>
  );
}

export default PackageCard;
