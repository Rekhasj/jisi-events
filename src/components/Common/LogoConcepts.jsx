import React, { useState } from "react";

const LogoConcepts = () => {
  const [selectedLogo, setSelectedLogo] = useState(0);

  const logos = [
    {
      name: "Elegant Script with Balloons",
      component: (size = 200) => (
        <svg width={size} height={size} viewBox="0 0 200 200">
          {/* Balloons */}
          <ellipse
            cx="40"
            cy="60"
            rx="18"
            ry="22"
            fill="#ec4899"
            opacity="0.9"
          />
          <line
            x1="40"
            y1="82"
            x2="40"
            y2="110"
            stroke="#ec4899"
            strokeWidth="1.5"
          />

          <ellipse
            cx="160"
            cy="50"
            rx="18"
            ry="22"
            fill="#a855f7"
            opacity="0.9"
          />
          <line
            x1="160"
            y1="72"
            x2="160"
            y2="100"
            stroke="#a855f7"
            strokeWidth="1.5"
          />

          <ellipse
            cx="100"
            cy="40"
            rx="18"
            ry="22"
            fill="#f59e0b"
            opacity="0.9"
          />
          <line
            x1="100"
            y1="62"
            x2="100"
            y2="90"
            stroke="#f59e0b"
            strokeWidth="1.5"
          />

          {/* Main Text */}
          <text
            x="100"
            y="120"
            fontFamily="'Brush Script MT', cursive"
            fontSize="48"
            fill="#a855f7"
            textAnchor="middle"
            fontWeight="bold"
          >
            JiSi
          </text>
          <text
            x="100"
            y="145"
            fontFamily="Arial, sans-serif"
            fontSize="16"
            fill="#4b5563"
            textAnchor="middle"
            letterSpacing="3"
          >
            EVENTS
          </text>
          <text
            x="100"
            y="165"
            fontFamily="Arial, sans-serif"
            fontSize="12"
            fill="#9ca3af"
            textAnchor="middle"
            letterSpacing="2"
          >
            & DECORATIONS
          </text>
        </svg>
      ),
    },
    {
      name: "Modern Geometric Badge",
      component: (size = 200) => (
        <svg width={size} height={size} viewBox="0 0 200 200">
          {/* Outer circle with gradient */}
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#a855f7", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#ec4899", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <circle
            cx="100"
            cy="100"
            r="85"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="4"
          />

          {/* Inner decorative elements */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeDasharray="5,5"
          />

          {/* Confetti dots */}
          <circle cx="70" cy="70" r="4" fill="#ec4899" />
          <circle cx="130" cy="70" r="4" fill="#a855f7" />
          <circle cx="70" cy="130" r="4" fill="#f59e0b" />
          <circle cx="130" cy="130" r="4" fill="#ec4899" />

          {/* Text */}
          <text
            x="100"
            y="95"
            fontFamily="'Arial Black', sans-serif"
            fontSize="36"
            fill="#a855f7"
            textAnchor="middle"
            fontWeight="bold"
          >
            JiSi
          </text>
          <text
            x="100"
            y="115"
            fontFamily="Arial, sans-serif"
            fontSize="14"
            fill="#4b5563"
            textAnchor="middle"
            letterSpacing="2"
          >
            EVENTS
          </text>
          <text
            x="100"
            y="130"
            fontFamily="Arial, sans-serif"
            fontSize="10"
            fill="#9ca3af"
            textAnchor="middle"
          >
            & DECORATIONS
          </text>
        </svg>
      ),
    },
    {
      name: "Playful with Party Hat",
      component: (size = 200) => (
        <svg width={size} height={size} viewBox="0 0 200 200">
          {/* Party hat on 'I' */}
          <polygon points="100,30 85,65 115,65" fill="#ec4899" />
          <line
            x1="85"
            y1="65"
            x2="115"
            y2="65"
            stroke="#a855f7"
            strokeWidth="3"
          />
          <circle cx="100" cy="25" r="5" fill="#f59e0b" />

          {/* Confetti */}
          <rect
            x="50"
            y="50"
            width="8"
            height="8"
            fill="#a855f7"
            transform="rotate(45 54 54)"
          />
          <rect
            x="145"
            y="55"
            width="8"
            height="8"
            fill="#ec4899"
            transform="rotate(20 149 59)"
          />
          <circle cx="60" cy="140" r="5" fill="#f59e0b" />
          <circle cx="140" cy="145" r="5" fill="#a855f7" />

          {/* Main text */}
          <text
            x="100"
            y="115"
            fontFamily="'Comic Sans MS', cursive"
            fontSize="48"
            fill="#a855f7"
            textAnchor="middle"
            fontWeight="bold"
          >
            JiSi
          </text>
          <text
            x="100"
            y="140"
            fontFamily="Arial, sans-serif"
            fontSize="16"
            fill="#4b5563"
            textAnchor="middle"
            letterSpacing="2"
          >
            EVENTS
          </text>
          <text
            x="100"
            y="160"
            fontFamily="Arial, sans-serif"
            fontSize="12"
            fill="#9ca3af"
            textAnchor="middle"
          >
            & Decorations
          </text>
        </svg>
      ),
    },
    {
      name: "Minimalist with Star",
      component: (size = 200) => (
        <svg width={size} height={size} viewBox="0 0 200 200">
          {/* Star */}
          <polygon
            points="100,40 110,70 140,70 115,90 125,120 100,100 75,120 85,90 60,70 90,70"
            fill="#f59e0b"
          />

          {/* Text */}
          <text
            x="100"
            y="155"
            fontFamily="'Helvetica Neue', sans-serif"
            fontSize="42"
            fill="#1f2937"
            textAnchor="middle"
            fontWeight="300"
            letterSpacing="4"
          >
            JiSi
          </text>
          <line
            x1="60"
            y1="165"
            x2="140"
            y2="165"
            stroke="#a855f7"
            strokeWidth="2"
          />
          <text
            x="100"
            y="182"
            fontFamily="Arial, sans-serif"
            fontSize="12"
            fill="#6b7280"
            textAnchor="middle"
            letterSpacing="3"
          >
            EVENTS & DECORATIONS
          </text>
        </svg>
      ),
    },
    {
      name: "Ribbon Banner Style",
      component: (size = 200) => (
        <svg width={size} height={size} viewBox="0 0 200 200">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#ec4899", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#a855f7", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#ec4899", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>

          {/* Ribbon banner */}
          <path
            d="M 30 90 L 170 90 L 180 100 L 170 110 L 30 110 L 20 100 Z"
            fill="url(#grad2)"
          />

          {/* Ribbon tails */}
          <path d="M 20 100 L 10 90 L 20 100 L 10 110 Z" fill="#a855f7" />
          <path d="M 180 100 L 190 90 L 180 100 L 190 110 Z" fill="#ec4899" />

          {/* Main text */}
          <text
            x="100"
            y="107"
            fontFamily="'Georgia', serif"
            fontSize="28"
            fill="white"
            textAnchor="middle"
            fontWeight="bold"
          >
            JiSi EVENTS
          </text>

          {/* Subtitle */}
          <text
            x="100"
            y="140"
            fontFamily="Arial, sans-serif"
            fontSize="14"
            fill="#4b5563"
            textAnchor="middle"
            letterSpacing="2"
          >
            & Decorations
          </text>

          {/* Decorative sparkles */}
          <text x="50" y="70" fontSize="20">
            ✨
          </text>
          <text x="150" y="70" fontSize="20">
            ✨
          </text>
        </svg>
      ),
    },
    {
      name: "Celebration Burst",
      component: (size = 200) => (
        <svg width={size} height={size} viewBox="0 0 200 200">
          {/* Burst rays */}
          <line
            x1="100"
            y1="40"
            x2="100"
            y2="60"
            stroke="#f59e0b"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="145"
            y1="55"
            x2="130"
            y2="70"
            stroke="#ec4899"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="160"
            y1="100"
            x2="140"
            y2="100"
            stroke="#a855f7"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="145"
            y1="145"
            x2="130"
            y2="130"
            stroke="#f59e0b"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="55"
            y1="145"
            x2="70"
            y2="130"
            stroke="#ec4899"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="40"
            y1="100"
            x2="60"
            y2="100"
            stroke="#a855f7"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="55"
            y1="55"
            x2="70"
            y2="70"
            stroke="#f59e0b"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Central circle */}
          <circle
            cx="100"
            cy="100"
            r="50"
            fill="white"
            stroke="#a855f7"
            strokeWidth="3"
          />

          {/* Text */}
          <text
            x="100"
            y="95"
            fontFamily="'Arial Black', sans-serif"
            fontSize="24"
            fill="#a855f7"
            textAnchor="middle"
            fontWeight="bold"
          >
            JiSi
          </text>
          <text
            x="100"
            y="112"
            fontFamily="Arial, sans-serif"
            fontSize="11"
            fill="#4b5563"
            textAnchor="middle"
            letterSpacing="1"
          >
            EVENTS
          </text>
          <text
            x="100"
            y="125"
            fontFamily="Arial, sans-serif"
            fontSize="9"
            fill="#9ca3af"
            textAnchor="middle"
          >
            & Decorations
          </text>
        </svg>
      ),
    },
  ];

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "0.5rem",
          }}
        >
          JiSi Events & Decorations
        </h1>
        <p style={{ color: "#6b7280", fontSize: "1.1rem" }}>
          Logo Concept Options
        </p>
      </div>

      {/* Selected Logo Display */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          padding: "3rem",
          background: "linear-gradient(135deg, #faf5ff, #fce7f3)",
          borderRadius: "1rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{ color: "#4b5563", marginBottom: "2rem", fontSize: "1.5rem" }}
        >
          {logos[selectedLogo].name}
        </h2>
        {logos[selectedLogo].component(300)}
      </div>

      {/* Logo Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          marginBottom: "2rem",
        }}
      >
        {logos.map((logo, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedLogo(idx)}
            style={{
              padding: "1.5rem",
              background:
                selectedLogo === idx
                  ? "linear-gradient(135deg, #faf5ff, #fce7f3)"
                  : "white",
              borderRadius: "1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              border:
                selectedLogo === idx
                  ? "3px solid #a855f7"
                  : "2px solid #e5e7eb",
              boxShadow:
                selectedLogo === idx
                  ? "0 8px 25px rgba(168, 85, 247, 0.2)"
                  : "0 2px 10px rgba(0,0,0,0.05)",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                selectedLogo === idx
                  ? "0 8px 25px rgba(168, 85, 247, 0.2)"
                  : "0 2px 10px rgba(0,0,0,0.05)";
            }}
          >
            <div style={{ marginBottom: "1rem" }}>{logo.component(180)}</div>
            <h3
              style={{
                fontSize: "1rem",
                color: "#4b5563",
                fontWeight: selectedLogo === idx ? "bold" : "normal",
              }}
            >
              {logo.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Color Guide */}
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <h3
          style={{ color: "#1f2937", marginBottom: "1rem", fontSize: "1.3rem" }}
        >
          Brand Colors (from your website)
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "#ec4899",
                borderRadius: "0.5rem",
                marginBottom: "0.5rem",
              }}
            ></div>
            <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
              Pink
              <br />
              #ec4899
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "#a855f7",
                borderRadius: "0.5rem",
                marginBottom: "0.5rem",
              }}
            ></div>
            <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
              Purple
              <br />
              #a855f7
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "#f59e0b",
                borderRadius: "0.5rem",
                marginBottom: "0.5rem",
              }}
            ></div>
            <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
              Amber
              <br />
              #f59e0b
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          background: "linear-gradient(135deg, #a855f7, #ec4899)",
          color: "white",
          borderRadius: "1rem",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, fontSize: "1rem" }}>
          💡 <strong>Tip:</strong> Click on any logo concept to view it larger.
          These logos can be exported as SVG, PNG, or used directly in your
          website!
        </p>
      </div>
    </div>
  );
};

export default LogoConcepts;
