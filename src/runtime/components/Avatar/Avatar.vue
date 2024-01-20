<script setup lang="ts">
import { AvatarRoot, type AvatarRootProps } from 'radix-vue'
import { type VariantProps, tv } from 'tailwind-variants'
import type { PrimitiveProps } from '../Primitive'

type Variants = VariantProps<typeof classes>

export interface Props extends AvatarRootProps, PrimitiveProps {
  size?: Variants['size']
  shape?: Variants['shape']
}

const props = defineProps<Props>()

const classes = tv({
  base: 'inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-default overflow-hidden',
  variants: {
    size: {
      xs: 'size-10 text-xs',
      sm: 'size-12 text-sm',
      md: 'size-14',
      lg: 'size-16 text-lg',
      xl: 'size-18 text-xl',
    },
    shape: {
      circle: 'rounded-full',
      square: 'rounded-md',
    },
  },
  defaultVariants: {
    shape: 'circle',
    size: 'md',
  },
})
</script>

<template>
  <AvatarRoot
    v-bind="props"
    :class="classes({ size, shape, class: props.class })"
  >
    <slot />
  </AvatarRoot>
</template>
