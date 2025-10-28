import { motion } from "framer-motion";

import CTAButtons from "@src/components/CTAButton";
import SocialLinks from "@src/components/SoccialLink";
import { FlipWords } from "@src/components/TypingText";
import { TEXT_VARIANTS } from "@src/constants/variants";

export default function Hero() {
  return (
    <section
      id="about"
      className="h-screen flex items-center justify-center pt-20 px-6 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            id="typed-text"
            className="text-2xl md:text-5xl font-bold mb-6 tracking-tight"
            variants={TEXT_VARIANTS}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <FlipWords
              words={["Phan Huynh Huu Nhan"]}
              className="text-black flex justify-center items-center whitespace-pre-wrap"
            />
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-light"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            <FlipWords words={["Front-end Developer", "Website Developer"]} />
          </motion.p>

          <motion.p
            className="z-10 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
            variants={TEXT_VARIANTS}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Crafting beautiful, performant web experiences with React, Next.js,
            and modern web technologies. Passionate about building scalable
            applications with smooth animations and intuitive user interfaces.
          </motion.p>

          <CTAButtons />
        </motion.div>

        <SocialLinks />
      </div>
    </section>
  );
}
