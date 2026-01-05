import React from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo/kitchen_flavours.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="w-full bg-[#F8F0E3] relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between md:justify-center">
        
        {/* Mobile Menu Button - Left */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Links - Left */}
        <ul className="hidden md:flex flex-1 items-center justify-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-[#B8860B] cursor-pointer">Home</li>
          <li className="hover:text-[#B8860B] cursor-pointer">Services</li>
          <li className="hover:text-[#B8860B] cursor-pointer">Gallery</li>
        </ul>

        {/* Logo - Center */}
        <div className="inline-block mx-auto md:mx-0 shrink-0">
          <img className="w-20 " src={logo} alt="Kitchen Flavours" />
        </div>

        {/* Desktop Links - Right */}
        <ul className="hidden md:flex flex-1 items-center justify-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-[#B8860B] cursor-pointer">Packages</li>
          <li className="hover:text-[#B8860B] cursor-pointer">About</li>
          <li className="hover:text-[#B8860B] cursor-pointer">Book Now</li>
        </ul>

        {/* Mobile Ghost Div for Centering (Optional) - Keeps logo centered on mobile if needed */}
        <div className="w-7 md:hidden"></div>
      </div>

      {/* Underline - 75% Width, Centered */}
      <div className="w-full h-px bg-black mx-auto"></div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F8F0E3] shadow-md py-4 flex flex-col items-center gap-6 text-gray-700 font-medium transition-all duration-300">
          <a href="#" className="hover:text-pink-600" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" className="hover:text-pink-600" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#" className="hover:text-pink-600" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#" className="hover:text-pink-600" onClick={() => setIsOpen(false)}>Packages</a>
          <a href="#" className="hover:text-pink-600" onClick={() => setIsOpen(false)}>About</a>
          <a href="#" className="hover:text-pink-600" onClick={() => setIsOpen(false)}>Book Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
