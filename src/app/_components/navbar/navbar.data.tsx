import { NavItem } from "@/interfaces/global";
import { HomeIcon } from "../../../../public/assets/home-icon";
import { VideoIcon } from "../../../../public/assets/video-icon";
import { WandIcon } from "../../../../public/assets/wand-icon";
import { PenIcon } from "../../../../public/assets/pen-icon";
import { DividerIcon } from "../../../../public/assets/divider-icon";
import { FileIcon } from "../../../../public/assets/file-icon";
import { ImageIcon } from "../../../../public/assets/image-icon";

export const navItems: NavItem[] = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Image",
    href: "/#image",
    icon: <ImageIcon />,
  },
  {
    name: "Video",
    href: "/#videp",
    icon: <VideoIcon />,
  },
  {
    name: "Enhancer",
    href: "/#enhancer",
    icon: <WandIcon />,
  },
  {
    name: "Realtime",
    href: "/#realtime",
    icon: <PenIcon />,
  },
  {
    name: "Edit",
    href: "/#edit",
    icon: <DividerIcon />,
  },
  {
    name: "Asset",
    href: "/#asset",
    icon: <FileIcon />,
  },
];
