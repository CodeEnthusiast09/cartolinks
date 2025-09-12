import { ReactElement } from "react";
import { ActionCardProps } from "./types";
import { Button } from "@/components/button";

const ActionCard = ({
  icon,
  title,
  description,
  showNewTag = false,
}: ActionCardProps) => {
  return (
    <div className="flex items-center justify-between p-3 md:p-4 rounded-xl  bg-white hover:shadow-md transition-all duration-300">
      {/* Left: Icon + Text */}
      <div className="flex items-center gap-3">
        <span>{icon}</span>

        <div className="flex flex-col">
          <p className="font-semibold text-sm md:text-base text-black flex items-center gap-1">
            {title}
            {showNewTag && (
              <span className="bg-blue-500 text-[10px] md:text-xs text-white px-1.5 py-0.5 rounded-md">
                New
              </span>
            )}
          </p>
          <p className="text-xs md:text-sm text-gray-500 max-w-[200px]">
            {description}
          </p>
        </div>
      </div>

      {/* Right: Action Button */}
      <button className="w-22 text-xs md:text-sm text-black bg-gray-200 px-4 py-2 rounded-3xl">
        Open
      </button>
    </div>
  );
};

export default ActionCard;
