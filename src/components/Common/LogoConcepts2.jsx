import React, { useState } from "react";

const LogoConcepts2 = () => {
  const [selectedLogo, setSelectedLogo] = useState(0);

  const logos = [
    {
      name: "Celebration Circle - All Events",
      description: "Simple circular design with celebration elements",
      component: (size = 200) => (
        <svg width={size} height={size} viewBox="0 0 200 200">
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

          {/* Main circle */}
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="4"
          />

          {/* Mini event icons around circle */}
          <text x="100" y="35" fontSize="16" textAnchor="middle">
            🎈
          </text>
          <text x="145" y="60" fontSize="16" textAnchor="middle">
            👶
          </text>
          <text x="160" y="105" fontSize="16" textAnchor="middle">
            💕
          </text>
          <text x="140" y="150" fontSize="16" textAnchor="middle">
            💍
          </text>
          <text x="100" y="170" fontSize="16" textAnchor="middle">
            🪔
          </text>
          <text x="55" y="150" fontSize="16" textAnchor="middle">
            🏠
          </text>
          <text x="40" y="105" fontSize="16" textAnchor="middle">
            🎉
          </text>
          <text x="55" y="60" fontSize="16" textAnchor="middle">
            ✨
          </text>

          {/* Center text */}
          <text
            x="100"
            y="95"
            fontFamily="'Arial Black', sans-serif"
            fontSize="32"
            fill="#a855f7"
            textAnchor="middle"
            fontWeight="bold"
          >
            JISI
          </text>
          <text
            x="100"
            y="115"
            fontFamily="Arial, sans-serif"
            fontSize="12"
            fill="#4b5563"
            textAnchor="middle"
            letterSpacing="2"
          >
            EVENTS
          </text>
          <text
            x="100"
            y="128"
            fontFamily="Arial, sans-serif"
            fontSize="9"
            fill="#9ca3af"
            textAnchor="middle"
          >
            All Celebrations
          </text>
        </svg>
      ),
    },
    {
      name: "Modern Minimal Balloon",
      description: "Clean balloon symbol with elegant text",
      component: (size = 200) => (
        <svg width={size} height={size} viewBox="0 0 200 200">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#ec4899", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#a855f7", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>

          {/* Balloon */}
          <ellipse cx="100" cy="70" rx="35" ry="45" fill="url(#grad2)" />
          <path
            d="M 100 115 Q 95 125, 90 135"
            stroke="#a855f7"
            strokeWidth="2"
            fill="none"
          />
          <path d="M 90 135 L 85 145 L 95 145 Z" fill="#a855f7" />

          {/* Sparkles */}
          <circle cx="70" cy="50" r="3" fill="#fbbf24" />
          <circle cx="130" cy="60" r="3" fill="#fbbf24" />

          {/* Text */}
          <text
            x="100"
            y="175"
            fontFamily="'Helvetica Neue', sans-serif"
            fontSize="36"
            fill="#1f2937"
            textAnchor="middle"
            fontWeight="300"
            letterSpacing="3"
          >
            JISI
          </text>
          <text
            x="100"
            y="192"
            fontFamily="Arial, sans-serif"
            fontSize="11"
            fill="#6b7280"
            textAnchor="middle"
            letterSpacing="2"
          >
            EVENTS & DECOR
          </text>
        </svg>
      ),
    },
    {
      name: "Festive Confetti Burst",
      description: "Playful confetti design for celebrations",
      component: (size = 200) => (
        <svg width={size} height={size} viewBox="0 0 200 200">
          {/* Confetti pieces */}
          <rect
            x="60"
            y="50"
            width="10"
            height="10"
            fill="#ec4899"
            transform="rotate(25 65 55)"
          />
          <rect
            x="140"
            y="55"
            width="10"
            height="10"
            fill="#a855f7"
            transform="rotate(-30 145 60)"
          />
          <rect
            x="50"
            y="100"
            width="10"
            height="10"
            fill="#fbbf24"
            transform="rotate(45 55 105)"
          />
          <rect
            x="150"
            y="105"
            width="10"
            height="10"
            fill="#f472b6"
            transform="rotate(-15 155 110)"
          />
          <circle cx="70" cy="140" r="6" fill="#10b981" />
          <circle cx="130" cy="145" r="6" fill="#3b82f6" />
          <rect
            x="80"
            y="40"
            width="8"
            height="8"
            fill="#fb923c"
            transform="rotate(60 84 44)"
          />
          <rect
            x="120"
            y="42"
            width="8"
            height="8"
            fill="#f43f5e"
            transform="rotate(-45 124 46)"
          />

          {/* Main text */}
          <text
            x="100"
            y="95"
            fontFamily="'Comic Sans MS', cursive"
            fontSize="40"
            fill="#a855f7"
            textAnchor="middle"
            fontWeight="bold"
          >
            JISI
          </text>
          <text
            x="100"
            y="118"
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
            y="135"
            fontFamily="Arial, sans-serif"
            fontSize="10"
            fill="#9ca3af"
            textAnchor="middle"
          >
            Every Celebration
          </text>
        </svg>
      ),
    },
    {
      name: "Elegant Badge with Heart",
      description: "Sophisticated badge for all occasions",
      component: (size = 200) => (
        <svg width={size} height={size} viewBox="0 0 200 200">
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#ec4899", stopOpacity: 0.2 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#a855f7", stopOpacity: 0.2 }}
              />
            </linearGradient>
          </defs>

          {/* Outer badge shape */}
          <circle
            cx="100"
            cy="100"
            r="75"
            fill="url(#grad3)"
            stroke="#a855f7"
            strokeWidth="3"
          />

          {/* Heart at top */}
          <path
            d="M 100 60 C 100 55, 95 50, 90 50 C 82 50, 80 58, 80 62 C 80 70, 100 82, 100 82 C 100 82, 120 70, 120 62 C 120 58, 118 50, 110 50 C 105 50, 100 55, 100 60 Z"
            fill="#ec4899"
          />

          {/* Text */}
          <text
            x="100"
            y="110"
            fontFamily="'Georgia', serif"
            fontSize="34"
            fill="#a855f7"
            textAnchor="middle"
            fontWeight="bold"
          >
            JISI
          </text>
          <text
            x="100"
            y="130"
            fontFamily="Arial, sans-serif"
            fontSize="13"
            fill="#4b5563"
            textAnchor="middle"
            letterSpacing="2"
          >
            EVENTS
          </text>
          <text
            x="100"
            y="147"
            fontFamily="Arial, sans-serif"
            fontSize="10"
            fill="#9ca3af"
            textAnchor="middle"
          >
            Celebrations & Decor
          </text>
        </svg>
      ),
    },
    {
      name: "Simple Star Banner",
      description: "Clean and memorable design",
      component: (size = 200) => (
        <svg width={size} height={size} viewBox="0 0 200 200">
          {/* Star */}
          <polygon
            points="100,50 108,74 134,74 113,90 121,114 100,98 79,114 87,90 66,74 92,74"
            fill="#fbbf24"
          />
          <polygon
            points="100,50 108,74 134,74 113,90 121,114 100,98 79,114 87,90 66,74 92,74"
            fill="none"
            stroke="#fb923c"
            strokeWidth="2"
          />

          {/* Mini decorative elements */}
          <circle cx="50" cy="100" r="4" fill="#ec4899" />
          <circle cx="150" cy="100" r="4" fill="#a855f7" />

          {/* Text */}
          <text
            x="100"
            y="145"
            fontFamily="'Arial Black', sans-serif"
            fontSize="38"
            fill="#1f2937"
            textAnchor="middle"
          >
            JISI
          </text>
          <line
            x1="50"
            y1="155"
            x2="150"
            y2="155"
            stroke="#a855f7"
            strokeWidth="2"
          />
          <text
            x="100"
            y="175"
            fontFamily="Arial, sans-serif"
            fontSize="12"
            fill="#6b7280"
            textAnchor="middle"
            letterSpacing="2"
          >
            EVENTS & DECORATIONS
          </text>
        </svg>
      ),
    },
    {
      name: "Colorful Dots Pattern",
      description: "Vibrant multi-event symbol",
      component: (size = 200) => (
        <svg width={size} height={size} viewBox="0 0 200 200">
          {/* Colorful dots representing different events */}
          <circle cx="70" cy="70" r="12" fill="#ec4899" />
          <circle cx="130" cy="70" r="12" fill="#a855f7" />
          <circle cx="70" cy="130" r="12" fill="#fbbf24" />
          <circle cx="130" cy="130" r="12" fill="#10b981" />
          <circle cx="100" cy="50" r="12" fill="#3b82f6" />
          <circle cx="50" cy="100" r="12" fill="#fb923c" />
          <circle cx="150" cy="100" r="12" fill="#f43f5e" />
          <circle cx="100" cy="150" r="12" fill="#f472b6" />

          {/* Center circle with text */}
          <circle
            cx="100"
            cy="100"
            r="40"
            fill="white"
            stroke="#a855f7"
            strokeWidth="3"
          />
          <text
            x="100"
            y="105"
            fontFamily="'Arial Black', sans-serif"
            fontSize="26"
            fill="#a855f7"
            textAnchor="middle"
            fontWeight="bold"
          >
            JISI
          </text>
          <text
            x="100"
            y="120"
            fontFamily="Arial, sans-serif"
            fontSize="9"
            fill="#4b5563"
            textAnchor="middle"
          >
            EVENTS
          </text>
        </svg>
      ),
    },
    {
      name: "Modern J Letter Mark",
      description: "Stylized J with celebration elements",
      component: (size = 200) => (
        <svg width={size} height={size} viewBox="0 0 200 200">
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="0%" y2="100%">
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

          {/* Large J */}
          <path
            d="M 90 40 L 110 40 L 110 100 Q 110 120, 95 120 Q 80 120, 80 105 L 95 105 Q 100 105, 100 100 L 100 40"
            fill="url(#grad4)"
          />

          {/* Balloon on J */}
          <ellipse cx="100" cy="30" rx="10" ry="13" fill="#fbbf24" />
          <line
            x1="100"
            y1="43"
            x2="100"
            y2="50"
            stroke="#fbbf24"
            strokeWidth="1.5"
          />

          {/* Sparkle */}
          <text x="125" y="50" fontSize="18">
            ✨
          </text>

          {/* Text */}
          <text
            x="100"
            y="155"
            fontFamily="'Arial', sans-serif"
            fontSize="36"
            fill="#1f2937"
            textAnchor="middle"
            fontWeight="bold"
            letterSpacing="4"
          >
            JISI
          </text>
          <text
            x="100"
            y="175"
            fontFamily="Arial, sans-serif"
            fontSize="12"
            fill="#6b7280"
            textAnchor="middle"
            letterSpacing="2"
          >
            EVENTS & DECOR
          </text>
        </svg>
      ),
    },
    {
      name: "Party Hat Simple",
      description: "Fun and approachable logo",
      component: (size = 200) => (
        <svg width={size} height={size} viewBox="0 0 200 200">
          <defs>
            <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
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
                style={{ stopColor: "#fbbf24", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>

          {/* Party hat */}
          <polygon points="100,45 70,95 130,95" fill="url(#grad5)" />
          <line
            x1="70"
            y1="95"
            x2="130"
            y2="95"
            stroke="#1f2937"
            strokeWidth="2"
          />

          {/* Pom-pom */}
          <circle cx="100" cy="40" r="7" fill="#fbbf24" />

          {/* Streamers */}
          <path
            d="M 70 95 Q 50 110, 55 125"
            stroke="#ec4899"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 130 95 Q 150 110, 145 125"
            stroke="#a855f7"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Text */}
          <text
            x="100"
            y="145"
            fontFamily="'Verdana', sans-serif"
            fontSize="36"
            fill="#1f2937"
            textAnchor="middle"
            fontWeight="bold"
          >
            JISI
          </text>
          <text
            x="100"
            y="165"
            fontFamily="Arial, sans-serif"
            fontSize="13"
            fill="#6b7280"
            textAnchor="middle"
            letterSpacing="2"
          >
            EVENTS
          </text>
          <text
            x="100"
            y="182"
            fontFamily="Arial, sans-serif"
            fontSize="10"
            fill="#9ca3af"
            textAnchor="middle"
          >
            All Occasions
          </text>
        </svg>
      ),
    },
  ];

  const services = [
    { icon: "🎈", name: "Birthday", color: "#ec4899" },
    { icon: "👶", name: "Baby Shower", color: "#f472b6" },
    { icon: "💕", name: "Anniversary", color: "#f43f5e" },
    { icon: "🎁", name: "Welcome Baby", color: "#fbbf24" },
    { icon: "💍", name: "Ring Ceremony", color: "#a855f7" },
    { icon: "✨", name: "Haldi", color: "#fbbf24" },
    { icon: "🪔", name: "Festival", color: "#fb923c" },
    { icon: "🏠", name: "Housewarming", color: "#10b981" },
    { icon: "🎉", name: "Office Party", color: "#3b82f6" },
  ];

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "1400px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(to bottom, #faf5ff, white)",
      }}
    >
      {/* Header */}
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
          JISI Events & Decorations
        </h1>
        <p
          style={{ color: "#6b7280", fontSize: "1.2rem", marginBottom: "1rem" }}
        >
          Simple & Attractive Logo Options
        </p>
        <p style={{ color: "#9ca3af", fontSize: "0.95rem" }}>
          For All Your Celebration Needs
        </p>
      </div>

      {/* Services We Provide Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #ec4899, #a855f7)",
          padding: "2rem",
          borderRadius: "1rem",
          marginBottom: "3rem",
          color: "white",
          boxShadow: "0 8px 30px rgba(168, 85, 247, 0.3)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
          }}
        >
          🎊 What We Provide
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
          }}
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(255,255,255,0.2)",
                padding: "1rem",
                borderRadius: "0.75rem",
                textAlign: "center",
                backdropFilter: "blur(10px)",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                {service.icon}
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: "500" }}>
                {service.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Logo Display */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          padding: "3rem",
          background: "white",
          borderRadius: "1rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "0.5rem 1.5rem",
            background: "linear-gradient(135deg, #fce7f3, #faf5ff)",
            borderRadius: "2rem",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{ fontSize: "1.1rem", fontWeight: "600", color: "#a855f7" }}
          >
            {logos[selectedLogo].name}
          </span>
        </div>
        <p style={{ color: "#6b7280", marginBottom: "2rem", fontSize: "1rem" }}>
          {logos[selectedLogo].description}
        </p>
        {logos[selectedLogo].component(280)}
      </div>

      {/* Logo Grid */}
      <h3
        style={{
          textAlign: "center",
          color: "#1f2937",
          marginBottom: "2rem",
          fontSize: "1.5rem",
        }}
      >
        Click to Preview Each Logo
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
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
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                selectedLogo === idx
                  ? "0 8px 25px rgba(168, 85, 247, 0.2)"
                  : "0 2px 10px rgba(0,0,0,0.05)";
            }}
          >
            <div style={{ marginBottom: "1rem" }}>{logo.component(160)}</div>
            <h4
              style={{
                fontSize: "0.95rem",
                color: "#1f2937",
                fontWeight: selectedLogo === idx ? "bold" : "600",
                marginBottom: "0.25rem",
              }}
            >
              {logo.name}
            </h4>
            <p style={{ fontSize: "0.8rem", color: "#9ca3af", margin: 0 }}>
              {logo.description}
            </p>
          </div>
        ))}
      </div>

      {/* Slogans Section */}
      <div
        style={{
          background: "white",
          padding: "3rem 2rem",
          borderRadius: "1rem",
          marginTop: "3rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "0.5rem",
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ✨ Perfect Slogans for Your Brand
        </h3>
        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: "2rem",
          }}
        >
          Choose one that matches your brand personality
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            {
              slogan: "Making Every Celebration Magical",
              vibe: "✨ Emotional & Memorable",
              color: "#a855f7",
            },
            {
              slogan: "Your Celebration, Our Passion",
              vibe: "💕 Personal & Caring",
              color: "#ec4899",
            },
            {
              slogan: "Creating Moments That Matter",
              vibe: "🎯 Professional & Meaningful",
              color: "#f43f5e",
            },
            {
              slogan: "Every Event, Perfectly Crafted",
              vibe: "⭐ Quality-Focused",
              color: "#fbbf24",
            },
            {
              slogan: "Where Celebrations Come to Life",
              vibe: "🎊 Vibrant & Energetic",
              color: "#fb923c",
            },
            {
              slogan: "Decorating Your Special Moments",
              vibe: "🎈 Simple & Direct",
              color: "#10b981",
            },
            {
              slogan: "Turning Events into Memories",
              vibe: "📸 Experience-Focused",
              color: "#3b82f6",
            },
            {
              slogan: "Celebrate in Style with JISI",
              vibe: "💎 Premium & Elegant",
              color: "#a855f7",
            },
            {
              slogan: "From Birthdays to Forever Moments",
              vibe: "🎂 Comprehensive",
              color: "#ec4899",
            },
            {
              slogan: "Your Joy, Our Expertise",
              vibe: "🤝 Partnership & Trust",
              color: "#f472b6",
            },
            {
              slogan: "Bringing Colors to Your Celebrations",
              vibe: "🌈 Vibrant & Visual",
              color: "#fb923c",
            },
            {
              slogan: "Making Every Occasion Special",
              vibe: "🌟 Universal & Warm",
              color: "#fbbf24",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: "1.5rem",
                background: "linear-gradient(135deg, #faf5ff, #fce7f3)",
                borderRadius: "0.75rem",
                border: `2px solid ${item.color}20`,
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = `0 8px 25px ${item.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: item.color,
                  marginBottom: "0.5rem",
                  fontFamily: "Georgia, serif",
                }}
              >
                "{item.slogan}"
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "#6b7280",
                  fontStyle: "italic",
                }}
              >
                {item.vibe}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Combinations */}
      <div
        style={{
          background: "linear-gradient(135deg, #a855f7, #ec4899)",
          color: "white",
          padding: "2rem",
          borderRadius: "1rem",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
          🔥 Most Popular Combinations
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.2)",
              padding: "1.5rem",
              borderRadius: "0.75rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>🎈</div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "1.1rem",
                marginBottom: "0.25rem",
              }}
            >
              JISI Events
            </div>
            <div style={{ fontSize: "0.9rem", opacity: 0.9 }}>
              Making Every Celebration Magical
            </div>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.2)",
              padding: "1.5rem",
              borderRadius: "0.75rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>✨</div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "1.1rem",
                marginBottom: "0.25rem",
              }}
            >
              JISI Events
            </div>
            <div style={{ fontSize: "0.9rem", opacity: 0.9 }}>
              Your Celebration, Our Passion
            </div>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.2)",
              padding: "1.5rem",
              borderRadius: "0.75rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>💕</div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "1.1rem",
                marginBottom: "0.25rem",
              }}
            >
              JISI Events
            </div>
            <div style={{ fontSize: "0.9rem", opacity: 0.9 }}>
              Creating Moments That Matter
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "1rem",
          textAlign: "center",
          marginTop: "2rem",
          border: "2px solid #e5e7eb",
        }}
      >
        <h3
          style={{ fontSize: "1.3rem", marginBottom: "1rem", color: "#1f2937" }}
        >
          💡 Tips for Choosing Your Slogan
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            marginTop: "1.5rem",
          }}
        >
          <div>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🎯</div>
            <p style={{ fontSize: "0.9rem", margin: 0, color: "#4b5563" }}>
              Keep it short and memorable (5-7 words)
            </p>
          </div>
          <div>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>💭</div>
            <p style={{ fontSize: "0.9rem", margin: 0, color: "#4b5563" }}>
              It should reflect your brand values
            </p>
          </div>
          <div>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>😊</div>
            <p style={{ fontSize: "0.9rem", margin: 0, color: "#4b5563" }}>
              Choose one that resonates with you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoConcepts2;
