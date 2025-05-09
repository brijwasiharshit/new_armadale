// components/GallerySection.jsx
import IMG_1 from '../assets/images/gallery/img1.jpg';
import IMG_2 from '../assets/images/gallery/img2.jpg';
import IMG_3 from '../assets/images/gallery/img3.jpg';
import IMG_4 from '../assets/images/gallery/img4.jpg';
import IMG_5 from '../assets/images/gallery/img5.jpg';
import IMG_6 from '../assets/images/gallery/img6.jpg';
import IMG_7 from '../assets/images/gallery/img7.jpg';

const GallerySection = () => {
  const galleryItems = [
    IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7
  ];

  return (
    <section id='gallery' className="py-20 bg-gradient-to-b from-[#f9f3ed] to-[#f0e6d9] text-center">
      <h4 className="text-sm tracking-widest uppercase text-gray-400 mb-2">
        Hoteler Gallery
      </h4>
      <h2 className="text-4xl font-serif font-semibold mb-6">
        Our Most Popular Gallery
      </h2>

      <div className="grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {galleryItems.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery item ${index + 1}`}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
