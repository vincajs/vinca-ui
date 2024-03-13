<script setup lang="ts">
import type { PrimitiveProps } from '../Primitive'
import { useUI } from '../../composables/useUI'

export interface Props extends PrimitiveProps {
  name: string
}

const props = defineProps<Props>()

const { classes, pickedProps } = useUI('Icon', props)
</script>

<template>
  <span
    v-bind="pickedProps"
    :class="[name, classes]"
  />
</template>
