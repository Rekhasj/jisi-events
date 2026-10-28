import React from "react";
import { Link } from "react-router-dom";
import { decorationCategories } from "../../data/decorationData";
import Hero from "../Common/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { carouselData, recentDecorationImages } from "../../data/galleryData";
import { telLink, whatsAppLink } from "../../data/contactInfo";

function ServiceCard({ emoji, title, description, borderColor, bgColor }) {
  return (
    <div
      className="card h-100 shadow-sm hover-lift"
      style={{
        borderTop: `4px solid ${borderColor}`,
        borderRadius: "1.5rem",
        transition: "all 0.3s ease",
      }}
    >
      <div className="card-body text-center p-4">
        <div
          className="mx-auto mb-4 d-flex align-items-center justify-content-center"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: bgColor,
            fontSize: "2.5rem",
            animation: "rotate360 2s linear infinite",
            display: "inline-block",
          }}
        >
          {emoji}
        </div>
        <h3 className="h5 fw-bold mb-3">{title}</h3>
        <p className="text-muted mb-0">{description}</p>
      </div>
    </div>
  );
}

function Home() {
  const titledata = {
    title: "JiSi Events & Decorations",
    subtitle: "Making Every Birthday Magical & Memorable",
    description:
      "• Professional birthday decorations • Affordable packages for families • Balloon arrangements • Theme decorations • Kids entertainment",
    buttonText: true,
    heroImages: carouselData,
  };
  return (
    <main style={{ background: "linear-gradient(to bottom, white, #faf5ff)" }}>
      <Hero heroDisplayData={titledata} />

      {/* About Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-4">
              Best Birthday Party Planners
            </h2>
            <div
              className="mx-auto mb-4"
              style={{
                width: "100px",
                height: "4px",
                background: "linear-gradient(to right, #ec4899, #a855f7)",
                borderRadius: "2px",
              }}
            ></div>
            <p
              className="lead text-muted mx-auto"
              style={{ maxWidth: "900px" }}
            >
              At{" "}
              <span className="fw-bold" style={{ color: "#a855f7" }}>
                JiSi Events
              </span>
              , we transform ordinary celebrations into extraordinary memories.
              Our experienced team of birthday party organizers ensures every
              detail is perfect—from stunning decorations and party supplies to
              engaging games coordination and delightful kids entertainment
              activities.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="display-5 fw-bold text-center mb-2">
            Why Choose JiSi Events?
          </h2>
          <p className="text-center text-muted mb-5 fs-5">
            We make your special day perfect, memorable, and magical
          </p>

          <div className="row g-4">
            <div className="col-md-4">
              <ServiceCard
                emoji="💰"
                title="Budget-Friendly Packages"
                description="Premium decorations for every occasion. Beautiful celebrations that fit your budget perfectly, whether it's birthdays, baby showers, or any special event."
                borderColor="#ec4899"
                bgColor="rgba(236, 72, 153, 0.1)"
              />
            </div>
            <div className="col-md-4">
              <ServiceCard
                emoji="✨"
                title="Complete Event Planning"
                description="From decorations to entertainment, we handle everything for all types of celebrations—birthdays, anniversaries, baby showers, festivals, and more. Your one-stop solution for memorable events."
                borderColor="#a855f7"
                bgColor="rgba(168, 85, 247, 0.1)"
              />
            </div>
            <div className="col-md-4">
              <ServiceCard
                emoji="⭐"
                title="Professional Team"
                description="Experienced decorators and event organizers dedicated to making every celebration memorable and stress-free. Expert service for birthdays, festivals, corporate events, and all occasions."
                borderColor="#f59e0b"
                bgColor="rgba(245, 158, 11, 0.1)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section
        className="py-5"
        style={{ background: "linear-gradient(135deg, #fce7f3, #faf5ff)" }}
      >
        <div className="container">
          <h2 className="display-5 fw-bold text-center mb-3">
            Our Recent Work
          </h2>
          <p className="text-center text-muted mb-5 fs-5">
            Bringing joy and magic to celebrations
          </p>

          <div className="row g-3">
            {recentDecorationImages.recentDecor.map((img, idx) => (
              <div key={idx} className="col-6 col-md-3">
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "100%",
                    overflow: "hidden",
                    borderRadius: "1rem",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  }}
                  className="hover-zoom"
                >
                  <img
                    loading="lazy"
                    src={img}
                    alt={`Decoration ${idx + 1}`}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="display-5 fw-bold text-center mb-3">
            Our Decoration Services
          </h2>
          <p className="text-center text-muted mb-5 fs-5">
            Creating magical moments for every celebration in your life
          </p>

          <div className="row g-4">
            {decorationCategories.map((service, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <Link
                  to={`/decoration/${service.id}`}
                  className="d-flex align-items-center gap-3 p-4 h-100 text-decoration-none text-dark hover-lift"
                  style={{
                    background: "linear-gradient(135deg, #faf5ff, #fce7f3)",
                    borderRadius: "1rem",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "linear-gradient(135deg, #a855f7, #ec4899)",
                      borderRadius: "50%",
                      fontSize: "1.5rem",
                    }}
                  >
                    {service.iconName ? (
                      <FontAwesomeIcon icon={service.iconName} color="gold" />
                    ) : (
                      service?.emoji
                    )}
                  </div>
                  <span className="fw-semibold">{service.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stage Entry Feature */}
      <section
        className="py-5 text-white"
        style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
      >
        <div className="container">
          <div className="text-center">
            <div
              className="display-1 mb-4"
              style={{
                animation: "rotate360 2s linear infinite",
                display: "inline-block",
              }}
            >
              🌟
            </div>
            <h2 className="display-5 fw-bold mb-4">
              Make a Grand Entrance with Stage Entry Rentals
            </h2>
            <p
              className="lead mb-4 mx-auto"
              style={{ maxWidth: "800px", color: "rgba(255,255,255,0.9)" }}
            >
              Make your child feel like a superstar with our special stage entry
              setups! Perfect for creating unforgettable birthday moments and
              magical memories.
            </p>
            <a
              href={whatsAppLink("I'm interested in stage entry rentals")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold"
              style={{ color: "#a855f7" }}
            >
              <span
                className="fs-4 me-2"
                style={{
                  // animation: "floatSmall 2s linear infinite",
                  display: "inline-block",
                }}
              >
                📅
              </span>
              Book Stage Entry Now
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-5"
        style={{ background: "linear-gradient(to bottom, white, #faf5ff)" }}
      >
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: "900px" }}>
            <div
              className="display-1 mb-4"
              style={{
                animation: "floatSmall 2s linear infinite",
                display: "inline-block",
              }}
            >
              🎂
            </div>
            <h2 className="display-5 fw-bold mb-4">
              Ready to Plan Your Perfect Celebration?
            </h2>
            <p className="lead text-muted mb-5">
              Contact our expert birthday party organizers today. Just enquire
              and our professional team will provide complete party planning
              services—we take care of everything so you can enjoy the moment!
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a
                href={whatsAppLink("Hi, I'd like to inquire about party planning services")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg rounded-pill px-5 py-3 fw-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                }}
              >
                <span
                  className="fs-4 me-2"
                  style={{
                    // animation: "floatSmall 2s linear infinite",
                    display: "inline-block",
                  }}
                >
                  📱
                </span>
                WhatsApp Us Now
              </a>
              <a
                href={telLink}
                className="btn btn-lg rounded-pill px-5 py-3 fw-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #ec4899)",
                }}
              >
                <span
                  className="fs-4 me-2"
                  style={{
                    // animation: "floatSmall 2s linear infinite",
                    display: "inline-block",
                  }}
                >
                  📞
                </span>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;
