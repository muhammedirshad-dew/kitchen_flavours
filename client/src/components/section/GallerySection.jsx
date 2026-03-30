import React, { useState, useEffect } from "react";
import BgImg from "../../assets/Gallery/Gallery.jpg";
import carousel1_1 from "../../assets/Gallery/carousel-box1-img1.jpg";
import carousel1_2 from "../../assets/Gallery/carousel-box1-img2.jpg";
import carousel1_3 from "../../assets/Gallery/carousel-box1-img3.jpg";
import carousel2_1 from "../../assets/Gallery/carousel-box2-img1.jpg";
import carousel2_2 from "../../assets/Gallery/carousel-box2-img2.jpg";
import carousel2_3 from "../../assets/Gallery/carousel-box2-img3.jpg";
import reel1 from "../../assets/Gallery/reel-box1-1.mp4";

const GallerySection = () => {
  const images1 = [carousel1_1, carousel1_2, carousel1_3];
  const images2 = [carousel2_1, carousel2_2, carousel2_3];
  
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setCurrentIndex1((prevIndex) => (prevIndex + 1) % images1.length);
    }, 3000);

    const timer2 = setInterval(() => {
      setCurrentIndex2((prevIndex) => (prevIndex + 1) % images2.length);
    }, 3500);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, [images1.length, images2.length]);

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1
            className="font-bold text-3xl"
            style={{ fontFamily: "fantasy", color: "#B38F6F" }}
          >
            Gallery
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div
              className="h-px w-12 "
              style={{ backgroundColor: "#B38F6F" }}
            ></div>
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#B38F6F" }}
            ></div>
            <div
              className="h-px w-12"
              style={{ backgroundColor: "#B38F6F" }}
            ></div>
          </div>
        </div>
      </div>
      <section id="gallery">
        <div
          className="w-full py-10 px-6 bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${BgImg})` }}
        ></div>
        <div className="p-6 bg-gray-100 min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[250px]">
            {/* Carousel 1 Div */}
            <div className="md:col-span-2 md:row-span-1 relative overflow-hidden rounded-xl bg-gray-800 text-white h-[50vh] md:h-auto">
              {images1.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery 1-${index + 1}`}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex1 ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Carousel 2 Div */}
            <div className="relative overflow-hidden rounded-xl bg-orange-200 h-[50vh] md:h-auto">
              {images2.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery 2-${index + 1}`}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex2 ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Video Reel Div */}
            <div
              className="relative overflow-hidden rounded-xl bg-black
         h-[80vh] sm:h-[70vh]
         md:h-auto md:row-span-2"
            >
              <video
                src={reel1}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="relative overflow-hidden rounded-xl bg-brown-400 h-[50vh] md:h-auto">
              <img
                src="cliffs.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="relative p-6 text-white h-full flex flex-col justify-end">
                <h2 className="text-lg font-bold">
                  Maui By Air: The Best Way Around The Island
                </h2>
              </div>
            </div>

            <div className="md:row-span-2 bg-gray-900 text-white p-10 flex items-center justify-center rounded-xl text-center h-[50vh] md:h-auto">
              <p className="italic text-lg">
                "Man cannot discover new oceans unless he has the courage to
                lose sight of the shore."
              </p>
            </div>

            <div className="relative overflow-hidden rounded-xl bg-orange-200 h-[50vh] md:h-auto">
              <img
                src="desert.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="relative p-6 text-white h-full flex flex-col justify-end">
                <h2 className="text-lg font-bold">Traveling To USA</h2>
              </div>
            </div>

            <div className="md:col-span-2 relative overflow-hidden rounded-xl h-[50vh] md:h-auto">
              <img
                src="underwater.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="relative p-6 text-white h-full flex flex-col justify-end">
                <h2 className="text-xl font-bold">
                  A Guide To Rocky Mountain Vacations
                </h2>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl bg-brown-400 h-[50vh] md:h-auto">
              <img
                src="cliffs.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="relative p-6 text-white h-full flex flex-col justify-end">
                <h2 className="text-lg font-bold">
                  Maui By Air: The Best Way Around The Island
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GallerySection;
