import { tv } from 'tailwind-variants'

export default {
  Button: ({ props }) => {
    const classes = tv({
      base: 'inline-flex shrink-0 items-center justify-center rounded transition-all active:translate-y-0.5',
      variants: {
        variant: {
          filled: '',
          outlined: 'border border-current bg-transparent',
          text: 'bg-transparent',
        },
        color: {
          default: '',
          primary: '',
          secondary: '',
          info: '',
          success: '',
          warning: '',
          error: '',
        },
        size: {
          xs: 'h-6 gap-0.5 px-1 text-xs',
          sm: 'h-7 gap-1 px-2 text-sm',
          md: 'h-8 gap-1.5 px-3 text-base',
          lg: 'h-9 gap-2 px-4 text-lg',
          xl: 'h-10 gap-2.5 px-5 text-xl',
        },
        disabled: {
          true: 'pointer-events-none cursor-not-allowed opacity-65',
        },
        loading: {
          true: 'pointer-events-none cursor-not-allowed opacity-65',
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
    })

    return classes({
      variant: props.variant,
      color: props.color,
      size: props.size,
      disabled: props.disabled,
      loading: props.loading,
    })
  },
}
