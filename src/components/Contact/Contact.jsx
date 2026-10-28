import React, { useState } from "react";
import {
  EMAIL,
  PHONE_DISPLAY,
  mailLink,
  telLink,
  whatsAppLink,
} from "../../data/contactInfo";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    message: "",
  });

  const bookingLink = whatsAppLink("Hi, I'd like to book a decoration package");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // No backend: send the enquiry to WhatsApp with the details pre-filled.
  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      "Hi JiSi Events, I'd like to make an enquiry.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.date && `Event date: ${form.date}`,
      `Details: ${form.message}`,
    ].filter(Boolean);
    window.open(whatsAppLink(lines.join("\n")), "_blank", "noopener");
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold mb-2">Contact & Booking</h1>
        <p className="lead text-muted">
          Tell us about your celebration and we'll get back to you quickly.
        </p>
      </div>

      <div className="row g-4">
        {/* Contact Information */}
        <div className="col-md-5">
          <div className="p-4 bg-white rounded-4 shadow-sm h-100">
            <h2 className="h5 fw-semibold mb-3">Call / WhatsApp</h2>

            <p className="mb-2">
              <strong>Phone:</strong>{" "}
              <a href={telLink} className="text-decoration-none">
                {PHONE_DISPLAY}
              </a>
            </p>

            <p className="mb-3">
              <strong>WhatsApp:</strong>{" "}
              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-success text-decoration-none"
              >
                Message us on WhatsApp
              </a>
            </p>

            <h2 className="h5 fw-semibold mt-4 mb-3">Email</h2>
            <p className="mb-4">
              <a href={mailLink()} className="text-decoration-none text-break">
                {EMAIL}
              </a>
            </p>

            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp rounded-pill px-4 py-2"
            >
              📱 Book on WhatsApp
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-7">
          <div className="p-4 bg-white rounded-4 shadow-sm h-100">
            <h2 className="h5 fw-semibold mb-1">Send a quick message</h2>
            <p className="small text-muted mb-3">
              This opens WhatsApp with your details filled in — just press
              send.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="name" className="form-label small">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    className="form-control"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="phone" className="form-label small">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    type="tel"
                    className="form-control"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="email" className="form-label small">
                    Email (optional)
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="date" className="form-label small">
                    Event date (optional)
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="form-control"
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label small">
                    About the party
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="form-control"
                    rows={4}
                    placeholder="Occasion, venue, headcount, theme…"
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-brand rounded-pill px-4 py-2 mt-3"
              >
                Send Enquiry on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
