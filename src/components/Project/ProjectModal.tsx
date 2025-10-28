import { motion } from "framer-motion";

import Modal from "@src/components/ui/modal";
import type { PROJECTS } from "@src/constants/project";
import { disableScrollLock } from "@src/lib/scroll-lock";

type Project = (typeof PROJECTS)[number];

interface Props {
  project: Project;
  open: boolean;
  onClose: () => void;
  onOpenGallery: () => void;
}

export default function ProjectModal({
  project,
  open,
  onClose,
  onOpenGallery,
}: Props) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      className="p-8 max-w-2xl w-full max-h-[80svh] overflow-y-auto overscroll-contain"
    >
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg md:text-2xl font-bold">{project.title}</h3>
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenGallery}
                aria-label={`Open gallery for ${project.title}`}
                className="px-4 py-2 cursor-pointer rounded-lg bg-primary/20 text-primary font-medium hover:bg-primary/30 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-image-icon lucide-image"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
              </motion.button>
            </div>
          )}
        </div>

        <p className="text-muted-foreground mb-6">{project.fullDescription}</p>

        <div className="space-y-4 mb-4">
          <div>
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="text-foreground/80 flex items-start gap-2"
                >
                  <span className="text-primary">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            onClose();
            disableScrollLock();
          }}
          className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Close
        </motion.button>
      </div>
    </Modal>
  );
}
