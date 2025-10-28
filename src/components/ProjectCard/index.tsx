import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    image: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="group cursor-pointer hover:shadow-lg p-4 rounded-lg hover:bg-white/50 transition-colors"
    >
      <div className="relative overflow-hidden rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors h-64 mb-4">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium"
          >
            View Details
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 }}
      >
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-2 py-1 rounded text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-default"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
