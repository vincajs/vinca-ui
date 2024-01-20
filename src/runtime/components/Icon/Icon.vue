<script setup lang="ts">
import type { PrimitiveProps } from '../Primitive'
import { useUI } from '#ui/composables/useUI'

export interface Props extends PrimitiveProps {
  name: string
  dynamic?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  dynamic: false,
})

const { ui } = useUI('icon', props.ui)
</script>

<template>
  <Icon
    v-if="dynamic"
    :name="name"
    :class="ui({ class: props.class })"
  />
  <span
    v-else
    :class="ui({ class: `${name} ${props.class}` })"
  />
</template>
