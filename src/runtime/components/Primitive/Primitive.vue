<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue'

export interface Props extends PrimitiveProps {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <Primitive v-bind="props">
    <slot />
  </Primitive>
</template>
