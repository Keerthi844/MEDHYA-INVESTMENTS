import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import medhyaLogo from "../assets/medhya_high_res-Photoroom.png"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-sky-200 fixed top-0 w-full z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">

        {/* LOGO + TEXT */}
        <div className="flex items-center gap-3">

          {/* LOGO IMAGE */}
          <div className="bg-gradient-to-br from-sky-900 to-white p-1 rounded-full shadow-sm">
            <img
              src={medhyaLogo}
              alt="Medhya Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
            />
          </div>

          {/* TEXT */}
          <h1 className="leading-tight">
            <span className="block text-base sm:text-xl font-bold text-sky-600">
              MEDHYA
            </span>
            <span className="block text-[10px] sm:text-xs text-gray-500 tracking-widest">
              INVESTMENT ADVISORS
            </span>
          </h1>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-sky-600 text-2xl"
        >
          ☰
        </button>

        {/* MENU */}
        <div
          className={`
    fixed top-0 right-0 h-full w-[70%] sm:w-[50%] bg-white shadow-lg z-50
    transform transition-transform duration-300
    ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
    md:static md:translate-x-0 md:h-auto md:w-auto md:bg-transparent md:shadow-none md:flex
  `}
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden absolute top-4 right-4 text-gray-600 text-xl"
          >
            ✕
          </button>
            <div className="flex flex-col mt-16"> {/* 👈 push below close icon */}


          {/* LINKS */}
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Why Choose us", path: "/pricing" },
            { name: "Contact", path: "/contact" }
          ].map((link, i) => (
            <Link
              key={i}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block md:inline text-gray-600 hover:text-sky-600 px-4 py-2 md:p-0 transition font-medium"
            >
              {link.name}
            </Link>
          ))}

        </div>
        </div>

      </nav>
    </header>
  )
}
