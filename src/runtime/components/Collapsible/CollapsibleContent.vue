<script setup lang="ts">
import { CollapsibleContent } from 'radix-vue'
import type { CollapsibleContentProps } from 'radix-vue'
import { tv } from 'tailwind-variants'
import { Card } from '../Card'

export interface Props extends CollapsibleContentProps {
  content?: string
}

const props = defineProps<Props>()

const classes = tv({
  base: [
    'overflow-hidden',
    'data-[state=open]:animate-collapsible-down',
    'data-[state=closed]:animate-collapsible-up',
  ],
})
</script>

<template>
  <CollapsibleContent
    v-bind="props"
    :class="classes()"
  >
    <Card>
      <slot>{{ content }}</slot>
    </Card>
  </CollapsibleContent>
</template>
