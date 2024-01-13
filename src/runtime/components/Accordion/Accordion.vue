<script setup lang="ts">
import { tv } from 'tailwind-variants'
import { AccordionRoot, type AccordionRootProps } from 'radix-vue'
import { AccordionItem, type AccordionItemProps } from '../Accordion'

export interface Props extends AccordionRootProps {
  items: Array<AccordionItemProps>
}

const props = withDefaults(defineProps<Props>(), {
  type: 'single',
  collapsible: true,
})

const classes = tv({
  base: 'divide-y divide-base-1',
})
</script>

<template>
  <AccordionRoot
    v-bind="props"
    :class="classes()"
  >
    <slot>
      <AccordionItem
        v-for="item in items"
        :value="item.value"
        :title="item.title"
        :content="item.content"
      />
    </slot>
  </AccordionRoot>
</template>
