"use client";

import dynamic from "next/dynamic";
import { Navbar } from "./_components/navbar";
import HeroSection from "./_components/hero-section";
import GenerateSection from "./_components/generate-section";
import GallerySection from "./_components/gallery-section";
import { KreaAi } from "../../public/assets/logo";
import { Mobbin } from "../../public/assets/mobbin-icon";

const ThemeToggle = dynamic(
  () => import("@/components/theme-toggler/theme-toggler"),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="bg-background overflow-hidden">
      <Navbar />
      <HeroSection />
      <GenerateSection />
      <GallerySection />
      <div className="bg-foreground/80 text-background flex items-center justify-between px-10">
        <KreaAi
          size={52}
          className="bg-foreground text-background rounded-lg py-1"
        />

        <div className="flex items-center gap-5">
          <p className="text-2xl">curated by</p>

          <Mobbin />
        </div>
      </div>
    </div>
  );
}
