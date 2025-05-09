// components/GallerySection.jsx
import { useState } from "react";

import IMG_1 from '../assets/images/gallery/img1.jpg';
import IMG_2 from '../assets/images/gallery/img2.jpg';
import IMG_3 from '../assets/images/gallery/img3.jpg';
import IMG_4 from '../assets/images/gallery/img4.jpg';
import IMG_5 from '../assets/images/gallery/img5.jpg';
import IMG_6 from '../assets/images/gallery/img6.jpg';
import IMG_7 from '../assets/images/gallery/img7.jpg';


const GallerySection = () => {
  const categories = ["All", "Deluxe Room", "Luxury Room", "Royal Room"];
  const [activeCategory, setActiveCategory] = useState("All");

  const galleryItems = [
    { src: IMG_1, category: "Deluxe Room" },
    { src: IMG_2, category: "Luxury Room" },
    { src: IMG_3, category: "Royal Room" },
    { src: IMG_4, category: "Deluxe Room" },
    { src: IMG_5, category: "Luxury Room" },
    { src: IMG_6, category: "Royal Room" },
    { src: IMG_7, category: "Luxury Room" },
   
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id='gallery' className="py-20 bg-gradient-to-b from-[#f9f3ed] to-[#f0e6d9] text-center">
      <h4 className="text-sm tracking-widest uppercase text-gray-400 mb-2">
        Hoteler Gallery
      </h4>
      <h2 className="text-4xl font-serif font-semibold mb-6">
        Our Most Popular Gallery
      </h2>
      <div className="flex justify-center gap-6 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-lg font-medium transition ${
              activeCategory === cat
                ? "text-yellow-700 underline underline-offset-4"
                : "text-gray-400 hover:text-yellow-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {filteredItems.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={`Gallery item ${index + 1}`}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
