import React from "react";
import Emoji from "../Common/Emoji";
import { telLink, whatsAppLink } from "../../data/contactInfo";

function About() {
  const features = [
    {
      emoji: "🎯",
      title: "Our Promise",
      description:
        "On-time setup, beautiful decoration & friendly service every single time.",
      color: "#ec4899",
      bgGradient: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
    },
    {
      emoji: "📱",
      title: "Easy Booking",
      description:
        "Book via WhatsApp or call — quick, convenient, and hassle-free.",
      color: "#a855f7",
      bgGradient: "linear-gradient(135deg, #faf5ff, #f3e8ff)",
    },
    {
      emoji: "💰",
      title: "Budget-Friendly",
      description:
        "Premium quality decorations at prices that won't break your budget.",
      color: "#f59e0b",
      bgGradient: "linear-gradient(135deg, #fef3c7, #fde68a)",
    },
    {
      emoji: "✨",
      title: "Creative Designs",
      description:
        "Unique and personalized decoration themes for every celebration.",
      color: "#10b981",
      bgGradient: "linear-gradient(135deg, #d1fae5, #a7f3d0)",
    },
    {
      emoji: "🎨",
      title: "Full Service",
      description:
        "From planning to cleanup, we handle everything so you can enjoy.",
      color: "#3b82f6",
      bgGradient: "linear-gradient(135deg, #dbeafe, #bfdbfe)",
    },
    {
      emoji: "⭐",
      title: "Quality Materials",
      description:
        "Premium balloons, banners, and decorations that last throughout your event.",
      color: "#f43f5e",
      bgGradient: "linear-gradient(135deg, #ffe4e6, #fecdd3)",
    },
  ];

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
                // style={{
                //   position: "absolute",
                //   top: "5%",
                //   left: "50%",

                //   fontSize: "4.5rem",
                //   opacity: 1,
                //   animation: "float 3.5s ease-in-out infinite",
                // }}
              >
                🎉
              </span>
            </div>
            <h1 className="display-3 fw-bold mb-4">
              About JiSi Events & Decorations
            </h1>
            <p
              className="lead fs-4 mb-0"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              Creating colorful, joyful, and memorable celebrations for every
              occasion — all while keeping it budget-friendly and stress-free!
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <Emoji />
      </section>

      {/* Main Content */}
      <section className="py-5">
        <div className="container">
          {/* About Text */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div
                className="card border-0 shadow-lg p-5"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #faf5ff)",
                  borderLeft: "6px solid #a855f7",
                }}
              >
                <div className="d-flex align-items-start gap-4">
                  <div
                    className="flex-shrink-0"
                    style={{
                      fontSize: "4rem",
                      lineHeight: 1,
                    }}
                  >
                    💜
                  </div>
                  <div>
                    <h2
                      className="h3 fw-bold mb-4"
                      style={{ color: "#a855f7" }}
                    >
                      Welcome to JiSi Events!
                    </h2>
                    <p className="lead mb-4">
                      We specialize in{" "}
                      <strong>colorful, joyful, and budget-friendly</strong>{" "}
                      decorations for all occasions — from intimate home
                      celebrations to grand stage events.
                    </p>
                    <p className="text-muted mb-0">
                      Whether it's a birthday party, baby shower, anniversary,
                      or any special celebration, we bring your vision to life
                      with creative designs, quality materials, and exceptional
                      service. Our mission is to make every event magical while
                      keeping it affordable and stress-free for you!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Grid */}
          <div className="text-center mb-5">
            <h3 className="display-5 fw-bold mb-2">Why Choose Us?</h3>
            <p className="text-muted fs-5">What makes JiSi Events special</p>
          </div>

          <div className="row g-4">
            {features.map((feature, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div
                  className="card h-100 border-0 shadow-sm"
                  style={{
                    background: feature.bgGradient,
                    transition: "all 0.3s ease",
                    borderTop: `4px solid ${feature.color}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 40px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(0,0,0,0.1)";
                  }}
                >
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
                      {feature.emoji}
                    </div>
                    <h4
                      className="h5 fw-bold mb-3"
                      style={{ color: feature.color }}
                    >
                      {feature.title}
                    </h4>
                    <p className="text-muted mb-0">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
                      className="btn btn-light btn-lg rounded-pill px-4 py-3 fw-bold"
                      style={{ color: "#a855f7" }}
                    >
                      {/* <span className="fs-4 me-2">💬</span> */}
                      💬 Chat on WhatsApp
                    </a>
                    <a
                      href={telLink}
                      className="btn btn-outline-light btn-lg rounded-pill px-4 py-3 fw-bold"
                    >
                      {/* <span className="fs-4 me-2">📞</span> */}
                      📞 Call Us Now
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

export default About;
