<script setup lang="ts">
import { AccordionHeader, AccordionTrigger, type AccordionTriggerProps } from 'radix-vue'
import { Icon } from '../Icon'
import { classes as buttonClasses } from '../Button'
import { tv } from 'tailwind-variants'
import { reactiveOmit } from '@vueuse/core'

export interface Props extends AccordionTriggerProps {
  title?: string
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()

const classes = tv({
  extend: buttonClasses,
  base: [
    'flex-1 justify-between rounded-none',
    'data-[state=open]:(bg-base-300 hover:bg-base-300/90) active:(bg-base/85)',
  ],
})
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="{ ...props, ...reactiveOmit($attrs, 'class') }"
      class="flex-1 justify-between"
      :class="[classes({ class: $attrs.class as string })]"
    >
      <slot>{{ title }}</slot>
      <Icon name="i-material-symbols:keyboard-arrow-down" />
    </AccordionTrigger>
  </AccordionHeader>
</template>
