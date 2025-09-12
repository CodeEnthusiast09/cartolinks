"use client";

import { Button } from "@/components/button";
import { useRef, useState } from "react";
import { navItems } from "./navbar.data";
import { NavItem } from "@/interfaces/global";
import { NavBarItem } from "./navbar-item";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon } from "../../../../public/assets/close-menu-icon";
import { MobileMenuIcon } from "../../../../public/assets/mobile-menu-icon";
import { KreaAi } from "../../../../public/assets/logo";
import { useEscapeKeyListener, useOnClickOutside } from "@/hooks";
import { SlArrowDown } from "react-icons/sl";
import { FiLogOut } from "react-icons/fi";
import { ProfileGradient } from "../../../../public/assets/profile-gradient";
import { GalleryIcon } from "../../../../public/assets/gallery-icon";
import { SupportIcon } from "../../../../public/assets/support-icon";
import ThemeToggle from "@/components/theme-toggler/theme-toggler";
import { NotificationIcon } from "../../../../public/assets/notification-icon";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setShowDropdown(false));

  useEscapeKeyListener(() => setShowDropdown(false));

  const handleDropdown = () => {
    setShowDropdown((prev: boolean) => !prev);
  };

  const toggleNav = () => {
    setShowNav((prev: boolean) => !prev);
  };

  return (
    <header className="bg-background w-full flex items-center justify-between border-b-1 lg:border-0 border-foreground">
      <div className="flex items-center gap-10 px-4 py-4">
        <KreaAi size={32} />

        <button
          className="hidden lg:flex items-center gap-x-1 xl:gap-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          onClick={handleDropdown}
          aria-haspopup="menu"
          aria-expanded={showDropdown ? "true" : "false"}
        >
          <div className="flex items-center justify-center h-7 w-7 rounded-full m-1 bg-primary-100">
            <ProfileGradient />
          </div>
          <div className="flex gap-x-2 items-center font-medium">
            <span className="text-sm">triumphalmemorableorang</span>
            <SlArrowDown className="text-sm" />
          </div>
        </button>
        {showDropdown && (
          <div className="hidden lg:block z-40 absolute top-18 left-5 md:left-[134px] w-48 mt-2 origin-top-left bg-background  border border-gray-200 rounded-md shadow-lg outline-none p-2">
            <div className="hidden lg:block xl:hidden">
              <Button
                variant="dropdowns"
                size="md"
                justifyContent="justify-start"
                className="block w-full md:h-12 text-xs bg-background  border-transparent"
              >
                <GalleryIcon className="mr-2" />
                <p>Gallery</p>
              </Button>
            </div>

            <div className="hidden lg:block xl:hidden">
              <Button
                variant="dropdowns"
                size="md"
                justifyContent="justify-start"
                className="block w-full md:h-12 text-xs  border-transparent"
              >
                <SupportIcon className="mr-2" />
                <p>Support</p>
              </Button>
            </div>

            <div className="">
              <Button
                // onClick={logout}
                // isLoading={isLoggingOut}
                variant="dropdowns"
                size="md"
                justifyContent="justify-start"
                className="block w-full md:h-12 text-xs text-red-500  border-transparent"
              >
                <FiLogOut className="mr-2" />
                Log out
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:block lg:px-4 lg:py-4">
        <nav className="hidden lg:flex items-center bg-foreground/5 p-3 rounded-2xl duration-500 ">
          <ul className="flex items-center gap-5">
            {navItems.map((item: NavItem, index: number) => (
              <NavBarItem key={index} item={item} onClick={() => toggleNav()} />
            ))}
          </ul>
        </nav>
      </div>

      <div className="hidden lg:flex items-center justify-center gap-5 px-4 py-4">
        <div className="xl:flex items-center gap-2 bg-foreground/5 p-2 rounded-xl lg:hidden">
          <GalleryIcon />
          <p>Gallery</p>
        </div>

        <div className="xl:flex items-center gap-2 bg-foreground/5 p-2 rounded-xl lg:hidden">
          <SupportIcon />
          <p>Support</p>
        </div>

        <Button
          size="sm"
          variant="transparent"
          radius="rounded-lg"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2"
        >
          <NotificationIcon />
        </Button>

        <ThemeToggle />

        <ProfileGradient size={32} className="rounded-full" />
      </div>

      {/* Mobile devices */}
      <div className="flex items-center gap-4 lg:hidden">
        <Button
          size="sm"
          variant="transparent"
          radius="rounded-lg"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2"
        >
          <NotificationIcon />
        </Button>

        <ThemeToggle />
        <button className="py-4 pr-4" onClick={toggleNav}>
          <AnimatePresence mode="wait" initial={false}>
            {showNav ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <CloseIcon className="text-background" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MobileMenuIcon size={32} className="text-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`px-5 xl:px-6 py-6 h-screen overflow-auto w-1/2 md:w-[40vw] lg:w-[25vw] 2xl:w-[18vw] bg-background border-l border-l-foreground z-50 fixed lg:right-0 transition-all duration-500 top-0 ${
          showNav ? "right-0" : " -right-[150vw]"
        } lg:hidden`}
      >
        <div className="flex items-center justify-between pb-6">
          <button onClick={toggleNav}>
            <AnimatePresence mode="wait" initial={false}>
              {showNav ? (
                <motion.div
                  key="close"
                  className="absolute right-4 top-[23px]"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <CloseIcon size={32} className="text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MobileMenuIcon size={32} className="text-background mr-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        <button
          className="flex lg:hidden items-center gap-x-1 xl:gap-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 mt-10"
          onClick={handleDropdown}
          aria-haspopup="menu"
          aria-expanded={showDropdown ? "true" : "false"}
        >
          <ProfileGradient size={32} className="rounded-full mr-3" />

          <div className="flex gap-x-2 items-center font-medium">
            <span className="text-sm">triumph</span>
            <SlArrowDown className="text-sm" />
          </div>
        </button>
        {showDropdown && (
          <div className="z-40 absolute top-30 left-10 md:left-14 w-28 md:w-48 mt-2 origin-top-left bg-white  border border-gray-200 divide-gray-100 rounded-md shadow-lg outline-none divide-y">
            <div className="">
              <Button
                // onClick={logout}
                // isLoading={isLoggingOut}
                variant="neutral"
                size="md"
                justifyContent="justify-start"
                className="md:h-12 text-xs text-red-500 hover:bg-gray-100 border-transparent"
              >
                <FiLogOut className="mr-2" />
                Log out
              </Button>
            </div>
          </div>
        )}

        <nav className="block z-50">
          <ul className="flex flex-col gap-8 mt-20">
            {navItems.map((item: NavItem, index: number) => (
              <NavBarItem key={index} item={item} onClick={() => toggleNav()} />
            ))}
          </ul>
        </nav>

        <div>
          <div className="flex items-center gap-2 bg-foreground/5 p-2 rounded-xl my-5">
            <GalleryIcon />
            <p>Gallery</p>
          </div>

          <div className="flex items-center gap-2 bg-foreground/5 p-2 rounded-xl">
            <SupportIcon />
            <p>Support</p>
          </div>
        </div>
      </div>
    </header>
  );
};
