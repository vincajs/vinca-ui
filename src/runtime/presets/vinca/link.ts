import { tv } from '#ui/utils/tv'

export default tv({
  base: '',
  variants: {
    disabled: {
      true: 'cursor-not-allowed pointer-events-none',
    },
  },
})
