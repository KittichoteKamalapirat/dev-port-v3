import { useEffect } from "react";

import { DecoratorHelpers } from "@storybook/addon-themes";
import { DecoratorFunction, Renderer } from "@storybook/types";

const { initializeThemeState, pluckThemeFromContext, useThemeParameters } =
  DecoratorHelpers;

export type WithThemeByClassNameParams = {
  defaultStyles?: {
    selector: string;
    className: string;
  }[];
  themes: Record<string, string>;
  defaultTheme: string;
  parentSelector?: string;
};

const DEFAULT_ELEMENT_SELECTOR = "html";

function classStrToArr(classStr: string) {
  return classStr.split(" ").filter(Boolean);
}

export const withThemeByClassName = <TRenderer extends Renderer = Renderer>({
  defaultStyles,
  themes,
  defaultTheme,
  parentSelector = DEFAULT_ELEMENT_SELECTOR,
}: WithThemeByClassNameParams): DecoratorFunction<TRenderer> => {
  initializeThemeState(Object.keys(themes), defaultTheme);

  return function WithThemeByClassName(storyFn, context) {
    const { themeOverride } = useThemeParameters();
    const selected = pluckThemeFromContext(context);

    // Initialize default style
    useEffect(() => {
      if (!defaultStyles || !defaultStyles.length) return undefined;

      defaultStyles.forEach(({ className, selector }) => {
        const defaultStyleElements = document.querySelectorAll(selector);
        if (!defaultStyleElements.length) {
          return undefined;
        }
        const classArr = classStrToArr(className);
        if (classArr.length > 0) {
          defaultStyleElements.forEach((element) => {
            element.classList.add(...classArr);
          });
        }
      });
    }, []);

    // On theme switching
    useEffect(() => {
      const selectedThemeName = themeOverride || selected || defaultTheme;
      const parentElements = document.querySelectorAll(parentSelector);

      if (!parentElements.length) {
        return;
      }

      // Remove other theme classes
      Object.entries(themes)
        .filter(([themeName]) => themeName !== selectedThemeName)
        .forEach(([, className]) => {
          const classArr = classStrToArr(className);
          if (classArr.length > 0) {
            parentElements.forEach((element) => {
              element.classList.remove(...classArr);
            });
          }
        });

      const newThemeClasses = classStrToArr(themes[selectedThemeName]);

      if (newThemeClasses.length > 0) {
        parentElements.forEach((element) => {
          element.classList.add(...newThemeClasses);
        });
      }
    }, [themeOverride, selected]);

    return storyFn();
  };
};
