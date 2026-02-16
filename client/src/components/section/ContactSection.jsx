import React from "react";
import { Home, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full min-h-screen bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab')",
        }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            dignissimos eaque doloremque.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-white text-black p-3 rounded-full">
                <Home size={24} />
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold text-xl">Address</h3>
                <p className="text-gray-300">
                  4871 Sugar Camp Road,
                  <br /> Owatonna, Minnesota
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white text-black p-3 rounded-full">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold text-xl">Phone</h3>
                <p className="text-gray-300">561-456-2321</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white text-black p-3 rounded-full">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold text-xl">Email</h3>
                <p className="text-gray-300">example@email.com</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white text-black rounded-md p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-6">Send Message</h3>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border-b border-gray-400 outline-none py-2"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-gray-400 outline-none py-2"
              />
              <input type="number" placeholder="Phone Number" className="w-full border-b border-gray-400 outline-none py-2" />

              <textarea
                placeholder="Type your Message..."
                className="w-full border-b border-gray-400 outline-none py-2 resize-none"
                rows="3"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-cyan-500 text-white py-3 rounded-md hover:bg-cyan-600 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
