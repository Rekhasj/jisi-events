import React from "react";
import { Link } from "react-router-dom";
import {
  EMAIL,
  LOCATION,
  PHONE_DISPLAY,
  mailLink,
  telLink,
} from "../../data/contactInfo";

function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you book our services, we collect personal information such as your name, email address, phone number, event date, venue address, and payment details. This information is necessary to provide our decoration services and communicate with you effectively.",
        },
        {
          subtitle: "Usage Data",
          text: "We may collect information about how you access and use our website, including your IP address, browser type, pages visited, time spent on pages, and other diagnostic data.",
        },
        {
          subtitle: "Cookies and Tracking",
          text: "Our website uses cookies to enhance your browsing experience. Cookies help us understand user preferences and improve our services. You can control cookie settings through your browser.",
        },
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to process bookings, coordinate event decorations, communicate updates, and provide customer support.",
        },
        {
          subtitle: "Payment Processing",
          text: "Your payment information is used to process transactions securely. We do not store complete credit card details on our servers.",
        },
        {
          subtitle: "Marketing Communications",
          text: "With your consent, we may send promotional emails about new services, special offers, and event tips. You can unsubscribe at any time.",
        },
        {
          subtitle: "Service Improvement",
          text: "We analyze usage data to improve our website functionality, services, and customer experience.",
        },
      ],
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        {
          subtitle: "Third-Party Service Providers",
          text: "We may share your information with trusted third-party vendors who assist us in operating our business, such as payment processors and logistics partners. These parties are bound by confidentiality agreements.",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, court order, or government regulation, or to protect our rights and safety.",
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.",
        },
        {
          subtitle: "No Sale of Data",
          text: "We do not sell, rent, or trade your personal information to third parties for marketing purposes.",
        },
      ],
    },
    {
      title: "Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
        },
        {
          subtitle: "Data Encryption",
          text: "Sensitive information such as payment details is transmitted using secure encryption protocols (SSL/TLS).",
        },
        {
          subtitle: "Limited Access",
          text: "Only authorized personnel have access to your personal information, and they are required to maintain confidentiality.",
        },
        {
          subtitle: "No Guarantee",
          text: "While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.",
        },
      ],
    },
    {
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, update, or correct your personal information at any time by contacting us.",
        },
        {
          subtitle: "Data Deletion",
          text: "You can request deletion of your personal information, subject to legal and contractual obligations.",
        },
        {
          subtitle: "Opt-Out of Marketing",
          text: "You can unsubscribe from marketing communications by clicking the unsubscribe link in our emails or contacting us directly.",
        },
        {
          subtitle: "Cookie Preferences",
          text: "You can manage cookie preferences through your browser settings.",
        },
      ],
    },
    {
      title: "Data Retention",
      content: [
        {
          subtitle: "Retention Period",
          text: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements.",
        },
        {
          subtitle: "Deletion After Purpose",
          text: "Once your data is no longer needed, we will securely delete or anonymize it.",
        },
      ],
    },
    {
      title: "Children's Privacy",
      content: [
        {
          subtitle: "Age Restriction",
          text: "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children without parental consent.",
        },
      ],
    },
    {
      title: "Photography and Content Usage",
      content: [
        {
          subtitle: "Event Photography",
          text: "JiSi Events may photograph decorated venues for portfolio and marketing purposes. These images may be used on our website, social media, and promotional materials.",
        },
        {
          subtitle: "Opt-Out Option",
          text: "If you do not want your event to be photographed or featured, please inform us in writing before the event date.",
        },
      ],
    },
    {
      title: "Changes to This Privacy Policy",
      content: [
        {
          subtitle: "Policy Updates",
          text: "We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated 'Last Updated' date.",
        },
        {
          subtitle: "Notification",
          text: "For significant changes, we will notify you via email or a prominent notice on our website.",
        },
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
              🔒
            </div>
            <h1 className="fw-bold mb-3">Privacy Policy</h1>
            <p className="text-muted lead">Your privacy is important to us</p>
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
          <div className="card border-0 shadow-sm mb-5 p-4">
            <p className="mb-3 text-muted">
              At <strong>JiSi Events & Decorations</strong>, we are committed to
              protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your data when you use our services or
              visit our website.
            </p>
            <p className="mb-0 text-muted">
              By using our services, you agree to the collection and use of
              information in accordance with this policy. If you do not agree
              with our policies and practices, please do not use our services.
            </p>
          </div>

          {/* Policy Sections */}
          {sections.map((section, idx) => (
            <div key={idx} className="mb-5">
              <h3 className="fw-bold mb-4" style={{ color: "#f59e0b" }}>
                {idx + 1}. {section.title}
              </h3>
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  {section.content.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className={
                        iIdx < section.content.length - 1 ? "mb-4" : ""
                      }
                    >
                      <h5 className="fw-semibold mb-2">{item.subtitle}</h5>
                      <p className="text-muted mb-0">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Contact for Privacy */}
          <div className="mt-5 p-5 bg-warning bg-opacity-10 rounded shadow-sm">
            <h4 className="fw-bold mb-3">Contact Us About Privacy</h4>
            <p className="text-muted mb-4">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or how we handle your personal information, please
              contact us:
            </p>
            <div className="row g-3">
              <div className="col-md-4">
                <strong>Email:</strong>
                <br />
                <a
                  href={mailLink()}
                  className="text-decoration-none"
                >
                  {EMAIL}
                </a>
              </div>
              <div className="col-md-4">
                <strong>Phone:</strong>
                <br />
                <a href={telLink} className="text-decoration-none">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="col-md-4">
                <strong>Address:</strong>
                <br />
                {LOCATION}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 p-5 text-center bg-dark text-white rounded shadow-sm">
            <h4 className="fw-bold mb-3">Ready to Plan Your Event?</h4>
            <p className="mb-4">
              Your data is safe with us. Let's create something amazing
              together!
            </p>
            <Link to="/contact" className="btn btn-warning btn-lg px-5">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
