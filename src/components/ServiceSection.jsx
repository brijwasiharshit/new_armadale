import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Pre-Booking",
      image: "/images/prebooking.jpg",
      description: "Secure your luxury stay in advance with our easy booking system"
    },
    {
      title: "Swimming Pool",
      image: "/images/pool.jpg",
      description: "Refresh in our temperature-controlled infinity pool with mountain views"
    },
    {
      title: "Gourmet Dining",
      image: "/images/buffet.jpg",
      description: "Experience culinary excellence with our chef-curated menus"
    }
  ];

  return (
    <section className="px-6 sm:px-8 lg:px-12 py-12 md:py-20 bg-white max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
        {/* Left Text Section */}
        <div className="lg:w-1/3 flex flex-col justify-center">
          <h5 className="text-xs sm:text-sm tracking-widest text-[#a1784c] mb-3 font-medium">
            NEW ARMADALE HOTEL
          </h5>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-gray-800 mb-6 leading-tight">
            Your Ideal Stay <br className="hidden sm:block" /> 
            Our Priority
          </h2>
          <p className="text-gray-600 sm:text-gray-500 text-base sm:text-lg mb-8 max-w-lg">
            At New Armadale, hospitality isn't just a profession—it's our passion. Every corner reflects elegance and comfort.
          </p>
          <button className="bg-[#a1784c] hover:bg-[#8a6946] text-white px-8 py-3.5 font-medium uppercase tracking-wider text-sm sm:text-base transition duration-300 shadow-md hover:shadow-lg w-fit">
            Contact Us
          </button>
        </div>

        {/* Right Cards Section */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden h-48 sm:h-52 md:h-60">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                  <p className="text-white text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="bg-[#a1784c] text-white py-3 sm:py-4 text-center text-lg sm:text-xl font-serif group-hover:bg-[#8a6946] transition duration-300">
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;