"use client";

import clsx from "clsx";
import { NavItem } from "@/interfaces/global";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetTabFromPath, setActiveTab } from "@/redux/slices/tabslice";

type NavBarItemProps = {
  item: NavItem;
  onClick: Function;
};

export const NavBarItem = ({ item, onClick }: NavBarItemProps) => {
  const pathname = usePathname();

  const dispatch = useDispatch();

  const isActive =
    pathname === item.href || pathname.startsWith(`${item.href}/`);

  useEffect(() => {
    if (document.referrer === "") {
      dispatch(resetTabFromPath(pathname));
    }
  }, [dispatch, pathname]);

  const handleClick = () => {
    dispatch(setActiveTab(item.name));
    onClick();
  };

  return (
    <li className={clsx("relative")}>
      <Link
        href={item.href}
        onClick={handleClick}
        className={clsx(
          "flex items-center w-full h-10 rounded-xl transition-colors duration-300",
          "text-foreground",
          isActive ? "bg-background shadow-sm" : "hover:bg-foreground/10"
        )}
      >
        <span className={clsx("p-2 text-2xl")}>{item.icon}</span>
        <span className="text-base font-regular text-foreground lg:hidden">
          {item.name}
        </span>
      </Link>
    </li>
  );
};
