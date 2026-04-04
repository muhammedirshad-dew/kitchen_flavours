import React from "react";
import { Instagram, Facebook } from "lucide-react";
import logo from "../../assets/logo/kitchen_flavours.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 ">
      {/* Top Section */}
      <div className="flex flex-col items-center text-center space-y-6 ">
        {/* Logo */}
        <div>
          <img src={logo} alt="Kitchen Flavours Logo" className="w-30 cursor-pointer"/>
        </div>

        <p className="max-w-md text-sm leading-relaxed">
          We create memorable events with creativity, professionalism, and
          attention to detail. From weddings to corporate functions, we make
          every celebration special.
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 text-sm pt-2">
          <a href="#" className="hover:text-[#B38F6F]">
            Home
          </a>
          <a href="#services" className="hover:text-[#B38F6F]">
            Services
          </a>
          <a href="#gallery" className="hover:text-[#B38F6F]">
            Gallery
          </a>
          <a href="#about" className="hover:text-[#B38F6F]">
            About
          </a>
          <a href="#contact" className="hover:text-[#B38F6F]">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 pt-3">
          <a
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#B38F6F] hover:text-black transition"
            href="https://www.facebook.com/profile.php?id=100054443981327"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={18} />
          </a>
          <a
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#B38F6F] hover:text-black transition"
            href="https://www.instagram.com/kitchen_flavours__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-4"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-center py-3">
        <p className="text-xs text-gray-500 text-center">
          © 2026 Kitchen Flavours Event Management. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
