import type { VariantProps } from '#ui/utils/tv'
import { tv } from '#ui/utils/tv'

const input = tv({
  slots: {
    base: 'flex items-center justify-center rounded',
    input: 'bg-transparent focus-visible:outline-none',
  },
  variants: {
    variant: {
      filled: {
        base: '',
        input: '',
      },
      outlined: {
        base: 'border border-current bg-transparent',
        input: '',
      },
    },
    color: {
      default: {},
      primary: {},
      secondary: {},
      info: {},
      success: {},
      warning: {},
      error: {},
    },
    size: {
      xs: { base: 'h-6 px-1 gap-0.5 text-xs' },
      sm: { base: 'h-7 px-2 gap-1 text-sm' },
      md: { base: 'h-8 px-3 gap-1.5 text-base' },
      lg: { base: 'h-9 px-3 gap-2 text-lg' },
      xl: { base: 'h-10 px-3 gap-2.5 text-xl' },
    },
    disabled: {
      true: { base: 'opacity-65 cursor-not-allowed pointer-events-none' },
    },
  },
  compoundVariants: [
    {
      variant: 'filled',
      color: 'default',
      class: {
        base: 'bg-default text-default-foreground hover:bg-default/90',
      },
    },
    {
      variant: 'filled',
      color: 'primary',
      class: { base: 'bg-primary text-primary-foreground hover:bg-primary/90' },
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: { base: 'bg-secondary text-secondary-foreground hover:bg-secondary/90' },
    },
    {
      variant: 'filled',
      color: 'info',
      class: { base: 'bg-info text-info-foreground hover:bg-info/90' },
    },
    {
      variant: 'filled',
      color: 'success',
      class: { base: 'bg-success text-success-foreground hover:bg-success/90' },
    },
    {
      variant: 'filled',
      color: 'warning',
      class: { base: 'bg-warning text-warning-foreground hover:bg-warning/90' },
    },
    {
      variant: 'filled',
      color: 'error',
      class: { base: 'bg-error text-error-foreground hover:bg-error/90' },
    },
    {
      variant: 'outlined',
      color: 'default',
      class: { base: 'text-default-foreground' },
    },
    {
      variant: 'outlined',
      color: 'primary',
      class: { base: 'text-primary' },
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class: { base: 'text-secondary' },
    },
    {
      variant: 'outlined',
      color: 'info',
      class: { base: 'text-info' },
    },
    {
      variant: 'outlined',
      color: 'success',
      class: { base: 'text-success' },
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: { base: 'text-warning' },
    },
    {
      variant: 'outlined',
      color: 'error',
      class: { base: 'text-error' },
    },
  ],
  defaultVariants: {
    variant: 'filled',
    color: 'default',
    size: 'md',
  },
})

export type InputVariantProps = VariantProps<typeof input>

export { input }
