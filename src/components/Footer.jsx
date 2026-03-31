import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import medhyaLogo from "../assets/medhya_high_res.png"

export default function Footer() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-green-900 to-green-800 text-white pt-12 pb-8 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Logo & Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <img
    src={medhyaLogo}
    alt="Medhya Investments"
    className="h-16 w-16 rounded-full object-cover"
  />
              <div>
                <h1 className="text-lg font-bold leading-tight">MEDHYA</h1>
                <p className="text-xs text-gray-300">INVESTMENTS</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">Wealth & investment advisory</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-green-300">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-green-400 transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-green-300">Services</h3>

            <ul className="space-y-2 text-sm text-gray-300">

              <li>
                <Link
                  to="/services"
                  className="hover:text-green-400 transition"
                >
                  For Startup
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-green-400 transition"
                >
                  Invest Advisory
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-green-400 transition"
                >
                  Virtual CFO
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-green-300">Connect</h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-300">
                <span className="font-semibold">Email:</span> <br />
                hello@medhya.com
              </p>
              <div className="flex gap-3 pt-2">
                {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full hover:bg-green-500 hover:border-green-500 transition"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>



        {/* Divider */}
        <div className="border-t border-gray-400/30 mb-6"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-300 gap-4">
          <p>© 2024 Medhya Investments. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-green-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition">Terms of Service</a>
          </div>
        </div>

      </div>

    </footer>
  );
}