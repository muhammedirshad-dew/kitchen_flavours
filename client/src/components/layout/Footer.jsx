import React from "react";
import { Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400  py-12">
      {/* Top Section */}
      <div className="flex flex-col items-center text-center space-y-5">
        {/* Logo */}
        <div className="w-12 h-12 bg-lime-400 rounded-xl flex items-center justify-center text-black font-bold">
          ●
        </div>

        <h2 className="text-white text-xl font-bold tracking-wide">LUMINA</h2>

        <p className="max-w-md text-sm leading-relaxed">
          Building the infrastructure for the next generation of digital
          creators and mobile-first teams.
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 text-sm pt-2">
          <a href="#" className="hover:text-lime-400">
            Product
          </a>
          <a href="#" className="hover:text-lime-400">
            Changelog
          </a>
          <a href="#" className="hover:text-lime-400">
            Privacy
          </a>
          <a href="#" className="hover:text-lime-400">
            Terms
          </a>
          <a href="#" className="hover:text-lime-400">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 pt-3">
          <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-lime-400 hover:text-black transition">
            <Twitter size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-lime-400 hover:text-black transition">
            <Instagram size={18} />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-8"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pl-1.5">
        <p className="text-xs text-gray-500">
          © 2026 Lumina Technologies Inc. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
