import { SlArrowDown } from "react-icons/sl";
import { ImageIcon } from "../../../../public/assets/image-icon";
import ActionCard from "./_components/action-cards";
import { VideoIcon } from "../../../../public/assets/video-icon";
import { PenIcon } from "../../../../public/assets/pen-icon";
import { WandIcon } from "../../../../public/assets/wand-icon";
import { DividerIcon } from "../../../../public/assets/divider-icon";
import { MicIcon } from "../../../../public/assets/mic-icon";
import { PersonIcon } from "../../../../public/assets/person-icon";
import { TrainIcon } from "../../../../public/assets/train-icon";

const cards = [
  {
    icon: (
      <ImageIcon
        className="w-[42px] h-[42px] p-2 rounded-[10px] shrink-0
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)]
        ring-1 ring-black/10
        text-white
        [background:linear-gradient(0deg,rgb(208,227,241)_0%,rgb(41,73,98)_100%)]"
      />
    ),
    title: "Image",
    description: "Generate images with custom styles in Flux and ideogram",
    showNewTag: true,
  },
  {
    icon: (
      <VideoIcon
        className="w-[42px] h-[42px] p-2 rounded-[10px] shrink-0
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] ring-1 ring-black/10 text-white bg-amber-400"
      />
    ),
    title: "Video",
    description: "Generate videos with Haiku, Pika, Runway, Luma, and more",
  },
  {
    icon: (
      <PenIcon
        className="w-[42px] h-[42px] p-2 rounded-[10px] shrink-0
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)]
                ring-1 ring-black/10
                text-white
                [background:linear-gradient(0deg,rgb(168,218,255)_0%,rgb(0,79,156)_100%)]"
      />
    ),
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops",
  },
  {
    icon: (
      <WandIcon
        className="w-[42px] h-[42px] p-2 rounded-[10px] shrink-0
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)]
                ring-1 ring-black/10
                text-white
                [background:linear-gradient(0deg,rgb(100,100,100)_0%,rgb(20,20,20)_100%)]"
      />
    ),
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K",
    showNewTag: true,
  },
  {
    icon: (
      <DividerIcon
        className="w-[42px] h-[42px] p-2 rounded-[10px] shrink-0
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)]
                ring-1 ring-black/10
                text-white
                [background:linear-gradient(0deg,rgb(152,92,255)_0%,rgb(49,0,106)_100%)]"
      />
    ),
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations",
    showNewTag: true,
  },
  {
    icon: (
      <MicIcon
        className="w-[42px] h-[42px] p-2 rounded-[10px] shrink-0
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)]
                ring-1 ring-black/10
                text-white
                [background:linear-gradient(0deg,rgb(181,223,189)_0%,rgb(29,61,47)_100%)]"
      />
    ),
    title: "Video Lipsync",
    description: "Lip sync any video to any audio",
    showNewTag: true,
  },
  {
    icon: (
      <PersonIcon
        className="w-[42px] h-[42px] rounded-[10px] shrink-0
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] ring-1 ring-black/10 text-white bg-black"
      />
    ),
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters",
    showNewTag: true,
  },
  {
    icon: <TrainIcon size={42} />,
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters",
  },
];

const GenerateSection = () => {
  return (
    <section className="px-2.5 md:px-5 lg:px-10 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-foreground">
          Generate
        </h3>

        <button
          className="hidden lg:flex items-center gap-x-2 text-blue-500 font-semibold hover:underline"
          aria-haspopup="menu"
        >
          <SlArrowDown className="text-sm" />
          <span className="text-sm">Show all</span>
        </button>
      </div>

      {/* Responsive Grid */}
      <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((card, index) => (
          <ActionCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            showNewTag={card.showNewTag}
          />
        ))}
      </div>
    </section>
  );
};

export default GenerateSection;
