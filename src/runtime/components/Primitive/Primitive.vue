<script setup lang="ts">
import { type TV, type TVReturnType, type TVVariants, tv } from 'tailwind-variants'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import type { TVConfig } from 'tailwind-variants/dist/config'

export interface Props extends PrimitiveProps {
  class?: string
  ui?: any
}

const props = defineProps<Props>()

const classes = tv({
  base: 'bg-default',
})
</script>

<template>
  <Primitive
    v-bind="props"
    :class="classes()"
  >
    <slot />
  </Primitive>
</template>
