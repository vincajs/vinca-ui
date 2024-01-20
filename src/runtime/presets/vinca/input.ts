import { tv } from 'tailwind-variants'

export default tv({
  base: 'inline-flex justify-center items-center gap-2 shrink-0 rounded',
  variants: {
    color: {
      base: 'bg-base text-base-foreground hover:(bg-base/90) active:(bg-base/85)',
      neutral: 'bg-neutral text-light hover:(bg-neutral/90) active:(bg-neutral/85)',
      primary: 'bg-primary text-primary-foreground hover:(bg-primary/90) active:(bg-primary/85)',
      secondary: 'bg-secondary text-secondary-foreground hover:(bg-secondary/90) active:(bg-secondary/85)',
      accent: 'bg-accent text-light hover:(bg-accent/90) active:(bg-accent/85)',
      info: 'bg-info text-light hover:(bg-info/90) active:(bg-info/85)',
      success: 'bg-success text-light hover:(bg-success/90) active:(bg-success/85)',
      warning: 'bg-warning text-light hover:(bg-warning/90) active:(bg-warning/85)',
      error: 'bg-error text-white hover:(bg-error/90) active:(bg-error/85)',
    },
    variant: {
      outline: 'border border-current bg-transparent text-foreground',
      ghost: 'bg-transparent text-foreground',
      link: 'underline bg-transparent text-foreground',
    },
    size: {
      xs: 'h-6 px-1 gap-0.5 text-xs',
      sm: 'h-7 px-2 gap-1 text-sm',
      md: 'h-8 px-3 gap-1.5 text-base',
      lg: 'h-9 px-4 gap-2 text-lg',
      xl: 'h-10 px-5 gap-2.5 text-xl',
    },
    loading: {
      true: 'cursor-not-allowed pointer-events-none',
    },
    disabled: {
      true: 'bg-base/30 text-base-foreground/30 cursor-not-allowed pointer-events-none',
    },
  },
  defaultVariants: {
    color: 'base',
    size: 'md',
  },
})
