import React from "react";
import "./CTA.css";
import { FaArrowRight } from "react-icons/fa6";

const CTA = () => {
  return (
    <section className="cta" id="cta">
      <div className="wrapper-cta">
        <div className="cta-block">
          <h2 className="cta_h2">
            Have an idea? <br /> Let's make it <em>real.</em>
          </h2>
          <p className="cta_para">I'm currently open to new freelance projects and collaborations.</p>
          <a href="#" className="btn cta-btn">
            Start a conversation
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
