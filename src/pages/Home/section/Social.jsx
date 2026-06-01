import React from "react";
import { Mail } from "lucide-react";
import { VscGithubAlt } from "react-icons/vsc";
import { BsTwitterX } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import "./Social.css";

const socialAccount = [
  {
    icon: <VscGithubAlt />,
    name: "@alexmercer",
    platform: "GitHub",
    href: "#"
  },
  {
    icon: <FiLinkedin />,
    name: "Alex Mercer",
    platform: "LinkedIn",
    href: "#"
  },
  {
    icon: <BsTwitterX />,
    name: "@alex_mercer",
    platform: "X",
    href: "#"
  },
  {
    icon: <FaInstagram />,
    name: "@alex.mercer",
    platform: "Instagram",
    href: "#"
  },
  { icon: <CiMail />, name: "alex@mercer.io", platform: "Email", href: "#" },
];

const Social = () => {
  return (
    <section id="social" className="social">
      <div className="wrapper_social">
        <span className="section_label">Find me online</span>
        <div className="social-grid">
          {socialAccount.map((social) => (
            <a className="card_social" key={social.platform} href={social.href}>
              <div className="left-icon">
                {social.icon}
              </div>
              <div className="right-detail">
                <div className="detail_name">{social.name}</div>
                <div className="detail_platform">{social.platform}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
