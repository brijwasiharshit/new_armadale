const StatsSection = () => {
    const stats = [
      { value: "30+", label: "Positive Reviews", icon: "⭐" },
      { value: "20+", label: "Happy Customers", icon: "😊" },
      { value: "40+", label: "Years of Experience", icon: "🕰️" },
      { value: "25+", label: "Winning Awards", icon: "🏆" },
    ];
  
    return (
      <div id='stats' className="relative bg-gradient-to-b from-[#f9f3ed] to-[#f0e6d9] py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#a1784c] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#a1784c] rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#a1784c] mb-3">Our Excellence</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800">
              Numbers That Speak Volumes
            </h2>
          </div>
  
          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20"
              >
              
                <div className="relative">
                  <span className="text-5xl md:text-6xl font-serif font-bold text-gray-800 block mb-2">
                    {stat.value}
                  </span>
                  <p className="text-lg font-medium text-gray-600">{stat.label}</p>
                  <div className="absolute -bottom-4 left-0 w-16 h-1 bg-[#a1784c] rounded-full opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  export default StatsSection;