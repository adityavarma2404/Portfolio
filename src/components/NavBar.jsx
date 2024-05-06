import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function NavBar({ scrollToSection }) {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  const btnRef = useRef();
  const navRef = useRef();
  const tranRef = useRef();

  const navVariant = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -30 },
  };

  const colorChange = useTransform(scrollY, (pos) => {
    if (pos > 5100) {
      return "white";
    } else if (pos > 2750) {
      return "#ff7c7c";
    } else if (pos > 1600) {
      return "#FFD67F";
    } else if (pos > 800) {
      return "#63A3D8";
    } else {
      return "#ffffff";
    }
  });

  const handleScroll = (name) => {
    setIsMounted(true);
    scrollToSection(name);
    btnRef.current.classList.remove("active");
    navRef.current.classList.remove("visible");
  };

  const handleBtnTap = () => {
    if (btnRef.current) {
      btnRef.current.classList.toggle("active");
      navRef.current.classList.toggle("visible");
    }
  };

  const tranVarients = {
    before:{
      width: "100%",
      height: "100%",
      opacity:0,
    },
    after:{
      opacity:1,
    }
  }

  const menus = () => {
    return (
      <>
        <motion.button
          variants={item}
          whileHover={{ scale: 1.1 }}
          whileTap={() => {
            handleScroll("aboutMe");
          }}
          className="navBar_btn"
          style={{ color: colorChange }}
        >
          <h1>About Me</h1>
        </motion.button>
        <motion.button
          variants={item}
          whileHover={{ scale: 1.1 }}
          whileTap={() => {
            handleScroll("education");
          }}
          className="navBar_btn"
          style={{ color: colorChange }}
        >
          <h1>Credentials</h1>
        </motion.button>
        <motion.button
          variants={item}
          whileHover={{ scale: 1.1 }}
          whileTap={() => {
            handleScroll("skills");
          }}
          className="navBar_btn"
          style={{ color: colorChange }}
        >
          <h1>Skills</h1>
        </motion.button>
        <motion.button
          variants={item}
          whileHover={{ scale: 1.1 }}
          whileTap={() => {
            handleScroll("projects");
          }}
          className="navBar_btn"
          style={{ color: colorChange }}
        >
          <h1>Projects</h1>
        </motion.button>
      </>
    );
  };

  useEffect(()=>{
    console.log("useeffect")
    const timeoutId = setTimeout(() => {
        setIsMounted(false)
    }, 1100);
    return () => clearTimeout(timeoutId);
  },[isMounted])

  return (
    <>
      <nav className="navBar_container">
        <motion.div drag={true} dragSnapToOrigin={true} dragElastic={0.2}>
          <h1>Aditya.dev</h1>
        </motion.div>
        <motion.div
          onClick={handleBtnTap}
          ref={btnRef}
          className="hamburger_container"
        ></motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={navVariant}
          className="navBar_content"
        >
          {menus()}
        </motion.div>
      </nav>
      <motion.div ref={navRef} className="hamburger_div">
        <motion.div
          // initial="hidden"
          // animate="visible"
          // variants={navVariant}
          className="navBar_sideMenu"
        >
          {menus()}
        </motion.div>
      </motion.div>
      <motion.div variants={tranVarients} initial="before" animate={isMounted ? "after": ""} ref={tranRef}   className="transition" >Hello</motion.div>
    </>
  );
}

export default NavBar;
