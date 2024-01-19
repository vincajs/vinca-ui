<script setup>
import { presetUno } from 'unocss'

const colors = presetUno().theme.colors
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  body {
    background-color: theme('colors.light.1');
    color: theme('colors.dark.9');
  }

  .dark body {
    background-color: theme('colors.dark.1');
    color: theme('colors.light.9');
  }
</style>
