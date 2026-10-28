// Single source of truth for contact details used across the site.
const PHONE_NUMBER = "919441880054"; // country code + number, digits only
const PHONE_DISPLAY = "+91 94418 80054";
const EMAIL = "rekhasj21@gmail.com";
const LOCATION = "Kuppam, AP 517425";

const telLink = `tel:+${PHONE_NUMBER}`;
const mailLink = (subject) =>
  subject
    ? `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`
    : `mailto:${EMAIL}`;
const whatsAppLink = (message) =>
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

export {
  PHONE_NUMBER,
  PHONE_DISPLAY,
  EMAIL,
  LOCATION,
  telLink,
  mailLink,
  whatsAppLink,
};
