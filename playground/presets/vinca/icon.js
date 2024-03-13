import { tv } from 'tailwind-variants'

export default {
  Icon: ({ props }) => {
    const classes = tv({
      base: '',
      variants: {
        disabled: {
          true: 'pointer-events-none cursor-not-allowed',
        },
      },
    })

    return classes({ disabled: props.disabled })
  },
}
