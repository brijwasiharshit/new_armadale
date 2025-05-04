import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul & Priya Sharma",
      location: "New Delhi",
      rating: 5,
      content: "Our anniversary stay at New Armadale was magical! The lake-view suite was breathtaking, and the staff went above and beyond to make our stay special with rose petals and a complimentary cake. The Kumaoni thali at the restaurant was the best we've ever had.",
      date: "March 2024"
    },
    {
      id: 2,
      name: "Emily Carter",
      location: "London, UK",
      rating: 5,
      content: "As a solo traveler, I felt incredibly safe and welcomed at New Armadale. The concierge arranged wonderful nature walks, and my room had the most comfortable bed I've slept in during my India trip. The morning views of Naini Lake from my balcony were worth every penny.",
      date: "January 2024"
    },
    {
      id: 3,
      name: "The Kapoor Family",
      location: "Mumbai",
      rating: 4,
      content: "Perfect family getaway! Our children loved the indoor games room while we enjoyed the spa. The heated pool was a blessing in December. Only suggestion would be more vegetarian options at breakfast, but overall an excellent experience.",
      date: "December 2023"
    },
    {
      id: 4,
      name: "Dr. Amit Patel",
      location: "Bangalore",
      rating: 5,
      content: "Attended a medical conference at New Armadale and was impressed by both the conference facilities and the luxurious accommodations. The soundproofing in the rooms allowed for perfect rest between sessions. Will definitely return for leisure!",
      date: "November 2023"
    }
  ];

  return (
    <section id='reviews' className="relative py-20  overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#A67C52] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#A67C52] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[#A67C52] mb-3">Guest Experiences</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mb-4">
            What Our Guests Say
          </h2>
          <div className="w-20 h-0.5 bg-[#A67C52] mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Hear from our valued guests about their unforgettable stays at New Armadale
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={18}
                    className={i < testimonial.rating ? "text-[#A67C52] fill-[#A67C52]" : "text-gray-300"}
                  />
                ))}
              </div>
              <blockquote className="text-gray-600 italic mb-6">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-medium text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
                <p className="text-sm text-gray-400">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
  <h3 className="text-xl font-serif font-medium text-gray-800 mb-4">
    Ready to experience New Armadale yourself?
  </h3>
  <a href="tel:+918630765606">
    <button className="bg-[#A67C52] hover:bg-[#8c6840] text-white px-8 py-3 font-medium uppercase tracking-wider text-sm transition duration-300 shadow-md hover:shadow-lg rounded-md">
      Book Your Stay
    </button>
  </a>
</div>

      </div>
    </section>
  );
};

export default TestimonialsSection;