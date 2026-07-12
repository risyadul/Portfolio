<script setup lang="ts">
/**
 * A dark terminal/IDE window. Stays dark in both themes so code-like content
 * reads as code. Provide a `title` (path shown in the title bar) and a `badge`
 * (right-aligned label, e.g. the shell or file type).
 */
defineProps<{
  title?: string
  badge?: string
}>()
</script>

<template>
  <div class="term-surface overflow-hidden rounded-[var(--radius)] shadow-card">
    <div class="flex items-center gap-2 border-b border-term-line px-4 py-3">
      <span class="flex gap-1.5" aria-hidden="true">
        <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
        <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
        <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
      </span>
      <span v-if="title" class="ml-2 truncate font-mono text-xs text-term-muted">{{ title }}</span>
      <span
        v-if="badge"
        class="ml-auto shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-term-muted"
      >
        {{ badge }}
      </span>
    </div>
    <div class="p-5 sm:p-6">
      <slot />
    </div>
  </div>
</template>
