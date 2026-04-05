import React, { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // If mobile menu is open, don't hide the navbar
      if (isOpen) {
        setIsVisible(true);
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY, isOpen]);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "SERVICES", href: "#services" },
    { name: "GALLERY", href: "#gallery" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ease-in-out bg-gray-100 shadow-md ${
          isVisible || isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto py-3"
            : "-translate-y-full opacity-0 pointer-events-none py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-15 flex items-center justify-between transition-all duration-500">
          {/* Mobile Menu Button - Left */}
          <button
            className="md:hidden focus:outline-none z-[70] p-2"
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
              className="font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer hover:text-[#B8860B] whitespace-nowrap transition-colors"
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
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-100 z-[55] flex flex-col items-center justify-center gap-8 text-2xl font-bold transition-all duration-500 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
        }`}
        style={{ color: "#B38F6F" }}
      >
        <div className="flex flex-col items-center gap-8 mt-10">
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
          
          {/* Mobile Social Links */}
          <div className="flex gap-8 mt-4">
            <a
              href="https://www.instagram.com/kitchen_flavours__/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-md"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100054443981327"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-md"
            >
              <Facebook size={28} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
