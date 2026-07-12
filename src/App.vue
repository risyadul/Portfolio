<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { profile } from '@/data/profile'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'

interface NavLink {
  label: string
  to: string
  idx: string
  path: string
}

const links: NavLink[] = [
  { label: 'Home', to: '/', idx: '01', path: '~/' },
  { label: 'Projects', to: '/projects', idx: '02', path: '~/projects' },
  { label: 'Experience', to: '/experience', idx: '03', path: '~/experience' },
  { label: 'Contact', to: '/contact', idx: '04', path: '~/contact' },
]

const isMenuOpen = ref(false)
</script>

<template>
  <div class="lg:grid lg:grid-cols-[17rem_1fr]">
    <!-- Mobile top bar -->
    <header class="flex items-center justify-between border-b border-line bg-bg-2 px-5 py-4 lg:hidden">
      <RouterLink to="/" class="font-display text-lg font-bold tracking-tight">
        {{ profile.name }}
      </RouterLink>
      <div class="flex items-center gap-3">
        <ThemeToggle />
        <button
          type="button"
          class="text-muted transition-colors hover:text-text"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 7h16M4 12h16M4 17h16"
            />
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </header>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <nav v-show="isMenuOpen" class="flex flex-col gap-1 border-b border-line bg-bg-2 px-4 py-4 lg:hidden">
        <RouterLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="flex items-center gap-2.5 rounded-[10px] border border-transparent px-3 py-2.5 font-mono text-[13px] text-muted transition-all hover:bg-surface hover:text-text"
          :class="{ 'border-line-2 bg-surface text-text': $route.path === l.to }"
          @click="isMenuOpen = false"
        >
          <span class="text-[11px]" :class="$route.path === l.to ? 'text-accent-ink' : 'text-faint'">
            {{ l.idx }}
          </span>
          {{ l.path }}
        </RouterLink>
      </nav>
    </transition>

    <!-- Desktop sidebar -->
    <aside
      class="sticky top-0 hidden h-screen flex-col gap-8 border-r border-line bg-bg-2 px-6 py-8 lg:flex"
    >
      <div class="flex flex-col gap-2.5">
        <RouterLink to="/" class="font-display text-xl font-bold leading-tight tracking-tight">
          {{ profile.name }}
        </RouterLink>
        <span v-if="profile.available" class="flex items-center gap-2 font-mono text-[11px] text-muted">
          <span class="h-[7px] w-[7px] rounded-full bg-accent animate-pulse-ring"></span>
          available for work
        </span>
      </div>

      <nav class="flex flex-col gap-0.5">
        <RouterLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="flex items-center gap-2.5 rounded-[10px] border border-transparent px-3 py-2.5 font-mono text-[13px] text-muted transition-all duration-200 hover:bg-surface hover:text-text"
          :class="{ 'border-line-2 bg-surface text-text': $route.path === l.to }"
        >
          <span class="text-[11px]" :class="$route.path === l.to ? 'text-accent-ink' : 'text-faint'">
            {{ l.idx }}
          </span>
          {{ l.path }}
        </RouterLink>
      </nav>

      <div class="mt-auto flex flex-col gap-4">
        <div class="flex gap-2">
          <a
            :href="profile.github"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            class="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-line text-muted transition-all hover:border-accent hover:text-text"
          >
            <svg class="h-[17px] w-[17px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/></svg>
          </a>
          <a
            :href="profile.linkedin"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            class="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-line text-muted transition-all hover:border-accent hover:text-text"
          >
            <svg class="h-[17px] w-[17px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77c1.4-2.59 7-2.78 7 2.48V19z"/></svg>
          </a>
          <a
            :href="`mailto:${profile.email}`"
            aria-label="Email"
            class="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-line text-muted transition-all hover:border-accent hover:text-text"
          >
            <svg class="h-[17px] w-[17px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </a>
        </div>
        <ThemeToggle class="self-start" />
      </div>
    </aside>

    <!-- Main content -->
    <main class="mx-auto w-full max-w-[1100px] px-5 py-12 lg:px-14 lg:py-16">
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in" appear>
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.35s var(--ease),
    transform 0.35s var(--ease);
}
.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
