const FacilitiesSection = () => {
    const facilities = [
      { 
        title: "Multi-Cuisine Restaurant", 
        icon: "/icons/restaurant.png",
        description: "Savor authentic Kumaoni flavors and international cuisine at our in-house restaurant with panoramic mountain views"
      },
      { 
        title: "Conference Hall", 
        icon: "/icons/meeting.png",
        description: "Host business meetings and events in our fully-equipped conference space with modern amenities"
      },
      { 
        title: "High-Speed Wi-Fi", 
        icon: "/icons/wifi.png",
        description: "Stay connected with complimentary high-speed internet throughout the property"
      },
      { 
        title: "Nainital Lake View", 
        icon: "/icons/city.png",
        description: "Wake up to breathtaking views of Naini Lake and surrounding Himalayan peaks"
      },
      { 
        title: "24/7 Room Service", 
        icon: "/icons/room-service.png",
        description: "Enjoy round-the-clock dining with our prompt and discreet room service"
      },
      { 
        title: "Secure Parking", 
        icon: "/icons/parking.png",
        description: "Complimentary secured parking space for all our guests' vehicles"
      },
    ];
  
    return (
      <div id='services' className="relative bg-gradient-to-b  py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#a1784c] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#a1784c] rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#a1784c] mb-3">New Armadale Experience</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800">
              Our Premier Facilities
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Discover the exceptional amenities that make New Armadale the finest choice for your Nainital stay
            </p>
          </div>
  
          {/* Facilities grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 flex flex-col items-center text-center"
              >
                <div className="bg-[#f9f3ed] rounded-full p-5 mb-6 border border-[#a1784c]/20">
                  <img 
                    src={facility.icon} 
                    alt={facility.title} 
                    className="w-14 h-14 object-contain" 
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default FacilitiesSection;