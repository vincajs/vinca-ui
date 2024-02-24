<script setup lang="ts">
import { useForwardProps } from 'radix-vue'
import { Primitive, type PrimitiveProps } from '../Primitive'
import { useUI } from '#ui/composables/useUI'
import type { NuxtLinkProps } from 'nuxt/app'

export interface Props extends NuxtLinkProps, PrimitiveProps {
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'NuxtLink',
})

const { ui } = useUI('link', props.ui)

const forwarded = useForwardProps(props)
</script>

<template>
  <NuxtLink
    v-if="as === 'NuxtLink'"
    v-bind="forwarded"
    :class="ui({ disabled, class: props.class })"
  >
    <slot />
  </NuxtLink>
  <Primitive
    v-else
    v-bind="forwarded"
  >
    <slot />
  </Primitive>
</template>
