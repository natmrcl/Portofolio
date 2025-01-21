import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../animation/variants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="desktopMenu">
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuList">
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuList">
          Skills
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuList">
          Projects
        </Link>
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}>
        <FontAwesomeIcon icon={faBars} />
      </motion.div>
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}>
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem "
          onClick={() => setShowMenu(false)}>
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem "
          onClick={() => setShowMenu(false)}>
          Project
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
