import { Meta } from "@storybook/react";
import { Text } from "../Text/Text";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    onCheckedChange: {}
  },
  decorators: [
    story => (
      <div className="flex items-center gap-2">
        {story()}
        <Text size="sm">Lembrar de mim por 30 dias</Text>
      </div>
    )
  ]
} as Meta<CheckboxProps>

export const Default = {}
