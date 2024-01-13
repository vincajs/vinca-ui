<script lang="ts" setup>
import { CollapsibleContent } from 'radix-vue'
import type { CollapsibleContentProps } from 'radix-vue'
import { tv } from 'tailwind-variants'

export interface Props extends CollapsibleContentProps {}

const props = defineProps<Props>()

const classes = tv({
  base: 'bg-base',
})
</script>

<template>
  <CollapsibleContent
    v-bind="props"
    :class="classes()"
  >
    <slot />
  </CollapsibleContent>
</template>
