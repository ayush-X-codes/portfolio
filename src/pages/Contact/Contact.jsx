import { CiMail } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { BsTwitterX } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { BsSend } from "react-icons/bs";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    setSuccess(false);
    try {
      const { error } = await supabase.from("contact_messages").insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setSuccess(true)

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
    } catch (error) {
      console.error(error)
    } finally {
    setLoading(false)
    }
  };

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
                Whether you have a project in mind, a problem you're trying to
                solve, or simply want to connect, I'd love to hear from you. My
                inbox is always open for ideas, collaborations, and interesting
                conversations.
              </p>
              <div className="info-contact">
                <div className="info-contact-item">
                  <CiMail />
                  ashuchauhan5120@gmail.com
                </div>
                <div className="info-contact-item">
                  <SlLocationPin />
                  Dehradun, India
                </div>
              </div>

              <div className="social-contact">
                <Link
                  to="https://github.com/ayush-X-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-contact-link"
                >
                  <VscGithubAlt />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/ayush-a-a23408356"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-contact-link"
                >
                  <FiLinkedin />
                </Link>
                <Link
                  to="https://x.com/Ayush9364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-contact-link"
                >
                  <BsTwitterX />
                </Link>
                <Link
                  to="https://www.instagram.com/ayush_x_code?igsh=YmZiMTRmb3pwMWx1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-contact-link"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>

            <div className="contact-form-section">
              <form onSubmit={handleSubmit}>
                <div className="form-row-2">
                  <div className="field">
                    <label htmlFor="firstName" className="user_label">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="user_input"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <span className="form-error">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* <div className="field">
                    <label htmlFor="lasttName" className="user_label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Your last name"
                      className="user_input"
                    />
                    {errors.name && (
                      <span className="form-error">
                        {errors.name}
                      </span>
                    )}
                  </div> */}
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
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <span className="form-error">
                        {errors.email}
                      </span>
                    )}
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
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                    {errors.subject && (
                      <span className="form-error">
                        {errors.subject}
                      </span>
                    )}
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
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                    {errors.message && (
                      <span className="form-error">
                        {errors.message}
                      </span>
                    )}
                  </div>
                </div>

                <button className="form-btn" disabled={loading} type="submit">
                  {loading ? "Sending..." : "Send Message"}
                  <BsSend />
                </button>
              </form>

              {success && (
                <div className="form-success">
                  ✓ Thanks for reaching out. I'll get back to you soon.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
