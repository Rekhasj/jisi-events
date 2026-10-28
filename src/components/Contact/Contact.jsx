import React from "react";

function Contact() {
  const PhoneNumber = "911234567890";
  const Email = "info@jisievents.com";
  const WhatsAppLink = `https://wa.me/${"9441880054"}?text=Hi, I'd like to book a decoration package`;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
  };

  return (
    <main style={{}}>
      <div className="container py-5">
        <h2 className="h2 fw-bold mb-4">Contact & Booking</h2>

        <div className="row g-4">
          {/* Contact Information */}
          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <h3 className="h5 fw-semibold mb-3">Call / WhatsApp</h3>

              <p className="mb-2">
                <strong>Phone:</strong>{" "}
                <a
                  href={`tel:+${"9441880054"}`}
                  className="text-primary text-decoration-none"
                >
                  +91 12345 67890
                </a>
              </p>

              <p className="mb-3">
                <strong>WhatsApp:</strong>{" "}
                <a
                  href={WhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-success text-decoration-none"
                >
                  Message us on WhatsApp
                </a>
              </p>

              <h3 className="h5 fw-semibold mt-4 mb-3">Email</h3>

              <p className="mb-4">
                <a
                  href={`mailto:${"rekhasj21@gmail.com"}`}
                  className="text-primary text-decoration-none"
                >
                  {Email}
                </a>
              </p>

              <div className="mt-4">
                <a
                  href={WhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success px-4 py-2"
                >
                  📱 Book on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <h3 className="h5 fw-semibold mb-3">Send a quick message</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    required
                    type="tel"
                    className="form-control"
                    placeholder="Phone / WhatsApp"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email (optional)"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    required
                    className="form-control"
                    rows={4}
                    placeholder="Tell us about the party (date, headcount, theme)"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-pink px-4 py-2"
                  style={{
                    backgroundColor: "#ec4899",
                    color: "white",
                    border: "none",
                  }}
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
