import React from "react";
import { Menu, X } from "lucide-react";
import { Instagram, Facebook } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "SERVICES", href: "#services" },
    { name: "GALLERY", href: "#gallery" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="w-full relative z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-15 py-3 flex items-center justify-between">
        {/* Mobile Menu Button - Left */}
        <button
          className="md:hidden focus:outline-none z-50 p-2"
          style={{ color: "#B38F6F" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Links - Left */}
        <ul
          className="hidden md:flex items-center gap-6 font-medium"
          style={{ color: "#B38F6F" }}
        >
          {navLinks.map((link) => (
            <li key={link.name} className="hover:text-[#B8860B] cursor-pointer transition-colors">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Center Logo Section */}
        <div className="flex flex-col items-center justify-center text-center px-2 sm:px-6">
          <h1
            className="font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer hover:text-[#B8860B] whitespace-nowrap"
            style={{ fontFamily: "fantasy", color: "#B38F6F" }}
          >
            Kitchen Flavours
          </h1>
          <h2
            className="font-bold text-lg sm:text-xl md:text-2xl -mt-1 md:-mt-2 cursor-pointer whitespace-nowrap"
            style={{ fontFamily: "math", color: "#B38F6F" }}
          >
            Event Planner
          </h2>
        </div>

        {/* Social Links - Right */}
        <ul
          className="flex items-center justify-end gap-3 sm:gap-6 font-medium"
          style={{ color: "#B38F6F" }}
        >
          <li className="hover:text-[#B8860B] cursor-pointer transition-colors">
            <a
              href="https://www.instagram.com/kitchen_flavours__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </li>
          <li className="hover:text-[#B8860B] cursor-pointer transition-colors">
            <a
              href="https://www.facebook.com/profile.php?id=100054443981327"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 text-2xl font-bold transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ color: "#B38F6F" }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-[#B8860B] transition-transform active:scale-95"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
