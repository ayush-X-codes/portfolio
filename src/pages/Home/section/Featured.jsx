
import { FaArrowRight } from "react-icons/fa6";
import "./Featured.css";
import { Link } from "react-router-dom";
import portfolio from "../../../assets/projects/portfolio.webp"
import localBusiness from "../../../assets/projects/local-business.webp"
import automation from "../../../assets/projects/automation.webp"
import fullStack from "../../../assets/projects/full-stack.webp"

const projectsDetail = [
    {
        id: 1,
        image: portfolio,
        tag: { firstTag: "Personal Website", secTag: "React" },
        name: "Portfolio Website",
        desc: "My digital home on the internet. Designed and developed from scratch to showcase my work, projects, and journey as a developer.",
        link: "https://github.com/ayush-X-codes/portfolio",
    },
    {
        id: 2,
        image: localBusiness,
        tag: { firstTag: "Business Website", secTag: "Frontend" },
        name: "Local Business Website",
        desc: "A modern business website focused on building trust, improving online presence, and helping local businesses connect with customers.",
        link: "https://www.doonbakers.in/",
    },
    {
        id: 3,
        image: automation,
        tag: { firstTag: "Web Scraping", secTag: "Automation" },
        name: "Book Price Tracker",
        desc: "Tracks book prices from BooksToScrape.com, stores historical data, and alerts when prices decrease. Built to explore web scraping and automation workflows.",
        link: "https://github.com/ayush-X-codes/product-price-tracker",
    },
    {
        id: 4,
        image: fullStack,
        tag: { firstTag: "Full Stack", secTag: "Expense Tracker" },
        name: "Piggy Track",
        desc: "A full-stack expense tracking application with authentication, APIs, and database integration for managing personal finances.",
        link: "https://github.com/ayush-X-codes/piggytrack",
    },
];

const Featured = () => {
    return (
        <section className="featured-section" id="featured-section">
            <div className="wrapper-project">
                <div className="featured-header">
                    <div>
                        <span className="featured-label">Selected work</span>
                        <h2 className="project-heading">Featured projects</h2>
                    </div>
                    <Link to="/projects" className="btn btn_ghost">
                        See all projects
                        <FaArrowRight />
                    </Link>
                </div>

                <div className="projects-grid">
                    {projectsDetail.map((project) => (
                        <Link className="card project-card" key={project.id} to={project.link} target="_blank" rel="noopener noreferrer">
                            <div className="project-top">
                                <div className="project-top_inner"><img src={project.image} alt={project.name} loading="lazy"/></div>
                            </div>
                            <div className="project-bottom">
                                <div className="tag_project">
                                    <span className="tag_label">{project.tag.firstTag}</span>
                                    <span className="tag_label">{project.tag.secTag}</span>
                                </div>
                                <h3 className="card_project_name">{project.name}</h3>
                                <p className="card_para">{project.desc}</p>
                                <span className="project_link">
                                    View project
                                    <FaArrowRight />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;
