import React from "react";
import { motion } from "framer-motion";
import foodApp from "../../assets/foodApp.png";
import lookIn from '../../assets/LookIn_desktop.png'

function ProjectWindow({ windowOpacity, screenName, handleCloseBtn }) {
  const handleBtn = () => {
    handleCloseBtn();
  };
  return (
    <motion.div
      initial={{
        // width: "10px",
        width: "10%",
        height: "10px",
        opacity: 0,
      }}
      exit={{
        // width: "100px",
        width: "10%",
        height: "10px",
        overflow: "hidden",
        opacity: 0,
      }}
      animate={{
        // width: "570px",
        minWidth: "280px",
        width: "30%",
        height: "fit-content",
        maxHeight: "380px",
        opacity: 1,
      }}
      style={{ opacity: windowOpacity }}
      className="project_window"
    >
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
        className="project_window_img"
      >
        <motion.img width="60%" src={screenName === "foodApp" ? foodApp: lookIn} />
        {screenName === "foodApp" ? (
          <motion.p>
            Developed a browser-based food delivery application utilizing React
            JS + TypeScript <br />
            <b>Tools: </b>Redux Toolkit, redux-persist, React Router, Formik and
            Yup. <br />
            Designed for optimal browser experience, redirecting mobile users to
            the mobile app for enhanced functionality.
          </motion.p>
        ) : (
          <motion.p>
            Developed a OTT application utilizing React
            JS<br />
            <b>Tools: </b> React Router, Axios, Embla Carousel, driver.js<br />
            Authentication has been implemented using Firebase.
          </motion.p>
        )}
        <motion.a
          href={screenName === "foodApp" ?"https://food-app-7596d.web.app/": "https://looki-n.web.app/"}
          target="_blank"
          className="redirection_btn"
          whileHover={{
            backgroundColor: "white",
            border: "1px solid black",
            color: "black",
            scale: 1.1,
          }}
        >
          Live demo{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-box-arrow-up-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
            />
            <path
              fillRule="evenodd"
              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
            />
          </svg>
        </motion.a>
      </motion.div>
      <motion.svg
        cursor="pointer"
        onClick={handleBtn}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.5}}
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="currentColor"
        className="bi bi-x"
        viewBox="0 0 16 16"
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
      </motion.svg>
    </motion.div>
  );
}

export default ProjectWindow;
