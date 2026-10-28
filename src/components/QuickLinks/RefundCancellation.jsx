import React from "react";

function RefundCancellation() {
  const policies = [
    {
      title: "Cancellation by Customer",
      icon: "🚫",
      color: "#ef4444",
      details: [
        {
          condition: "Cancellation 15+ days before event",
          refund: "80% refund of advance payment",
          note: "20% will be deducted as cancellation charges",
        },
        {
          condition: "Cancellation 8-14 days before event",
          refund: "50% refund of advance payment",
          note: "50% will be deducted as cancellation charges",
        },
        {
          condition: "Cancellation 3-7 days before event",
          refund: "25% refund of advance payment",
          note: "75% will be deducted as cancellation charges",
        },
        {
          condition: "Cancellation within 48 hours of event",
          refund: "No refund",
          note: "100% advance amount will be forfeited",
        },
      ],
    },
    {
      title: "Rescheduling Policy",
      icon: "📅",
      color: "#f59e0b",
      details: [
        {
          condition: "Rescheduling 7+ days before event",
          refund: "Free rescheduling (one time only)",
          note: "Subject to availability for new date",
        },
        {
          condition: "Rescheduling 3-6 days before event",
          refund: "₹500 rescheduling fee",
          note: "Subject to availability for new date",
        },
        {
          condition: "Rescheduling within 48 hours",
          refund: "₹1000 rescheduling fee",
          note: "Subject to availability, or may be treated as cancellation",
        },
      ],
    },
    {
      title: "Refund for Service Issues",
      icon: "⚠️",
      color: "#3b82f6",
      details: [
        {
          condition: "Major service failure (no-show, wrong setup)",
          refund: "100% refund",
          note: "Must be reported immediately during event time",
        },
        {
          condition: "Partial service completion",
          refund: "Partial refund (case-by-case basis)",
          note: "Refund amount determined based on service completion percentage",
        },
        {
          condition: "Minor discrepancies in decoration",
          refund: "No refund",
          note: "80-90% accuracy is standard; minor variations are expected",
        },
      ],
    },
  ];

  const additionalTerms = [
    "All cancellation requests must be submitted in writing via email or WhatsApp.",
    "Refunds will be processed within 7-10 business days from the cancellation date.",
    "Refunds will be made to the original payment method only.",
    "In case of force majeure events (natural disasters, pandemics, government restrictions), both parties can mutually reschedule without charges.",
    "If JiSi Events cancels the booking due to unavailability, 100% refund will be provided within 3-5 business days.",
    "Any add-on services or extra items purchased are non-refundable once the order is confirmed.",
    "Complaints or issues must be reported during the event service time. Post-event complaints may not be entertained.",
    "Photography rights: If we are unable to photograph your event due to cancellation, no compensation will be provided.",
  ];

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Header */}
          <div className="text-center mb-5">
            <div
              className="d-inline-flex align-items-center justify-content-center rounded-circle bg-warning bg-opacity-10 mb-3"
              style={{
                width: "80px",
                height: "80px",
                fontSize: "2.5rem",
              }}
            >
              💰
            </div>
            <h1 className="fw-bold mb-3">Refund & Cancellation Policy</h1>
            <p className="text-muted lead">
              Understanding our refund and cancellation terms
            </p>
            <p className="text-muted small">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>

          {/* Policy Cards */}
          {policies.map((policy, idx) => (
            <div key={idx} className="mb-5">
              <div className="d-flex align-items-center mb-4">
                <span
                  className="me-3"
                  style={{
                    fontSize: "2.5rem",
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: `${policy.color}20`,
                    borderRadius: "12px",
                  }}
                >
                  {policy.icon}
                </span>
                <h3 className="fw-bold mb-0" style={{ color: policy.color }}>
                  {policy.title}
                </h3>
              </div>

              <div className="row g-3">
                {policy.details.map((detail, dIdx) => (
                  <div key={dIdx} className="col-12">
                    <div
                      className="card border-0 shadow-sm h-100"
                      style={{
                        borderLeft: `4px solid ${policy.color}`,
                      }}
                    >
                      <div className="card-body p-4">
                        <h5 className="fw-bold mb-3">{detail.condition}</h5>
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <span className="text-muted">Refund:</span>
                          <span
                            className="fw-bold"
                            style={{ color: policy.color }}
                          >
                            {detail.refund}
                          </span>
                        </div>
                        <p className="text-muted small mb-0">
                          <em>{detail.note}</em>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Additional Terms */}
          <div className="mt-5">
            <h3 className="fw-bold mb-4" style={{ color: "#1f2937" }}>
              Additional Terms
            </h3>
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <ul className="mb-0">
                  {additionalTerms.map((term, idx) => (
                    <li key={idx} className="mb-3 text-muted">
                      {term}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* How to Request */}
          <div className="mt-5 p-5 bg-warning bg-opacity-10 rounded shadow-sm">
            <h4 className="fw-bold mb-3">
              How to Request Cancellation or Refund?
            </h4>
            <div className="row g-4">
              <div className="col-md-4 text-center">
                <div
                  className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px", fontSize: "1.8rem" }}
                >
                  📧
                </div>
                <h6 className="fw-bold">Email Us</h6>
                <p className="text-muted small">
                  Send a cancellation request to info@jisievents.com
                </p>
              </div>
              <div className="col-md-4 text-center">
                <div
                  className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px", fontSize: "1.8rem" }}
                >
                  💬
                </div>
                <h6 className="fw-bold">WhatsApp</h6>
                <p className="text-muted small">
                  Message us on +91 12345 67890
                </p>
              </div>
              <div className="col-md-4 text-center">
                <div
                  className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px", fontSize: "1.8rem" }}
                >
                  📞
                </div>
                <h6 className="fw-bold">Call Us</h6>
                <p className="text-muted small">Speak to our team directly</p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-4 p-5 text-center bg-dark text-white rounded shadow-sm">
            <h4 className="fw-bold mb-3">Have Questions?</h4>
            <p className="mb-4">
              If you need clarification on our refund policy, we're here to
              help.
            </p>
            <a href="/contact" className="btn btn-warning btn-lg px-5">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RefundCancellation;
