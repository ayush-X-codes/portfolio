import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const ProjectCategory = [
  { id: 1, categroy: "All" },
  { id: 2, categroy: "Design" },
  { id: 3, categroy: "Frontend" },
  { id: 4, categroy: "Branding" },
  { id: 5, categroy: "Product" },
];

const allProjects = [
  {
    id: 1,
    image: "Æ",
    tag: { firstTag: "UI/UX", secTag: "Branding" },
    name: "Aether Design System",
    desc: " A comprehensive design system built for scale - tokens, components, and documentation for a 40 - person product team",
    link: "#",
  },

  {
    id: 2,
    image: "Vd",
    tag: { firstTag: "Web design", secTag: "Frontend" },
    name: "Verde Studio Website",
    desc: "Editorial-inspired website for a sustainabale architecture firm. Heavy typography, minimal chrome bold imagery",
    link: "#",
  },
  {
    id: 3,
    image: "Fn",
    tag: { firstTag: "Product", secTag: "Motion" },
    name: "Fondo Finance App",
    desc: "Mobile-First personal finance app. Designed onboarding, core flows, and the full component liberary in Figma",
    link: "#",
  },
  {
    id: 4,
    image: "Lm",
    tag: { firstTag: "Branding", secTag: "Art Direction" },
    name: "Luminae Brand Identity",
    desc: "Complete visual identity for a luxury candle brand. Logo, color system, packaging, and brand guidlines",
    link: "#",
  },
];

const Project = () => {
  return (
    <main className="projects" id="projects">
      <div className="wrapper-projects">
        <div className="project-header">
          <div className="project-header-content">
            <div>
              <span className="project_tag">My work</span>
              <h1 className="project_h1">
                Every project, <br /> a new story.
              </h1>
            </div>
            <p className="project_para">
              A curated selection of design and development projects - from
              product UI to full identites.
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
              <Link key={project.id} className="card-project card">
                <div className="card-header">
                  <div>{project.image}</div>
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
