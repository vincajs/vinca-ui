<script lang="ts" setup>
import { CollapsibleTrigger, useForwardProps } from 'radix-vue'
import type { CollapsibleTriggerProps } from 'radix-vue'
import { Button } from '../Button'
import { Icon } from '../Icon'

const props = defineProps<CollapsibleTriggerProps>()
const forwarded = useForwardProps(props)
</script>

<template>
  <CollapsibleTrigger
    v-bind="forwarded"
    as-child
  >
    <Button class="rounded-bl-0 rounded-br-0">
      <slot />
      <template #append>
        <slot name="icon">
          <Icon name="i-material-symbols:keyboard-arrow-down" />
        </slot>
      </template>
    </Button>
  </CollapsibleTrigger>
</template>
