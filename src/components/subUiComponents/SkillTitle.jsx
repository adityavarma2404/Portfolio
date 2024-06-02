import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bootstrap from "../../assets/bootstrap.png";
import css from "../../assets/css.png";
import fmotion from "../../assets/framerMotion.png";
import git from "../../assets/GitHub.png";
import RTL from "../../assets/RTL_.png";
import jest from "../../assets/jest.png";
import js from "../../assets/js.png";
import reactJs from "../../assets/ReactJs.png";
import router from "../../assets/react-router-.png";
import redux from "../../assets/redux.png";
import typescript from "../../assets/Typescript.png";
import html from "../../assets/html.png";

function SkillTitle() {
  const sectionOneRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionOneRef,
    offset: ["start end", "end end"],
  });

  const titleScale = useTransform(scrollYProgress, [0.34, 0.7], [1, 5]);

  const titleTop = useTransform(scrollYProgress, [0.34, 0.7], ["10%", "40%"]);
  const titleHide = useTransform(scrollYProgress, [0.675, 0.7], [1, 0]);
  const titleRadius = useTransform(scrollYProgress, [0.5, 0.7], ["50%", "0%"]);
  const skillsVisible = useTransform(scrollYProgress, [0.7, 0.75], [0, 1]);
  const skillsRotateNeg = useTransform(scrollYProgress, [0.75, 0.9], [-40, 0]);
  const skillsRotatePos = useTransform(scrollYProgress, [0.75, 0.9], [60, 0]);

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
            <motion.img src={fmotion} className="skills_img fmImg" />
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
            <h1>State Management</h1>
            <motion.img src={redux} className="skills_img reduxImg" />
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
