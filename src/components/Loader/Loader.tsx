import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{opacity:1}}
      animate={{opacity:0}}
      transition={{delay:2,duration:.8}}
      className="fixed inset-0 bg-slate-950 flex items-center justify-center z-[999]"
    >

      <motion.h1
      animate={{
        scale:[1,.9,1],
      }}
      transition={{
        repeat:Infinity,
        duration:1
      }}
      className="text-5xl font-black text-blue-500">

      Sindhu.

      </motion.h1>

    </motion.div>
  )
}