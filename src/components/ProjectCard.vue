<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '@/data/projects'
import TechChip from '@/components/ui/TechChip.vue'

const props = defineProps<{ project: Project }>()

type IconName = 'play' | 'globe' | 'apple' | 'github'
interface CardLink {
  label: string
  href: string
  icon: IconName
  primary: boolean
  disabled: boolean
}

const links = computed<CardLink[]>(() => {
  const p = props.project
  const out: CardLink[] = []
  if (p.demo && p.demo !== '#') {
    const soon = p.demo === 'playstore-soon'
    out.push({
      label: p.type === 'web' ? 'Visit Website' : soon ? 'Play Store (soon)' : 'View on Play Store',
      href: soon ? '#' : p.demo,
      icon: p.type === 'web' ? 'globe' : 'play',
      primary: true,
      disabled: soon,
    })
  }
  if (p.appstore && p.appstore !== '#') {
    const soon = p.appstore === 'appstore-soon'
    out.push({
      label: soon ? 'App Store (soon)' : 'View on App Store',
      href: soon ? '#' : p.appstore,
      icon: 'apple',
      primary: false,
      disabled: soon,
    })
  }
  if (p.github && p.github !== '#') {
    out.push({ label: 'Source', href: p.github, icon: 'github', primary: out.length === 0, disabled: false })
  }
  return out
})

const shownAchievements = computed(() => props.project.achievements.slice(0, 2))
const extraAchievements = computed(() => props.project.achievements.slice(2))
</script>

<template>
  <article
    class="surface-card group flex flex-col p-6 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift sm:p-7"
  >
    <div class="flex items-start justify-between gap-4">
      <h3 class="font-display text-xl font-semibold tracking-tight">{{ project.title }}</h3>
      <span v-if="project.type" class="badge shrink-0">
        <svg v-if="project.type === 'web'" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
        </svg>
        <svg v-else fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
        {{ project.type }}
      </span>
    </div>

    <p class="mt-3 text-[14px] leading-relaxed text-muted text-pretty">{{ project.description }}</p>

    <div class="mt-4 flex flex-wrap gap-2">
      <TechChip v-for="tech in project.technologies" :key="tech" :label="tech" />
    </div>

    <ul class="mt-5 flex flex-col gap-2.5">
      <li v-for="a in shownAchievements" :key="a" class="flex gap-2.5 text-[14px] leading-snug text-muted">
        <svg class="mt-1 h-[15px] w-[15px] shrink-0 text-accent-ink" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20 6L9 17l-5-5" />
        </svg>
        {{ a }}
      </li>
    </ul>

    <details v-if="extraAchievements.length" class="group/d mt-2">
      <summary
        class="ml-[25px] cursor-pointer list-none font-mono text-xs text-faint transition-colors hover:text-accent-ink"
      >
        + {{ extraAchievements.length }} more
        <span class="group-open/d:hidden">achievements</span>
      </summary>
      <ul class="mt-2.5 flex flex-col gap-2.5">
        <li v-for="a in extraAchievements" :key="a" class="flex gap-2.5 text-[14px] leading-snug text-muted">
          <svg class="mt-1 h-[15px] w-[15px] shrink-0 text-accent-ink" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20 6L9 17l-5-5" />
          </svg>
          {{ a }}
        </li>
      </ul>
    </details>

    <div v-if="links.length" class="mt-6 flex flex-wrap gap-3">
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.href"
        :target="link.disabled ? undefined : '_blank'"
        :rel="link.disabled ? undefined : 'noopener'"
        class="btn"
        :class="[link.primary ? 'btn-primary' : 'btn-outline', link.disabled ? 'pointer-events-none opacity-70' : '']"
        :aria-disabled="link.disabled"
      >
        <svg v-if="link.icon === 'play'" fill="currentColor" viewBox="0 0 24 24"><path d="M3.6 1.8L13.8 12 3.6 22.2a1 1 0 01-.6-.9V2.7a1 1 0 01.6-.9z" /></svg>
        <svg v-else-if="link.icon === 'globe'" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" /></svg>
        <svg v-else-if="link.icon === 'apple'" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
        <svg v-else fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" /></svg>
        {{ link.label }}
      </a>
    </div>
  </article>
</template>
