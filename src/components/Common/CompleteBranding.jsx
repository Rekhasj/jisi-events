import React, { useState } from "react";

const CompleteBranding = () => {
  const [selectedDesign, setSelectedDesign] = useState(0);
  const [showCode, setShowCode] = useState(false);

  const faviconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#a855f7;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="48" fill="url(#grad)"/>
  <text x="50" y="62" font-family="Arial Black, sans-serif" font-size="28" fill="white" text-anchor="middle" font-weight="bold">JiSi</text>
  <circle cx="75" cy="25" r="8" fill="#fbbf24"/>
</svg>`;

  const designs = [
    {
      name: "Logo with Slogan - Vertical",
      type: "Primary Logo",
      svg: `<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#a855f7;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Balloons -->
  <ellipse cx="80" cy="70" rx="22" ry="28" fill="#ec4899" opacity="0.9"/>
  <line x1="80" y1="98" x2="80" y2="130" stroke="#ec4899" stroke-width="2"/>
  
  <ellipse cx="320" cy="60" rx="22" ry="28" fill="#a855f7" opacity="0.9"/>
  <line x1="320" y1="88" x2="320" y2="120" stroke="#a855f7" stroke-width="2"/>
  
  <ellipse cx="200" cy="50" rx="22" ry="28" fill="#fbbf24" opacity="0.9"/>
  <line x1="200" y1="78" x2="200" y2="110" stroke="#fbbf24" stroke-width="2"/>
  
  <!-- Main Text -->
  <text x="200" y="160" font-family="Arial Black, sans-serif" font-size="56" fill="#a855f7" text-anchor="middle" font-weight="bold">JiSi</text>
  <text x="200" y="190" font-family="Arial, sans-serif" font-size="20" fill="#4b5563" text-anchor="middle" letter-spacing="4">EVENTS & DECORATIONS</text>
  
  <!-- Divider -->
  <line x1="100" y1="210" x2="300" y2="210" stroke="#a855f7" stroke-width="2"/>
  
  <!-- Slogan -->
  <text x="200" y="240" font-family="Georgia, serif" font-size="22" fill="#ec4899" text-anchor="middle" font-style="italic">Making Every Celebration Magical</text>
  <text x="200" y="270" font-family="Arial, sans-serif" font-size="14" fill="#9ca3af" text-anchor="middle">✨ Emotional & Memorable</text>
</svg>`,
    },
    {
      name: "Logo with Slogan - Horizontal",
      type: "For Website Header",
      svg: `<svg width="600" height="200" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#a855f7;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Balloon Icon -->
  <ellipse cx="80" cy="80" rx="30" ry="38" fill="url(#grad2)"/>
  <line x1="80" y1="118" x2="80" y2="145" stroke="#a855f7" stroke-width="2.5"/>
  <circle cx="60" cy="60" r="5" fill="#fbbf24"/>
  <circle cx="100" cy="70" r="5" fill="#fbbf24"/>
  
  <!-- Main Text -->
  <text x="140" y="90" font-family="Arial Black, sans-serif" font-size="48" fill="#a855f7" font-weight="bold">JiSi</text>
  <text x="140" y="115" font-family="Arial, sans-serif" font-size="16" fill="#4b5563" letter-spacing="3">EVENTS & DECORATIONS</text>
  <text x="140" y="140" font-family="Georgia, serif" font-size="18" fill="#ec4899" font-style="italic"> </text>
</svg>`,
    },
    {
      name: "Circular Badge Logo",
      type: "For Social Media Profile",
      svg: `<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#a855f7;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Outer Circle -->
  <circle cx="200" cy="200" r="190" fill="white"/>
  <circle cx="200" cy="200" r="190" fill="none" stroke="url(#grad3)" stroke-width="8"/>
  
  <!-- Inner gradient circle -->
  <circle cx="200" cy="200" r="160" fill="url(#grad3)" opacity="0.1"/>
  
  <!-- Decorative elements -->
  <circle cx="150" cy="120" r="8" fill="#fbbf24"/>
  <circle cx="250" cy="120" r="8" fill="#fbbf24"/>
  <circle cx="120" cy="200" r="6" fill="#ec4899"/>
  <circle cx="280" cy="200" r="6" fill="#a855f7"/>
  
  <!-- Main Text -->
  <text x="200" y="180" font-family="Arial Black, sans-serif" font-size="64" fill="#a855f7" text-anchor="middle" font-weight="bold">JiSi</text>
  <text x="200" y="210" font-family="Arial, sans-serif" font-size="18" fill="#4b5563" text-anchor="middle" letter-spacing="3">EVENTS</text>
  
  <!-- Bottom text curved -->
  <path id="curve" d="M 80,260 Q 200,300 320,260" fill="none"/>
  <text font-family="Georgia, serif" font-size="20" fill="#ec4899" font-style="italic">
    <textPath href="#curve" startOffset="50%" text-anchor="middle">
      Making Every Celebration Magical ✨
    </textPath>
  </text>
</svg>`,
    },
    {
      name: "Minimal Modern Logo",
      type: "Clean & Professional",
      svg: `<svg width="500" height="250" viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad4" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#a855f7;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Balloon -->
  <ellipse cx="120" cy="80" rx="35" ry="45" fill="url(#grad4)"/>
  <path d="M 120 125 Q 115 135, 110 145" stroke="#a855f7" stroke-width="2.5" fill="none"/>
  <path d="M 110 145 L 105 155 L 115 155 Z" fill="#a855f7"/>
  
  <!-- Sparkles -->
  <circle cx="90" cy="60" r="4" fill="#fbbf24"/>
  <circle cx="150" cy="70" r="4" fill="#fbbf24"/>
  
  <!-- Main Text -->
  <text x="250" y="95" font-family="Helvetica Neue, sans-serif" font-size="68" fill="#1f2937" text-anchor="middle" font-weight="300" letter-spacing="6">JiSi</text>
  <text x="250" y="125" font-family="Arial, sans-serif" font-size="18" fill="#6b7280" text-anchor="middle" letter-spacing="4">EVENTS & DECORATIONS</text>
  
  <!-- Line -->
  <line x1="100" y1="155" x2="400" y2="155" stroke="#a855f7" stroke-width="2"/>
  
  <!-- Slogan -->
  <text x="250" y="190" font-family="Georgia, serif" font-size="24" fill="#ec4899" text-anchor="middle" font-style="italic">Making Every Celebration Magical</text>
  <text x="250" y="215" font-family="Arial, sans-serif" font-size="14" fill="#9ca3af" text-anchor="middle">✨ Emotional & Memorable ✨</text>
</svg>`,
    },
    {
      name: "Party Hat Fun Logo",
      type: "Playful & Friendly",
      svg: `<svg width="450" height="300" viewBox="0 0 450 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#a855f7;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#fbbf24;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Party hat -->
  <polygon points="225,40 185,100 265,100" fill="url(#grad5)"/>
  <line x1="185" y1="100" x2="265" y2="100" stroke="#1f2937" stroke-width="3"/>
  
  <!-- Pom-pom -->
  <circle cx="225" cy="32" r="10" fill="#fbbf24"/>
  
  <!-- Confetti -->
  <rect x="150" y="70" width="12" height="12" fill="#ec4899" transform="rotate(25 156 76)"/>
  <rect x="300" y="75" width="12" height="12" fill="#a855f7" transform="rotate(-30 306 81)"/>
  <circle cx="170" cy="120" r="6" fill="#10b981"/>
  <circle cx="280" cy="125" r="6" fill="#3b82f6"/>
  
  <!-- Main Text -->
  <text x="225" y="155" font-family="Comic Sans MS, cursive" font-size="58" fill="#a855f7" text-anchor="middle" font-weight="bold">JiSi</text>
  <text x="225" y="185" font-family="Arial, sans-serif" font-size="20" fill="#4b5563" text-anchor="middle" letter-spacing="3">EVENTS & DECORATIONS</text>
  
  <!-- Divider -->
  <line x1="100" y1="210" x2="350" y2="210" stroke="#ec4899" stroke-width="2"/>
  
  <!-- Slogan -->
  <text x="225" y="245" font-family="Georgia, serif" font-size="24" fill="#ec4899" text-anchor="middle" font-style="italic">Making Every Celebration Magical</text>
  <text x="225" y="275" font-family="Arial, sans-serif" font-size="14" fill="#9ca3af" text-anchor="middle">✨ Emotional & Memorable ✨</text>
</svg>`,
    },
    {
      name: "Elegant Ribbon Banner",
      type: "Premium & Sophisticated",
      svg: `<svg width="500" height="280" viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#a855f7;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Ribbon banner -->
  <path d="M 50 80 L 450 80 L 465 100 L 450 120 L 50 120 L 35 100 Z" fill="url(#grad6)"/>
  
  <!-- Ribbon tails -->
  <path d="M 35 100 L 20 85 L 35 100 L 20 115 Z" fill="#a855f7"/>
  <path d="M 465 100 L 480 85 L 465 100 L 480 115 Z" fill="#ec4899"/>
  
  <!-- Main text on ribbon -->
  <text x="250" y="108" font-family="Georgia, serif" font-size="32" fill="white" text-anchor="middle" font-weight="bold">JiSi EVENTS</text>
  
  <!-- Subtitle -->
  <text x="250" y="155" font-family="Arial, sans-serif" font-size="18" fill="#4b5563" text-anchor="middle" letter-spacing="3">& DECORATIONS</text>
  
  <!-- Decorative sparkles -->
  <text x="100" y="60" font-size="24">✨</text>
  <text x="400" y="60" font-size="24">✨</text>
  <text x="80" y="150" font-size="20">🎈</text>
  <text x="420" y="150" font-size="20">🎈</text>
  
  <!-- Slogan -->
  <text x="250" y="200" font-family="Georgia, serif" font-size="26" fill="#ec4899" text-anchor="middle" font-style="italic">Making Every Celebration Magical</text>
  <text x="250" y="230" font-family="Arial, sans-serif" font-size="14" fill="#9ca3af" text-anchor="middle">✨ Emotional & Memorable ✨</text>
  
  <!-- Bottom line -->
  <line x1="150" y1="250" x2="350" y2="250" stroke="#a855f7" stroke-width="2"/>
</svg>`,
    },
  ];

  const downloadSVG = (svgContent, filename) => {
    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

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
          🎨 Complete Branding Package
        </h1>
        <p
          style={{
            color: "#6b7280",
            fontSize: "1.2rem",
            marginBottom: "0.5rem",
          }}
        >
          JiSi Events & Decorations
        </p>
        <p
          style={{
            color: "#ec4899",
            fontSize: "1.1rem",
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
          }}
        >
          "Making Every Celebration Magical" ✨
        </p>
      </div>

      {/* Favicon Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #a855f7, #ec4899)",
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
          🌐 Website Favicon (Browser Tab Icon)
        </h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "1rem",
                marginBottom: "1rem",
              }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: faviconSVG }}
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <p style={{ fontSize: "0.9rem", opacity: 0.9 }}>
              Preview (100x100px)
            </p>
          </div>
          <div style={{ flex: 1, maxWidth: "500px" }}>
            <div
              style={{
                background: "rgba(255,255,255,0.2)",
                padding: "1.5rem",
                borderRadius: "0.75rem",
                backdropFilter: "blur(10px)",
                marginBottom: "1rem",
              }}
            >
              <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
                📝 How to Use:
              </h3>
              <ol
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.8",
                  paddingLeft: "1.5rem",
                }}
              >
                <li>
                  Save the SVG code as{" "}
                  <code
                    style={{
                      background: "rgba(0,0,0,0.2)",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "0.25rem",
                    }}
                  >
                    favicon.svg
                  </code>
                </li>
                <li>
                  Place it in your{" "}
                  <code
                    style={{
                      background: "rgba(0,0,0,0.2)",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "0.25rem",
                    }}
                  >
                    public/
                  </code>{" "}
                  folder
                </li>
                <li>Update your HTML head tag</li>
              </ol>
            </div>
            <button
              onClick={() => setShowCode(!showCode)}
              style={{
                background: "white",
                color: "#a855f7",
                border: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                width: "100%",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {showCode ? "✅ Hide Code" : "💻 Show HTML Code"}
            </button>

            {showCode && (
              <div
                style={{
                  background: "#1f2937",
                  color: "#10b981",
                  padding: "1.5rem",
                  borderRadius: "0.75rem",
                  marginTop: "1rem",
                  fontSize: "0.85rem",
                  fontFamily: "monospace",
                  overflow: "auto",
                }}
              >
                <pre
                  style={{ margin: 0, whiteSpace: "pre-wrap" }}
                >{`<!-- In your index.html head section -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`}</pre>
              </div>
            )}
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <button
            onClick={() => downloadSVG(faviconSVG, "jisi-favicon.svg")}
            style={{
              background: "white",
              color: "#a855f7",
              border: "none",
              padding: "1rem 2rem",
              borderRadius: "0.5rem",
              fontSize: "1.1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            ⬇️ Download Favicon SVG
          </button>
        </div>
      </div>

      {/* Selected Design Display */}
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
            marginBottom: "1rem",
          }}
        >
          <span
            style={{ fontSize: "1.1rem", fontWeight: "600", color: "#a855f7" }}
          >
            {designs[selectedDesign].name}
          </span>
        </div>
        <p style={{ color: "#6b7280", marginBottom: "2rem", fontSize: "1rem" }}>
          {designs[selectedDesign].type}
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: designs[selectedDesign].svg }}
        />
        <div style={{ marginTop: "2rem" }}>
          <button
            onClick={() =>
              downloadSVG(
                designs[selectedDesign].svg,
                `jisi-logo-${designs[selectedDesign].name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}.svg`
              )
            }
            style={{
              background: "linear-gradient(135deg, #a855f7, #ec4899)",
              color: "white",
              border: "none",
              padding: "1rem 2.5rem",
              borderRadius: "0.5rem",
              fontSize: "1.1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(168, 85, 247, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            ⬇️ Download This Logo
          </button>
        </div>
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
        Choose Your Favorite Design
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginBottom: "3rem",
        }}
      >
        {designs.map((design, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedDesign(idx)}
            style={{
              padding: "1.5rem",
              background:
                selectedDesign === idx
                  ? "linear-gradient(135deg, #faf5ff, #fce7f3)"
                  : "white",
              borderRadius: "1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              border:
                selectedDesign === idx
                  ? "3px solid #a855f7"
                  : "2px solid #e5e7eb",
              boxShadow:
                selectedDesign === idx
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
                selectedDesign === idx
                  ? "0 8px 25px rgba(168, 85, 247, 0.2)"
                  : "0 2px 10px rgba(0,0,0,0.05)";
            }}
          >
            <div
              style={{ marginBottom: "1rem", overflow: "hidden" }}
              dangerouslySetInnerHTML={{
                __html: design.svg
                  .replace(/width="\d+"/, 'width="100%"')
                  .replace(/height="\d+"/, 'height="auto"'),
              }}
            />
            <h4
              style={{
                fontSize: "1rem",
                color: "#1f2937",
                fontWeight: selectedDesign === idx ? "bold" : "600",
                marginBottom: "0.25rem",
              }}
            >
              {design.name}
            </h4>
            <p style={{ fontSize: "0.85rem", color: "#9ca3af", margin: 0 }}>
              {design.type}
            </p>
          </div>
        ))}
      </div>

      {/* Usage Guide */}
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          marginTop: "3rem",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            fontSize: "1.8rem",
            marginBottom: "2rem",
            color: "#1f2937",
          }}
        >
          📱 Where to Use These Logos
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            {
              icon: "🌐",
              title: "Website",
              desc: "Header, footer, and hero section",
            },
            {
              icon: "📱",
              title: "Social Media",
              desc: "Profile pictures, covers, posts",
            },
            {
              icon: "💳",
              title: "Business Cards",
              desc: "Print materials and stationery",
            },
            {
              icon: "📧",
              title: "Email Signature",
              desc: "Professional communication",
            },
            { icon: "📄", title: "Invoices", desc: "Bills and quotations" },
            {
              icon: "🎨",
              title: "Marketing",
              desc: "Banners, flyers, brochures",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: "1.5rem",
                background: "linear-gradient(135deg, #faf5ff, #fce7f3)",
                borderRadius: "0.75rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
                {item.icon}
              </div>
              <h4
                style={{
                  color: "#1f2937",
                  fontSize: "1.1rem",
                  marginBottom: "0.5rem",
                }}
              >
                {item.title}
              </h4>
              <p style={{ color: "#6b7280", fontSize: "0.9rem", margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div
        style={{
          background: "linear-gradient(135deg, #a855f7, #ec4899)",
          color: "white",
          padding: "3rem 2rem",
          borderRadius: "1rem",
          textAlign: "center",
          marginTop: "3rem",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          ✨ Your Branding is Ready!
        </h2>
        <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
          Download all logos and start using them across all platforms
        </p>
        <p
          style={{
            fontSize: "1.3rem",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
          }}
        >
          "Making Every Celebration Magical" 🎉
        </p>
      </div>
    </div>
  );
};

export default CompleteBranding;
