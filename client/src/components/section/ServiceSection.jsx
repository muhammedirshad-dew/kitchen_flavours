import React, { useState } from "react";

const ServiceSection = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const services = [
    {
      id: 1,
      title: "WEDDINGS",
      desc: "Grand catering with multi-course menus, lavish setups, and cultural richness for your special day.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "ENGAGEMENTS",
      desc: "Elegant and intimate catering services that match the charm and importance of your engagement.",
      image:
        "https://images.unsplash.com/photo-1558457697-19f31a0a9f8b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "BIRTHDAYS",
      desc: "Fun and festive catering for kids and adults, with customised menus and sweet surprises.",
      image:
        "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "ANNIVERSARIES",
      desc: "Celebrate years of togetherness with a romantic and refined dining experience for your guests.",
      image:
        "https://images.unsplash.com/photo-1508654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "HOUSEWARMINGS",
      desc: "Warm your new space with soulful food, traditional dishes, and welcoming hospitality.",
      image:
        "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "CORPORATE EVENTS",
      desc: "Professional catering solutions for conferences, office parties, and business luncheons.",
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "PRIVATE PARTIES",
      desc: "Luxury catering for intimate gatherings, reunions, or surprise parties at any location.",
      image:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      title: "THEMED EVENTS",
      desc: "From Bollywood to retro, our theme-based catering creates immersive dining experiences.",
      image:
        "https://images.unsplash.com/photo-1505577058444-a3dabf4b35b8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      title: "OUTDOOR CATERING",
      desc: "Buffet setups and live counters in open spaces, ideal for garden parties and outdoor events.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleShowMore = () => {
    setVisibleCount(services.length);
  };

  const visibleServices = services.slice(0, visibleCount);

  return (
    <section className="w-full bg-[#F8F0E3] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            OUR SERVICES
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gray-400"></div>
            <div className="w-3 h-3 rounded-full bg-pink-400"></div>
            <div className="h-px w-12 bg-gray-400"></div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {visibleServices.map((service) => (
            <div
              key={service.id}
              className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <a
                  href="#"
                  className="text-pink-500 font-semibold text-sm hover:text-pink-600 transition"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          {visibleCount < services.length && (
            <button
              onClick={handleShowMore}
              className="px-12 py-3 border-2 border-pink-500 text-pink-500 font-semibold uppercase tracking-wider hover:bg-pink-500 hover:text-white transition duration-300"
            >
              See More Service
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
