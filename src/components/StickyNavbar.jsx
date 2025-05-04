import { Search, Menu, X } from "lucide-react";
import HOTEL_LOGO from '../assets/images/logo.jpg';
import { useState, useEffect } from 'react';

const StickyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={HOTEL_LOGO} alt="New Armadale Hotel Logo" className="h-12 md:h-16" />
          </div>

          {/* Desktop Menu */}
          <nav className="space-x-8 hidden md:flex text-sm font-semibold text-gray-800">
            <a href="#" className="hover:text-[#A67C52] transition duration-300">HOME</a>
            <a href="#" className="hover:text-[#A67C52] transition duration-300">ABOUT</a>
            <a href="#" className="hover:text-[#A67C52] transition duration-300">ROOMS</a>
            <a href="#" className="hover:text-[#A67C52] transition duration-300">DINING</a>
            <a href="#" className="hover:text-[#A67C52] transition duration-300">CONTACT</a>
            <a href="#" className="hover:text-[#A67C52] transition duration-300">GALLERY</a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:flex bg-[#A67C52] text-white text-sm font-bold px-4 py-2 sm:px-6 rounded-md hover:bg-[#8c6840] transition duration-300">
              BOOK NOW
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-800 focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-80 black bg-opacity-50 md:hidden">
          <div className="mobile-menu-container fixed right-0 top-0 h-full w-1/2 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-end p-4">
              <button 
                onClick={toggleMenu}
                className="text-gray-800 focus:outline-none"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-4 px-6 py-4">
              <a 
                href="#" 
                className="text-gray-800 hover:text-[#A67C52] transition duration-300 py-2 border-b border-gray-100 font-medium"
                onClick={toggleMenu}
              >
                HOME
              </a>
              <a 
                href="#" 
                className="text-gray-800 hover:text-[#A67C52] transition duration-300 py-2 border-b border-gray-100 font-medium"
                onClick={toggleMenu}
              >
                ABOUT
              </a>
              <a 
                href="#" 
                className="text-gray-800 hover:text-[#A67C52] transition duration-300 py-2 border-b border-gray-100 font-medium"
                onClick={toggleMenu}
              >
                ROOMS
              </a>
              <a 
                href="#" 
                className="text-gray-800 hover:text-[#A67C52] transition duration-300 py-2 border-b border-gray-100 font-medium"
                onClick={toggleMenu}
              >
                DINING
              </a>
              <a 
                href="#" 
                className="text-gray-800 hover:text-[#A67C52] transition duration-300 py-2 border-b border-gray-100 font-medium"
                onClick={toggleMenu}
              >
                CONTACT
              </a>
              <a 
                href="#" 
                className="text-gray-800 hover:text-[#A67C52] transition duration-300 py-2 border-b border-gray-100 font-medium"
                onClick={toggleMenu}
              >
                GALLERY
              </a>
              
              <div className="pt-6">
                <button 
                  className="w-full bg-[#A67C52] text-white text-sm font-bold px-6 py-3 rounded-md hover:bg-[#8c6840] transition duration-300"
                  onClick={toggleMenu}
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StickyNavbar;