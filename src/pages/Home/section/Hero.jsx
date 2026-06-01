import React from "react";
import "./Hero.css";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-wrapper">
        <div className="hero_top">
          <div className="hero_badge">
            Available for Projects
          </div>
          <h1 className="hero_heading">
            Design that <br /> <em>speaks</em> <br /> for itself
          </h1>
          <p className="hero_desc">
            I'm Alex Mercer — a designer and frontend developer crafting digital
            experiences that feel as good as they look. Based in San Francisco.
          </p>
          <div className="hero_actions">
            <Link to="#" className="btn-action btn-primary">View my work <ArrowRight width={14} /></Link>
            <Link to="#" className="btn-action btn-secondary">Get in touch</Link>
          </div>
        </div>
        <div className="hero_bottom">
         
        </div>
      </div>
    </section>
  );
};

export default Hero;
