import React from "react";

const HeroSction = () => {
  const bgUrl =
    "https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?auto=format&fit=crop&w=1800&q=80";

  return (
    <section
      className="w-full h-[70vh] md:h-[80vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-center items-start px-6 md:px-12 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Kitchen Flavours
        </h1>
        <p className="text-sm md:text-lg mb-6 max-w-xl">
          Discover delightful recipes and catering services for every occasion.
        </p>
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded">
          Explore Menu
        </button>
      </div>
    </section>
  );
};

export default HeroSction;
