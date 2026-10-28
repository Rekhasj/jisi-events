import React, { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What areas do you serve?",
          a: "We provide event decoration services across Kuppam and surrounding areas. Transportation charges may apply based on your location.",
        },
        {
          q: "How far in advance should I book?",
          a: "We recommend booking at least 2-3 weeks in advance, especially for peak seasons and weekends. However, we also accommodate last-minute bookings based on availability.",
        },
        {
          q: "Do you provide decoration for all types of events?",
          a: "Yes! We specialize in birthday parties, baby showers, anniversaries, corporate events, weddings, and all special occasions.",
        },
        {
          q: "Can I customize the decoration theme?",
          a: "Absolutely! We offer customized decorations based on your preferences. You can share your ideas, Pinterest/Google references, or choose from our existing packages.",
        },
      ],
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept Cash, UPI, IMPS, Net Banking, and Card payments. Please note: NEFT, RTGS, Cheques, and PDC are not accepted on the event day.",
        },
        {
          q: "When do I need to pay the balance amount?",
          a: "The balance payment must be cleared once the decoration is completed on the event day.",
        },
        {
          q: "Are there any hidden charges?",
          a: "No hidden charges! However, extra items not listed in the package inclusions and transportation charges (based on location) will be charged separately.",
        },
        {
          q: "Do you offer discounts?",
          a: "We occasionally run special offers and discounts. Follow us on social media or contact us directly to know about current promotions.",
        },
      ],
    },
    {
      category: "Decoration & Setup",
      questions: [
        {
          q: "How long does the decoration setup take?",
          a: "Setup time varies depending on the package size and complexity. Typically, it takes 2-4 hours. We require a steady power supply for timely decoration.",
        },
        {
          q: "Do you clean up after the event?",
          a: "No, our team does not clean the venue after decoration. We only handle the setup and later collect the rental items.",
        },
        {
          q: "What if I need a ladder or stool for decoration?",
          a: "Customers should provide a stool or ladder if required for the decoration setup.",
        },
        {
          q: "How accurate will the decoration be compared to the reference image?",
          a: "For our standard packages, accuracy is typically 80-90% depending on lighting, venue size, and timing. For Pinterest/Google designs, accuracy is around 70-80% based on material availability.",
        },
      ],
    },
    {
      category: "Rental Items",
      questions: [
        {
          q: "What items are on rental?",
          a: "Except balloons, all decoration items are on rental and will be collected within 48 hours after your event.",
        },
        {
          q: "When will rental items be collected?",
          a: "Rental items will be collected within 48 hours based on our team's availability. We'll coordinate the pickup time with you.",
        },
        {
          q: "What if a rental item gets damaged?",
          a: "Rental items must be returned safely. Any damages or missing items will be charged as per the item's value.",
        },
        {
          q: "Can I keep the balloons?",
          a: "Yes! Balloons are yours to keep and are not collected.",
        },
      ],
    },
    {
      category: "Cancellation & Changes",
      questions: [
        {
          q: "Can I cancel or reschedule my booking?",
          a: "Yes, you can cancel or reschedule. Please refer to our Refund & Cancellation Policy for detailed terms and conditions.",
        },
        {
          q: "Can I make changes to my package after booking?",
          a: "Yes, you can modify your package up to 48 hours before the event date, subject to availability.",
        },
        {
          q: "What if there's bad weather on my event day?",
          a: "JiSi Events is not responsible for delays or issues due to rain, wind, or other natural circumstances. We recommend having a backup indoor plan for outdoor events.",
        },
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
              ❓
            </div>
            <h1 className="fw-bold mb-3">Frequently Asked Questions</h1>
            <p className="text-muted lead">
              Find answers to common questions about our services
            </p>
          </div>

          {/* FAQ Categories */}
          {faqs.map((category, categoryIdx) => (
            <div key={categoryIdx} className="mb-5">
              <h3 className="fw-bold mb-4" style={{ color: "#f59e0b" }}>
                {category.category}
              </h3>
              <div className="accordion" id={`accordion-${categoryIdx}`}>
                {category.questions.map((faq, qIdx) => {
                  const globalIndex = `${categoryIdx}-${qIdx}`;
                  const isActive = activeIndex === globalIndex;

                  return (
                    <div
                      key={qIdx}
                      className="card border-0 shadow-sm mb-3"
                      style={{
                        borderLeft: isActive
                          ? "4px solid #f59e0b"
                          : "4px solid transparent",
                        transition: "all 0.3s",
                      }}
                    >
                      <div className="card-header bg-white border-0 p-0">
                        <button
                          className="btn btn-link text-decoration-none w-100 text-start p-4 d-flex justify-content-between align-items-center"
                          style={{
                            color: isActive ? "#f59e0b" : "#1f2937",
                            fontWeight: isActive ? "600" : "500",
                          }}
                          onClick={() => toggleAccordion(globalIndex)}
                        >
                          <span>{faq.q}</span>
                          <span
                            style={{
                              fontSize: "1.5rem",
                              transition: "transform 0.3s",
                              transform: isActive
                                ? "rotate(45deg)"
                                : "rotate(0)",
                            }}
                          >
                            +
                          </span>
                        </button>
                      </div>
                      {isActive && (
                        <div className="card-body pt-0 px-4 pb-4">
                          <p className="text-muted mb-0">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="mt-5 p-5 text-center bg-warning bg-opacity-10 rounded shadow-sm">
            <h4 className="fw-bold mb-3">Still have questions?</h4>
            <p className="text-muted mb-4">
              Can't find the answer you're looking for? Our team is here to
              help!
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

export default FAQ;
