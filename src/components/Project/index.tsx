import { useCallback, useState } from "react";
import { motion } from "framer-motion";

import GalleryOverlay from "@src/components/Project/GalleryOverlay";
import ProjectModal from "@src/components/Project/ProjectModal";
import ProjectCard from "@src/components/ProjectCard";
import { PROJECTS } from "@src/constants/project";
import {
  CONTAINER_PROJECT_VARIANTS,
  ITEMS_PROJECT_VARIANTS,
} from "@src/constants/variants";
import { disableScrollLock } from "@src/lib/scroll-lock";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [galleryImageIndex, setGalleryImageIndex] = useState<number | null>(
    null
  );

  const openGallery = useCallback(() => {
    setGalleryImageIndex(0);
    try {
      document.body.style.overflow = "hidden";
    } catch (e) {
      // ignore
    }
  }, []);

  const closeGallery = useCallback(() => {
    setGalleryImageIndex(null);
    disableScrollLock();
  }, []);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 tracking-tight"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={CONTAINER_PROJECT_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={ITEMS_PROJECT_VARIANTS}
              onClick={() => setSelectedProject(index)}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        <ProjectModal
          project={
            selectedProject !== null ? PROJECTS[selectedProject] : PROJECTS[0]
          }
          open={selectedProject !== null}
          onClose={() => {
            setSelectedProject(null);
            closeGallery();
          }}
          onOpenGallery={openGallery}
        />

        {galleryImageIndex !== null && selectedProject !== null && (
          <GalleryOverlay
            images={PROJECTS[selectedProject].gallery}
            projectTitle={PROJECTS[selectedProject].title}
            initialIndex={galleryImageIndex}
            onClose={closeGallery}
          />
        )}
      </div>
    </section>
  );
}
