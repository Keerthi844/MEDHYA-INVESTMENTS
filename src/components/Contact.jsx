import React, { useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function ContactSection() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
  <section className="pt-28 pb-20 bg-white relative overflow-hidden">
    {/* SKY BACKGROUND */}
    <div className="absolute top-0 left-0 w-full h-[260px] bg-gradient-to-r from-sky-200 via-sky-300 to-sky-400 z-0"></div>
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-sky-300/40 rounded-full blur-3xl"></div>

  <div className="relative z-10 max-w-5xl mx-auto px-4">

      {/* HEADER */}
      <div className="text-center mb-12 px-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Get in <span className="text-sky-600">Touch</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Whether you're a startup seeking capital or an investor seeking opportunity  we're here to help.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>

          <h3 className="text-xl font-bold text-sky-900 mb-4">
            Let's Connect
          </h3>

          <p className="text-gray-600 text-sm mb-6">
            Medhya Investment Advisors operates at the intersection of Capital, Clarity, and Conviction.
            Reach out and let's explore how we can build something meaningful together.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-4 mb-6">

            <div className="flex items-center gap-3">
              <div className="p-2 bg-sky-100 text-sky-600 rounded-lg">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-xs text-gray-500">EMAIL</p>
                <p className="text-sm text-gray-800">info@medhya.in</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-sky-100 text-sky-600 rounded-lg">
                <FaPhone />
              </div>
              <div>
                <p className="text-xs text-gray-500">PHONE</p>
                <p className="text-sm text-gray-800">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-sky-100 text-sky-600 rounded-lg">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-xs text-gray-500">LOCATION</p>
                <p className="text-sm text-gray-800">Hyderabad, India</p>
              </div>
            </div>

          </div>

          {/* QUOTE BOX */}
          <div className="border border-sky-100 bg-sky-100 p-4 rounded-xl">
            <p className="text-sm text-gray-600 italic">
              “Enduring value is designed not accidental. Every great company begins with the right financial foundation.”
            </p>
            <p className="text-sky-600 text-xs mt-2 font-semibold">
              — Medhya Team
            </p>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white border border-sky-100 rounded-2xl p-6 shadow-md">

          {/* INPUTS */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-sky-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-sky-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-sky-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-sky-400"
            />
          </div>

          <input
            type="text"
            placeholder="Phone"
            className="w-full border border-sky-200 rounded-lg px-3 py-2 text-sm mb-4 focus:outline-none focus:border-sky-400"
          />

          {/* RADIO */}
          <div className="mb-4">
            <p className="text-sm text-gray-700 mb-2">I am a</p>
            <div className="flex gap-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="type" className="accent-sky-600" />
                Startup
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="type" className="accent-sky-600" />
                Investor
              </label>
            </div>
          </div>

          {/* MESSAGE */}
          <textarea
            rows="4"
            placeholder="Tell us about your requirements..."
            className="w-full border border-sky-200 rounded-lg px-3 py-2 text-sm mb-6 focus:outline-none focus:border-sky-400"
          ></textarea>

          {/* BUTTON */}
          <button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-full font-semibold transition shadow-md">
            Send Message
          </button>

        </div>

      </div>

    </div>
  </section>
  );
}

export default ContactSection;