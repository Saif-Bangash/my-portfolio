import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-6 text-cyan-400">
        Contact Me
      </h2>
      <p className="text-lg text-center text-gray-400 mb-12">
        Feel free to reach out to me for any opportunities, collaborations, or inquiries.
      </p>

      {/* Contact Info Cards */}
      <div className="max-w-3xl mx-auto px-6 grid gap-6 sm:grid-cols-2">
        
        {/* Email Card */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-cyan-500/30 transition-all">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-cyan-400" />
            <h3 className="text-lg sm:text-sm md:text-xl font-semibold">Email</h3>
          </div>
          <p className="text-gray-300 mt-3 break-words text-center text-md  sm:text-md">
            saifbangash480@gmail.com
          </p>
        </div>

        {/* WhatsApp Card */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-green-500/30 transition-all">
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-2xl text-green-400" />
            <h3 className="text-lg sm:text-sm md:text-xl font-semibold">Phone & WhatsApp</h3>
          </div>
          <p className="text-gray-300 mt-3 text-center  sm:text-md">+92 332 6767 615</p>
        </div>
      </div>

      <p className="text-gray-400 text-center mt-12">
        Or reach out to me directly through the contact options above!
      </p>
    </section>
  );
};

export default Contact;
