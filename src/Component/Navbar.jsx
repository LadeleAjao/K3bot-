import React, { useState } from 'react'
import LOGO from '../assets/K3BOT.png'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-16 bg-white/80 backdrop-blur-md shadow-md px-6 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img src={LOGO} className="h-10 w-auto" alt="K3Bot Logo" />
        <h1 className="text-xl font-bold text-green-700">K3Bot</h1>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center space-x-6">
        <a className="text-gray-700 hover:text-green-600 font-medium transition duration-200" href="#">Features</a>
        <a className="text-gray-700 hover:text-green-600 font-medium transition duration-200" href="#">Use Cases</a>
        <a className="text-gray-700 hover:text-green-600 font-medium transition duration-200" href="#">Pricing</a>
        <a className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200 text-sm font-semibold" href="#">
          Get Demo
        </a>
      </ul>

      {/* Mobile Menu Icon */}
      <button className="md:hidden text-gray-700" onClick={toggleMenu}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col space-y-4 md:hidden">
          <a className="text-gray-700 hover:text-green-600 font-medium transition" href="#">Features</a>
          <a className="text-gray-700 hover:text-green-600 font-medium transition" href="#">Use Cases</a>
          <a className="text-gray-700 hover:text-green-600 font-medium transition" href="#">Pricing</a>
          <a className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition text-sm font-semibold w-max" href="#">
            Get Demo
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
