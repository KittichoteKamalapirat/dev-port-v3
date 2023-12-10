import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "../app/components/Navbar";

const meta = {
  title: "Design System/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
