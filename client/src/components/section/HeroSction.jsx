import React, { useEffect , useRef } from "react";
import HeroVideo from "../../assets/Hero/12796344_3840_2160_60fps.mp4";

const HeroSction = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.25 
    }
  }, []);

  return (


    <section id="home" className="relative w-full min-h-screen overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={HeroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* <div className="absolute inset-0 bg-black/50" /> */}

      {/* <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-center items-start px-6 md:px-12 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Kitchen Flavours
        </h1>
        <p className="text-sm md:text-lg mb-6 max-w-xl">
          Discover delightful recipes and catering services for every occasion.
        </p>
      </div> */}
    </section>
  );
};

export default HeroSction;
