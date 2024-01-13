<script lang="ts" setup="">
const navs = [
  { to: '/', text: 'Home' },
  { to: '/link', text: 'Link' },
  { to: '/icon', text: 'Icon' },
  { to: '/button', text: 'Button' },
  { to: '/collapse', text: 'Collapse' },
  { to: '/accordion', text: 'Accordion' },
]
</script>

<template>
  <div class="w-full flex">
    <aside class="bg-base-200 h-full w-56 flex flex-col">
      <VLink
        v-for="nav in navs"
        class="px-4 py-2"
        :to="nav.to"
      >
        {{ nav.text }}
      </VLink>
    </aside>
    <div class="flex-1">
      <header class="bg-base-200 w-full p-4">
        header
      </header>
      <main class="p-4">
        <slot />
      </main>
    </div>
  </div>
</template>
