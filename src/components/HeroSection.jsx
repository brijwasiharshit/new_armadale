import HERO_IMG from '../assets/images/gallery/img2.jpg';

const HotelHeroSection = () => {
  return (
    <section id = 'home' className="relative flex flex-col-reverse md:flex-row items-center justify-between bg-[#f9f3ed] min-h-[90vh] md:min-h-screen">
      {/* Left Content */}
      <div className="w-full md:w-1/2 px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-0 space-y-4 sm:space-y-6">
        {/* Stars Rating */}
        <div className="flex items-center space-x-2 text-gray-600 uppercase tracking-wider text-xs sm:text-sm">
          <div className="flex space-x-1 text-yellow-500">
            {'★★★★'.split('').map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>
      
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
          Among The Top Luxury<br className="hidden sm:block" />
          Hotels In <br className="hidden sm:block" />
          <span className="text-black inline-block relative">
            Nainital

          </span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 sm:text-gray-500 text-base sm:text-lg max-w-md">
          Experience timeless elegance and serene comfort at New Armadale, your luxury getaway nestled in the heart of Nainital.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <a href="#services">
          <button  className="bg-[#A67C52] text-white px-6 py-3 text-sm font-bold rounded-md hover:bg-[#8c6840] transition shadow-md hover:shadow-lg">
            EXPLORE MORE
          </button>
          </a>
          <a href="#gallery">
  <button className="border border-[#A67C52] text-[#A67C52] px-6 py-3 text-sm font-bold rounded-md hover:bg-[#f1e8e0] transition">
    VIEW GALLERY
  </button>
</a>

        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 h-[50vh] sm:h-[60vh] md:h-auto relative">
        <img
          src={HERO_IMG}
          alt="Luxury Hotel Room"
          className="w-full h-full object-cover object-center"
        />
        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f9f3ed] via-transparent to-transparent md:hidden"></div>
      </div>

      {/* Floating Book Now for mobile */}
      <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <button className="bg-[#A67C52] text-white px-8 py-3 text-sm font-bold rounded-full hover:bg-[#8c6840] transition shadow-xl animate-bounce">
          BOOK NOW
        </button>
      </div>
    </section>
  );
}

export default HotelHeroSection;
