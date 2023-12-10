import type { StoryFn, Meta } from "@storybook/react";

import ColorThemeToggler, { ColorThemeTogglerProps } from ".";

const Story: Meta<typeof ColorThemeToggler> = {
  component: ColorThemeToggler,
  title: "Design System/ColorThemeToggler",
};

export default Story;

const Template: StoryFn<typeof ColorThemeToggler> = (
  args: ColorThemeTogglerProps
) => <ColorThemeToggler {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
