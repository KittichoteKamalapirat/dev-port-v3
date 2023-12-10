import { RefObject, useEffect } from "react";

export const useClickOutsideHamburger = (
  ref: RefObject<HTMLElement>,
  onClick: (e: Event) => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (!(event.target instanceof HTMLElement)) return;
      if (ref.current?.contains(event.target)) return;
      // handle when click icon directly
      if (event.target instanceof HTMLButtonElement) return;
      // handle when click button edge (not icon)
      if (event.target instanceof SVGElement) return;

      onClick(event);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, onClick]);
};
