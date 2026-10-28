import React from "react";
import { Link, useParams } from "react-router-dom";
import { decorationData } from "../../data/decorationData";
import { galleryData } from "../../data/galleryData";
import { whatsAppLink } from "../../data/contactInfo";

// Which gallery section holds the real photos for each decoration category
const galleryForCategory = {
  "baby-shower": "Baby Shower",
  birthday: "Birthday",
  photoshoot: "Photo Shoot",
  anniversary: "Anniversary",
  "welcome-baby": "Naming Ceremony",
  "ring-ceremony": "Ring Ceremony",
  "haldi-ceremony": "Haldi & Mehendi",
  festivals: "Festivals",
  "naming-ceremony": "Naming Ceremony",
  "house-warming": "House Warming",
  office: "Office",
};

const DecorationDetailPage = () => {
  const { item } = useParams();
  const data = decorationData[item];

  if (!data) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h2 className="display-5 fw-bold text-dark mb-4">
            Category not found
          </h2>
          <Link
            to="/decoration"
            className="btn btn-lg btn-brand rounded-pill px-5 shadow"
          >
            Back to Decorations
          </Link>
        </div>
      </div>
    );
  }

  const photos = galleryData[galleryForCategory[item]] || data.image;
  const enquiryLink = whatsAppLink(
    `Hi, I'm interested in ${data.title}. Can you share details and pricing?`
  );

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #fdf2f8 0%, #ffffff 50%, #faf5ff 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <div
        className="position-relative overflow-hidden"
        style={{ height: "400px" }}
      >
        <img
          src={data.image[0]}
          alt={data.title}
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
          }}
        >
          <div className="container">
            <Link
              to="/decoration"
              className="detail-back text-white text-decoration-none mb-3 d-inline-flex align-items-center"
            >
              <svg
                className="me-2"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Categories
            </Link>
            <h1 className="display-3 fw-bold text-white mb-3">{data.title}</h1>
            <p className="text-white fs-5 mb-4" style={{ opacity: 0.9 }}>
              Beautiful decorations for your special occasion
            </p>
            <a
              href={enquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg rounded-pill px-4 fw-semibold"
            >
              📱 Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* What we offer */}
        <h2 className="h3 fw-bold mb-3">What we offer</h2>
        <div className="d-flex flex-wrap gap-2 mb-5">
          {data.products.map((product) => (
            <span
              key={product.id}
              className="badge rounded-pill bg-white text-dark border shadow-sm px-3 py-2 fs-6 fw-normal"
            >
              ✨ {product.name}
            </span>
          ))}
        </div>

        {/* Our work */}
        <h2 className="h3 fw-bold mb-3">Our work</h2>
        <div className="row g-4">
          {photos.map((src, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-4">
              <div
                className="rounded-4 overflow-hidden shadow-sm hover-lift hover-zoom"
                style={{ height: "280px" }}
              >
                <img
                  src={src}
                  alt={`${data.title} decoration ${idx + 1}`}
                  loading="lazy"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <p className="lead text-muted mb-3">
            Like what you see? Tell us your date and theme.
          </p>
          <a
            href={enquiryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg rounded-pill px-5 fw-semibold"
          >
            📱 Book {data.title}
          </a>
        </div>
      </div>

      <style>{`
        .detail-back:hover {
          color: #fbcfe8 !important;
        }
      `}</style>
    </div>
  );
};

export default DecorationDetailPage;
