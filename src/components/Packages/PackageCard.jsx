import React from "react";

// PACKAGES
function PackageCard({ title, price, items }) {
  const PhoneNumber = "911234567890";
  const Email = "info@jisievents.com";
  const WhatsAppLink = `https://wa.me/${PhoneNumber}?text=Hi, I'd like to book the ${title} package`;

  return (
    <div className="p-4 bg-white rounded shadow-sm text-center h-100 d-flex flex-column">
      <h3 className="h4 fw-bold mb-3">{title}</h3>
      <p className="h3 fw-bold text-primary mb-4">{price}</p>

      <ul className="list-unstyled mb-4 flex-grow-1">
        {items.map((it, idx) => (
          <li key={idx} className="mb-2">
            • {it}
          </li>
        ))}
      </ul>

      <div className="d-flex gap-2 justify-content-center flex-wrap">
        <a
          href={WhatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success px-4 py-2"
        >
          📱 Book on WhatsApp
        </a>

        <a
          href={`mailto:${Email}?subject=${encodeURIComponent(
            "Package Inquiry - " + title
          )}`}
          className="btn btn-outline-dark px-4 py-2"
        >
          ✉️ Email
        </a>
      </div>
    </div>
  );
}

export default PackageCard;
