import { DecoratorFunction } from "@storybook/types";

import { withThemeByClassName } from "./themeSwitcher";

export const decorators: DecoratorFunction[] = [
  withThemeByClassName({
    defaultStyles: [
      {
        // - `body`: apply default bg and text color to the preview
        // - `.doc-story`: in docs, there are multiple element that override the bg of the preview
        //   we use this selector to override storybook default's style again.
        selector: "body, .docs-story",
        className: "bg-background-primary text-foreground-primary",
      },
    ],
    // This specifies class to be added for each theme.
    // These classes will be added to `html` tag as a default selector.
    themes: {
      light: "",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];
