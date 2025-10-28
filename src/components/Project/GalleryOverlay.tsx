import { motion } from "framer-motion";

import ImageGallery from "@src/components/ImageGallery";

interface Props {
  images: string[];
  projectTitle: string;
  initialIndex: number;
  onClose: () => void;
}

export default function GalleryOverlay({
  images,
  projectTitle,
  initialIndex,
  onClose,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl"
      >
        <ImageGallery
          images={images}
          projectTitle={projectTitle}
          initialIndex={initialIndex}
          onClose={onClose}
        />
      </motion.div>
    </motion.div>
  );
}
