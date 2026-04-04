import React from 'react';
import weddingsImg from "../../assets/Services/Weddings.png";
import engagementImg from "../../assets/Services/Engagement.png";
import birthdaysImg from "../../assets/Services/Birthdays.jpg";
import anniversaryImg from "../../assets/Services/Anniversary.jpg";
import housewarmingsImg from "../../assets/Services/Housewarmings.jpg";
import corporateImg from "../../assets/Services/Corporate Events.jpg";
import privatePartiesImg from "../../assets/Services/Private Parties.png";
import themedEventsImg from "../../assets/Services/Themed Events.png";
import cateringImg from "../../assets/Services/Outdoor Catering.png";

const services = [
  { title: "Weddings", description: "Creating your perfect fairy-tale wedding with elegance and precision.", icon: "💍", image: weddingsImg },
  { title: "Engagements", description: "A beautiful start to your journey together, planned to perfection.", icon: "🥂", image: engagementImg },
  { title: "Birthdays", description: "Fun, vibrant, and memorable birthday celebrations for all ages.", icon: "🎂", image: birthdaysImg },
  { title: "Anniversaries", description: "Celebrating your love and milestones with touch of class.", icon: "❤️", image: anniversaryImg },
  { title: "Housewarmings", description: "Welcome home! We make your new beginning special.", icon: "🏡", image: housewarmingsImg },
  { title: "Corporate Events", description: "Professional, efficient, and impressive events for your business.", icon: "💼", image: corporateImg },
  { title: "Private Parties", description: "Intimate gatherings or grand bashes, we handle it all.", icon: "🎉", image: privatePartiesImg },
  { title: "Themed Events", description: "Bringing your wildest imagination to life with unique themes.", icon: "🎭", image: themedEventsImg },
  { title: "Outdoor Catering", description: "Delicious food, served with style in any setting.", icon: "🥘", image: cateringImg },
];

const Services = () => {
  return (
    <section id="services" className="py-24  bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1
            className="font-bold text-3xl sm:text-4xl"
            style={{ fontFamily: "fantasy", color: "#B38F6F" }}
          >
            Services
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div
              className="h-px w-10 sm:w-12 "
              style={{ backgroundColor: "#B38F6F" }}
            ></div>
            <div
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
              style={{ backgroundColor: "#B38F6F" }}
            ></div>
            <div
              className="h-px w-10 sm:w-12"
              style={{ backgroundColor: "#B38F6F" }}
            ></div>
          </div>
          <h3 className="text-lg sm:text-xl leading-relaxed text-[#4A3428] max-w-2xl mx-auto mt-4 sm:mt-5 px-4">
            Whatever the occasion, we bring your vision to life with
            professional planning and flawless execution.
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer border-t-4 border-t-transparent hover:border-t-[#B38F6F]"
            >
              <div className="w-full h-40 sm:h-48 mb-4 sm:mb-6 overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#B38F6F] mb-2 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-[#4A3428] text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
