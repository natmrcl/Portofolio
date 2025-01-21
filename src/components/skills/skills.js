import React, { useState } from "react";
import "./skills.css";
import software from "../../assets/react.png";
import ui from "../../assets/figma.png";
import game from "../../assets/unity.png";
import go from "../../assets/go.png";
import { motion } from "framer-motion";
import { fadeIn } from "../animation/variants";

const Skills = () => {
  const [current, setCurrent] = useState(0);

  const skills = [
    {
      title: "Frontend Development",
      description: "Developing using modern technologies.",
      image: software,
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and user-friendly designs.",
      image: ui,
    },
    {
      title: "Game Development",
      description: "Designing games with immersive experiences.",
      image: game,
    },
    {
      title: "Backend Development",
      description: "(Currently learning)",
      image: go,
    },
  ];

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % skills.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + skills.length) % skills.length);
  };

  return (
    <section id="skills" className="carousel">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="header">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
          These are the things I do, the lessons I've learned, and the new
          skills I'm eager to discover.{" "}
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="carousel-wrapper">
        {skills.map((skill, index) => {
          const isCenter = index === current;
          const isLeft =
            index === (current - 1 + skills.length) % skills.length;
          const isRight = index === (current + 1) % skills.length;

          let position = "hidden";
          let zIndex = 0;

          if (isCenter) {
            position = "center";
            zIndex = 3;
          } else if (isLeft) {
            position = "left";
            zIndex = 1;
          } else if (isRight) {
            position = "right";
            zIndex = 2;
          }

          return (
            <motion.div
              key={index}
              className={`carousel-card ${position}`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: position === "hidden" ? 0 : 1,
                x: position === "center" ? 0 : isLeft ? -300 : 300,
                scale: position === "center" ? 1 : 0.8,
                zIndex: zIndex,
              }}
              transition={{ duration: 0.6 }}>
              <img
                src={skill.image}
                alt={skill.title}
                className="carousel-img"
              />
              <div className="carousel-text">
                <h2>{skill.title}</h2>
                <p>{skill.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="carousel-buttons">
        <button onClick={handlePrev} className="carousel-btn">
          {"<"}
        </button>
        <button onClick={handleNext} className="carousel-btn">
          {">"}
        </button>
      </motion.div>
    </section>
  );
};

export default Skills;
