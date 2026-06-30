import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import Index from '../../app/pages/index.vue'
import Hero from '../../app/components/base/Hero.vue'

describe('Index Page', () => {
  it('should render the page correctly', async () => {
    const wrapper = await mountSuspended(Index)

    expect(wrapper.findComponent(Hero)).toBeDefined()

    const h1El = wrapper.get('h1')
    expect(h1El).toBeDefined()
  })

  it('all images should have alt text', async () => {
    const wrapper = await mountSuspended(Index)

    const images = wrapper.findAll('img')
    images.forEach((img) => {
      const alt = img.attributes('alt')
      expect(alt).toBeDefined()
      expect(alt?.trim()).not.toBe('')
    })
  })

  it('all links should be clickable', async () => {
    const wrapper = await mountSuspended(Index)

    const links = wrapper.findAll('a')
    links.forEach((link) => {
      expect(link.attributes('disabled')).toBeUndefined()
    })
  })
})
