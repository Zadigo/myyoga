import { mountSuspended } from "@nuxt/test-utils/runtime"
import { describe, expect, it } from "vitest"
import BaseHero from "../../app/components/BaseHero.vue"

describe('Hero Component', () => {
  it ('should have the expected structure', async () => {
    const component = await mountSuspended(BaseHero)
    const pageTitle = component.get('h1')

    expect(pageTitle).toBeDefined()
  
    // Check that we have three call to actions
    const ctas = component.findAll(`[id^="cta-"]`)
    expect(ctas.length).toBe(3)

    ctas.forEach((item) => {
      expect(item.element.tagName).toBe('A')
      expect(item.attributes('href')).not.toBe('')
    })

    // Check that we have a video element
    const videoEl = component.get('video')
    expect(videoEl).toBeDefined()

    // Video should have autoplay, loop and muted attributes
    expect(videoEl.attributes('autoplay')).toBeDefined()
    expect(videoEl.attributes('loop')).toBeDefined()
    expect(videoEl.attributes('muted')).toBeDefined()
  })
})
