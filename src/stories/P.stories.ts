import type { Meta, StoryObj } from "@storybook/react";
import P from "../app/components/Text/P";

const meta = {
  title: "Text/P",
  component: P,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof P>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Hello, world!",
  },
};
