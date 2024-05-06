import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
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
  // const titleTop = useTransform(
  //   scrollYProgress,
  //   [0.34, 0.7],
  //   [125, 1000]
  // );
  const titleTop = useTransform(
    scrollYProgress,
    [0.34, 0.7],
    ["10%", "40%"]
  );
  const titleHide = useTransform(scrollYProgress, [0.675,0.7], [1, 0]);
  const titleRadius = useTransform(scrollYProgress, [0.5, 0.7], ["50%","0%"]);
  const skillsVisible = useTransform(scrollYProgress, [0.7, 0.75], [0, 1]);
  const skillsRotateNeg = useTransform(scrollYProgress, [0.75, 0.9], [-40, 0]);
  const skillsRotatePos = useTransform(scrollYProgress, [0.75, 0.9], [60, 0]);
  // const titleScale = useTransform(scrollYProgress, [0.4, 0.8, 0.81], [1, 5, 1]);
  // const titleTop = useTransform(
  //   scrollYProgress,
  //   [0.4, 0.8, 0.81],
  //   [125, 1000, 250]
  // );
  // const titleHide = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);
  // const titleRadius = useTransform(scrollYProgress, [0.5, 0.8], ["50%","0%"]);
  // const skillsVisible = useTransform(scrollYProgress, [0.82, 0.84], [0, 1]);
  // const skillsRotateNeg = useTransform(scrollYProgress, [0.82, 1, 1.5], [-40, 0, 40]);
  // const skillsRotatePos = useTransform(scrollYProgress, [0.82, 1, 1.5], [60, 0, -60]);

  // useEffect(() => {
  //   scrollYProgress.on("change", () => {
  //     console.log("Skills ->",scrollYProgress.get());
  //   });
  // }, [scrollYProgress]);
  return (
    <motion.div ref={sectionOneRef} className="skills_container">
      {/* <motion.h1
        className="skillsTitle"
        // initial={{ marginTop: "10%", borderRadius: "50%" }}
        initial={{y: 125, borderRadius: "50%" }}
        style={{
          scale: titleScale,
          marginTop: titleTop,
          opacity: titleHide,
          borderRadius: titleRadius
        }}
      >
        Skills
      </motion.h1> */}
      <motion.h1
        className="skillsTitle"
        initial={{ borderRadius: "50%" }}
        style={{
          scale: titleScale,
          top: titleTop,
          opacity: titleHide,
          borderRadius: titleRadius
        }}
      >
        Skills
      </motion.h1>
      <motion.div style={{ opacity: skillsVisible }} className="skillsDesc">
        <motion.div
          initial={{ rotate: -40 }}
          style={{ rotate: skillsRotateNeg }}
          whileHover={{ scale: 1.05 }}
          className="skills_ frontEnd"
        >
          <motion.div className="skills_outline">
            <h1 id="frontEndTitle">Front End</h1>
            <motion.img
              src={html}
              className="skills_img htmlImg"
              // initial={{ width: 60 }}
            />
            <motion.img
              src={css}
              className="skills_img cssImg"
              // initial={{ width: 60 }}
            />
            <motion.img
              src={js}
              className="skills_img jsImg"
              // initial={{ width: 60 }}
            />
            <motion.img
              src={reactJs}
              className="skills_img reactImg"
              // initial={{ width: 60 }}
            />
            <motion.img
              src={typescript}
              className="skills_img tsImg"
              // initial={{ width: 60 }}
            />
            <motion.img
              src={bootstrap}
              className="skills_img bootImg"
              // initial={{ width: 60 }}
            />
            <motion.img
              src={fmotion}
              className="skills_img fmImg"
              // initial={{ width: 130 }}
            />
            <motion.img
              src={router}
              className="skills_img routImg"
              // initial={{ width: 100 }}
            />
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
            <motion.img
              src={redux}
              className="skills_img reduxImg"
              // initial={{ width: 60 }}
            />
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
            <motion.img
              src={jest}
              className="skills_img jestImg"
              // initial={{ width: 60 }}
            />
            <motion.img
              src={RTL}
              className="skills_img RTLImg"
              // initial={{ width: 80 }}
            />
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
            <motion.img
              src={git}
              className="skills_img gitImg"
              // initial={{ width: 70 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SkillTitle;
