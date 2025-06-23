import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import { Sidebar } from "./sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
};

export default meta;

export const Default: StoryObj<typeof Sidebar> = {
  render: () => (
    <MemoryRouter>
      <Sidebar />
    </MemoryRouter>
  ),
};
