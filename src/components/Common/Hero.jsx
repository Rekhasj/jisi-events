import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmojiItem from "./EmojiItem";
import { whatsAppLink } from "../../data/contactInfo";

const Hero = ({ heroDisplayData }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(
        (prev) => (prev + 1) % heroDisplayData?.heroImages.length
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [heroDisplayData?.heroImages.length]);

  const WhatsAppLink = whatsAppLink(
    "Hi, I'd like to inquire about decoration packages"
  );

  return (
    <header
      style={{ position: "relative", minHeight: "90vh", overflow: "hidden" }}
    >
      {/* Background Image Slider */}
      <div style={{ position: "absolute", inset: 0 }}>
        {heroDisplayData?.heroImages.map((img, idx) => (
          <div
            key={idx}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: currentImage === idx ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom right, rgba(147, 51, 234, 0.75), rgba(236, 72, 153, 0.65), rgba(245, 158, 11, 0.75))",
          }}
        />

        <EmojiItem
          emoji="🎈"
          top="10%"
          left="10%"
          fontSize="4rem"
          duration="3s"
        />

        <EmojiItem
          emoji="🎈"
          top="10%"
          right="10%"
          fontSize="4rem"
          duration="3s"
        />
      </div>

      {/* Content */}
      <div
        className="container text-center d-flex flex-column align-items-center justify-content-center"
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "90vh",
          color: "white",
        }}
      >
        {/* <div className="mb-4">
          <span
            className="fs-1 me-2"
            // style={{ animation: "pulse 2s infinite" }}

            style={{
              position: "absolute",
              top,
              left: "30%",
              fontSize: "3rem",
              opacity: 1,
              animation: "floatX 3s ease-in-out infinite",
            }}
          >
            ✨
          </span>
          <span
            className="fs-1"
            // style={{ animation: "pulse 2s infinite 0.6s" }}
            style={{
              position: "absolute",
              top,
              right: "30%",
              fontSize: "3rem",
              opacity: 1,
              animation: "floatX 3s ease-in-out infinite",
            }}
          >
            ✨
          </span>
        </div> */}

        <h1
          className="display-2 fw-bold mb-4"
          style={{ textShadow: "2px 4px 8px rgba(0,0,0,0.3)" }}
        >
          {heroDisplayData?.title}
        </h1>

        <span
          className="fs-1 me-5"
          style={{
            animation: "rotate360 2s linear infinite",
            display: "inline-block",
          }}
        >
          ⭐
        </span>

        <p
          className="display-6 mb-3"
          style={{ color: "#fef3c7", fontWeight: 500 }}
        >
          {heroDisplayData?.subtitle}
        </p>

        <p
          className="lead mb-4 px-3"
          style={{ color: "#fbcfe8", maxWidth: "800px" }}
        >
          {heroDisplayData?.description}
        </p>

        {heroDisplayData?.buttonText && (
          <div className="d-flex gap-3 flex-wrap justify-content-center">
            <a
              href={WhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-lg rounded-pill px-4 py-3 fw-bold"
              style={{
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                position: "relative",
              }}
            >
              <span
                className="fs-4 me-2"
                style={{
                  position: "absolute",
                  fontSize: "2rem",
                  top: "20%",

                  opacity: 1,
                  // animation: "floatSmall 2s ease-in-out infinite",
                }}
              >
                📱
              </span>
              <span style={{ marginLeft: "40px" }}>Book on WhatsApp </span>
            </a>
            <Link
              to="/packages"
              className="btn btn-light btn-lg rounded-pill px-4 py-3 fw-bold"
              style={{
                color: "#a855f7",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                position: "relative",
              }}
            >
              <span
                className="fs-4 me-2"
                style={{
                  position: "absolute",
                  top: "15%",
                  //   transform: "translateY(-50%)",
                  fontSize: "2rem",
                  // animation: "floatSmall 2s ease-in-out infinite",
                }}
              >
                🎁
              </span>
              <span style={{ marginLeft: "40px" }}> View Packages </span>
            </Link>
          </div>
        )}
      </div>

      {/* Wave Divider */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>

      {/* <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
      `}</style> */}
    </header>
  );
};

export default Hero;
