import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import SimpleHeader from '../../app/components/base/Hero.vue'


describe('SimpleHeader', () => {
  it('renders properly', async () => {
    const wrapper = await mountSuspended(SimpleHeader, {
      props: {
        title: 'Test Title',
        subtitle: 'Test Subtitle'
      }
    })

    expect(wrapper).toBeDefined()
  })

  it('should have title and three cta buttons', async () => {
    const wrapper = await mountSuspended(SimpleHeader, {
      props: {
        title: 'Test Title',
        subtitle: 'Test Subtitle'
      }
    })

    // Title
    const h1El = wrapper.find('h1')
    expect(h1El.exists()).toBe(true)

    // Cta
    const ctaEl = wrapper.findAll('a')
    expect(ctaEl.length).toBe(3)
  })

  it('should have a video element', async () => {
    const wrapper = await mountSuspended(SimpleHeader, {
      props: {
        title: 'Test Title',
        subtitle: 'Test Subtitle'
      }
    })

    const videoEl = wrapper.find('video')
    expect(videoEl.exists()).toBe(true)
    expect(videoEl.attributes('autoplay')).toBeDefined()
    expect(videoEl.attributes('muted')).toBeDefined()
    expect(videoEl.attributes('loop')).toBeDefined()
  })
})
