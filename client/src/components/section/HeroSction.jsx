import React, { useRef } from "react";
import HeroVideo from "../../assets/Hero/12796344_3840_2160_60fps.mp4";

const HeroSction = () => {
  const videoRef = useRef(null);

  // Video metadata load aavumbol playback speed kuraykkaam
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.25; 
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={HeroVideo}
        autoPlay
        loop
        muted
        playsInline
        onLoadedMetadata={handleLoadedMetadata}
      />

      {/* Luxury Wedding / Silver Theme Gradient Overlay */}
      <div
        className="absolute inset-0 z-10 opacity-40 pointer-events-none bg-black/40"
        // style={{
        //   background:
        //     "linear-gradient(135deg, rgba(192, 192, 192, 0.4) 0%, rgba(245, 245, 220, 0.2) 35%, rgba(247, 231, 206, 0.3) 70%, rgba(251, 252, 248, 0.3) 100%)",
        // }}
      />

      {/* --- CONTENT CENTERED --- */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-left text-white">
        <h1
          className="font-['Playfair_Display'] italic text-6xl"
          style={{ color: "#F8F0E3", textShadow: "2px 4px 8px rgba(0,0,0,0.9)" }}
        >
          MAKE YOUR WEDDING <br />
          MEMORABLE
        </h1>
        <br />

        <p 
          className="font-['Patrick_Hand'] text-3xl"
          style={{ textShadow: "2px 4px 8px rgba(0,0,0,0.9)" }}
        >
          We make your wedding best memorable for life time. <br />
          We make the best moment of your life.
        </p>

        {/* Optional Call to Action Button to look more professional */}
        <div className="mt-12">
          <button className="px-10 py-4 bg-white font-bold rounded-full hover: transition-all transform hover:scale-105 shadow-2xl tracking-widest uppercase text-sm" style={{color:"#B38F6F"}}>
            Book Your Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSction;
