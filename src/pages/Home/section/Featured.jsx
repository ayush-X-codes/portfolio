import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./Featured.css";

const projectsDetail = [
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

const Featured = () => {
    return (
        <section className="featured-section" id="featured-section">
            <div className="wrapper-project">
                <div className="featured-header">
                    <div>
                        <span className="featured-label">Selected work</span>
                        <h2 className="project-heading">Featured projects</h2>
                    </div>
                    <a href="#" className="btn btn_ghost">
                        See all projects
                        <FaArrowRight />
                    </a>
                </div>

                <div className="projects-grid">
                    {projectsDetail.map((project) => (
                        <a className="card project-card" key={project.id}>
                            <div className="project-top">
                                <div className="project-top_inner">{project.image}</div>
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
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;
