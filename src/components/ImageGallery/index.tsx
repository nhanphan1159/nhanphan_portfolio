import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  projectTitle: string;
  initialIndex?: number;
  onClose?: () => void;
}

export default function ImageGallery({
  images,
  projectTitle,
  initialIndex = 0,
  onClose,
}: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(initialIndex);

  const handleNext = useCallback(() => {
    setSelectedIndex((s) => (s + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((s) => (s - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, onClose]);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="relative w-full"
    >
      {/* Main image - Reduced max width on desktop for smaller display */}
      <motion.img
        key={selectedIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        src={images[selectedIndex] || "/placeholder.svg"}
        alt={`${projectTitle} - ${selectedIndex + 1}`}
        className="w-full h-auto rounded-lg max-h-[60vh] object-contain"
      />

      {/* Close button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
      >
        <X size={24} />
      </motion.button>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 text-white text-sm font-medium">
            {selectedIndex + 1} / {images.length}
          </div>
        </>
      )}
    </motion.div>
  );
}
