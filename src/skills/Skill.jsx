import React from "react";
import img from "../images/Group.png";
import "./Skills.css";
import { Bonus, Framworks, ListSkill } from "./ListSkill";
import { motion } from "framer-motion";
import { BiLogoJavascript } from "react-icons/bi";

const Skills = () => {
  return (
    <div className="skills " id="skills">
      <motion.div className="group-logo">
        <img src={img} alt="img" />
      </motion.div>
      <motion.div
        className="skills-descreption"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          height: "30%",
        }}
      >
        <motion.h1
          initial={{ x: "-50px", opacity: 0 }}
          whileInView={{ x: "0px", opacity: 1 }}
          transition={{ duration: 3, type: "spring", stiffness: 50 }}
          className="My-Skills"
        >
          My Skills
        </motion.h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "43px",
          }}
        >
          {ListSkill.map((skill, index) => {
            return (
              <div className="skills-details" key={index}>
                <motion.div
                  initial={{ x: "-50px", opacity: 0 }}
                  whileInView={{ x: "0px", opacity: 1 }}
                  transition={{ duration: 3, type: "spring", stiffness: 50 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    width: "100%",
                  }}
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    height={50}
                    width={50}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
