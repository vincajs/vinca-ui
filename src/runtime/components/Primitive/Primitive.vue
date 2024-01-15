<script setup lang="ts">
import { tv } from 'tailwind-variants'
import { Primitive, type PrimitiveProps } from 'radix-vue'

export interface Props extends PrimitiveProps {
  class?: string
}

const props = defineProps<Props>()

const classes = tv({
  base: 'bg-base',
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
