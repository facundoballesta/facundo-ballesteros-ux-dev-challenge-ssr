import type { Meta, StoryObj } from "@storybook/react-vite";
import Card, { CardResult } from "./card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    result: {
      control: { type: "select" },
      options: ["positive", "negative", null],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Positive: Story = {
  args: {
    title: "Total Revenue",
    value: "$45,000",
    historicalAmount: "$2,403",
    result: "positive" as CardResult,
  },
};

export const Negative: Story = {
  args: {
    title: "Egresos",
    value: "$8,300",
    historicalAmount: "$500",
    result: "negative" as CardResult,
  },
};

export const Neutral: Story = {
  args: {
    title: "Balance",
    value: "$4,200",
    historicalAmount: "",
    result: null,
  },
};
