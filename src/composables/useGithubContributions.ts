import { ref, onMounted } from 'vue'

export interface ContribDay {
  date: string
  count: number
  level: number
}

export interface MonthLabel {
  label: string
  week: number
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/**
 * Fetches the last year of GitHub contributions for `username` from the public,
 * CORS-enabled github-contributions-api (no token required) and arranges them
 * into a GitHub-style grid: a flat, column-major (week-by-week) list of day
 * cells plus month labels positioned by week.
 */
export function useGithubContributions(username: string) {
  const cells = ref<(ContribDay | null)[]>([])
  const months = ref<MonthLabel[]>([])
  const numWeeks = ref(0)
  const total = ref(0)
  const loading = ref(true)
  const error = ref(false)

  onMounted(async () => {
    try {
      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      )
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data: { contributions?: ContribDay[] } = await res.json()
      const days = data.contributions ?? []
      if (!days.length) throw new Error('no data')

      // Pad the start so day 0 lands on its real weekday (Sun = row 0).
      const startPad = new Date(`${days[0].date}T00:00:00`).getDay()
      const out: (ContribDay | null)[] = []
      for (let i = 0; i < startPad; i += 1) out.push(null)
      out.push(...days)
      while (out.length % 7 !== 0) out.push(null)

      const weeks = out.length / 7
      const monthLabels: MonthLabel[] = []
      let lastMonth = -1
      for (let w = 0; w < weeks; w += 1) {
        for (let r = 0; r < 7; r += 1) {
          const cell = out[w * 7 + r]
          if (cell) {
            const m = new Date(`${cell.date}T00:00:00`).getMonth()
            if (m !== lastMonth) {
              monthLabels.push({ label: MONTHS[m], week: w })
              lastMonth = m
            }
            break
          }
        }
      }

      cells.value = out
      months.value = monthLabels
      numWeeks.value = weeks
      total.value = days.reduce((sum, d) => sum + d.count, 0)
    } catch {
      error.value = true
    } finally {
      loading.value = false
    }
  })

  return { cells, months, numWeeks, total, loading, error }
}
