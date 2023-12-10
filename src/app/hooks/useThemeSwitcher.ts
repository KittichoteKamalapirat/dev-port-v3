import { useEffect, useState } from "react";

type Mode = "light" | "dark" | null;
export const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-schema: dark)";
  const [mode, setMode] = useState<Mode>(null);

  useEffect(() => {
    const userPref = window.localStorage.getItem("theme");
    const mediaQuery = window.matchMedia(preferDarkQuery);

    const preferDarkTheme = mediaQuery.matches;

    const handleChange = () => {
      if (userPref) {
        if (userPref === "dark") {
          setMode("dark");
          document.documentElement.classList.add("dark");
        } else {
          setMode("light");
          document.documentElement.classList.remove("dark");
        }
      } else {
        // visit the site for the first time
        if (preferDarkTheme) {
          setMode("dark");
          document.documentElement.classList.add("dark");
        } else {
          setMode("light");
          document.documentElement.classList.remove("dark");
        }
      }
    };

    // run first time to set from null => userPref, or systemPref
    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      return;
    }
    if (mode === "light") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return { mode, setMode };
};
