import React from "react";
import { Link } from "react-router-dom";
import { decorationData } from "../../data/decorationData";
import Carousel from "../../Carousel/Carousel";
import { recentDecorationImages } from "../../data/galleryData";

const Decoration = () => {
  return (
    <div
      className="py-5"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #fdf2f8 0%, #ffffff 50%, #faf5ff 100%)",
      }}
    >
      <div className="container">
        {/* Header Section */}
        <Carousel carouselData={recentDecorationImages.decoration} />

        <div className="text-center mb-5">
          <h1
            className="display-4 fw-bold mb-3"
            style={{
              background: "linear-gradient(to right, #ec4899, #9333ea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Decoration Collections
          </h1>
          <p className="lead text-muted">
            Make your special moments memorable with our beautiful decorations
          </p>
        </div>

        {/* Categories Grid */}
        <div className="row g-4">
          {Object.entries(decorationData).map(([key, data]) => (
            <div key={key} className="col-12 col-md-6 col-lg-4">
              <Link
                to={`/decoration/${key}`}
                className="card border-0 shadow-sm overflow-hidden position-relative hover-lift hover-zoom text-decoration-none"
                style={{ height: "300px" }}
              >
                {/* Background Image */}
                <img
                  src={data.image[0]}
                  alt={data.title}
                  loading="lazy"
                  className="card-img h-100"
                  style={{ objectFit: "cover" }}
                />

                {/* Gradient Overlay */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
                  }}
                ></div>

                {/* Content */}
                <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                  <h3 className="card-title text-white fw-bold mb-2">
                    {data.title}
                  </h3>
                  <div className="d-flex align-items-center text-white">
                    <span className="small me-2">Explore Collection</span>
                    <span style={{ fontSize: "1.5rem" }}>▸</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Decoration;
