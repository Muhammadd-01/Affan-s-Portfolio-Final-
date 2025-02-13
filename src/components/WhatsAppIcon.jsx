import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = ({ phoneNumber }) => {
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppIcon;
