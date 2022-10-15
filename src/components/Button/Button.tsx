import { Slot } from "@radix-ui/react-slot"
import { clsx } from "clsx"
import { ReactNode } from "react"

export interface ButtonProps {
  children?: ReactNode
  asChild?: boolean
  htmlType?: "button" | "submit"
  onClick?: () => any
  disabled?: boolean
}

export function Button({
  children = "",
  asChild,
  htmlType = "button",
  onClick,
  disabled
}: ButtonProps) {
  const Component = asChild ? Slot : "button"
  
  return (
    <Component
      type={htmlType}
      className={clsx(
        "py-4 px-3 bg-cyan-500 block rounded font-semibold text-black text-center text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white cursor-pointer",
        {
          "bg-gray-400 hover:bg-gray-400 hover:cursor-not-allowed focus:ring-0": disabled
        }
      )}
      onClick={onClick}
    >
      { children }
    </Component>
  )
}
