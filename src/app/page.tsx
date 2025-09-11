"use client";

import { Button } from "@/components/button";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(
  () => import("@/components/theme-toggler/theme-toggler"),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="bg-background text-foreground p-6 rounded-xl space-y-4">
      <ThemeToggle />
      <p>Pixel-perfect assignment content goes here ✨</p>

      <Button variant="transparent">Another Button</Button>
      <Button>A Button</Button>
    </div>
  );
}
