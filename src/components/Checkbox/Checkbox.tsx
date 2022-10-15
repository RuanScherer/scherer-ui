import * as CheckboxPrimitve from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export interface CheckboxProps {
  onCheckedChange?: (checked: boolean | 'indeterminate') => void
}

export function Checkbox({ onCheckedChange }: CheckboxProps) {
  return (
    <CheckboxPrimitve.Root
      id=""
      className="w-6 h-6 p-[2px] bg-gray-800 rounded"
      onCheckedChange={onCheckedChange}
    >
      <CheckboxPrimitve.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxPrimitve.Indicator>
    </CheckboxPrimitve.Root>
  )
}
