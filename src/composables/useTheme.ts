import { ref, watch } from 'vue'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function getInitialTheme(): Theme {
  // The inline script in index.html has already resolved and applied the
  // theme class before paint; mirror that so there is no mismatch.
  if (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) {
    return 'dark'
  }
  return 'light'
}

// Module-level singleton so every component shares one reactive source.
const theme = ref<Theme>(getInitialTheme())

function applyTheme(next: Theme): void {
  const root = document.documentElement
  root.classList.toggle('dark', next === 'dark')
  root.style.colorScheme = next
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // Storage may be unavailable (private mode); the class change still applies.
  }
}

watch(theme, applyTheme)

export function useTheme() {
  function toggle(): void {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  function setTheme(next: Theme): void {
    theme.value = next
  }

  return { theme, toggle, setTheme }
}
