<script setup lang="ts">
import { AccordionItem, type AccordionItemProps } from 'radix-vue'
import { AccordionContent, type AccordionContentProps, AccordionTrigger, type AccordionTriggerProps } from '../Accordion'
import { tv } from 'tailwind-variants'

export interface Props extends AccordionItemProps, AccordionTriggerProps, AccordionContentProps {}

const props = defineProps<Props>()

const classes = tv({
  base: [
    'overflow-hidden first:rounded-t last:rounded-b',
  ],
})
</script>

<template>
  <AccordionItem
    v-bind="props"
    :class="classes({ class: props.class })"
  >
    <slot
      v-if="title"
      name="trigger"
    >
      <AccordionTrigger>{{ title }}</AccordionTrigger>
    </slot>
    <slot
      v-if="content"
      name="content"
    >
      <AccordionContent>{{ content }}</AccordionContent>
    </slot>
    <slot />
  </AccordionItem>
</template>
