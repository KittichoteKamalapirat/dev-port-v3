"use client";

import clsx from "clsx";
import Logo from "../../../assets/logo.svg";

import ColorThemeToggler from "../ColorThemeToggler";

const Navbar = () => {
  return (
    <nav
      className={clsx(
        "fixed left-0 right-0 top-0 z-[100]", // make fixed so can set content 100% with top padding
        " border-gray-200"
      )}
    >
      <div className="mx-auto flex flex-wrap items-center justify-between p-4">
        <Logo class="w-8 h-8 text-foreground-primary" />

        <ColorThemeToggler className="hidden lg:block" />
      </div>
    </nav>
  );
};
export default Navbar;
