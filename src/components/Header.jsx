import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import medhyaLogo from "../assets/LOGO MEDHYA.png"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Why Choose us", path: "/pricing" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <header className="bg-white border-b border-navy-200 fixed top-0 w-full z-50 shadow-sm">
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3">
        
            <img
              src={medhyaLogo}
              alt="Medhya Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
            />
        
          <h1 className="leading-tight">
            <span className="block text-base sm:text-xl font-bold text-navy-600">
              MEDHYA
            </span>
            <span className="block text-[10px] sm:text-xs text-gray-500 tracking-widest">
              INVESTMENT ADVISORS
            </span>
          </h1>
        </div>

        {/* DESKTOP MENU ✅ */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="text-gray-600 hover:text-navy-600 transition font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-navy-600 text-2xl"
        >
          ☰
        </button>

      </nav>

      {/* 🔥 MOBILE ONLY DRAWER */}
      <div className="md:hidden">

        {/* OVERLAY */}
        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />
        )}

        {/* DRAWER */}
        <div
          className={`
            fixed top-0 right-0 h-full w-[70%] sm:w-[50%] bg-white shadow-lg z-50
            transform transition-transform duration-300 ease-in-out
            ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-600 text-2xl"
          >
            ✕
          </button>

          {/* LINKS */}
          <div className="flex flex-col mt-16">
            {links.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-2 text-lg  hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
          </div>

        </div>
      </div>

    </header>
  )
}