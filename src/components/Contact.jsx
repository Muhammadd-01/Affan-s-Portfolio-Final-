import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <input type="text" placeholder="Name" className="w-full p-2 mb-4 bg-gray-800 rounded-lg" />
          <input type="email" placeholder="Email" className="w-full p-2 mb-4 bg-gray-800 rounded-lg" />
          <textarea placeholder="Message" className="w-full p-2 mb-4 bg-gray-800 rounded-lg"></textarea>
          <button type="submit" className="bg-red-500 px-6 py-2 rounded-full hover:bg-red-600">Send</button>
        </form>
        <div className="mt-6 flex space-x-4 justify-center">
          <a href="https://wa.me/03128538773" className="hover:text-red-500">WhatsApp</a>
          <a href="mailto:affan.work05@gmail.com" className="hover:text-red-500">Email</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;