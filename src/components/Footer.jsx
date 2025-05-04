const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {/* Hotel Info & Social */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.png" alt="New Armadale Logo" className="w-12" />
                <span className="text-2xl font-serif font-semibold text-[#a1784c]">New Armadale</span>
              </div>
              <p className="mb-6 leading-relaxed">
                Nestled in the heart of Nainital, New Armadale offers an unforgettable Himalayan retreat with authentic Kumaoni hospitality.
              </p>
              
              {/* Newsletter */}
              <div className="mb-8">
                <h4 className="text-white text-lg mb-3 font-medium">Stay Updated</h4>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-gray-800 text-white py-3 pl-4 pr-12 rounded-lg border border-gray-700 focus:border-[#a1784c] focus:outline-none transition"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#a1784c] hover:text-[#c79b63] transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
  
              {/* Social Links */}
              <div>
                <h4 className="text-white text-lg mb-3 font-medium">Connect With Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-[#a1784c] transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#a1784c] transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#a1784c] transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#a1784c] transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="text-white text-lg mb-4 font-medium">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-[#a1784c] transition">Home</a></li>
                <li><a href="#" className="hover:text-[#a1784c] transition">Rooms & Suites</a></li>
                <li><a href="#" className="hover:text-[#a1784c] transition">Dining</a></li>
                <li><a href="#" className="hover:text-[#a1784c] transition">Facilities</a></li>
                <li><a href="#" className="hover:text-[#a1784c] transition">Gallery</a></li>
                <li><a href="#" className="hover:text-[#a1784c] transition">Special Offers</a></li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h4 className="text-white text-lg mb-4 font-medium">Contact Us</h4>
              <address className="not-italic space-y-3">
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-[#a1784c]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Mallital, Nainital<br />Uttarakhand 263001, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#a1784c]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#a1784c]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>info@newarmadale.com</span>
                </div>
              </address>
            </div>
  
            {/* Opening Hours */}
            <div>
              <h4 className="text-white text-lg mb-4 font-medium">Opening Hours</h4>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 - 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 - 18:00</span>
                </li>
              </ul>
              <div className="mt-6 bg-[#a1784c]/10 p-4 rounded-lg border border-[#a1784c]/20">
                <h5 className="text-[#a1784c] font-medium mb-2">24/7 Reception</h5>
                <p className="text-sm">Our reception is always available to assist you</p>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} New Armadale Hotel. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="#" className="hover:text-[#a1784c] transition">Privacy Policy</a>
              <a href="#" className="hover:text-[#a1784c] transition">Terms of Service</a>
              <a href="#" className="hover:text-[#a1784c] transition">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;