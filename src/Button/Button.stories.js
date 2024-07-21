import Button from "./Button";
import { fn } from "@storybook/test";

export default {
  title: "Core/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
};

export const Primary = {
    args: {
        children: 'Primary'
    }
}

export const Secondary = {
  args: {
    children: 'Secondary',
    varient: 'secondary'
  }
}