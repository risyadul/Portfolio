<script setup lang="ts">
/**
 * Section header with a monospace "command line" eyebrow and a display title.
 * `path` is shown as a shell path (e.g. ~/projects); `meta` is optional
 * right-aligned mono text (e.g. a count).
 */
defineProps<{
  path: string
  title: string
  meta?: string
}>()
</script>

<template>
  <header class="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
    <div>
      <p class="flex items-center gap-1.5 font-mono text-xs text-accent-ink">
        <span class="text-faint">~/</span>{{ path }}
      </p>
      <h1 class="mt-3 font-display text-display font-semibold text-text text-balance">
        {{ title }}
      </h1>
    </div>
    <p v-if="meta" class="font-mono text-xs text-faint">{{ meta }}</p>
  </header>
</template>
