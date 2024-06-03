import { motion, useScroll, useTransform } from "framer-motion";
import grad from "../assets/images/grad.png";
import expe from "../assets/images/experience.png";
import achi from "../assets/images/achieve.png";
import { useRef } from "react";

function Education() {
  const eduRef = useRef();
  const { scrollYProgress } = useScroll({
    target: eduRef,
    offset: ["start end", "end end"],
  });

  const title1Y = useTransform(scrollYProgress, [0.1, 0.8], [-100, 0]);
  const title2Y = useTransform(scrollYProgress, [0.1, 0.8], [100, 0]);
  const title2Scale = useTransform(scrollYProgress, [0.3, 0.7], [1, 1.2]);
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  const layoutNegX = useTransform(scrollYProgress, [0.3, 0.95], [-350, 150]);
  const layoutPosX = useTransform(scrollYProgress, [0.3, 0.95], [350, -150]);

  return (
    <motion.div ref={eduRef} className="container container3">
      <motion.div
        style={{ scale: title2Scale }}
        className="credentials_title_container"
      >
        <motion.h1
          initial={{ fontSize: 40, y: -200, opacity: 0 }}
          style={{ y: title1Y, opacity: titleOpacity }}
        >
          Crede
        </motion.h1>
        <motion.h1
          initial={{ fontSize: 40, y: 150, opacity: 0 }}
          style={{ y: title2Y, opacity: titleOpacity }}
        >
          ntials
        </motion.h1>
      </motion.div>
      <motion.div className="credentials_container">
        <motion.div className="credentials_layout">
          <motion.div
            initial={{ x: -350 }}
            style={{ x: layoutNegX }}
            className="credentials_layout_div"
          >
            <motion.img src={grad} />
            <motion.p className="skills_summery">
              I am a Bachelor degree holder in Computer Science and Engineering
              with 7.12 CGPA at Mahatma Gandhi Institute of Technology,
              Hyderabad
              <motion.span className="summery_box box1">
                During my academics, I did a certification course in Python from
                NPTEL and my Mini project was Hashtag analysis using Python and
                my Major project was on Video steganography using Python.
              </motion.span>
              <motion.span
                whileHover={{ zIndex: 3 }}
                className="summery_box box2"
              >
                Apart from my academics, I was an active member of the Dance
                club of MGIT. Organised some of the events in college during the
                cultural fest and participated in dance competitions in other
                colleges as well.
              </motion.span>
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div className="credentials_layout">
          <motion.div
            initial={{ x: 350 }}
            style={{ x: layoutPosX }}
            className="credentials_layout_div middleDiv"
          >
            <motion.p className="skills_summery">
              I have a 3 years of working experience as a Front End developer in
              TCS.
              <motion.span className="summery_box box3">
                I started my career in TCS as a front-end developer in the
                retail sector from March 2021 to March 2023. During this period,
                I developed the React application using TypeScript, prioritizing
                client requirements and ensuring customer satisfaction. I gained
                skills in communication, interaction, and collaboration with
                multiple teams.
              </motion.span>
              <motion.span
                whileHover={{ zIndex: 3 }}
                className="summery_box box4"
              >
                Later, I started working in the banking sector from March 2023
                to April 2024. During the development, we were limited to using
                React tools due to security concerns in the banking field. It
                was a great experience to work alongside experienced individuals
                in an Agile environment.
              </motion.span>
            </motion.p>

            <motion.img src={expe} />
          </motion.div>
        </motion.div>
        <motion.div className="credentials_layout">
          <motion.div
            initial={{ x: -350 }}
            style={{ x: layoutNegX }}
            className="credentials_layout_div"
          >
            <motion.img src={achi} className="lastImg" />
            <motion.p className="skills_summery">
              It was an honor to receive "LIVING THE PEPSICO WAY AWARD 2022" for
              my contribution towards the TCS organisation.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Education;