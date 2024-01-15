<script setup lang="ts">
import { AvatarImage, type AvatarImageProps } from 'radix-vue'
import { tv } from 'tailwind-variants'
import type { PrimitiveProps } from '../Primitive'

export interface Props extends AvatarImageProps, PrimitiveProps {}

const props = defineProps<Props>()

const classes = tv({
  base: 'h-full w-full object-cover',
})
</script>

<template>
  <AvatarImage
    v-bind="props"
    :class="classes({ class: props.class })"
  />
</template>
