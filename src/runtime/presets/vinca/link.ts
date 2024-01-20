import type { VariantProps } from '#ui/utils/tv'
import { tv } from '#ui/utils/tv'

const link = tv({
  base: '',
  variants: {
    disabled: {
      true: 'cursor-not-allowed pointer-events-none',
    },
  },
})

export type LinkVariantProps = VariantProps<typeof link>

export { link }
