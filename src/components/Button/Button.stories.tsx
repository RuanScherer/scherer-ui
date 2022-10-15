import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Create account",
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean"
      }
    },
    onClick: {}
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    },
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true
  }
}

export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    children: (
      <a href="#">Button as A tag</a>
    ),
    asChild: true
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
  }
}
