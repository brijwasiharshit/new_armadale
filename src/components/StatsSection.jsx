const StatsSection = () => {
  const stats = [
    { value: "30+", label: "Positive Reviews", icon: "⭐" },
    { value: "20+", label: "Happy Customers", icon: "😊" },
    { value: "1+", label: "Years of Experience", icon: "🕰️" },
  ];

  return (
    <div id="stats" className="relative bg-gradient-to-b from-[#f9f3ed] to-[#f0e6d9] py-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#a1784c] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#a1784c] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[#a1784c] mb-3">Our Excellence</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800">
            Numbers That Speak Volumes
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex justify-center items-center text-5xl mb-4">
                <span className="transition-transform duration-300 group-hover:scale-110">{stat.icon}</span>
              </div>
              <h3 className="text-4xl font-serif font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-lg text-gray-600 font-medium">{stat.label}</p>
              <div className="w-12 h-1 bg-[#a1784c] mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
