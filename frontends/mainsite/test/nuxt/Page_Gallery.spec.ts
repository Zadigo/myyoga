import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import Gallery from '../../app/pages/gallery.vue'
import SimpleHeader from '../../app/components/base/SimpleHeader.vue'


describe('Gallery Page', () => {
  it('should render the page correctly', async () => {
    const wrapper = await mountSuspended(Gallery)

    // Should have SimpleHeader component
    expect(wrapper.findComponent(SimpleHeader)).toBeDefined()

    // Other checks
    const h2El = wrapper.get('h2')
    expect(h2El).toBeDefined()
  })

  it('all images should have alt text', async () => {
    const component = await mountSuspended(Gallery)

    const images = component.findAll('img')
    images.forEach((img) => {
      const alt = img.attributes('alt')
      expect(alt).toBeDefined()
      expect(alt?.trim()).not.toBe('')
    })
  })
})
