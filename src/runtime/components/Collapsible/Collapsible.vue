<script setup lang="ts">
import {
  CollapsibleRoot,
  type CollapsibleRootEmits,
  type CollapsibleRootProps,
  useForwardPropsEmits,
} from 'radix-vue'

export interface Props extends CollapsibleRootProps {}

const props = defineProps<Props>()

const emit = defineEmits<CollapsibleRootEmits>()

const forwarded = useForwardPropsEmits(props, emit)
</script>

<template>
  <CollapsibleRoot v-bind="forwarded">
    <slot />
  </CollapsibleRoot>
</template>
