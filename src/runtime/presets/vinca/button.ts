import { tv } from 'tailwind-variants'

export default tv({
  base: 'inline-flex justify-center items-center shrink-0 rounded transition-all active:translate-y-0.5',
  variants: {
    color: {
      default: '',
      primary: '',
      secondary: '',
      info: '',
      success: '',
      warning: '',
      error: '',
    },
    variant: {
      filled: '',
      outlined: 'border border-current bg-transparent',
      text: 'bg-transparent',
    },
    size: {
      xs: 'h-6 px-1 gap-0.5 text-xs',
      sm: 'h-7 px-2 gap-1 text-sm',
      md: 'h-8 px-3 gap-1.5 text-base',
      lg: 'h-9 px-4 gap-2 text-lg',
      xl: 'h-10 px-5 gap-2.5 text-xl',
    },
    disabled: {
      true: 'opacity-65 cursor-not-allowed pointer-events-none',
    },
    loading: {
      true: 'opacity-65 cursor-not-allowed pointer-events-none',
    },
  },
  compoundVariants: [
    {
      variant: 'filled',
      color: 'default',
      class: 'bg-default text-default-foreground hover:bg-default/90',
    },
    {
      variant: 'filled',
      color: 'primary',
      class: 'bg-primary text-primary-foreground hover:bg-primary/90',
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
    },
    {
      variant: 'filled',
      color: 'info',
      class: 'bg-info text-info-foreground hover:bg-info/90',
    },
    {
      variant: 'filled',
      color: 'success',
      class: 'bg-success text-success-foreground hover:bg-success/90',
    },
    {
      variant: 'filled',
      color: 'warning',
      class: 'bg-warning text-warning-foreground hover:bg-warning/90',
    },
    {
      variant: 'filled',
      color: 'error',
      class: 'bg-error text-error-foreground hover:bg-error/90',
    },
    {
      variant: 'outlined',
      color: 'default',
      class: 'text-default-foreground',
    },
    {
      variant: 'outlined',
      color: 'primary',
      class: 'text-primary',
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class: 'text-secondary',
    },
    {
      variant: 'outlined',
      color: 'info',
      class: 'text-info',
    },
    {
      variant: 'outlined',
      color: 'success',
      class: 'text-success',
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: 'text-warning',
    },
    {
      variant: 'outlined',
      color: 'error',
      class: 'text-error',
    },
    {
      variant: 'text',
      color: 'default',
      class: 'text-default-foreground  hover:bg-neutral/20',
    },
    {
      variant: 'text',
      color: 'primary',
      class: 'text-primary  hover:bg-neutral/20',
    },
    {
      variant: 'text',
      color: 'secondary',
      class: 'text-secondary  hover:bg-neutral/20',
    },
    {
      variant: 'text',
      color: 'info',
      class: 'text-info  hover:bg-neutral/20',
    },
    {
      variant: 'text',
      color: 'success',
      class: 'text-success  hover:bg-neutral/20',
    },
    {
      variant: 'text',
      color: 'warning',
      class: 'text-warning  hover:bg-neutral/20',
    },
    {
      variant: 'text',
      color: 'error',
      class: 'text-error hover:bg-neutral/20',
    },
  ],
  defaultVariants: {
    color: 'default',
    variant: 'filled',
    size: 'md',
    loadingIcon: 'i-svg-spinners:90-ring-with-bg',
  },
})
