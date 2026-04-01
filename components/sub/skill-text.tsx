"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center mb-6">
      <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase mb-2 block">
        03. Skills
      </span>
      <motion.h2
        variants={slideInFromTop}
        className="text-4xl md:text-5xl font-black text-white text-center"
      >
        Skills &amp; Tools
      </motion.h2>
    </div>
  );
};
