import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -120, 80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full
        bg-blue-600/20 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 120, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[650px] h-[650px]
        rounded-full bg-violet-600/20 blur-[150px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2
        w-[500px]
        h-[500px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-cyan-500/10
        blur-[140px]"
      />

    </div>
  );
}