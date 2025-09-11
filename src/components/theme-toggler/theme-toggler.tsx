"use client";

import { useTheme } from "next-themes";
import { LightModeIcon } from "../../../public/assets/light-mode-icon";
import { DarkModeIcon } from "../../../public/assets/dark-mode-icon";
import { Button } from "../button";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="transparent"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md border"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="dark"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <DarkModeIcon />
          </motion.div>
        ) : (
          <motion.div
            key="light"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <LightModeIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}
