<script setup lang="ts">
import type { CollapsibleContentProps } from 'radix-vue'
import { CollapsibleContent } from 'radix-vue'
import { tv } from 'tailwind-variants'
import { Card } from '../Card'
import type { PrimitiveProps } from '../Primitive'

export interface Props extends CollapsibleContentProps, PrimitiveProps {
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
    :class="classes({ class: props.class })"
  >
    <Card>
      <slot>{{ content }}</slot>
    </Card>
  </CollapsibleContent>
</template>
