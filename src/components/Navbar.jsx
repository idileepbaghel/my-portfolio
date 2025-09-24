import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left side logo / brand */}
      <ul className="nav-head">
        <li><a href="#hero">Dileep</a></li>
      </ul>

      {/* Hamburger icon (mobile only) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu Items */}
      <ul className={`nav ${isOpen ? "show" : ""}`}>
        <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
