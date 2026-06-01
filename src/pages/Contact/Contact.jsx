import React from "react";
import { CiMail } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { BsTwitterX } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { BsSend } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <main>
      <div className="contact" id="contact">
        <div className="contact-wrapper">
          <div className="contact-layout">
            <div className="about-contact">
              <span className="contact_tag">Say Hello</span>
              <h1 className="contact_h1">
                Let's work <br /> <em>together.</em>
              </h1>
              <p className="contact_para">
                Whether it's a full project, a design audit, or just an
                interesting idea - I'd love to hear from you. I typically
                responed within 24 hours.
              </p>
              <div className="info-contact">
                <div className="info-contact-item">
                  <CiMail />
                  alex@mercer.io
                </div>
                <div className="info-contact-item">
                  <SlLocationPin />
                  San Francisco, CA
                </div>
              </div>

              <div className="social-contact">
                <Link to="#" className="social-contact-link">
                  <VscGithubAlt />
                </Link>
                <Link to="#" className="social-contact-link">
                  <FiLinkedin />
                </Link>
                <Link to="#" className="social-contact-link">
                  <BsTwitterX />
                </Link>
                <Link to="#" className="social-contact-link">
                  <FaInstagram />
                </Link>
              </div>
            </div>

            <div className="contact-form-section">
              <form>
                <div className="form-row-2">
                  <div className="field">
                    <label htmlFor="firstName" className="user_label">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Your first name"
                      className="user_input"
                    />
                  </div>


                  <div className="field">
                    <label htmlFor="lasttName" className="user_label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Your last name"
                      className="user_input"
                    />
                  </div>

                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="email" className="user_label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="user_input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="subject" className="user_label">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      className="user_input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="message" className="user_label">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project, idea or question..."
                      className="user_input_textarea"
                    ></textarea>
                  </div>
                </div>

                <button className="form-btn">
                  Send message <BsSend />
                </button>
              </form>

              <div className="form-success"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
