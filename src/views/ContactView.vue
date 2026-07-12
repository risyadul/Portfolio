<script setup lang="ts">
import { reactive } from 'vue'
import { profile } from '@/data/profile'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import TerminalWindow from '@/components/ui/TerminalWindow.vue'

const form = reactive({ name: '', email: '', message: '' })

function submit(): void {
  const subject = encodeURIComponent(`Portfolio message from ${form.name || 'someone'}`)
  const body = encodeURIComponent(`${form.message}\n\n— ${form.name} <${form.email}>`)
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
}
</script>

<template>
  <div>
    <SectionHeader
      path="contact"
      title="Let's build something"
      meta="usually replies within a day"
    />

    <div class="mt-8 grid gap-5 lg:grid-cols-[1fr_1.1fr]">
      <!-- contact.json -->
      <TerminalWindow title="contact.json" badge="json">
        <div class="font-mono text-[13.5px] leading-[1.75]">
          <div>{</div>
          <div class="syn-indent"><span class="syn-kw">"email"</span>: <span class="syn-str">"{{ profile.email }}"</span>,</div>
          <div class="syn-indent"><span class="syn-kw">"phone"</span>: <span class="syn-str">"{{ profile.phone }}"</span>,</div>
          <div class="syn-indent"><span class="syn-kw">"location"</span>: <span class="syn-str">"{{ profile.location }}"</span>,</div>
          <div class="syn-indent"><span class="syn-kw">"github"</span>: <span class="syn-str">"github.com/{{ profile.handle }}"</span>,</div>
          <div class="syn-indent"><span class="syn-kw">"status"</span>: <span class="syn-str">"open to opportunities"</span></div>
          <div>}</div>

          <div class="mt-5 flex flex-wrap gap-3">
            <a :href="`mailto:${profile.email}`" class="btn btn-primary">
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Email me
            </a>
            <a :href="profile.linkedin" target="_blank" rel="noopener" class="btn btn-outline">LinkedIn</a>
          </div>
        </div>
      </TerminalWindow>

      <!-- Message form -->
      <div class="surface-card p-6 sm:p-7">
        <form class="flex flex-col gap-4" @submit.prevent="submit">
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="flex flex-col gap-1.5">
              <label for="name" class="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Name</label>
              <input id="name" v-model="form.name" type="text" required placeholder="Your name" class="field-input" />
            </div>
            <div class="flex flex-col gap-1.5">
              <label for="email" class="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Email</label>
              <input id="email" v-model="form.email" type="email" required placeholder="you@example.com" class="field-input" />
            </div>
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="message" class="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Message</label>
            <textarea id="message" v-model="form.message" required rows="6" placeholder="What are you building?" class="field-input"></textarea>
          </div>
          <button type="submit" class="btn btn-primary py-3">
            Send message
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.field-input {
  width: 100%;
  padding: 0.7rem 0.85rem;
  border-radius: var(--radius-sm);
  border: 1px solid rgb(var(--line));
  background-color: rgb(var(--bg-2));
  color: rgb(var(--text));
  font-family: inherit;
  font-size: 14px;
  transition: border-color 0.2s var(--ease);
}
.field-input::placeholder {
  color: rgb(var(--faint));
}
.field-input:focus {
  outline: none;
  border-color: rgb(var(--accent));
}
</style>
