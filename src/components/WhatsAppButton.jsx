import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/03128538773"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
    >
      <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="WhatsApp" className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;