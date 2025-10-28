import { motion } from "framer-motion";
import type { FC } from "react";

import { TEXT_VARIANTS } from "@src/constants/variants";

const CTAButtons: FC = () => {
  return (
    <motion.div
      className="flex gap-4 justify-center flex-wrap"
      variants={TEXT_VARIANTS}
      initial="hidden"
      animate="visible"
      custom={3}
    >
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity z-10"
      >
        View My Work
      </motion.a>
      <motion.a
        href="https://nhanphan.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="z-10 px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
      >
        Portfolio Site
      </motion.a>
    </motion.div>
  );
};

export default CTAButtons;
