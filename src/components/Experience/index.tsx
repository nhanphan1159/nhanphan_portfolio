import { motion } from "framer-motion";

import { EXPERIENCE } from "@src/constants/experience";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 tracking-tight"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-l-2 border-primary pl-8 py-4"
            >
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                <p className="text-primary font-medium mb-2">{exp.company}</p>
                <p className="text-muted-foreground text-sm mb-4">
                  {exp.period}
                </p>
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-foreground/80 flex items-start gap-3"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
