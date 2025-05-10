  import HOTEL_LOGO from '../assets/images/logo.jpg';
  const Footer = () => {
      return (
        <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
              {/* Hotel Info & Social */}
              <div>
                <div className="flex items-center gap-3 mb-6">
              
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
    {/* Instagram */}
    <a
      href="https://www.instagram.com/new_armadale/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-[#a1784c] transition"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    </a>

    {/* Gmail (mailto link) */}
    <a
      href="mailto:newarmadale@gmail.com"
      className="text-gray-400 hover:text-[#a1784c] transition"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.511l-8 5.01-8-5.01V6h16zM4 18V8.303l7.38 4.618a1 1 0 001.24 0L20 8.303V18H4z" />
      </svg>
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/918630765606"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-[#a1784c] transition"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.91 11.91 0 0012.02 0C5.38 0 .02 5.37.02 12a11.96 11.96 0 001.7 6.09L0 24l6.14-1.6A11.96 11.96 0 0012 24c6.63 0 12-5.37 12-12a11.91 11.91 0 00-3.48-8.52zM12 21.5a9.5 9.5 0 01-4.85-1.31l-.35-.21-3.64.95.97-3.55-.23-.36A9.49 9.49 0 1121.5 12c0 5.24-4.26 9.5-9.5 9.5zm5.46-7.06l-1.6-.8c-.22-.1-.47-.07-.65.09l-.57.56a8.39 8.39 0 01-3.91-3.91l.56-.56c.17-.17.2-.43.09-.65l-.8-1.6a.5.5 0 00-.56-.27 7.48 7.48 0 00-1.84.77.5.5 0 00-.24.42c.14 3.98 3.3 7.14 7.28 7.28.17 0 .32-.09.42-.24.3-.58.6-1.22.77-1.84a.5.5 0 00-.27-.56z" />
      </svg>
    </a>
  </div>
</div>

              </div>
    
              {/* Quick Links */}
              <div>
                <h4 className="text-white text-lg mb-4 font-medium">Quick Links</h4>
                <ul className="space-y-3">
                  <li><a href="#home" className="hover:text-[#a1784c] transition">Home</a></li>
                  <li><a href="#stats" className="hover:text-[#a1784c] transition">Stats</a></li>
                  <li><a href="#services" className="hover:text-[#a1784c] transition">Services</a></li>
                  <li><a href="#reviews" className="hover:text-[#a1784c] transition">Reviews</a></li>
                  <li><a href="#gallery" className="hover:text-[#a1784c] transition">Gallery</a></li>
            
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
                  <div className="flex flex-col gap-2">
  <div className="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#a1784c]" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
    <span>+91 8630765606</span>
  </div>
  <div className="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#a1784c]" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
    <span>+91 5942-796498</span>
  </div>
</div>

                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#a1784c]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>newarmadale@gmail.com</span>
                  </div>
                </address>
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