import { motion} from "framer-motion";
import SkillTitle from "./subUiComponents/SkillTitle";

// initial={{backgroundColor:"#ff7c7c"}}

function Skills() {
  return (
    <motion.div className="container container4">
      <SkillTitle />
    </motion.div>
  );
}

export default Skills;
