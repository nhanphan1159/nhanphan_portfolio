import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "@src/lib/utils";

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["about", "experience", "projects", "skills", "contact"];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold tracking-tight"
        >
          Nhan Phan
        </motion.div>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item}
              type="button"
              onClick={() => scrollToSection(item)}
              className={cn(
                "text-md font-bold transition-colors relative cursor-pointer",
                activeSection === item
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              whileHover={{ scale: 1.05 }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {activeSection === item && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                  transition={{ type: "spring", stiffness: 380, damping: 40 }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        <div className="flex md:hidden items-center gap-4">
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  type="button"
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item
                      ? "bg-primary/20 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  whileHover={{ x: 4 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
