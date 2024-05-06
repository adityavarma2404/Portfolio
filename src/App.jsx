import "./App.css";
import "./queryFunc.css";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import PreLoader from "./components/PreLoader";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const [isLoader, setIsLoader] = useState(true);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoader(false);
    }, 4000);
  }, []);
  return (
    <>
      {isLoader ? (
        <PreLoader />
      ) : (
        <>
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="progressBar"
          />
          <NavBar scrollToSection={scrollToSection} />
          <Profile />
          <span id="aboutMe">
            <AboutMe />
          </span>
          <span id="education">
            <Education />
          </span>
          <span id="skills">
            <Skills />
          </span>
          <span id="projects">
            <Projects />
          </span>
        </>
      )}
    </>
  );
  // return (
  //   <>
  //     <motion.div style={{ scaleX: scrollYProgress }} className="progressBar" />
  //     <NavBar />
  //     <Profile />
  //     <AboutMe />
  //     <Education />
  //     <Skills />
  //     <Projects />
  //   </>
  // );
}

export default App;
