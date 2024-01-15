<script setup lang="ts">
import { AvatarFallback, type AvatarFallbackProps } from 'radix-vue'
import { tv } from 'tailwind-variants'
import type { PrimitiveProps } from '../Primitive'

export interface Props extends AvatarFallbackProps, PrimitiveProps {}

const props = defineProps<Props>()

const classes = tv({
  base: '',
})
</script>

<template>
  <AvatarFallback
    v-bind="props"
    :class="classes({ class: props.class })"
  >
    <slot />
  </AvatarFallback>
</template>
