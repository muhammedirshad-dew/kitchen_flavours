import React from "react";
import BgImg from "../../assets/Gallery/premium_photo-1674235766088-80d8410f9523.avif";

const GallerySection = () => {
  return (
    <div>
      <section
        className="w-full py-10 px-6 bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div>
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Gallery
              </h2>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-gray-400"></div>
                <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                <div className="h-px w-12 bg-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GallerySection;
