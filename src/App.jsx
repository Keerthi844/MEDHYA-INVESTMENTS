import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import Services from './components/Services'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'
import { Home } from './components/Home'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div className="pt-16">< Home/></div>} />
        <Route path="/services" element={<div className="pt-16"><Services /></div>} />
        <Route path="/pricing" element={<div className="pt-16"><Pricing /></div>} />
        <Route path="/about" element={<div className="pt-16"><About /></div>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
