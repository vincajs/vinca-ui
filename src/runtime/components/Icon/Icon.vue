<script setup lang="ts">
export interface Props {
  name: string
  dynamic?: boolean
}
withDefaults(defineProps<Props>(), {
  dynamic: false,
})
</script>

<template>
  <Icon
    v-if="dynamic"
    :name="name"
  />
  <span
    v-else
    :class="name"
  />
</template>
