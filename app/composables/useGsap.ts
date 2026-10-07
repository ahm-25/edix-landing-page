import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { onMounted, onBeforeUnmount, type Ref } from 'vue'

export { gsap, ScrollTrigger, SplitText }

type AnimTarget = gsap.TweenTarget

export interface GsapSetupContext {
  ctx: gsap.Context
  isDesktop: boolean
}

/**
 * Runs `setup` on mount inside a gsap.matchMedia scoped to `scope`.
 * Animations only run when the user has not requested reduced motion,
 * and everything (tweens, ScrollTriggers, splits) is reverted on unmount.
 */
export function useGsap(
  scope: Ref<HTMLElement | null>,
  setup: (context: GsapSetupContext) => void | (() => void)
) {
  let mm: gsap.MatchMedia | undefined

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText)
    mm = gsap.matchMedia(scope.value ?? undefined)
    mm.add(
      {
        motion: '(prefers-reduced-motion: no-preference)',
        desktop: '(min-width: 1024px)'
      },
      (ctx) => {
        const { motion, desktop } = ctx.conditions as { motion: boolean, desktop: boolean }
        if (!motion) return
        return setup({ ctx, isDesktop: desktop })
      }
    )
  })

  onBeforeUnmount(() => mm?.revert())
}

/**
 * Fade/slide elements in once when they scroll into view.
 * Temporarily disables CSS transitions so Tailwind `transition-all`
 * hover styles don't fight the GSAP tween, then clears inline styles.
 */
export function revealOnScroll(
  targets: AnimTarget,
  vars: gsap.TweenVars = {},
  trigger?: gsap.DOMTarget
) {
  const els = gsap.utils.toArray<HTMLElement>(targets)
  if (!els.length) return

  gsap.set(els, { transition: 'none' })
  return gsap.from(els, {
    autoAlpha: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.12,
    clearProps: 'transform,opacity,visibility,transition',
    ...vars,
    scrollTrigger: {
      trigger: trigger ?? els[0],
      start: 'top 85%',
      once: true
    }
  })
}
