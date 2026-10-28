import React from "react";
import Emoji from "../Common/Emoji";
import { Link } from "react-router-dom";
import { telLink, whatsAppLink } from "../../data/contactInfo";

function Services() {
  const mainServices = [
    {
      name: "Balloon Decoration",
      description:
        "Colorful balloon arches, columns, and creative arrangements for any theme.",
      icon: "🎈",
      color: "#ec4899",
      bgGradient: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
      available: true,
    },
    {
      name: "Theme Backdrops",
      description:
        "Custom themed backdrops perfect for photo moments and celebrations.",
      icon: "🎨",
      color: "#a855f7",
      bgGradient: "linear-gradient(135deg, #faf5ff, #f3e8ff)",
      available: true,
    },
    {
      name: "Cake Table Setup",
      description:
        "Elegant cake table decorations to make your cake the centerpiece.",
      icon: "🎂",
      color: "#f59e0b",
      bgGradient: "linear-gradient(135deg, #fef3c7, #fde68a)",
      available: true,
    },
    {
      name: "Stage Decoration",
      description: "Grand stage setups for birthday celebrations and events.",
      icon: "✨",
      color: "#10b981",
      bgGradient: "linear-gradient(135deg, #d1fae5, #a7f3d0)",
      available: true,
    },
    {
      name: "Flower Decoration",
      description:
        "Fresh and artificial flower arrangements, garlands, and floral centerpieces for elegant celebrations.",
      icon: "🌸",
      color: "#f472b6",
      bgGradient: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
      available: true,
    },
    {
      name: "Return Gifts",
      description: "Thoughtfully curated return gifts for your guests.",
      icon: "🎁",
      color: "#f43f5e",
      bgGradient: "linear-gradient(135deg, #ffe4e6, #fecdd3)",
      available: true,
    },
  ];

  const decorationTypes = [
    {
      name: "Birthday Decorations",
      description: "Balloon & theme decorations for birthdays of all ages",
      emoji: "🎈",
      color: "#ec4899",
      bgGradient: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
      link: "/decorations/birthday",
    },
    {
      name: "Baby Shower Decorations",
      description: "Sweet and charming setups for baby shower celebrations",
      emoji: "👶",
      color: "#f472b6",
      bgGradient: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
      link: "/decorations/babyshower",
    },
    {
      name: "Anniversary Celebrations",
      description: "Romantic decorations for milestone anniversaries",
      emoji: "💕",
      color: "#f43f5e",
      bgGradient: "linear-gradient(135deg, #ffe4e6, #fecdd3)",
      link: "/decorations/anniversary",
    },
    {
      name: "Welcome Baby / Naming Ceremony",
      description: "Beautiful decor for welcoming your little one",
      emoji: "🎁",
      color: "#fbbf24",
      bgGradient: "linear-gradient(135deg, #fef3c7, #fde68a)",
      link: "/decorations/welcomebaby",
    },
    {
      name: "Ring Ceremony Decorations",
      description: "Elegant setups for engagement and ring ceremonies",
      emoji: "💍",
      color: "#a855f7",
      bgGradient: "linear-gradient(135deg, #faf5ff, #f3e8ff)",
      link: "/decorations/ring",
    },
    {
      name: "Haldi Ceremony Setup",
      description: "Traditional yellow-themed decorations for haldi events",
      emoji: "✨",
      color: "#fbbf24",
      bgGradient: "linear-gradient(135deg, #fef3c7, #fde68a)",
      link: "/decorations/haldi",
    },
    {
      name: "Festival Decorations",
      description: "Festive decor for Diwali, Ganesh Chaturthi & more",
      emoji: "🪔",
      color: "#fb923c",
      bgGradient: "linear-gradient(135deg, #fed7aa, #fdba74)",
      link: "/decorations/festival",
    },
    {
      name: "Housewarming Decor",
      description: "Warm and welcoming decorations for your new home",
      emoji: "🏠",
      color: "#10b981",
      bgGradient: "linear-gradient(135deg, #d1fae5, #a7f3d0)",
      link: "/decorations/housewarming",
    },
    {
      name: "Office Party Decorations",
      description: "Professional yet fun setups for corporate celebrations",
      emoji: "🎉",
      color: "#3b82f6",
      bgGradient: "linear-gradient(135deg, #dbeafe, #bfdbfe)",
      link: "/decorations/office",
    },
  ];

  const comingSoonServices = [
    {
      name: "Photography & Videography",
      description: "Professional photo and video coverage for your events",
      icon: "📸",
      color: "#3b82f6",
      bgGradient: "linear-gradient(135deg, #dbeafe, #bfdbfe)",
    },
    {
      name: "Event Entertainment",
      description: "Face painting, balloon artists, magicians & more",
      icon: "🎭",
      color: "#8b5cf6",
      bgGradient: "linear-gradient(135deg, #ede9fe, #ddd6fe)",
    },
    {
      name: "Games & Activities",
      description: "Fun games and activities for guests of all ages",
      icon: "🎮",
      color: "#06b6d4",
      bgGradient: "linear-gradient(135deg, #cffafe, #a5f3fc)",
    },
    {
      name: "Short Eats & Chaats",
      description: "Delicious snacks and chaat counters for your parties",
      icon: "🍽️",
      color: "#f59e0b",
      bgGradient: "linear-gradient(135deg, #fef3c7, #fde68a)",
    },
    {
      name: "Sound & Lighting",
      description: "Professional audio and lighting equipment rentals",
      icon: "🔊",
      color: "#14b8a6",
      bgGradient: "linear-gradient(135deg, #ccfbf1, #99f6e4)",
    },
    {
      name: "Catering Services",
      description: "Full catering coordination for your celebration",
      icon: "🍰",
      color: "#ec4899",
      bgGradient: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
    },
  ];

  const thingsToRemember = [
    "Except balloons, all items are on rental and will be collected within 48 hours.",
    "A steady power supply is needed for timely decoration.",
    "Customer should provide a stool or ladder if required.",
    "JiSi team does not clean the venue after decoration.",
    "Rental items must be returned safely; damages or missing items will be charged.",
    "Balance payment must be cleared once decoration is completed.",
    "NEFT, RTGS, Cheques, and PDC are not accepted on the event day. Only Cash, UPI, IMPS, etc.",
    "Customer must get all permissions from the venue in advance.",
    "Decoration accuracy may vary 80–90% depending on lighting, venue, size, and timings.",
    "Extra items not listed in inclusions will have additional charges.",
    "Transportation charges apply based on location and decoration.",
    "JiSi is not responsible for delays due to rain, wind, or natural issues.",
    "Rental items will be collected within 48 hours based on team availability.",
    "For designs from Google or Pinterest, accuracy will be around 70–80% depending on material availability.",
    "Any issues must be reported during the same service time slot.",
  ];

  const renderServiceCard = (service, showComingSoon = false) => (
    <div
      className="card h-100 border-0 shadow-sm position-relative"
      style={{
        background: service.bgGradient,
        transition: "all 0.3s ease",
        borderTop: `4px solid ${service.color}`,
        opacity: showComingSoon ? 0.85 : 1,
      }}
      onMouseEnter={(e) => {
        if (!showComingSoon) {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)";
        }
      }}
      onMouseLeave={(e) => {
        if (!showComingSoon) {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
        }
      }}
    >
      {showComingSoon && (
        <div
          className="position-absolute top-0 end-0 m-3"
          style={{ zIndex: 10 }}
        >
          <span className="badge bg-warning text-dark px-3 py-2 shadow-sm">
            🚀 Coming Soon
          </span>
        </div>
      )}
      <div className="card-body p-4 text-center">
        <div
          className="mx-auto mb-4 d-flex align-items-center justify-content-center"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "white",
            fontSize: "2.5rem",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          {service.icon || service.emoji}
        </div>
        <h3 className="h5 fw-bold mb-3" style={{ color: service.color }}>
          {service.name}
        </h3>
        <p className="text-muted mb-0">{service.description}</p>
      </div>
    </div>
  );

  return (
    <main
      style={{ background: "linear-gradient(to bottom, #ffffff, #faf5ff)" }}
    >
      {/* Hero Section */}
      <section
        className="py-2 text-white position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #a855f7, #ec4899, #b89047ff)",
        }}
      >
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="text-center py-5">
            <div className="mb-4">
              <span
                className="display-1"
                style={
                  {
                    // position: "absolute",
                    // top: "5%",
                    // left: "50%",
                    // fontSize: "4.5rem",
                    // opacity: 1,
                    // animation: "float 3.5s ease-in-out infinite",
                  }
                }
              >
                🎉
              </span>
            </div>
            <h1 className="display-3 fw-bold mb-4">Our Services</h1>
            <p
              className="lead fs-4 mb-0"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              Complete event decoration and management services tailored to your
              needs
            </p>
          </div>
        </div>
        <Emoji />
      </section>

      {/* Main Services Grid */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-2">What We Offer</h2>
            <p className="text-muted fs-5">
              Professional services available now
            </p>
          </div>

          <div className="row g-4 mb-5">
            {mainServices.map((service, i) => (
              <div key={i} className="col-sm-6 col-lg-4">
                {renderServiceCard(service)}
              </div>
            ))}
          </div>

          {/* Decoration Types Section */}
          <div className="text-center mb-5 mt-5 pt-5">
            <h2 className="display-5 fw-bold mb-2">Decoration Specialties</h2>
            <p className="text-muted fs-5">
              Browse our decoration themes for every occasion
            </p>
          </div>

          <div className="row g-4 mb-5">
            {decorationTypes.map((service, i) => (
              <div key={i} className="col-sm-6 col-lg-4">
                <Link
                  to={service.link}
                  style={{ textDecoration: "none" }}
                  className="d-block"
                >
                  {renderServiceCard(service)}
                </Link>
              </div>
            ))}
          </div>

          {/* Coming Soon Services */}
          <div className="text-center mb-5 mt-5 pt-5">
            <h2 className="display-5 fw-bold mb-2">Expanding Soon</h2>
            <p className="text-muted fs-5">
              Exciting new services launching soon! 🚀
            </p>
          </div>

          <div className="row g-4 mb-5">
            {comingSoonServices.map((service, i) => (
              <div key={i} className="col-sm-6 col-lg-4">
                {renderServiceCard(service, true)}
              </div>
            ))}
          </div>

          {/* Things to Remember Section */}
          <div className="row justify-content-center mt-5 pt-5">
            <div className="col-lg-10">
              <div
                className="card border-0 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #fef3c7)",
                  borderLeft: "6px solid #f59e0b",
                }}
              >
                <div className="card-body p-5">
                  <div className="text-center mb-4">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white mb-3"
                      style={{
                        width: "80px",
                        height: "80px",
                        fontSize: "2.5rem",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                      }}
                    >
                      📋
                    </div>
                    <h2 className="h3 fw-bold" style={{ color: "#f59e0b" }}>
                      Things to Remember
                    </h2>
                    <p className="text-muted">
                      Important points to ensure a smooth event experience
                    </p>
                  </div>

                  <ul className="list-unstyled mb-0">
                    {thingsToRemember.map((item, idx) => (
                      <li key={idx} className="mb-3 d-flex align-items-start">
                        <span
                          className="me-3 flex-shrink-0"
                          style={{ color: "#f59e0b", fontSize: "1.2rem" }}
                        >
                          ✓
                        </span>
                        <span className="text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
              <div
                className="card border-0 shadow-lg overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #ec4899, #a855f7)",
                }}
              >
                <div className="card-body p-5 text-center text-white">
                  <div className="display-4 mb-3">🎊</div>
                  <h3 className="h2 fw-bold mb-3">Ready to Plan Your Event?</h3>
                  <p className="lead mb-4 opacity-90">
                    Let's make your celebration unforgettable! Contact us today
                    for a free consultation.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <a
                      href={whatsAppLink("Hi, I'd like to know more about JiSi Events")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold"
                      style={{ color: "#a855f7" }}
                    >
                      <span className="fs-4 me-2">💬</span>
                      Chat on WhatsApp
                    </a>
                    <a
                      href={telLink}
                      className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-bold"
                    >
                      <span className="fs-4 me-2">📞</span>
                      Call Us Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </main>
  );
}

export default Services;
