import { motion, useScroll, useTransform } from "framer-motion";
import man2 from "../assets/man2.png";
import { useRef, useEffect } from "react";

function AboutMe() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const aboutRef = useRef();
  let greeting;
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end end"],
  });
  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  const aboutMeCircleX = useTransform(scrollYProgress, [0.3, 0.8], [-700, 0]);
  const aboutMeCircleY = useTransform(scrollYProgress, [0.3, 0.8], [-800, 0]);
  const aboutMeScale = useTransform(scrollYProgress, [0.8, 0.9], [0.2, 1]);
  const aboutMeBRadius = useTransform(scrollYProgress, [0.88, 0.9], [400, 0]);
  const aboutMeTitle = useTransform(scrollYProgress, [0.4, 0.7], [500, 0]);
  const aboutMeDesc = useTransform(scrollYProgress, [0.885, 0.89], [0, 1]);
  const aboutMeMargin = useTransform(scrollYProgress, [0.67, 0.73], [10, 40]);
  const aboutMeImg = useTransform(scrollYProgress, [0.8, 0.95], [200, 0]);

  const aboutMeClip1Top = useTransform(
    scrollYProgress,
    [0.91, 0.95],
    ["-100px", "10px"]
  );
  const aboutMeClip1Left = useTransform(
    scrollYProgress,
    [0.91, 0.95],
    ["100px", "-15px"]
  );
  const aboutMeClip2Top = useTransform(
    scrollYProgress,
    [0.91, 0.95],
    ["100px", "4px"]
  );
  const aboutMeClip2Left = useTransform(
    scrollYProgress,
    [0.91, 0.95],
    ["-100px", "-20px"]
  );
  const aboutMeCllip1Vis = useTransform(scrollYProgress, [0.91, 0.915], [0, 1]);

  // useEffect(() => {
  //   scrollYProgress.on("change", () => {
  //     console.log("About me ->", scrollYProgress.get());
  //   });
  // }, [scrollYProgress]);

  return (
    <motion.div ref={aboutRef} className="container abountMe_container2">
      <div className="aboutMe_section section1">
        <motion.div
          initial={{
            scale: 0.2,
            borderRadius: 400,
            x: -700,
            y: -800,
          }}
          style={{
            x: aboutMeCircleX,
            y: aboutMeCircleY,
            scale: aboutMeScale,
            borderRadius: aboutMeBRadius,
          }}
          className="aboutMe_container"
        >
          <motion.div
            initial={{ top: "-100px", left: "100px", opacity: 0 }}
            style={{
              top: aboutMeClip1Top,
              left: aboutMeClip1Left,
              opacity: aboutMeCllip1Vis,
            }}
            className="clip1"
          />
          <motion.div
            initial={{ top: "100px", left: "-100px", opacity: 0 }}
            style={{
              top: aboutMeClip2Top,
              left: aboutMeClip2Left,
              opacity: aboutMeCllip1Vis,
            }}
            className="clip2"
          />
          <motion.h1
            initial={{ opacity: 0, marginBottom: 10 }}
            style={{ opacity: aboutMeDesc, marginBottom: aboutMeMargin }}
          >
            {greeting}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            style={{ opacity: aboutMeDesc }}
            className="description"
            
          >
            Hello there, I'm Aditya. I discovered my interest in creating
            interactive websites in 2020, and that's how my journey began.{" "}
            <br />
            <br /> I started learning React.js and worked on several projects to
            enhance my proficiency. Later, I delved into the React ecosystem,
            exploring various tools for state management, navigation, forms,
            animations, styling, etc., which streamline development processes,
            optimize performance, ensure responsiveness, and much more. <br />
            <br /> I thrive in challenging environments and enjoy collaborating
            with interactive teams to further my career with the latest
            technologies. I am eager to contribute my experience and skills to
            the development of organizations.
          </motion.p>
        </motion.div>
      </div>
      <div className="aboutMe_section section2">
        <motion.div
          initial={{ y: 500 }}
          style={{ y: aboutMeTitle }}
          className="aboutMe_container container2"
        >
          <motion.h1 initial={{ opacity: 0 }} style={{ opacity: aboutMeDesc }}>
            About Me
          </motion.h1>
          <motion.img
            src={man2}
            initial={{ y: 200 }}
            className="aboutMe_img"
            style={{ y: aboutMeImg }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutMe;

// const { scrollY } = useScroll();
// const aboutMeCircleX = useTransform(scrollY, [270, 600], [-620, 0]);
// const aboutMeCircleY = useTransform(scrollY, [270, 600], [-450, 0]);
// const aboutMeScale = useTransform(scrollY, [600, 700], [0.2, 1]);
// const aboutMeBRadius = useTransform(scrollY, [650, 800], [400, 0]);
// const aboutMeDesc = useTransform(scrollY, [800, 850], [0, 1]);
// const aboutMeMargin = useTransform(scrollY, [800, 820], [10, 40]);
// const aboutMeTitle = useTransform(scrollY, [550, 700], [500, 0]);
// const aboutMeClip1Top = useTransform(scrollY,[820, 850], ["-100px", "10px"]);
// const aboutMeClip1Left = useTransform(scrollY,[820, 850], ["100px", "-15px"]);
// const aboutMeClip2Top = useTransform(scrollY,[820, 850], ["100px", "4px"]);
// const aboutMeClip2Left = useTransform(scrollY,[820, 850], ["-100px", "-20px"]);
// const aboutMeCllip1Vis = useTransform(scrollY,[820, 825], [0, 1]);
