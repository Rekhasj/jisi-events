import React from "react";

function TermsAndConditions() {
  const terms = [
    {
      title: "Booking & Reservation",
      points: [
        "All bookings must be confirmed with an advance payment.",
        "Booking confirmation is subject to availability and will be confirmed via email or WhatsApp.",
        "The customer must provide accurate event details including date, time, venue, and specific requirements.",
        "Bookings are non-transferable to another date without prior approval and may be subject to rescheduling charges.",
      ],
    },
    {
      title: "Payment Terms",
      points: [
        "An advance payment is required to confirm your booking.",
        "The balance amount must be paid in full once the decoration is completed.",
        "Accepted payment methods: Cash, UPI, IMPS, Net Banking, and Card payments.",
        "NEFT, RTGS, Cheques, and Post-Dated Cheques (PDC) are NOT accepted on the event day.",
        "Any additional items or services requested on the event day will be charged separately.",
      ],
    },
    {
      title: "Decoration Services",
      points: [
        "JiSi Events will provide decoration services as per the agreed package and design.",
        "Decoration accuracy may vary between 80-90% depending on factors like venue size, lighting, and timing.",
        "For custom designs from Pinterest/Google, accuracy will be approximately 70-80% based on material availability.",
        "Setup requires a steady power supply at the venue. Delays due to power issues are not our responsibility.",
        "The customer must provide a stool or ladder if required for decoration setup.",
      ],
    },
    {
      title: "Rental Items",
      points: [
        "Except balloons, all decoration items are rental property and must be returned in good condition.",
        "Rental items will be collected within 48 hours after the event, based on team availability.",
        "The customer is responsible for the safe keeping of all rental items during the event period.",
        "Any damaged, lost, or missing items will be charged at full replacement cost.",
        "Balloons are non-returnable and remain with the customer after the event.",
      ],
    },
    {
      title: "Venue & Permissions",
      points: [
        "The customer must obtain all necessary permissions from the venue management before decoration.",
        "JiSi Events is not responsible for any venue restrictions or regulations.",
        "The customer must inform us of any venue-specific rules or limitations before the event date.",
        "Access to the venue must be provided at least 2-4 hours before the event for setup.",
      ],
    },
    {
      title: "Cancellation & Modifications",
      points: [
        "Cancellations must be notified in writing (email/WhatsApp) as per our Refund & Cancellation Policy.",
        "Modifications to the booking can be made up to 48 hours before the event, subject to availability.",
        "Last-minute changes may incur additional charges.",
        "Refer to our Refund & Cancellation Policy for detailed terms.",
      ],
    },
    {
      title: "Force Majeure",
      points: [
        "JiSi Events is not liable for delays or inability to perform due to circumstances beyond our control.",
        "This includes but is not limited to: natural disasters, extreme weather, pandemics, government restrictions, strikes, or accidents.",
        "In such cases, we will work with you to reschedule the event or provide alternative solutions.",
      ],
    },
    {
      title: "Liability & Damages",
      points: [
        "JiSi Events is not responsible for any injuries, accidents, or damages occurring during or after the event.",
        "We are not liable for any damage to the venue property caused by guests or external factors.",
        "The customer is responsible for ensuring guest safety around decoration items.",
        "Any complaints or issues must be reported during the same service time slot on the event day.",
      ],
    },
    {
      title: "Photography & Marketing",
      points: [
        "JiSi Events reserves the right to photograph decorated venues for marketing and portfolio purposes.",
        "Photos may be used on our website, social media, and promotional materials.",
        "If you prefer not to have your event photographed, please inform us in writing before the event.",
      ],
    },
    {
      title: "Customer Responsibilities",
      points: [
        "Provide accurate and complete information during booking.",
        "Ensure venue accessibility and power supply for our team.",
        "Coordinate with venue management for necessary permissions.",
        "Safeguard rental items until collection.",
        "Report any issues immediately during the service period.",
      ],
    },
    {
      title: "Disputes & Jurisdiction",
      points: [
        "Any disputes arising from our services will be subject to Hyderabad jurisdiction only.",
        "We strive to resolve all issues amicably and encourage customers to contact us first before taking legal action.",
        "Our decision on service-related matters will be final and binding.",
      ],
    },
    {
      title: "Amendments",
      points: [
        "JiSi Events reserves the right to modify these terms and conditions at any time.",
        "Updated terms will be posted on our website and will apply to all future bookings.",
        "Customers are encouraged to review these terms periodically.",
      ],
    },
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
              📜
            </div>
            <h1 className="fw-bold mb-3">Terms & Conditions</h1>
            <p className="text-muted lead">
              Please read these terms carefully before using our services
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

          {/* Introduction */}
          <div className="card border-0 shadow-sm mb-4 p-4">
            <p className="mb-0 text-muted">
              By booking our services, you agree to comply with and be bound by
              the following terms and conditions. Please review them carefully.
              If you do not agree to these terms, you should not use our
              services.
            </p>
          </div>

          {/* Terms Sections */}
          {terms.map((section, idx) => (
            <div key={idx} className="mb-5">
              <h3 className="fw-bold mb-3" style={{ color: "#f59e0b" }}>
                {idx + 1}. {section.title}
              </h3>
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <ul className="mb-0">
                    {section.points.map((point, pIdx) => (
                      <li key={pIdx} className="mb-3 text-muted">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div className="mt-5 p-5 text-center bg-warning bg-opacity-10 rounded shadow-sm">
            <h4 className="fw-bold mb-3">Questions about our Terms?</h4>
            <p className="text-muted mb-4">
              If you have any questions about these Terms & Conditions, please
              contact us.
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

export default TermsAndConditions;
