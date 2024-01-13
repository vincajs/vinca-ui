<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '../Primitive'
import { tv } from 'tailwind-variants'

export interface Props extends PrimitiveProps {}

const props = defineProps<Props>()

const classes = tv({
  base: 'px-4 py-2',
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
