import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer" id="footer">
        <div className="footer_name">
          Alex<em>.</em>
        </div>

        <div className="copyright_detail">
          &copy; 2026 Alex Mercer.All rights reserved.
        </div>

        <nav className="footer-nav">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>
    </footer>
  );
};

export default Footer;
