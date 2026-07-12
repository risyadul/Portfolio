<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { profile, skillGroups } from '@/data/profile'
import TerminalWindow from '@/components/ui/TerminalWindow.vue'
import ContributionsSection from '@/components/ContributionsSection.vue'

const avatar = `${import.meta.env.BASE_URL}images/profile.jpg`
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="grid items-stretch gap-6 lg:grid-cols-[1.55fr_1fr]">
      <TerminalWindow title="risyadul@portfolio: ~" badge="zsh">
        <div class="font-mono text-[13.5px] leading-[1.75]">
          <p class="text-term-muted"><span class="text-accent">risyadul@portfolio</span> ~ % whoami</p>

          <h1
            class="my-3.5 font-display text-[clamp(2.5rem,1rem+6vw,4.5rem)] font-bold leading-[0.94] tracking-[-0.03em] text-term-text"
          >
            {{ profile.name
            }}<span
              class="ml-1 inline-block h-[0.62em] w-[9px] translate-y-[1px] bg-accent align-baseline animate-blink"
              aria-hidden="true"
            ></span>
          </h1>

          <p class="text-term-text">
            &gt; Software Engineer <span class="text-accent-ink">· {{ profile.tagline }}</span>
          </p>

          <div class="mt-3.5 leading-[1.95] text-[12.5px] text-term-muted">
            <p>&gt; location&nbsp;&nbsp;<span class="text-term-text">{{ profile.location }}</span></p>
            <p>&gt; email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-term-text">{{ profile.email }}</span></p>
            <p>&gt; uptime&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-term-text">{{ profile.yearsExperience }}+ years shipping production apps</span></p>
          </div>

          <div class="mt-6 flex flex-wrap gap-3">
            <RouterLink to="/projects" class="btn btn-primary">
              View Projects
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </RouterLink>
            <a :href="profile.github" target="_blank" rel="noopener" class="btn btn-outline">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" /></svg>
              GitHub
            </a>
          </div>
        </div>
      </TerminalWindow>

      <div
        class="flex flex-col items-center justify-center gap-3.5 rounded-[var(--radius)] border border-line bg-surface p-6"
      >
        <img
          :src="avatar"
          alt="Portrait of Risyadul Alim"
          width="150"
          height="150"
          class="avatar-portrait"
        />
        <span class="font-mono text-[11px] text-faint">~/risyadul.jpg</span>
      </div>
    </section>

    <!-- About -->
    <section v-reveal class="mt-16">
      <header class="border-b border-line pb-5">
        <p class="font-mono text-xs text-accent-ink"><span class="text-faint">~/</span>about</p>
        <h2 class="mt-3 font-display text-display font-semibold text-balance">
          Building across the stack, shipped to stores
        </h2>
      </header>
      <div class="surface-card mt-6 p-6 sm:p-8">
        <div class="flex max-w-[70ch] flex-col gap-4 text-[15px] leading-relaxed text-muted text-pretty">
          <p v-for="para in profile.about" :key="para">{{ para }}</p>
        </div>
      </div>
    </section>

    <!-- Skills as build.gradle.kts -->
    <section v-reveal class="mt-16">
      <header class="border-b border-line pb-5">
        <p class="font-mono text-xs text-accent-ink"><span class="text-faint">~/</span>skills</p>
        <h2 class="mt-3 font-display text-display font-semibold">build.gradle.kts</h2>
      </header>
      <div class="mt-6">
        <TerminalWindow title="build.gradle.kts" badge="kotlin">
          <div class="overflow-x-auto">
            <div class="min-w-max font-mono text-[13px] leading-[1.8]">
              <div><span class="syn-kw">dependencies</span> {</div>
              <template v-for="(group, gi) in skillGroups" :key="group.name">
                <div class="syn-indent syn-cmt" :class="{ 'mt-2.5': gi > 0 }">// {{ group.name }}</div>
                <div class="syn-indent">
                  <span class="syn-fn">implementation</span>(<template
                    v-for="(item, ii) in group.items"
                    :key="item"
                    ><span class="syn-str">"{{ item }}"</span><span v-if="ii < group.items.length - 1">, </span></template
                  >)
                </div>
              </template>
              <div>}</div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>

    <!-- GitHub contributions -->
    <ContributionsSection v-reveal class="mt-16" />
  </div>
</template>

<style scoped>
.avatar-portrait {
  height: 150px;
  width: 150px;
  border-radius: 20px;
  object-fit: cover;
  border: 1px solid rgb(var(--line-2));
  box-shadow:
    0 0 0 4px rgb(var(--bg-2)),
    0 24px 48px -24px rgb(var(--accent) / 0.4);
}
</style>
