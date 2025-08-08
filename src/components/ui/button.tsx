import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg rounded-xl",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-xl",
        outline:
          "border-2 border-nutria-green/20 bg-background/80 backdrop-blur-sm text-nutria-green hover:border-nutria-green hover:bg-nutria-green/5 hover:shadow-lg rounded-xl transition-all duration-300",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-xl",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-xl",
        link: "text-primary underline-offset-4 hover:underline",
        cta: "bg-nutria-green text-white font-bold shadow-xl hover:shadow-2xl hover:bg-nutria-green-dark transform hover:scale-105 hover:-translate-y-1 rounded-2xl border border-white/20 transition-all duration-300",
        warm: "bg-nutria-brown text-white font-bold shadow-lg hover:shadow-xl hover:bg-nutria-brown-dark transform hover:scale-105 rounded-2xl border border-white/10 transition-all duration-300",
        premium: "bg-amber-500 text-white font-bold shadow-2xl hover:shadow-amber-500/25 hover:shadow-2xl hover:bg-amber-600 transform hover:scale-105 hover:-translate-y-1 rounded-2xl border border-amber-300/30 transition-all duration-300",
        glass: "bg-white/10 backdrop-blur-md text-foreground border border-white/20 hover:bg-white/20 hover:border-white/30 shadow-lg hover:shadow-xl rounded-2xl transition-all duration-300",
        download: "bg-nutria-green text-white font-bold shadow-lg hover:shadow-nutria-green/25 hover:shadow-2xl hover:bg-nutria-green-dark transform hover:scale-105 rounded-2xl border border-nutria-green/30 transition-all duration-300",
      },
      size: {
        default: "h-11 px-6 py-2 text-sm rounded-xl",
        sm: "h-9 px-4 text-sm rounded-lg",
        lg: "h-14 px-10 text-base rounded-2xl",
        xl: "h-16 px-12 text-lg rounded-2xl font-bold",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
