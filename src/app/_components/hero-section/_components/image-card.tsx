import Image from "next/image";
import { ImageCardProps } from "./types";
import { Button } from "@/components/button";

const ImageCard = ({
  image,
  title,
  description,
  buttonText,
}: ImageCardProps) => {
  const isVideo = image?.endsWith(".mp4");

  return (
    <div className="relative flex-shrink-0 w-[640px] sm:w-[700px] md:w-[730px] lg:w-[940px] h-[400px] md:h-[440px] lg:h-[500px] rounded-2xl overflow-hidden">
      {/* Media */}
      <div className="absolute inset-0">
        {isVideo ? (
          <video
            src={image}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={image ?? "/images/default-image.png"}
            alt={title ?? "Preview"}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
        <p className="text-xs md:text-sm font-semibold opacity-70 absolute top-12">
          NEW IMAGE MODEL
        </p>

        <div className="flex items-end justify-between">
          <div>
            <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-snug">
              {title}
            </h3>

            <p className="mt-2 text-sm md:text-[17px] opacity-90 w-[64.5%]">
              {description}
            </p>
          </div>

          {/* Bottom Row */}

          <Button
            radius="rounded-4xl"
            variant="neutral"
            size="lg"
            className="px-4 py-2 text-sm md:text-base font-semibold text-nowrap"
          >
            Try {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
