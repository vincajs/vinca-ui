<script lang="ts" setup="">
const navs = [
  { to: '/', text: 'Home' },
  { to: '/link', text: 'Link' },
  { to: '/icon', text: 'Icon' },
  { to: '/button', text: 'Button' },
  { to: '/accordion', text: 'Accordion' },
  { to: '/avatar', text: 'Avatar' },
  { to: '/checkbox', text: 'Checkbox' },
  { to: '/collapsible', text: 'Collapsible' },
  { to: '/combobox', text: 'Combobox' },
  { to: '/input', text: 'Input' },
]
</script>

<template>
  <div class="w-full flex">
    <aside class="h-full w-56 flex flex-col bg-base-200">
      <VLink
        v-for="nav in navs"
        class="px-4 py-2"
        :to="nav.to"
      >
        {{ nav.text }}
      </VLink>
    </aside>
    <div class="flex-1">
      <header class="w-full bg-base-200 p-4">
        header
      </header>
      <main class="p-4">
        <slot />
      </main>
    </div>
  </div>
</template>
