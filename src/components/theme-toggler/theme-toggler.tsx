"use client";

import { useTheme } from "next-themes";
import { LightModeIcon } from "../../../public/assets/light-mode-icon";
import { DarkModeIcon } from "../../../public/assets/dark-mode-icon";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size="sm"
      variant="transparent"
      radius="rounded-full"
      className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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
