<script setup lang="ts">
import { AccordionContent, type AccordionContentProps } from 'radix-vue'
import { Card } from '../Card'
import { tv } from 'tailwind-variants'
import type { PrimitiveProps } from '../Primitive'

export interface Props extends AccordionContentProps, PrimitiveProps {
  content?: string
}

const props = defineProps<Props>()

const classes = tv({
  base: [
    'overflow-hidden',
    'data-[state=open]:animate-accordion-down',
    'data-[state=closed]:animate-accordion-up',
  ],
})
</script>

<template>
  <AccordionContent
    v-bind="props"
    :class="classes({ class: props.class })"
  >
    <Card>
      <slot>{{ content }}</slot>
    </Card>
  </AccordionContent>
</template>
