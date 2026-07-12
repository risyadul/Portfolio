<script setup lang="ts">
import type { Experience } from '@/data/experience'
import TechChip from '@/components/ui/TechChip.vue'

defineProps<{ exp: Experience; isLast?: boolean }>()

const isSub = (line: string): boolean => line.trimStart().startsWith('•')
</script>

<template>
  <div class="grid grid-cols-[20px_1fr] gap-5 pb-9">
    <!-- Rail -->
    <div class="flex flex-col items-center">
      <span
        class="mt-1 h-3.5 w-3.5 shrink-0 rounded-full border-2"
        :class="exp.current ? 'animate-pulse-ring border-accent bg-accent' : 'border-line-2 bg-bg'"
      ></span>
      <span v-if="!isLast" class="mt-1.5 w-0.5 flex-1 bg-line"></span>
    </div>

    <!-- Content -->
    <div>
      <div class="flex flex-wrap items-center justify-between gap-2">
        <span class="font-mono text-xs text-accent-ink">{{ exp.period }}</span>
        <span class="badge">{{ exp.location }}</span>
      </div>

      <h3 class="mt-1.5 font-display text-lg font-semibold tracking-tight">{{ exp.role }}</h3>
      <p class="text-[14px] text-muted">{{ exp.company }}</p>

      <div class="surface-card mt-3.5 p-5">
        <ul class="flex flex-col gap-2">
          <li
            v-for="a in exp.achievements"
            :key="a"
            class="text-[14px] leading-snug text-muted"
            :class="isSub(a) ? 'pl-[26px] text-[13px] text-faint' : 'flex gap-2.5'"
          >
            <svg
              v-if="!isSub(a)"
              class="mt-1 h-[15px] w-[15px] shrink-0 text-accent-ink"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M20 6L9 17l-5-5" />
            </svg>
            <span>{{ a }}</span>
          </li>
        </ul>

        <div class="mt-4 flex flex-wrap gap-2">
          <TechChip v-for="tech in exp.technologies" :key="tech" :label="tech" />
        </div>
      </div>
    </div>
  </div>
</template>
