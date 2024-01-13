<script setup lang="ts">
import { AccordionContent, type AccordionContentProps } from 'radix-vue'
import { Card } from '../Card'
import { tv } from 'tailwind-variants'

export interface Props extends AccordionContentProps {
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
    :class="classes()"
  >
    <Card>
      <slot>{{ content }}</slot>
    </Card>
  </AccordionContent>
</template>
