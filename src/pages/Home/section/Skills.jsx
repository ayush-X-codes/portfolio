import React from "react";
import "./Skills.css";

const skills = [
  // set: 1
  { name: "HTML", id: "1" },
  { name: "CSS", id: "2" },
  { name: "JavaScript", id: "3" },
  { name: "React", id: "4" },
  { name: "Node.js", id: "5" },
  { name: "Express.js", id: "6" },
  { name: "PostgreSQL", id: "7" },
  // set: 2
  { name: "HTML", id: "8" },
  { name: "CSS", id: "9" },
  { name: "JavaScript", id: "10" },
  { name: "React", id: "11" },
  { name: "Node.js", id: "12" },
  { name: "Express.js", id: "13" },
  { name: "PostgreSQL", id: "14" },
  // set: 3
  //  { name: "HTML", id: "15" },
  // { name: "CSS", id: "16" },
  // { name: "JavaScript", id: "17" },
  // { name: "React", id: "18" },
  // { name: "Node.js", id: "19" },
  // { name: "Express.js", id: "20" },
  // { name: "PostgreSQL", id: "21" },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skill_card">
        <div className="skill_track">
          {skills.map((skill) => (
            <div className="skill_pill" key={skill.id}>
              <span className="skill-pill_dot"></span>
              <span className="skill-pill_name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
