import React from "react";
import { Menu, X } from "lucide-react";
import { Instagram, Facebook } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="w-full relative z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-15 py-3 flex items-center justify-between">
        {/* Mobile Menu Button - Left */}
        <button
          className="md:hidden focus:outline-none"
          style={{ color: "#B38F6F" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Links - Left */}
        <ul
          className="hidden md:flex  items-center justify-items-center gap-6 font-medium "
          style={{ color: "#B38F6F" }}
        >
          <li className="hover:text-[#B8860B] cursor-pointer">
            {" "}
            <a href="#">HOME</a>
          </li>
          <li className="hover:text-[#B8860B] cursor-pointer">
            <a href="#services">SERVICES</a>
          </li>
          <li className="hover:text-[#B8860B] cursor-pointer">
            <a href="#gallery">GALLERY</a>
          </li>
          {/* <li className="hover:text-[#B8860B] cursor-pointer">
            <a href="#packages">Packages</a>
          </li> */}
          <li className="hover:text-[#B8860B] cursor-pointer">
            <a href="#about">ABOUT</a>
          </li>
          <li className="hover:text-[#B8860B] cursor-pointer">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>

        <div className="inline-block shrink-0 px-6 ">
          <h1
            className="font-bold text-3xl inline-block cursor-pointer hover:text-[#B8860B]"
            style={{ fontFamily: "fantasy", color: "#B38F6F" }}
          >
            Kitchen Flavours
          </h1>
          <h2
            className="font-bold text-2xl -mt-2 cursor-pointer"
            style={{ fontFamily: "math", color: "#B38F6F" }}
          >
            Event Planner
          </h2>
        </div>
        {/* Desktop Links - Right */}
        <ul
          className="flex items-center justify-end gap-6 font-medium"
          style={{ color: "#B38F6F" }}
        >
          <li className="hover:text-[#B8860B] cursor-pointer">
            <a
              href="https://www.instagram.com/kitchen_flavours__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} />
            </a>
          </li>
          <li className="hover:text-[#B8860B] cursor-pointer">
            <a
              href="https://www.facebook.com/profile.php?id=100054443981327"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={24} />
            </a>
          </li>
        </ul>
        {/* Mobile Ghost Div for Centering (Optional) - Keeps logo centered on mobile if needed */}
        <div className="w-7 md:hidden"></div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-screen bg-[#F8F0E3] shadow-md py-4 flex flex-col items-center gap-6 text-gray-700 font-medium transition-all duration-300">
          <a
            href="#"
            className="hover:text-pink-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:text-pink-600"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#gallery"
            className="hover:text-pink-600"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </a>
          <a
            href="#packages"
            className="hover:text-pink-600"
            onClick={() => setIsOpen(false)}
          >
            Packages
          </a>
          <a
            href="#about"
            className="hover:text-pink-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-pink-600"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
