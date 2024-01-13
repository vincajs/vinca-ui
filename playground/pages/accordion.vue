<script lang="ts" setup="">
const items = [
  {
    value: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'item-2',
    title: 'Is it unstyled?',
    content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.',
  },
  {
    value: 'item-3',
    title: 'Can it be animated?',
    content: 'Yes! You can use the transition prop to configure the animation.',
  },
]
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4">
      <h1>Custom</h1>
      <div class="w-full">
        <VAccordion>
          <VAccordionItem
            v-for="item in items"
            :value="item.value"
          >
            <VAccordionTrigger>{{ item.title }}</VAccordionTrigger>
            <VAccordionContent>content-{{ item.content }}</VAccordionContent>
          </VAccordionItem>
        </VAccordion>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h1>with item</h1>
      <div class="w-full">
        <VAccordion>
          <VAccordionItem
            v-for="item in items"
            :value="item.value"
            :title="item.title"
            :content="item.content"
          />
        </VAccordion>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h1>Items prop</h1>
      <div class="w-full">
        <VAccordion :items="items" />
      </div>
    </div>
  </div>
</template>
