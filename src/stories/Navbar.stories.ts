import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "../app/components/Navbar";

const meta = {
  title: "Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
