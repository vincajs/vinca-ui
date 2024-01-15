<script lang="ts" setup="">

</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4">
      <h1>Default</h1>
      <div class="flex items-center gap-4">
        <VAvatar size="xs">
          Avatar
        </VAvatar>
        <VAvatar size="sm">
          Avatar
        </VAvatar>
        <VAvatar>
          Avatar
        </VAvatar>
        <VAvatar size="lg">
          Avatar
        </VAvatar>
        <VAvatar size="xl">
          Avatar
        </VAvatar>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h1>Shape</h1>
      <div class="flex items-center gap-4">
        <VAvatar
          size="xs"
          shape="square"
        >
          Avatar
        </VAvatar>
        <VAvatar
          size="sm"
          shape="square"
        >
          Avatar
        </VAvatar>
        <VAvatar shape="square">
          Avatar
        </VAvatar>
        <VAvatar
          size="lg"
          shape="square"
        >
          Avatar
        </VAvatar>
        <VAvatar
          size="xl"
          shape="square"
        >
          Avatar
        </VAvatar>
      </div>
    </div>
  </div>
</template>
