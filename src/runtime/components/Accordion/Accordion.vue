<script setup lang="ts">
import { tv } from 'tailwind-variants'
import {
  AccordionRoot,
  type AccordionRootEmits,
  type AccordionRootProps,
  type CollapsibleRootEmits,
  useForwardPropsEmits,
} from 'radix-vue'
import { AccordionItem, type AccordionItemProps } from '../Accordion'
import { reactiveOmit } from '@vueuse/core'

export interface Props extends AccordionRootProps {
  items: Array<AccordionItemProps>
}

const props = withDefaults(defineProps<Props>(), {
  type: 'single',
  collapsible: true,
})
const emits = defineEmits<AccordionRootEmits>()

const forwarded = useForwardPropsEmits(reactiveOmit(props, 'items'), emits)

const classes = tv({
  base: 'divide-y divide-base-1',
})
</script>

<template>
  <AccordionRoot
    v-bind="forwarded"
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
