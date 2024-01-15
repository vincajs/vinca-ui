<script setup lang="ts">
import type { PrimitiveProps } from '../Primitive'
import { tv } from 'tailwind-variants'

export interface Props extends PrimitiveProps {
  name: string
  dynamic?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  dynamic: false,
})

const classes = tv({
  base: 'icon',
})
</script>

<template>
  <Icon
    v-if="dynamic"
    :name="name"
    :class="classes({ class: props.class })"
  />
  <span
    v-else
    :class="classes({ class: `${name} ${props.class}` })"
  />
</template>
