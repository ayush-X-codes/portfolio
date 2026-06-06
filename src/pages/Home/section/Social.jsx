
import { VscGithubAlt } from "react-icons/vsc";
import { BsTwitterX } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import "./Social.css";
import { Link } from "react-router-dom";

const socialAccount = [
  {
    icon: <VscGithubAlt />,
    name: "@alexmercer",
    platform: "GitHub",
    href: "https://github.com/ayush-X-codes"
  },
  {
    icon: <FiLinkedin />,
    name: "Alex Mercer",
    platform: "LinkedIn",
    href: "https://www.linkedin.com/in/ayush-a-a23408356"
  },
  {
    icon: <BsTwitterX />,
    name: "@alex_mercer",
    platform: "X",
    href: "https://x.com/Ayush9364"
  },
  {
    icon: <FaInstagram />,
    name: "@alex.mercer",
    platform: "Instagram",
    href: "https://www.instagram.com/ayush_x_code?igsh=YmZiMTRmb3pwMWx1"
  },
  { icon: <CiMail />, name: "ashuchauhan5120@gmail.com", platform: "Email", href: "#" },
];

const Social = () => {
  return (
    <section id="social" className="social">
      <div className="wrapper_social">
        <span className="section_label">Find me online</span>
        <div className="social-grid">
          {socialAccount.map((social) => (
            <Link className="card_social" key={social.platform} to={social.href} target="_blank" rel="noopener noreferrer">
              <div className="left-icon">
                {social.icon}
              </div>
              <div className="right-detail">
                <div className="detail_name">{social.name}</div>
                <div className="detail_platform">{social.platform}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
