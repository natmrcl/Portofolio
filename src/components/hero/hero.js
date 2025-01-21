import React from "react";
import "./hero.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animation/variants";
import logo from "../../assets/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section id="hero">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="introContent">
        <motion.span variants={fadeIn("right", 0)} className="hello">
          Hello,
        </motion.span>
        <motion.span variants={fadeIn("right", 0.5)} className="introText">
          I'm <span className="introName">Natya</span> <br />
        </motion.span>
        <motion.p variants={fadeIn("right", 0.5)} className="introPara">
          Enthusiastic about exploring{" "}
          <span className="highlight">Software Development</span> and{" "}
          <span className="highlight">UI/UX</span>.
          <br />
          When I'm not coding, you'll find me reading or having a quiet picnic.
        </motion.p>
        <motion.div variants={fadeIn("right", 0.5)} className="social-media">
          <a
            href="https://www.linkedin.com/in/natya-madya-marciola-bb82b5158/"
            target="_blank"
            rel="noreferrer"
            className="icon-container">
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="tooltip">LinkedIn</span>
          </a>
          <a
            href="https://github.com/natmrcl"
            target="_blank"
            rel="noreferrer"
            className="icon-container">
            <FontAwesomeIcon icon={faSquareGithub} />
            <span className="tooltip">Github</span>
          </a>
        </motion.div>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="logo">
          <motion.img
            variants={fadeIn("right", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            src={logo}
            width="300px"
            alt="logo"
          />
        </Link>
      </motion.div>
      {/* <img src={profile} alt="profile" className="profile" /> */}
    </section>
  );
};

export default Hero;
