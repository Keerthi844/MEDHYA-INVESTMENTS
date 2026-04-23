import React, { useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import contactBanner from "../assets/images/contactimage.jpg";

function ContactSection() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* BANNER SECTION */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
        <img
          src={contactBanner}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-white">Touch</span>
          </h2>
          <p className="text-white/90 mt-3 max-w-xl mx-auto">
            Whether you're a startup seeking capital or an investor seeking opportunity we're here to help.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="pt-20 pb-20 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4">

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div>

            <h3 className="text-xl font-bold text-navy-900 mb-4">
              Let's Connect
            </h3>

            <p className="text-gray-600 text-sm mb-6">
              Medhya Investment Advisors operates at the intersection of Capital, Clarity, and Conviction.
              Reach out and let's explore how we can build something meaningful together.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-4 mb-6">

              <div className="flex items-center gap-3">
                <div className="p-2 bg-navy-100 text-white-600 rounded-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-gray-500 ">EMAIL</p>
                  <p className="text-sm text-gray-800">Info@medhyainvestments.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-navy-100 text-white-600 rounded-lg">
                  <FaPhone />
                </div>
                <div>
                  <p className=" text-gray-500">PHONE</p>
                  <p className="text-sm text-gray-800">+91 9640331188</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-navy-100 text-white-600 rounded-lg">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-gray-500">LOCATION</p>
                  <p className="text-sm text-gray-800">Hyderabad, India</p>
                </div>
              </div>

            </div>

            {/* QUOTE BOX */}
            <div className="border border-navy-100 bg-navy-100 p-4 rounded-xl">
              <p className="text-sm text-gray-600 italic">
                "Enduring value is designed not accidental. Every great company begins with the right financial foundation."
              </p>
              <p className="text-white-600 text-xs mt-2 font-semibold">
                — Medhya Team
              </p>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-md">

            {/* INPUTS */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-navy-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-navy-200"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-navy-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-navy-200"
              />
            </div>

            <input
              type="text"
              placeholder="Phone"
              className="w-full border border-navy-200 rounded-lg px-3 py-2 text-sm mb-4 focus:outline-none focus:border-navy-200"
            />

            {/* RADIO */}
            <div className="mb-4">
              <p className="text-sm text-gray-700 mb-2">I am a</p>
              <div className="flex gap-6 text-sm">
                <label className="flex items-center gap-2">
                  <input type="radio" name="type" className="accent-white-600" />
                  Startup
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="type" className="accent-white-600" />
                  Investor
                </label>
              </div>
            </div>

            {/* MESSAGE */}
            <textarea
              rows="4"
              placeholder="Tell us about your requirements..."
              className="w-full border border-navy-200 rounded-lg px-3 py-2 text-sm mb-6 focus:outline-none focus:border-navy-200"
            ></textarea>

            {/* BUTTON */}
            <button className="w-full bg-white-500 hover:bg-navy-600 text-balck py-3 rounded-full font-semibold transition shadow-md">
              Send Message
            </button>

          </div>

        </div>

      </div>
      </section>
    </>
  );
}

export default ContactSection;