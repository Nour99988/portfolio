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
      exit="exit"
      style={style.styleMode}
      className="section-portfolio"
    >
      <Title title="Portfolio" />
      {/*<p>My last project</p>*/}
      <div className="content-portfolio">
        <div className="row">
          <img src="./img/project-1.png" />
          <div className="icons">
            <a href="https://github.com/nour99988/ecomm2">
              <Github fontSize="50px" color="black" />
            </a>
            <a href="https://nour99988.github.io/ecomm2/">
              <Globe fontSize="50px" color="black" />
            </a>
          </div>
        </div>
        <div className="row">
          <img src="./img/project-2.png" />
          <div className="icons">
            {/* <a  href='https://github.com/owies-hassan/owies-newsletter'>  <Github fontSize='50px' color='white'/></a> */}
            <a href="https://www.focal-x.com/">
              <Globe fontSize="50px" color="black" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
