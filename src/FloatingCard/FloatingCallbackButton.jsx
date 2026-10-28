import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const FloatingCallbackButton = ({ position = "left", onSubmit }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    eventDate: "",
    eventTime: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
        setShowTooltip(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    if (!showTooltip) return;
    const hideTimer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(hideTimer);
  }, [showTooltip]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.eventDate) {
      newErrors.eventDate = "Event date is required";
    }

    if (!formData.eventTime) {
      newErrors.eventTime = "Event time is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        console.log("Callback Request:", formData);
        alert("Request submitted successfully! We'll contact you soon.");
      }

      setFormData({
        name: "",
        mobile: "",
        eventDate: "",
        eventTime: "",
        description: "",
      });
      setShowModal(false);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleClick = () => {
    setShowModal(true);
    setShowTooltip(false);
  };

  return (
    <>
      <div
        className="floating-callback"
        style={{
          position: "fixed",
          bottom: "110px",
          [position]: "30px",
          zIndex: 9999,
          transition: "all 0.3s ease-in-out",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0)",
        }}
      >
        {/* {showTooltip && isVisible && (
          <div
            className="callback-tooltip"
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
              📞 Request a callback!
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
        )} */}

        <button
          onClick={handleClick}
          // onClick={() => navigate("/contact")}
          className="callback-button"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#3b82f6",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(59, 130, 246, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            animation: "pulse 2s infinite",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow =
              "0 6px 30px rgba(59, 130, 246, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 4px 20px rgba(59, 130, 246, 0.4)";
          }}
          aria-label="Request Callback"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
              fill="white"
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
            backgroundColor: "#f59e0b",
            border: "3px solid white",
            borderRadius: "50%",
            animation: "blink 2s infinite",
          }}
        />
      </div>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
            padding: "20px",
            animation: "fadeIn 0.3s ease-out",
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "32px",
              maxWidth: "500px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
              animation: "slideUp 0.3s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#1f2937",
                }}
              >
                Request a Callback
              </h2>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "28px",
                  cursor: "pointer",
                  color: "#9ca3af",
                  padding: "0",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f3f4f6";
                  e.currentTarget.style.color = "#1f2937";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#9ca3af";
                }}
              >
                ×
              </button>
            </div>

            <div>
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  Name <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: `1px solid ${errors.name ? "#ef4444" : "#d1d5db"}`,
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                    transition: "border-color 0.2s",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                  onBlur={(e) =>
                    (e.target.style.borderColor = errors.name
                      ? "#ef4444"
                      : "#d1d5db")
                  }
                />
                {errors.name && (
                  <p
                    style={{
                      color: "#ef4444",
                      fontSize: "14px",
                      marginTop: "4px",
                      margin: "4px 0 0 0",
                    }}
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  Mobile Number <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter 10-digit mobile number"
                  maxLength="10"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: `1px solid ${
                      errors.mobile ? "#ef4444" : "#d1d5db"
                    }`,
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                    transition: "border-color 0.2s",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                  onBlur={(e) =>
                    (e.target.style.borderColor = errors.mobile
                      ? "#ef4444"
                      : "#d1d5db")
                  }
                />
                {errors.mobile && (
                  <p
                    style={{
                      color: "#ef4444",
                      fontSize: "14px",
                      marginTop: "4px",
                      margin: "4px 0 0 0",
                    }}
                  >
                    {errors.mobile}
                  </p>
                )}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "500",
                      color: "#374151",
                    }}
                  >
                    Event Date <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: `1px solid ${
                        errors.eventDate ? "#ef4444" : "#d1d5db"
                      }`,
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      transition: "border-color 0.2s",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.eventDate
                        ? "#ef4444"
                        : "#d1d5db")
                    }
                  />
                  {errors.eventDate && (
                    <p
                      style={{
                        color: "#ef4444",
                        fontSize: "14px",
                        marginTop: "4px",
                        margin: "4px 0 0 0",
                      }}
                    >
                      {errors.eventDate}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "500",
                      color: "#374151",
                    }}
                  >
                    Event Time <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="time"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: `1px solid ${
                        errors.eventTime ? "#ef4444" : "#d1d5db"
                      }`,
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      transition: "border-color 0.2s",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.eventTime
                        ? "#ef4444"
                        : "#d1d5db")
                    }
                  />
                  {errors.eventTime && (
                    <p
                      style={{
                        color: "#ef4444",
                        fontSize: "14px",
                        marginTop: "4px",
                        margin: "4px 0 0 0",
                      }}
                    >
                      {errors.eventTime}
                    </p>
                  )}
                </div>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  Description (Optional)
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us about your event..."
                  rows="4"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "inherit",
                    transition: "border-color 0.2s",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                  onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                />
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <button
                  onClick={() => setShowModal(false)}
                  style={{
                    flex: 1,
                    padding: "12px 24px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer",
                    backgroundColor: "white",
                    color: "#374151",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f9fafb")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "white")
                  }
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  style={{
                    flex: 1,
                    padding: "12px 24px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    backgroundColor: isSubmitting ? "#93c5fd" : "#3b82f6",
                    color: "white",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    !isSubmitting &&
                    (e.currentTarget.style.backgroundColor = "#2563eb")
                  }
                  onMouseLeave={(e) =>
                    !isSubmitting &&
                    (e.currentTarget.style.backgroundColor = "#3b82f6")
                  }
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
          }
          50% {
            box-shadow: 0 4px 30px rgba(59, 130, 246, 0.7);
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .callback-button:active {
          transform: scale(0.95) !important;
        }

        @media (max-width: 768px) {
          .floating-callback {
            bottom: 100px !important;
            ${position}: 20px !important;
          }
          
          .callback-button {
            width: 56px !important;
            height: 56px !important;
          }

          .callback-tooltip {
            max-width: 160px !important;
            font-size: 13px !important;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingCallbackButton;
