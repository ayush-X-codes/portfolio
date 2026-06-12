import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBorder, setHasBorder] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasBorder(true);
      } else {
        setHasBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${hasBorder ? "is-scrolled" : ""}`}>
        <Link to="/" className="left-nav_name">
          Ayush<em>.</em>
        </Link>

        {/* Desktop Link */}
        <ul className="nav_links">
          <li>
            <Link to="/" className="nav_link ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav_link ">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav_link ">
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <Link to="/contact" className="desktop-cta">
          <FiMessageSquare /> Let's talk
        </Link>

        {/* Hamburger (mobile only) */}
        <button className="menu-btn" onClick={toggleMenu}>
          {isOpen ? <IoClose /> : <FiMenu />}
        </button>
      </nav>

      {/*  Mobile overlay menu */}
      <div
        className={`nav_mobile ${isOpen ? "active" : ""}`}
        onClick={handleOverlayClick}
      >
        <ul className="nav-mobile_links">
          <li>
            <Link to="/" className="nav-mobile_link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="nav-mobile_link"
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-mobile_link" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>

        <Link to="/contact" className="nav-contact-link" onClick={closeMenu}>
          <FiMessageSquare /> Let's talk
        </Link>
      </div>
    </>
  );
};

export default Navbar;
