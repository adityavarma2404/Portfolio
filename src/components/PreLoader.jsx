import { motion } from "framer-motion"

function PreLoader() {
  return (
    <motion.div className="preLoaderContainer" initial={{}}>
        <motion.p className="preLoaderText">Welcome.</motion.p>
    </motion.div>
  )
}

export default PreLoader