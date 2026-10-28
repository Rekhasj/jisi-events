import React, { useState } from "react";
import PackageCard from "./PackageCard";
import Hero from "../Common/Hero";
import { packagesDataByCategory } from "../../data/packageData";
import { decorationCategories } from "../../data/decorationData";
import { recentDecorationImages } from "../../data/galleryData";
import { telLink, whatsAppLink } from "../../data/contactInfo";

function Packages() {
  const [selectedCategory, setSelectedCategory] = useState("birthday");

  const titledata = {
    title: "Our Decoration Packages",
    subtitle: "Choose the perfect package for your celebration",
    description:
      "Explore our wide range of decoration services for every occasion",
    buttonText: false,
    heroImages: recentDecorationImages.packages,
  };

  const currentPackages = packagesDataByCategory["general"] || [];
  // const currentPackages = packagesDataByCategory[selectedCategory] || [];
  const currentCategory = decorationCategories.find(
    (cat) => cat.id === selectedCategory
  );

  return (
    <main>
      <Hero heroDisplayData={titledata} />

      <div className="container py-5">
        {/* Category Navigation */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="display-6 fw-bold text-center mb-4">
              Select Your Celebration Type
            </h2>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              {decorationCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`btn btn-lg rounded-pill px-4 py-3 fw-semibold ${
                    selectedCategory === category.id
                      ? "btn-primary"
                      : "btn-outline-secondary"
                  }`}
                  style={{
                    backgroundColor:
                      selectedCategory === category.id
                        ? category.color
                        : "transparent",
                    borderColor: category.color,
                    color:
                      selectedCategory === category.id
                        ? "white"
                        : category.color,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category.id) {
                      e.currentTarget.style.backgroundColor = category.color;
                      e.currentTarget.style.color = "white";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category.id) {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = category.color;
                    }
                  }}
                >
                  <span className="fs-4 me-2">{category.emoji}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Category Header */}
        <div className="text-center mb-5">
          <div
            className="d-inline-flex align-items-center justify-content-center mb-3"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: `${currentCategory?.color}20`,
              fontSize: "3rem",
            }}
          >
            {currentCategory?.emoji}
          </div>
          <h3
            className="display-5 fw-bold mb-3"
            style={{ color: currentCategory?.color }}
          >
            {currentCategory?.name}
          </h3>
          <p className="lead text-muted">
            Choose from our specially curated packages
          </p>
        </div>

        {/* Packages Grid */}
        <div className="row g-4 mb-5">
          {currentPackages.map((pkg, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <PackageCard
                title={pkg.title}
                // price={pkg.price}
                items={pkg.items}
                accentColor={currentCategory?.color}
              />
            </div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div
          className="card shadow-lg border-0 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${currentCategory?.color}15, ${currentCategory?.color}05)`,
          }}
        >
          <div className="card-body p-5 text-center">
            <div className="display-4 mb-3">✨</div>
            <h4 className="h3 fw-bold mb-3">Need a Custom Package?</h4>
            <p className="lead text-muted mb-4">
              Can't find what you're looking for? We create personalized
              decoration packages tailored to your specific needs and budget!
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a
                href={whatsAppLink("Hi, I'd like a custom decoration package quote")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg rounded-pill px-5 py-3 fw-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                }}
              >
                <span className="fs-4 me-2">📱</span>
                WhatsApp for Custom Quote
              </a>
              <a
                href={telLink}
                className="btn btn-lg rounded-pill px-5 py-3 fw-bold text-white"
                style={{
                  background: `linear-gradient(135deg, ${currentCategory?.color}, ${currentCategory?.color}dd)`,
                }}
              >
                <span className="fs-4 me-2">📞</span>
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .btn:focus {
          box-shadow: none !important;
        }
      `}</style>
    </main>
  );
}

export default Packages;
