import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import medhyaLogo from "../assets/medhya_high_res.png"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
       <div className="flex items-center gap-2">
  <img
    src={medhyaLogo}
    alt="Medhya Investments"
    className="h-12 w-12 rounded-full object-cover"
  />
</div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent md:flex gap-8 ${mobileMenuOpen ? 'block' : 'hidden md:flex'}`}>
          {/* Close Button for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block md:inline text-gray-600 hover:text-blue-600 px-4 py-2 md:p-0">Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block md:inline text-gray-600 hover:text-blue-600 px-4 py-2 md:p-0">About</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block md:inline text-gray-600 hover:text-blue-600 px-4 py-2 md:p-0">Services</Link>
          <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} className="block md:inline text-gray-600 hover:text-blue-600 px-4 py-2 md:p-0">Why Choose us</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block md:inline text-gray-600 hover:text-blue-600 px-4 py-2 md:p-0">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
