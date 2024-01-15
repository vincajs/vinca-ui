<script setup lang="ts">
import { CollapsibleRoot, type CollapsibleRootEmits, type CollapsibleRootProps, useForwardPropsEmits } from 'radix-vue'
import type { PrimitiveProps } from '../Primitive'
import { tv } from 'tailwind-variants'

export interface Props extends CollapsibleRootProps, PrimitiveProps {}

const props = defineProps<Props>()

const emit = defineEmits<CollapsibleRootEmits>()

const forwarded = useForwardPropsEmits(props, emit)

const classes = tv({
  base: '',
})
</script>

<template>
  <CollapsibleRoot
    v-bind="forwarded"
    :class="classes({ class: props.class })"
  >
    <slot />
  </CollapsibleRoot>
</template>
