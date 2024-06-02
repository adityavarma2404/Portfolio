import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import laptop from "../../assets/laptop4-.png";
import { useRef, useState } from "react";
import folder from "../../assets/folder.png";
import tablet from "../../assets/tablet.png";
import ProjectWindow from "./ProjectWindow";

function ProjectTitls() {
  const laptopRef = useRef();
  const titleRef = useRef();
  const folderRef = useRef();
  const [screenName, setScreenName] = useState("folder");
  const { scrollYProgress } = useScroll({
    target: laptopRef,
    offset: ["start end", "end end"],
  });
  const titleScroll = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });
  const folderScroll = useScroll({
    target: folderRef,
    offset: ["start end", "end end"],
  });

  const laptopScale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.84, 0.9],
    [1, 2, 2, 2.3]
  );
  const laptopTop = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.84, 0.9],
    ["100px", "250px", "250px", "300px"]
  );
  const tabletScale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.84, 0.9],
    [1, 1.3, 1.3, 1.7]
  );
  const tabletRotate = useTransform(scrollYProgress, [0.84, 0.9], [0, 90]);
  const tabletTop = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.84, 0.9],
    ["100px", "200px", "200px", "150px"]
  );

  const titleScale = useTransform(
    titleScroll.scrollYProgress,
    [0.43, 0.94, 0.95],
    [1, 9, 1]
  );
  const titleTop = useTransform(
    titleScroll.scrollYProgress,
    [0.43, 0.99],
    ["100px", "1200px"]
  );
  const titleOpacity = useTransform(
    titleScroll.scrollYProgress,
    [0.42, 0.43, 0.91, 0.94],
    [0, 1, 1, 0]
  );
  const folderOpacity = useTransform(
    folderScroll.scrollYProgress,
    [0, 0.99, 1],
    [0, 0, 1]
  );
  const windowOpacity = useTransform(
    folderScroll.scrollYProgress,
    [0.99, 1],
    [0, 1]
  );

  const handleCloseBtn = () => setScreenName("folder");
  const handleOTTBtn = () => setScreenName("OTT");
  const handleFoodBtn = () => setScreenName("foodApp");

  // useEffect(() => {
  //   // scrollYProgress.on("change", () => {
  //   //   console.log("Project ->", scrollYProgress.get());
  //   // });
  // }, [scrollYProgress]);
  return (
    <motion.div ref={laptopRef} className="laptop_container">
      <motion.img
        src={laptop}
        initial={{ scale: 1, top: "100px", position: "sticky" }}
        style={{ scale: laptopScale, top: laptopTop }}
        className="laptopImage"
      />
      <motion.img
        src={tablet}
        initial={{ scale: 1, top: "100px" }}
        style={{ scale: tabletScale, top: tabletTop, rotate: tabletRotate }}
        className="tabletImage"
      />

      <motion.div
        ref={titleRef}
        initial={{ height: "100vh", width: "100%" }}
        className="projectBox1"
      >
        <motion.p
          initial={{ top: "100px", scale: 1, opacity: 0 }}
          style={{ scale: titleScale, top: titleTop, opacity: titleOpacity }}
          className="project_title"
        >
          PROJECTS
        </motion.p>
      </motion.div>
      <motion.div
        ref={folderRef}
        initial={{ height: "100vh", width: "100%" }}
        className=" folderBox"
      >
        {screenName === "folder" && (
          <motion.div
            initial={{ opacity: 1 }}
            style={{ opacity: folderOpacity }}
            className="project_folder"
          >
            <motion.div onClick={handleOTTBtn}>
              <motion.img src={folder} className="project_folderImg" />
              <motion.p>OTT App</motion.p>
            </motion.div>
            <motion.div onClick={handleFoodBtn}>
              <motion.img src={folder} className="project_folderImg" />
              <motion.p>Food App</motion.p>
            </motion.div>
          </motion.div>
        )}
        <AnimatePresence>
          {(screenName === "OTT" || screenName === "foodApp") && (
            <ProjectWindow
              windowOpacity={windowOpacity}
              screenName={screenName}
              handleCloseBtn={handleCloseBtn}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default ProjectTitls;
