import type { Directive, DirectiveBinding } from 'vue'

interface RevealOptions {
  delay?: number
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * v-reveal — fades an element up once it scrolls into view.
 * Usage: v-reveal or v-reveal="{ delay: 120 }"
 * Respects prefers-reduced-motion by showing the final state immediately.
 */
export const vReveal: Directive<HTMLElement, RevealOptions | undefined> = {
  mounted(el: HTMLElement, binding: DirectiveBinding<RevealOptions | undefined>) {
    if (prefersReducedMotion()) {
      el.classList.add('is-visible')
      return
    }

    el.classList.add('reveal')
    const delay = binding.value?.delay
    if (delay) {
      el.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            obs.unobserve(el)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
  },
}
