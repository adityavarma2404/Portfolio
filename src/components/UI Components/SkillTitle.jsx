import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import bootstrap from "../../assets/images/bootstrap.png";
import css from "../../assets/images/css.png";
import git from "../../assets/images/GitHub.png";
import RTL from "../../assets/images/RTL_.png";
import jest from "../../assets/images/jest.png";
import js from "../../assets/images/js.png";
import reactJs from "../../assets/images/ReactJs.png";
import router from "../../assets/images/react-router-.png";
import redux from "../../assets/images/redux.png";
import typescript from "../../assets/images/Typescript.png";
import html from "../../assets/images/html.png";
import node from "../../assets/images/nodejs.webp";
import express from "../../assets/images/express_logo.webp";
import mongo from "../../assets/images/mongo.webp";

function SkillTitle() {
  const sectionOneRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionOneRef,
    offset: ["start end", "end end"],
  });

  const titleScale = useTransform(scrollYProgress, [0.233, 0.53], [1, 5]);
  const titleTop = useTransform(scrollYProgress, [0.3, 0.53], ["10%", "30%"]);
  const titleHide = useTransform(scrollYProgress, [0.5, 0.53], [1, 0]);
  const titleRadius = useTransform(scrollYProgress, [0.5, 0.53], ["50%", "0%"]);
  const skillsVisible = useTransform(scrollYProgress, [0.533, 0.55], [0, 1]);
  const skillsRotateNeg = useTransform(scrollYProgress, [0.533, 0.7], [-40, 0]);
  const skillsRotatePos = useTransform(scrollYProgress, [0.533, 0.7], [60, 0]);

  return (
    <motion.div ref={sectionOneRef} className="skills_container">
      <motion.div
        className="skillsTitle"
        initial={{ borderRadius: "50%" }}
        style={{
          scale: titleScale,
          top: titleTop,
          opacity: titleHide,
          borderRadius: titleRadius,
        }}
      >
        <h1>Skills</h1>
      </motion.div>
      <motion.div style={{ opacity: skillsVisible }} className="skillsDesc">
        <motion.div
          initial={{ rotate: -40 }}
          style={{ rotate: skillsRotateNeg }}
          whileHover={{ scale: 1.05 }}
          className="skills_ frontEnd"
        >
          <motion.div className="skills_outline">
            <h1 id="frontEndTitle">Front End</h1>
            <motion.img src={html} className="skills_img htmlImg" />
            <motion.img src={css} className="skills_img cssImg" />
            <motion.img src={js} className="skills_img jsImg" />
            <motion.img src={reactJs} className="skills_img reactImg" />
            <motion.img src={typescript} className="skills_img tsImg" />
            <motion.img src={bootstrap} className="skills_img bootImg" />
            <motion.img src={redux} className="skills_img fmImg" />
            <motion.img src={router} className="skills_img routImg" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ rotate: 60 }}
          style={{ rotate: skillsRotatePos }}
          whileHover={{ scale: 1.1 }}
          className="skills_ stateMan"
        >
          <motion.div className="skills_outline">
            <h1>Back End</h1>
            <motion.img src={node} className="skills_img nodeImg" />
            <motion.img src={express} className="skills_img expressImg" />
            <motion.img src={mongo} className="skills_img mongoImg" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ rotate: -40 }}
          style={{ rotate: skillsRotateNeg }}
          whileHover={{ scale: 1.1 }}
          className="skills_ testing"
        >
          <motion.div className="skills_outline">
            <h1>Testing</h1>
            <motion.img src={jest} className="skills_img jestImg" />
            <motion.img src={RTL} className="skills_img RTLImg" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ rotate: 60 }}
          style={{ rotate: skillsRotatePos }}
          whileHover={{ scale: 1.1 }}
          className="skills_ versionCon"
        >
          <motion.div className="skills_outline">
            <h1>Version Control</h1>
            <motion.img src={git} className="skills_img gitImg" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SkillTitle;
