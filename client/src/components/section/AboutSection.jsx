import React from 'react'
import "../../assets/About/about-1.jpeg";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#F8F0E3] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gray-400"></div>
            <div className="w-3 h-3 rounded-full bg-pink-400"></div>
            <div className="h-px w-12 bg-gray-400"></div>
          </div>
        </div>

        <div className="py-20 px-6  max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT SIDE */}
            <div >
              <img src="" alt="" />
            </div>
            {/* <div>
              <h2 className="text-3xl font-bold mb-4">About Us</h2>

              <p className="leading-relaxed text-gray-600 mb-6">
                We are a professional catering service delivering high-quality
                food and exceptional service for all types of events. Our focus
                is on taste, hygiene, and customer satisfaction.
              </p>

              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-4xl font-bold text-brown-700">10 Years</h3>
                <p className="mt-2 text-gray-600">
                  of excellence in catering services
                </p>
              </div>
            </div> */}

            {/* RIGHT SIDE */}
            <div className="space-y-6">
              {/* Experence */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="leading-relaxed text-gray-600">
                  With over 10 years of experience delivering exceptional
                  catering services for weddings, birthdays, corporate events,
                  and private functions
                </p>
              </div>
              {/* Team */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Team</h3>
                <p className="leading-relaxed text-gray-600">
                  Professional chefs and experienced event managers ensuring
                  flawless execution.
                </p>
              </div>
                {/* Why Choose Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Why Choose Us
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>• Hygiene & Quality Food</li>
              <li>• On-time Service</li>
              <li>• Customizable Menus</li>
            </ul>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection
