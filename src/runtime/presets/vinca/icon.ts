import type { VariantProps } from '#ui/utils/tv'
import { tv } from '#ui/utils/tv'

const icon = tv({
  base: 'icon',
})

export type IconVariantProps = VariantProps<typeof icon>

export { icon }
