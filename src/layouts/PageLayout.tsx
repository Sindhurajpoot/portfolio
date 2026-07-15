import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="min-h-screen bg-slate-950 pt-28"
    >
      {children}
    </motion.main>
  );
}