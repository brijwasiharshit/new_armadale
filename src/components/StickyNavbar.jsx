import { Search, Menu, X } from "lucide-react";
import HOTEL_LOGO from '../assets/images/logo.jpg';
import { useState } from 'react';

const StickyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={HOTEL_LOGO} alt="Hotel Logo" className="h-12 md:h-16" />
          </div>

          {/* Desktop Menu */}
          <nav className="space-x-8 hidden md:flex text-sm font-semibold text-gray-800">
            <a href="#" className="hover:text-[#A67C52] transition">HOME</a>
            <a href="#" className="hover:text-[#A67C52] transition">ABOUT</a>
            <a href="#" className="hover:text-[#A67C52] transition">ROOMS</a>
            <a href="#" className="hover:text-[#A67C52] transition">PRICING</a>
            <a href="#" className="hover:text-[#A67C52] transition">CONTACT</a>
            <a href="#" className="hover:text-[#A67C52] transition">BLOG</a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
           
            <button className="bg-[#A67C52] text-white text-sm font-bold px-4 py-2 sm:px-6 rounded-md hover:bg-[#8c6840] transition">
              BOOK NOW
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-20 px-6 md:hidden">
          <div className="flex flex-col space-y-6 text-lg font-semibold">
            <a href="#" className="hover:text-[#A67C52] transition py-2 border-b border-gray-100" onClick={toggleMenu}>HOME</a>
            <a href="#" className="hover:text-[#A67C52] transition py-2 border-b border-gray-100" onClick={toggleMenu}>ABOUT</a>
            <a href="#" className="hover:text-[#A67C52] transition py-2 border-b border-gray-100" onClick={toggleMenu}>ROOMS</a>
            <a href="#" className="hover:text-[#A67C52] transition py-2 border-b border-gray-100" onClick={toggleMenu}>PRICING</a>
            <a href="#" className="hover:text-[#A67C52] transition py-2 border-b border-gray-100" onClick={toggleMenu}>CONTACT</a>
            <a href="#" className="hover:text-[#A67C52] transition py-2 border-b border-gray-100" onClick={toggleMenu}>BLOG</a>
            
            <div className="flex items-center pt-4">
          
              <button className="bg-[#A67C52] text-white text-sm font-bold px-6 py-2 rounded-md hover:bg-[#8c6840] transition">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StickyNavbar;