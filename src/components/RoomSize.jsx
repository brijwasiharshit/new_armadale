const RoomSizesSection = () => {
  const roomTypes = [
    {
      name: "Luxury Suite",
      size: "420 sq ft",
      count: 1,
      description: "Our most spacious accommodation with separate living area, premium amenities, and panoramic views of Naini Lake"
    },
    {
      name: "Deluxe Rooms",
      size: "241 sq ft",
      count: 8,
      description: "Spacious rooms with modern comforts and stunning mountain or lake views"
    },
    {
      name: "Standard Rooms",
      size: "220 sq ft",
      count: 11,
      description: "Comfortable and well-appointed rooms perfect for short stays"
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-[#f9f6f2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[#A67C52] mb-3">Accommodations</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mb-4">
            Our Room Sizes & Categories
          </h2>
          <div className="w-20 h-0.5 bg-[#A67C52] mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            New Armadale offers 20 beautifully appointed rooms across three categories to suit every traveler's needs
          </p>
        </div>

        {/* Room Size Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roomTypes.map((room, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-medium text-gray-800">{room.name}</h3>
                  <span className="bg-[#A67C52] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {room.count} {room.count === 1 ? 'Room' : 'Rooms'}
                  </span>
                </div>
                <div className="text-2xl font-bold text-[#A67C52] mb-4">{room.size}</div>
                <p className="text-gray-600 mb-5">{room.description}</p>
              
              </div>
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                <button className="w-full bg-[#A67C52] hover:bg-[#8c6840] text-white font-medium py-2 px-4 rounded transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default RoomSizesSection;