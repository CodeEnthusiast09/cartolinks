"use client";

import { Button } from "@/components/button";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ImageCard from "./_components/image-card";

const HeroSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsScrolling(true);

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set a timeout to detect when scrolling has stopped
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);

        // Get all card elements
        const cards = container.querySelectorAll("[data-card-index]");
        if (cards.length === 0) return;

        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card, index) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const distance = Math.abs(cardCenter - containerCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        setActiveIndex(closestIndex);
      }, 150); // Wait 150ms after scroll stops
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const cards = [
    {
      image: "https://s.krea.ai/announce-wan-2-2-image.webp",
      title: "WAN 2.2 Image generation",
      description:
        "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
      buttonText: "WAN 2.2",
    },
    {
      image: "https://s.krea.ai/OSSKreaFlux1_video.mp4",
      title: "FLUX.1 Krea",
      description:
        "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
      buttonText: "FLUX.1 Krea",
    },
    {
      image: "https://s.krea.ai/seedream-4-announcement.webp",
      title: "Seedream 4.0",
      description:
        "Try the brand new and record-breaking image generation model Seedream 4.0 by ByteDance.",
      buttonText: "Seedream",
    },
    {
      image: "https://s.krea.ai/fish-overlay_1.mp4",
      title: "Real-Time Video Generation",
      description:
        "Announcing Realtime Video. Generate videos in real-time. Fully frame-consistent, controllable video clips.",
      buttonText: "Video Generation",
    },
    {
      image: "https://s.krea.ai/motionTransfer_homepage_video.mp4",
      title: "Introducing Motion Transfer",
      description:
        "Bring motion into your characters. Upload any image, record a video of yourself, and make your characters smile, talk, and dance. Powered by Runway Act 2.",
      buttonText: "Motion Transfer",
    },
    {
      image: "https://s.krea.ai/announce-wan-2-2-image.webp",
      title: "WAN 2.2 Image generation",
      description:
        "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
      buttonText: "WAN 2.2",
    },
    {
      image: "https://s.krea.ai/OSSKreaFlux1_video.mp4",
      title: "FLUX.1 Krea",
      description:
        "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
      buttonText: "FLUX.1 Krea",
    },
    {
      image: "https://s.krea.ai/seedream-4-announcement.webp",
      title: "Seedream 4.0",
      description:
        "Try the brand new and record-breaking image generation model Seedream 4.0 by ByteDance.",
      buttonText: "Seedream",
    },
    {
      image: "https://s.krea.ai/fish-overlay_1.mp4",
      title: "Real-Time Video Generation",
      description:
        "Announcing Realtime Video. Generate videos in real-time. Fully frame-consistent, controllable video clips.",
      buttonText: "Video Generation",
    },
    {
      image: "https://s.krea.ai/motionTransfer_homepage_video.mp4",
      title: "Introducing Motion Transfer",
      description:
        "Bring motion into your characters. Upload any image, record a video of yourself, and make your characters smile, talk, and dance. Powered by Runway Act 2.",
      buttonText: "Motion Transfer",
    },
  ];

  return (
    <section className="mt-12 pl-2.5 md:pl-5 lg:pl-10 relative">
      {/* cards Container */}
      <div className="relative group">
        {/* Scrollable Card Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex gap-6 pb-6 min-w-max">
            {cards.map((card, index) => (
              <div
                key={index}
                data-card-index={index}
                className="flex-shrink-0 transform transition-all duration-300"
              >
                <ImageCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  buttonText={card.buttonText}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div></div>
          <div className="flex justify-center gap-2">
            {cards.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-foreground" : "bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-end gap-3 pr-5 lg:pr-10">
            <Button
              variant="transparent"
              radius="rounded-full"
              size="sm"
              onClick={scrollLeft}
              className="w-8 h-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2"
            >
              <Image
                alt="Previous cards"
                src="/assets/leftIcon.svg"
                width={10}
                height={10}
                priority
                className="opacity-70"
              />
            </Button>

            <Button
              variant="transparent"
              size="sm"
              radius="rounded-full"
              onClick={scrollRight}
              className="w-8 h-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2"
            >
              <Image
                alt="Next cards"
                src="/assets/rightIcon.svg"
                width={10}
                height={10}
                priority
                className="opacity-70"
              />
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
