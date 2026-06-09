import "./Project.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import portfolio from "../../assets/projects/portfolio.webp";
import localBusiness from "../../assets/projects/local-business.webp";
import automation from "../../assets/projects/automation.webp";
import fullStack from "../../assets/projects/full-stack.webp";
import reviewScraper from "../../assets/projects/review-scraper.webp";
import tinyServer from "../../assets/projects/tiny-server.webp";
import miniExpress from "../../assets/projects/mini-express.webp";
import simpleDB from "../../assets/projects/simple-db.webp";
import eventFlow from "../../assets/projects/event-flow.webp";
import { supabase } from "../../lib/supabase";


const ProjectCategory = [
  { id: 1, categroy: "All" },
  { id: 2, categroy: "Websites" },
  { id: 3, categroy: "Applications" },
  { id: 4, categroy: "Automation" },
  { id: 5, categroy: "Systems Programming" },
];

const allProjects = [
  {
    id: 1,
    image: portfolio,
    tag: { firstTag: "Personal", secTag: "React" },
    name: "Portfolio Website",
    desc: "My digital home on the internet, built to showcase projects, share my journey, and document what I'm learning as a developer.",
    link: "https://ayush-gray.vercel.app/",
  },

  {
    id: 2,
    image: localBusiness,
    tag: { firstTag: "Client Work", secTag: "Website" },
    name: "Doon Bakers",
    desc: "A modern business website designed to strengthen online presence and help customers discover services more easily.",
    link: "https://www.doonbakers.in/",
  },
  {
    id: 3,
    image: fullStack,
    tag: { firstTag: "Full Stack", secTag: "API" },
    name: "Piggy Track",
    desc: "An expense tracking application with authentication, APIs, and database integration for managing personal finances.",
    link: "https://github.com/ayush-X-codes/piggytrack",
  },
  {
    id: 4,
    image: automation,
    tag: { firstTag: "Automation", secTag: "Scraping" },
    name: "Book Price Tracker",
    desc: "Tracks book prices automatically, stores historical data, and detects price drops through a custom scraping workflow.",
    link: "https://github.com/ayush-X-codes/product-price-tracker",
  },
  {
    id: 5,
    image: reviewScraper,
    tag: { firstTag: "Scraping", secTag: "CSV" },
    name: "Review Scraper",
    desc: "Scrapes product data across multiple pages, extracts detailed information, and exports structured results to CSV files.",
    link: "https://github.com/ayush-X-codes/review-scraper",
  },
  {
    id: 6,
    image: tinyServer,
    tag: { firstTag: "Node.js", secTag: "TCP" },
    name: "TinyServer",
    desc: "Built a custom HTTP server using TCP sockets with routing, request parsing, response handling, and HTML file serving.",
    link: "https://github.com/ayush-X-codes/HTTP-Server",
  },
  {
    id: 7,
    image: miniExpress,
    tag: { firstTag: "Framework", secTag: "Node.js" },
    name: "MiniExpress",
    desc: "A lightweight Express-inspired framework featuring routing, middleware support, and helper methods for handling requests and responses.",
    link: "https://github.com/ayush-X-codes/Mini-version-of-tools",
  },
  {
    id: 8,
    image: simpleDB,
    tag: { firstTag: "Database", secTag: "Systems" },
    name: "SimpleDB",
    desc: "A lightweight database engine supporting get, set, delete operations, indexing, and basic query execution.",
    link: "https://github.com/ayush-X-codes/database",
  },
  {
    id: 9,
    image: eventFlow,
    tag: { firstTag: "Node.js Internals", secTag: "Events" },
    name: "EventFlow",
    desc: "A custom implementation of Node.js EventEmitter with support for event registration, emission, and listener removal.",
    link: "https://github.com/ayush-X-codes/Promise-EventEmitter",
  },
];

const Project = () => {

  console.log(supabase);
  return (
    <main className="projects" id="projects">
      <div className="wrapper-projects">
        <div className="project-header">
          <div className="project-header-content">
            <div>
              <span className="project_tag">PROJECTS</span>
              <h1 className="project_h1">
                Every project taught
                <br /> me something.
              </h1>
            </div>
            <p className="project_para">
              A collection of websites, applications, automations, and
              experiments I've built while exploring new ideas, solving
              problems, and improving my craft.
            </p>
          </div>

          <div className="filter-row">
            {ProjectCategory.map((project) => (
              <button key={project.id} className="filter-btn">
                {project.categroy}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid">
          <div className="project-grid--full">
            {allProjects.map((project) => (
              <Link
                key={project.id}
                className="card-project card"
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card-header">
                  <div className="card-header-inner">
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-tags">
                    <span className="card-tag">{project.tag.firstTag}</span>
                    <span className="card-tag">{project.tag.secTag}</span>
                  </div>
                  <h3 className="card-title">{project.name}</h3>
                  <p className="card-desc">{project.desc}</p>
                  <span className="card-link">
                    View project
                    <FaArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
