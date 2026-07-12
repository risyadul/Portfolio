<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2/60 px-2.5 py-1 font-mono text-xs text-muted transition-colors duration-200 hover:border-accent/50 hover:text-text"
  >
    <span class="h-1 w-1 rounded-full bg-accent/70" aria-hidden="true"></span>
    {{ label }}
  </span>
</template>
