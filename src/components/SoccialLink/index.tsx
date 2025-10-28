import { motion } from "framer-motion";
import type { FC } from "react";

import { SOCIAL_LINKS } from "@src/constants/socialLink";

const SocialLinks: FC = () => {
  return (
    <motion.div
      className="mt-16 flex justify-center gap-6 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      {SOCIAL_LINKS.map((s) => (
        <motion.a
          key={s.href}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label={s.label}
        >
          {s.svg}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
