import React from "react";

function ThingsToRemember() {
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

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div
            className="card border-0 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #ffffff, #fef3c7)",
              borderLeft: "6px solid #f59e0b",
            }}
          >
            <div className="card-body p-5">
              <div className="text-center mb-5">
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
                <h1 className="h2 fw-bold" style={{ color: "#f59e0b" }}>
                  Things to Remember
                </h1>
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

              <div className="mt-5 p-4 bg-white rounded shadow-sm">
                <h5 className="fw-bold mb-3" style={{ color: "#f59e0b" }}>
                  Have Questions?
                </h5>
                <p className="text-muted mb-3">
                  If you have any queries or need clarification on any of these
                  points, feel free to contact us.
                </p>
                <a href="/contact" className="btn btn-warning">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThingsToRemember;
