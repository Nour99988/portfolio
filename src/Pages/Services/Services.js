import React, { useState } from "react";
import { CodeSlash, Laptop, MegaphoneFill, PaletteFill, Phone, Search } from "react-bootstrap-icons";

import "./Services.css";
import Title from "../../Components/Title/Title";

import { useSelector } from "react-redux";
import useStyle from "../../Hooks/useStyle";
import { motion } from "framer-motion";

const Services = () => {
  const { color } = useSelector((state) => state);

  const { style, variantTransition } = useStyle();
  return (
    <motion.div
      variants={variantTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={style.styleMode}
      className="section-services"
    >
      <Title title="Services" />
      <div className="content-services">
        <div className="row">
          <Phone color={color} fontSize="50px" />
          <h2>HTML5</h2>
          <p>I khow all element and future</p>
        </div>
        <div className="row">
          <Laptop color={color} fontSize="50px" />
          <h2>CSS3</h2>
          <p>I khow all attrebute flex grid animation selector psoudo element and more</p>
        </div>
        <div className="row">
          <PaletteFill color={color} fontSize="50px" />
          <h2>javascript</h2>
          <p>Bom Dom ECMA 5 & 6 & 7 and I can handel any liberlis in javascript like i18n & canvas & jsPdf and more</p>
        </div>
        <div className="row">
          <CodeSlash color={color} fontSize="50px" />
          <h2>React</h2>
          <p>I have knowge about class Component and I khow all hooks and I can build custom hooks</p>
        </div>
        <div className="row">
          <Search color={color} fontSize="50px" />
          <h2>Redux</h2>
          <p>always I like build by Redux for exbend a project in the future</p>
        </div>
        <div className="row">
          <MegaphoneFill color={color} fontSize="50px" />
          <h2>react motion</h2>
          <p>portfolio builded by react motion</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
