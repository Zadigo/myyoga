import { mountSuspended, renderSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import Home from '../../app/pages/index.vue'
import BaseHero from '../../app/components/BaseHero.vue'

describe('Home Page', () => {
  it('renders properly', async () => {
    const { findByText } = await renderSuspended(Home)
    const el = await findByText('Your mind, body, and soul in perfect harmony')
    
    expect(el).toBeDefined()
  })

  it('call to actions to exist and be clickable links', async () => {
    const component = await mountSuspended(Home)
    
    component.findAll(`[id^="cta-"]`).forEach(item => {
      expect(item.exists()).toBeTruthy()
      expect(item.attributes('href')).toBeDefined()
      
      // Check if the button is clickable by simulating a click event
      expect(item.attributes('disabled')).toBeUndefined()
      item.trigger('click')
    })
  })

  it('should have required components', async () => {
    const component = await mountSuspended(Home)
    const expectedComponents = [BaseHero]

    expectedComponents.forEach(item => {
      const el = component.getComponent(item)
      expect(el).toBeDefined()
    })
  })
})
