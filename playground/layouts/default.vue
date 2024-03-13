<script lang="ts" setup="">
const navs = [
  { to: '/', text: 'Home' },
  { to: '/link', text: 'Link' },
  { to: '/icon', text: 'Icon' },
  { to: '/button', text: 'Button' },
]
</script>

<template>
  <div class="flex w-full">
    <aside class="bg-base-200 flex h-full w-56 flex-col">
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
