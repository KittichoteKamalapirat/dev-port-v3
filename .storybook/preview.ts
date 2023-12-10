import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import "../src/theme/tailwind-directives.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export { decorators } from "./decorators"; // for dark theme

export default preview;
