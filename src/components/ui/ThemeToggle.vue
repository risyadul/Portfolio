<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { theme, toggle } = useTheme()
</script>

<template>
  <button
    type="button"
    :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
    :aria-pressed="theme === 'dark'"
    class="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors duration-200 hover:border-accent/60 hover:text-text"
    @click="toggle"
  >
    <svg
      v-if="theme === 'dark'"
      class="h-3.5 w-3.5 text-accent"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
    <svg
      v-else
      class="h-3.5 w-3.5 text-accent-ink"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
    <span>{{ theme }}</span>
  </button>
</template>
