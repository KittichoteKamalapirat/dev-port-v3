"use client";
// import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

import clsx from "clsx";
import { useCallback, useRef, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

import { useClickOutsideHamburger } from "../../hooks/useClickOutsideHamburger";

import ColorThemeToggler from "../ColorThemeToggler";
const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);
  const closeMenu = useCallback(() => {
    setIsExpanded(false);
  }, []);

  useClickOutsideHamburger(mobileMenuRef, closeMenu);

  return (
    <nav
      className={clsx(
        "fixed left-0 right-0 top-0 z-[100]", // make fixed so can set content 100% with top padding
        " border-gray-200 bg-white dark:border-gray-700 dark:bg-dm-bg"
      )}
    >
      <div className="mx-auto flex flex-wrap items-center justify-between p-4">
        {/* <a href={urlResolver.home} className="flex items-center">
          <Logo className="h-6 w-6 text-lm-text dark:text-dm-text lg:h-8 lg:w-8" />
        </a> */}

        <div className="relative flex gap-4">
          {/* Shown by default */}
          {isExpanded ? (
            <IoMdClose onClick={toggleMenu} />
          ) : (
            <IoMdMenu onClick={toggleMenu} />
          )}

          <ColorThemeToggler className="hidden lg:block" />
          {/* menu items */}
          <div
            className={clsx(
              "min-w-[200px]",
              isExpanded ? "absolute right-0 top-12 md:w-40" : "hidden "
            )}
            id="navbar-hamburger"
            ref={mobileMenuRef}
          >
            {/* Below is hidden by default */}
            <ul className="mt-4 flex flex-col gap-[2px] rounded-lg  border-2 border-lm-text bg-lm-bg-light font-medium  shadow dark:border-dm-text dark:bg-dm-bg-light">
              <li className={clsx("mx-auto py-4 pl-3 pr-4", "lg:hidden")}>
                <ColorThemeToggler className="h-8 w-8" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
