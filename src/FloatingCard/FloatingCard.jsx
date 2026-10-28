import React, { useState, useEffect } from "react";
import { whatsAppLink } from "../data/contactInfo";

const FloatingCard = ({
  message = "Hi, I'd like to know more about JiSi Events",
  position = "right", // "right" or "left"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);

        // Only show tooltip when button appears fresh
        setShowTooltip(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Auto hide tooltip after 5 seconds
  useEffect(() => {
    if (!showTooltip) return;

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, [showTooltip]);

  const handleClick = () => {
    window.open(whatsAppLink(message), "_blank", "noopener");
  };

  return (
    <>
      <div
        className={`floating-whatsapp ${isVisible ? "visible" : ""}`}
        style={{
          position: "fixed",
          bottom: "30px",
          [position]: "30px",
          zIndex: 9999,
          transition: "all 0.3s ease-in-out",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0)",
        }}
      >
        {showTooltip && isVisible && (
          <div
            className="whatsapp-tooltip"
            style={{
              position: "absolute",
              bottom: "70px",
              [position]: "0",
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              whiteSpace: "nowrap",
              animation: "slideIn 0.3s ease-out",
              maxWidth: "200px",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#333",
                fontWeight: "500",
              }}
            >
              💬 Need help?
              {/* Chat with us! */}
            </p>
            <div
              style={{
                position: "absolute",
                bottom: "-8px",
                [position]: "20px",
                width: "0",
                height: "0",
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "8px solid white",
              }}
            />
          </div>
        )}

        <button
          onClick={handleClick}
          className="whatsapp-button"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#25D366",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            animation: "pulse 2s infinite",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow =
              "0 6px 30px rgba(37, 211, 102, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 4px 20px rgba(37, 211, 102, 0.4)";
          }}
          aria-label="Chat on WhatsApp"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 0C7.164 0 0 7.164 0 16c0 2.832.744 5.49 2.04 7.792L0 32l8.416-2.208A15.937 15.937 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0z"
              fill="#fff"
            />
            <path
              d="M25.36 22.56c-.384 1.08-1.908 1.98-3.132 2.244-.828.168-1.908.3-5.544-1.188-4.644-1.896-7.632-6.6-7.86-6.9-.228-.3-1.86-2.472-1.86-4.716 0-2.244 1.176-3.348 1.596-3.804.42-.456.912-.564 1.224-.564.3 0 .612.012.876.024.288.012.672-.108 1.056.804.384.924 1.32 3.216 1.428 3.444.12.228.204.492.048.792-.156.3-.228.492-.456.756-.228.264-.48.588-.684.792-.228.228-.468.468-.2.912.264.444 1.176 1.932 2.52 3.132 1.74 1.548 3.192 2.028 3.648 2.256.456.228.72.192.984-.12.264-.312 1.14-1.32 1.44-1.776.312-.456.612-.384.996-.228.384.156 2.436 1.152 2.856 1.356.42.204.696.312.792.48.108.168.108.972-.276 2.052z"
              fill="#25D366"
            />
          </svg>
        </button>

        <div
          style={{
            position: "absolute",
            top: "2px",
            right: position === "right" ? "2px" : "auto",
            left: position === "left" ? "2px" : "auto",
            width: "14px",
            height: "14px",
            backgroundColor: "#4ade80",
            border: "3px solid white",
            borderRadius: "50%",
            animation: "blink 2s infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          }
          50% {
            box-shadow: 0 4px 30px rgba(37, 211, 102, 0.7);
          }
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .whatsapp-button:active {
          transform: scale(0.95) !important;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .floating-whatsapp {
            bottom: 20px !important;
            ${position}: 20px !important;
          }
          
          .whatsapp-button {
            width: 56px !important;
            height: 56px !important;
          }

          .whatsapp-tooltip {
            max-width: 160px !important;
            font-size: 13px !important;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingCard;
