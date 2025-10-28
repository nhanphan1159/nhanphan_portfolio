import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type React from "react";

import { disableScrollLock, enableScrollLock } from "@src/lib/scroll-lock";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Modal({
  open,
  onClose,
  children,
  className = "",
}: ModalProps) {
  useEffect(() => {
    if (open) enableScrollLock();
    else disableScrollLock();
    return () => disableScrollLock();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4 overflow-hidden"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className={`${className} bg-card rounded-lg`}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
