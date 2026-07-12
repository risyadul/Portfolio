<script setup lang="ts">
import { computed } from 'vue'
import TerminalWindow from '@/components/ui/TerminalWindow.vue'
import { github } from '@/data/github'
import { useGithubContributions, type ContribDay } from '@/composables/useGithubContributions'

const { cells, months, numWeeks, total, loading, error } = useGithubContributions(github.username)

const PLACEHOLDER: (ContribDay | null)[] = Array.from({ length: 53 * 7 }, () => null)
const displayCells = computed(() => (loading.value || error.value ? PLACEHOLDER : cells.value))
const cols = computed(() => numWeeks.value || 53)

const heading = computed(() => {
  if (error.value) return 'GitHub contributions'
  if (loading.value) return 'Counting contributions…'
  return `${total.value.toLocaleString()} contributions this year`
})

function cellClass(cell: ContribDay | null): string {
  return cell ? `hcell lv${cell.level}` : 'hcell pad'
}
function cellTitle(cell: ContribDay | null): string {
  if (!cell) return ''
  return `${cell.count} contribution${cell.count === 1 ? '' : 's'} on ${cell.date}`
}
</script>

<template>
  <section>
    <header class="flex flex-wrap items-end justify-between gap-3 border-b border-line pb-5">
      <div>
        <p class="font-mono text-xs text-accent-ink"><span class="text-faint">~/</span>contributions</p>
        <h2 class="mt-3 font-display text-display font-semibold text-balance">{{ heading }}</h2>
      </div>
      <a
        :href="github.profileUrl"
        target="_blank"
        rel="noopener"
        class="font-mono text-xs text-faint transition-colors hover:text-accent-ink"
      >
        @{{ github.username }}
      </a>
    </header>

    <TerminalWindow title="risyadul@github: ~" badge="git" class="mt-6">
      <div class="font-mono text-[13px]">
        <p class="mb-4 text-term-muted">
          <span class="text-accent">{{ github.username }}@github</span> ~ % git log --calendar --year
        </p>
        <p v-if="error" class="mb-3 text-xs text-term-muted">
          // live graph unavailable —
          <a :href="github.profileUrl" target="_blank" rel="noopener" class="text-term-text underline">github.com/{{ github.username }}</a>
        </p>

        <div class="overflow-x-auto pb-1">
          <div class="cal-inner" :style="{ '--cols': cols }">
            <div class="months">
              <span v-for="m in months" :key="`${m.label}-${m.week}`" :style="{ gridColumn: m.week + 1 }">
                {{ m.label }}
              </span>
            </div>
            <div class="cal-row">
              <div class="days">
                <span></span><span>Mon</span><span></span><span>Wed</span><span></span><span>Fri</span><span></span>
              </div>
              <div class="cal-grid" :class="{ 'animate-pulse': loading }">
                <div v-for="(c, i) in displayCells" :key="i" :class="cellClass(c)" :title="cellTitle(c)"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="legend">
          Less
          <span class="hcell lv0"></span><span class="hcell lv1"></span><span class="hcell lv2"></span><span class="hcell lv3"></span><span class="hcell lv4"></span>
          More
        </div>
      </div>
    </TerminalWindow>

    <div class="mt-5 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
      <div class="surface-card p-[18px]">
        <div class="font-display text-[28px] font-bold tracking-tight text-accent-ink">
          {{ loading ? '—' : total.toLocaleString() }}
        </div>
        <div class="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">contributions</div>
      </div>
      <div v-for="slice in github.breakdown" :key="slice.label" class="surface-card p-[18px]">
        <div class="font-display text-[28px] font-bold tracking-tight">{{ slice.pct }}%</div>
        <div class="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{{ slice.label }}</div>
        <div class="mt-3 h-[5px] overflow-hidden rounded-full bg-line">
          <span class="block h-full rounded-full bg-accent" :style="{ width: `${slice.pct}%` }"></span>
        </div>
      </div>
    </div>

    <p class="mt-[18px] font-mono text-[12.5px] leading-relaxed text-muted">
      <span class="text-faint">// contributed to</span>
      <template v-for="(repo, i) in github.repos" :key="repo">
        <span class="text-accent-ink">{{ repo }}</span><span v-if="i < github.repos.length - 1">, </span>
      </template>
      <span class="text-faint"> and {{ github.otherReposCount }} other repositories</span>
    </p>
  </section>
</template>

<style scoped>
.cal-inner {
  min-width: max-content;
}
.months {
  display: grid;
  grid-template-columns: repeat(var(--cols), 13px);
  gap: 3px;
  padding-left: 30px;
  margin-bottom: 6px;
  font-family: var(--font-mono);
  font-size: 10px;
  color: rgb(var(--term-muted));
}
.months span {
  grid-row: 1;
  white-space: nowrap;
}
.cal-row {
  display: flex;
  gap: 8px;
}
.days {
  display: grid;
  grid-template-rows: repeat(7, 13px);
  gap: 3px;
  width: 22px;
  font-family: var(--font-mono);
  font-size: 9px;
  color: rgb(var(--term-muted));
}
.days span {
  line-height: 13px;
}
.cal-grid {
  display: grid;
  grid-template-rows: repeat(7, 13px);
  grid-auto-flow: column;
  grid-auto-columns: 13px;
  gap: 3px;
}
.hcell {
  width: 13px;
  height: 13px;
  border-radius: 3px;
}
.pad {
  background: transparent;
}
.lv0 {
  background: rgba(201, 242, 77, 0.06);
}
.lv1 {
  background: rgba(201, 242, 77, 0.24);
}
.lv2 {
  background: rgba(201, 242, 77, 0.45);
}
.lv3 {
  background: rgba(201, 242, 77, 0.7);
}
.lv4 {
  background: rgba(201, 242, 77, 1);
}
.legend {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 14px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: rgb(var(--term-muted));
}
.legend .hcell {
  width: 11px;
  height: 11px;
}
</style>
