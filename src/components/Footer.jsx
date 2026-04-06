import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import medhyaLogo from "../assets/medhya_high_res-Photoroom.png"
export default function Footer() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Why Choose Us", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: FaInstagram, url: "https://www.instagram.com/medhyainvestments/?hl=en", label: "Instagram" },
    { icon: FaTwitter, url: "https://x.com/medhya2023", label: "Twitter" },
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/company/medhya-investments/?viewAsMember=true", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-br from-sky-200 to-sky-400 text-black pt-12 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* LOGO */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-sky-900 to-white p-1 rounded-full shadow-sm">
                <img
                  src={medhyaLogo}
                  alt="Medhya Logo"
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-black">MEDHYA</h1>
                <p className="text-xs text-gray-600">INVESTMENTS</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
            Where Capital Meets Clarity.
Empowering Wealth. Enabling Growth.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="font-semibold mb-4 text-sky-700">Navigations</h3>
            <ul className="space-y-2">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-gray-700 hover:text-sky-600 transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold mb-4 text-sky-700">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-sky-600 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="" className="text-gray-700 hover:text-sky-600 transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="" className="text-gray-700 hover:text-sky-600 transition">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h3 className="font-semibold mb-4 text-sky-700">Connect</h3>

            <p className="text-sm text-gray-700 mb-4">
              <span className="font-semibold">Email:</span> <br />
              hello@medhya.com
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="w-9 h-9 flex items-center justify-center border border-sky-400 rounded-full 
              text-sky-600 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition"
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-sky-300 mb-6"></div>

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-700 gap-4">
          <p>© 2024 Medhya Investments. All Rights Reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-sky-600 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-sky-600 transition">
              Terms of Service
            </a>
          </div>
        </div>

      </div>

    </footer>
  );
}