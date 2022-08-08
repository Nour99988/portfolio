import React, { useState } from "react";

import "./About.css";
import { CalendarCheckFill } from "react-bootstrap-icons";
import Title from "../../Components/Title/Title";
import { useSelector } from "react-redux";
import useStyle from "../../Hooks/useStyle";
import { motion } from "framer-motion";
const About = () => {
  const { style, variantTransition } = useStyle();
  const variantProgress = {
    hidden: {
      width: 0,
    },
    visible: (i) => ({
      width: i,
      backgroundColor: i >= "70%" ? "green" : "red",
      transition: { duration: 10, type: "spring", delay: 0.3 },
    }),
  };

  return (
    <motion.div
      variants={variantTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={style.styleMode}
      className="section-about style"
    >
      <div className="about-me">
        <Title title="About me" />
        <p className="style-under-title">
          I am Mohammed Khattab and I am front<span> end developer</span>
        </p>
        <p className="style-para ">
          I am a self-driven front-end developer and have been in the industry for more than 2 years. I have a keen eye
          for detail and most of my working life has been dedicated to creating stunning websites for clients. In
          addition, I have also received an some certificationfrom courserain 2019.
        </p>
      </div>

      <div className="skills-info">
        <div className="info">
          <div className="row">
            <p>
              <span className="bold">Birthday :</span>
              <span> 1 jan 1993</span>
            </p>
            <p>
              <span className="bold">Website :</span>
              <span> www.Nour.com</span>
            </p>
            <p>
              <span className="bold">Degree :</span>
              <span> Bachelor of Information Technology</span>
            </p>
            <p>
              <span className="bold">city :</span>
              <span> Damascus</span>
            </p>
          </div>
          <div className="row">
            <p>
              <span className="bold">Age :</span>
              <span> 28</span>
            </p>
            <p>
              <span className="bold">Email :</span>
              <span> m.nour.kh9346@gmail.com</span>
            </p>
            <p>
              <span className="bold">Phone :</span>
              <span> +963 936 825 713</span>
            </p>
            <p>
              <span className="bold">Freelance :</span>
              <span> Available</span>
            </p>
          </div>
          <div className="cv">
            <a style={style.backgroundColor} href="./Img/MohammedNour_khattab +CV .rtf.pdf" download>
              Download Cv
            </a>
            <a style={style.backgroundColor}>Hire me</a>
          </div>
        </div>
        <div className="skills">
          <div className="row-skills">
            <div className="type-degree">
              <span>Html/ Html5</span>
              <span>90%</span>
            </div>
            <div className="progress">
              <motion.span
                variants={variantProgress}
                initial="hidden"
                animate="visible"
                custom="90%"
                style={style.styleProgress}
              ></motion.span>
            </div>
          </div>
          <div className="row-skills">
            <div className="type-degree">
              <span>css / css3</span>
              <span>90%</span>
            </div>
            <div className="progress">
              <motion.span
                variants={variantProgress}
                initial="hidden"
                animate="visible"
                custom="90%"
                style={style.styleProgress}
              ></motion.span>
            </div>
          </div>
          <div className="row-skills">
            <div className="type-degree">
              <span>javascript </span>
              <span>70%</span>
            </div>
            <div className="progress">
              <motion.span
                variants={variantProgress}
                initial="hidden"
                animate="visible"
                custom="70%"
                style={style.styleProgress}
              ></motion.span>
            </div>
          </div>
          <div className="row-skills">
            <div className="type-degree">
              <span>React</span>
              <span>70%</span>
            </div>
            <div className="progress">
              <motion.span
                variants={variantProgress}
                initial="hidden"
                animate="visible"
                custom="70%"
                style={style.styleProgress}
              ></motion.span>
            </div>
          </div>
          {/* <div className="row-skills">
            <div className="type-degree">
              <span>Html</span>
              <span>20%</span>
            </div>
            <div className="progress">
              <motion.span
                variants={variantProgress}
                initial="hidden"
                animate="visible"
                custom="80%"
                style={style.styleProgress}
              ></motion.span>
            </div>
          </div> */}
          {/* <div className="row-skills">
            <div className="type-degree">
              <span>Html</span>
              <span>20%</span>
            </div>
            <div className="progress">
              <motion.span
                variants={variantProgress}
                initial="hidden"
                animate="visible"
                custom="99%"
                style={style.styleProgress}
              ></motion.span>
            </div>
          </div> */}
        </div>
      </div>
      <div className="educations-experiences">
        <div className="educations">
          <h2>education</h2>
          <div className="content-education">
            <span style={style.styleLine}></span>
            <div className="education">
              <p className="date">
                <span style={style.styleCircle}></span>
                <CalendarCheckFill />
                2020-currently
              </p>
              <h2 className="style-under-title">Bachelor's of Information Technology at syrian virtual university</h2>
              <p className="style-para opacity-8">I will graduate in six months</p>
            </div>
            <div className="education">
              <p className="date">
                <span style={style.styleCircle}></span>
                <CalendarCheckFill />
                2012-2014
              </p>
              <h2 className="style-under-title"> Intermediate Institute of Computer Technology</h2>
              <p className="style-para opacity-8"></p>
            </div>
          </div>
        </div>
        <div className="experiences">
          <h2>experience</h2>
          <div className="content-experience">
            <span style={style.styleLine}></span>
            <div className="experience">
              <p className="date">
                <span style={style.styleCircle}></span>
                <CalendarCheckFill />
                04.2022-currently
              </p>
              <h2 className="style-under-title">Frontend Developer at focal x agency</h2>
              <p className="style-para opacity-8">
                Working with a new scrum team on the main web site’s Focalx pure css and vanilla javascript and builded
                dashboard by React js and Redux to manage all employees and trainees <br />
                Developing completely isolated, reusable, unit tested and if neededvisually tested components.
                <br />
                Followed a framework scrum workflow: daily standups, weekly sprint review, sprint planning and sprint
                retrospective meetings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
