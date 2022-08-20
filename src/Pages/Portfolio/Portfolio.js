import React from "react";
import Title from "../../Components/Title/Title";
import "./Portfolio.css";
import { Github, Globe } from "react-bootstrap-icons";
import useStyle from "../../Hooks/useStyle";
import { motion } from "framer-motion";

const Portfolio = () => {
  const { style, variantTransition } = useStyle();
  return (
    <motion.div
      variants={variantTransition}
      initial="hidden"
      animate="visible"
      exit={ x: "100vw", transition: { duration: 0.2, when: "afterChildren" } }
      style={style.styleMode}
      className="section-portfolio"
    >
      <Title title="Portfolio" />
      <div className="content-portfolio">
        <div className="row">
          <img src="./img/project-1.png" />
          <div className="icons">
            <a href="https://github.com/nour99988/ecomm2" target="__blank">
              <Github fontSize="50px" color="black" />
            </a>
            <a href="https://nour99988.github.io/ecomm2/" target="__blank">
              <Globe fontSize="50px" color="black" />
            </a>
          </div>
        </div>
        
      </div>
    </motion.div>
  );
};

export default Portfolio;
