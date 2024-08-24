import { motion } from "framer-motion";

import SkillTitle from "./UI Components/SkillTitle";
import "../styles/skills.css";

function Skills() {
  return (
    <motion.div className="container container4">
      <SkillTitle />
    </motion.div>
  );
}

export default Skills;
