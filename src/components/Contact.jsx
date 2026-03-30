import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-gray-100">

      {/* ================= HERO SECTION ================= */}
      <div className="relative max-w-6xl mx-auto mt-6 rounded-xl overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          className="w-full h-[350px] md:h-[450px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">

          <h1 className="text-4xl font-semibold text-green-300">
            Contact Us
          </h1>

          <p className="text-sm mt-2 max-w-xl">
            We’d love to hear from you! Whether you have a question about our services or need guidance, our team is here to help.
          </p>

        </div>
      </div>

      {/* ================= MAIN SECTION ================= */}
      <div className="py-16 px-4">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

          {/* Left Image */}
          <div className="relative">
            <img
              src="https://png.pngtree.com/thumb_back/fw800/background/20251130/pngtree-cozy-home-office-desk-setup-with-a-laptop-coffee-and-plant-image_20288339.webp"
              alt="contact"
              className="rounded-xl w-full h-[490px] object-cover"
            />

            {/* Overlay Text */}
            <div className="absolute bottom-6 left-6 text-white">
              <button className="border border-green-400 text-green-400 px-3 py-1 rounded-full text-sm mb-3">
                Contact Us
              </button>
              <h2 className="text-3xl font-semibold">
                Any Question? <br /> Let’s Ask Our Team
              </h2>
            </div>

            {/* Floating Icon */}
            <div className="absolute -bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
              📞
            </div>
          </div>

          {/* Form */}
          <div className="bg-gradient-to-br from-green-900 to-green-700 p-8 rounded-xl text-white">
            <h3 className="text-xl font-semibold mb-6">Fill This Form</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-300 outline-none"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-3 rounded-md bg-transparent border border-gray-300 outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="px-4 py-3 rounded-md bg-transparent border border-gray-300 outline-none"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-300 outline-none"
              />

              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-300 outline-none"
              ></textarea>

              <button className="w-full py-3 rounded-full bg-gradient-to-r from-green-400 to-green-600 font-semibold hover:scale-105 transition">
                Send Message ↗
              </button>
            </form>
          </div>
        </div>

        {/* ================= CONTACT CARDS ================= */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-xl text-white text-center">
            <FaMapMarkerAlt className="mx-auto mb-3 text-xl" />
            <h4 className="font-semibold">Location</h4>
            <p className="text-sm mt-2">
              KLLG St, No.99, Pku City, ID 28289
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-800 p-6 rounded-xl text-white text-center">
            <FaEnvelope className="mx-auto mb-3 text-xl" />
            <h4 className="font-semibold">Email</h4>
            <p className="text-sm mt-2">hello@domainsite.com</p>
          </div>

          <div className="bg-gradient-to-r from-green-700 to-green-900 p-6 rounded-xl text-white text-center">
            <FaPhone className="mx-auto mb-3 text-xl" />
            <h4 className="font-semibold">Contact</h4>
            <p className="text-sm mt-2">+1 (123) 456-7890</p>
          </div>
        </div>

        {/* ================= MAP ================= */}
        <div className="mt-12">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=London&output=embed"
            className="w-full h-[300px] border-0 rounded-xl"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
}