import React from "react";
import "./Hero.css";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-wrapper">
        <div className="hero_top">
          <div className="hero_badge">Hi, I'm Ayush.</div>
          <h1 className="hero_heading">
            I enjoy <em>building</em> <br />
            things.
          </h1>
          <p className="hero_desc">
            From websites and automations to side projects and experiments, I'm
            constantly learning, creating, and exploring how technology can turn
            ideas into something useful.
          </p>
          <div className="hero_actions">
            <Link to="#" className="btn-action btn-primary">
              Explore My Work
              <ArrowRight width={14} />
            </Link>
            <Link to="#" className="btn-action btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="hero_bottom"></div>
      </div>
    </section>
  );
};

export default Hero;
