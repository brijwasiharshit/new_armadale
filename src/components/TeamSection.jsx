const TeamSection = () => {
    const teamMembers = [
      {
        name: "Rajesh Bhatt",
        position: "General Manager",
        img: "/team/manager.jpg",
        quote: "25 years crafting Himalayan hospitality experiences"
      },
      {
        name: "Priya Sharma",
        position: "Guest Relations",
        img: "/team/relations.jpg",
        quote: "Ensuring every guest feels like royalty"
      },
      {
        name: "Vikram Singh",
        position: "Head Chef",
        img: "/team/chef.jpg",
        quote: "Blending Kumaoni traditions with global flavors"
      },
      {
        name: "Anjali Rawat",
        position: "Concierge",
        img: "/team/concierge.jpg",
        quote: "Your guide to Nainital's hidden treasures"
      },
    ];
  
    return (
      <section className="relative py-24 bg-[#faf7f3] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-40 h-40 bg-[#a1784c] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-[#a1784c] rounded-full filter blur-3xl"></div>
        </div>
  
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#a1784c] mb-3">
              Meet Our Family
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mb-4">
              The New Armadale Team
            </h2>
            <div className="w-20 h-0.5 bg-[#a1784c] mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of hospitality professionals brings warmth, expertise and authentic 
              Kumaoni charm to your stay
            </p>
          </div>
  
          {/* Team grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                    <p className="text-white text-sm italic">
                      "{member.quote}"
                    </p>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif font-medium text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-[#a1784c] mt-1 font-medium">{member.position}</p>
                  
                </div>
              </div>
            ))}
          </div>
  
          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">Join our team of hospitality professionals</p>
            <button className="bg-[#a1784c] hover:bg-[#8a6946] text-white px-8 py-3 font-medium uppercase tracking-wider text-sm transition duration-300 shadow-md hover:shadow-lg">
              Career Opportunities
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default TeamSection;