import React from 'react'
import aboutImg from"../../assets/About/about-1.jpeg";
import aboutImg2 from"../../assets/About/about-2.jpg";
import aboutImg3 from "../../assets/About/our-team.jpg";
import aboutImg4 from"../../assets/About/about-4.jpg";
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

        <div className="px-6  max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT SIDE */}
            {/*About Us*/}
            <div>
              <img
                src={aboutImg}
                alt="About Us"
                className="w-full rounded-xl"
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl leading-relaxed text-[#4A3428]  flex items-center h-40">
                  We are a professional catering service delivering high-quality
                  food and exceptional service for all types of events. Our
                  focus is on taste, hygiene, and customer satisfaction.
                </h2>

                {/* <div className="bg-gray-100 p-6 rounded-xl">
                  <h3 className="text-4xl font-bold text-brown-700">
                    10 Years
                  </h3>
                  <p className="mt-2 text-gray-600">
                    of excellence in catering services
                  </p>
                </div> */}
              </div>
            </div>
            {/* LEFT SIDE */}
            <div className="space-y-6">
              {/* Experence */}
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#B38F6F]">
                  Experience
                </h3>
                <p className="leading-relaxed text-[#4A3428] ">
                  With over 10 years of experience in the event management
                  industry, we have successfully delivered memorable weddings,
                  corporate events, birthday celebrations, and private parties
                  with professionalism and creativity.
                  <br />
                  Throughout the years, we have built a strong reputation for
                  quality service, attention to detail, and flawless event
                  execution. Every event is carefully planned to create
                  unforgettable experiences and lasting memories.
                </p>
              </div>
            </div>
            {/* RIGHT SIDE */}
            <div>
              <img
                src={aboutImg2}
                alt="About Us"
                className="w-full rounded-xl"
              />
            </div>
            {/* LEFT SIDE */}
            {/*Team*/}
            <div>
              <img
                src={aboutImg3}
                alt="About Us"
                className="w-full rounded-xl"
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#B38F6F]">
                  Our Team
                </h3>
                <p className="leading-relaxed text-[#4A3428]">
                  Our team consists of experienced event planners, creative
                  designers, coordinators, and support staff who work together
                  to make every event successful. With strong teamwork,
                  attention to detail, and a passion for excellence, we ensure
                  that every stage of the event is managed smoothly and
                  professionally.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h1
              className="text-3xl font-extrabold mb-4 text-center "
              style={{ color: "#B38F6F" }}
            >
              Why Choose Us
            </h1>
            <p className="text-2xl font-mono text-[#4A3428]">
              Why Choose Us We are committed to delivering exceptional event
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
