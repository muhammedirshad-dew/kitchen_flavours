import React from 'react'
import aboutImg from"../../assets/About/about-1.jpeg";
import aboutImg2 from"../../assets/About/about-2.jpg";
import aboutImg3 from "../../assets/About/our-team.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-16 px-6  bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1
            className="font-bold text-3xl"
            style={{ fontFamily: "fantasy", color: "#B38F6F" }}
          >
            About Us
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

        <div className="px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* LEFT SIDE - About Us Image */}
            <div className="order-1">
              <img
                src={aboutImg}
                alt="About Us"
                className="w-full h-64 sm:h-80 md:h-auto object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* RIGHT SIDE - About Us Text */}
            <div className="order-2 flex items-center">
              <h2 className="text-lg md:text-xl lg:text-2xl leading-relaxed text-[#4A3428] font-medium text-center lg:text-left">
                We are a professional catering service delivering high-quality
                food and exceptional service for all types of events. Our
                focus is on taste, hygiene, and customer satisfaction.
              </h2>
            </div>

            {/* LEFT SIDE - Experience Text */}
            <div className="order-4 lg:order-3 space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-[#B38F6F] text-center lg:text-left">
                Experience
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[#4A3428] text-center lg:text-left">
                With over 10 years of experience in the event management
                industry, we have successfully delivered memorable weddings,
                corporate events, birthday celebrations, and private parties
                with professionalism and creativity.
                <br className="hidden md:block" />
                <br className="hidden md:block" />
                Throughout the years, we have built a strong reputation for
                quality service, attention to detail, and flawless event
                execution. Every event is carefully planned to create
                unforgettable experiences and lasting memories.
              </p>
            </div>

            {/* RIGHT SIDE - Experience Image */}
            <div className="order-3 lg:order-4">
              <img
                src={aboutImg2}
                alt="Experience"
                className="w-full h-64 sm:h-80 md:h-auto object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* LEFT SIDE - Team Image */}
            <div className="order-5">
              <img
                src={aboutImg3}
                alt="Our Team"
                className="w-full h-64 sm:h-80 md:h-auto object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* RIGHT SIDE - Team Text */}
            <div className="order-6 space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-[#B38F6F] text-center lg:text-left">
                Our Team
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[#4A3428] text-center lg:text-left">
                Our team consists of experienced event planners, creative
                designers, coordinators, and support staff who work together
                to make every event successful. With strong teamwork,
                attention to detail, and a passion for excellence, we ensure
                that every stage of the event is managed smoothly and
                professionally.
              </p>
            </div>
          </div>

          <div className="mt-16 md:mt-24 text-center">
            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6"
              style={{ color: "#B38F6F" }}
            >
              Why Choose Us
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-serif text-[#4A3428] max-w-4xl mx-auto leading-relaxed italic">
              We are committed to delivering exceptional event
              experiences with creativity, professionalism, and attention to
              detail. With years of experience, reliable service, and a
              dedicated team, we ensure every event is planned perfectly and
              executed smoothly. From the initial planning stage to the final
              celebration, we focus on quality, customer satisfaction, and
              creating unforgettable memories for every client.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection
