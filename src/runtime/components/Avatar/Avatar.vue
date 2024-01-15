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
  base: 'inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden',
  variants: {
    size: {
      sm: 'h-10 w-10 text-xs',
      base: 'h-16 w-16 text-2xl',
      lg: 'h-32 w-32 text-5xl',
    },
    shape: {
      circle: 'rounded-full',
      square: 'rounded-md',
    },
  },
  defaultVariants: {
    shape: 'circle',
    size: 'sm',
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
