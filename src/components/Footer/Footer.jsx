import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
        <div className="footer_name">
          Ayush<em>.</em>
        </div>

        <div className="copyright_detail">
          &copy; 2026 Ayush.All rights reserved.
        </div>

        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
    </footer>
  );
};

export default Footer;
