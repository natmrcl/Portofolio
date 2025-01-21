import React, { useState } from "react";
import Card from "./card";
import "./works.css";
import { motion } from "framer-motion";
import { fadeIn } from "../animation/variants";
import projects from "./projectData";

const Works = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const currentProjects = projects.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <section id="works">
      <div className="works-wrapper">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="works-header">
          <span>My Work</span>
          <h2 className="worksTitle">Projects.</h2>
          <p className="worksDesc">
            A collection of projects I've worked on, showcasing my skills and
            creativity in development and design.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="works-cards">
          {currentProjects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              tools={project.tools}
              projectLink={project.projectLink}
              liveSiteLink={project.liveSiteLink}
              image={project.images}
            />
          ))}
        </motion.div>
        <div className="pagination-buttons">
          <button onClick={handlePrev} disabled={currentPage === 0}>
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Works;
