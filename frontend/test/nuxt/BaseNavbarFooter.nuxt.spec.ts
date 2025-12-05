import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import BaseFooter from '../../app/components/BaseFooter.vue'
import BaseNavbar from '../../app/components/BaseNavbar.vue'


describe('Navbar', () => {
  it('should render the navbar component', async () => {
    const component = await mountSuspended(BaseNavbar)
    // Check if the component is rendered
    expect(component.exists()).toBe(true)

    // Check if the CTA button is present and has correct attributes
    const ctaButton = component.get('#cta-navbar')
    expect(ctaButton).toBeDefined()
    expect(ctaButton.element.tagName).toBe('A')
    expect(ctaButton.attributes('href')).toBe('/booking')

    // Simulate a click event on the CTA button
    await ctaButton.trigger('click')
  })

  it.skip('should be transparent on initial render', async () => {
    const component = await mountSuspended(BaseNavbar)
    // Check if the navbar has transparent background on initial render
    console.log(component.classes())
    expect(component.classes()).toContain('bg-transparent')

    // Simulate scroll event to change navbar background
    window.scrollY = 100
    window.dispatchEvent(new Event('scroll'))
    
    // Wait for the component to update
    await component.vm.$nextTick()

    // Check if the navbar background has changed after scroll
    expect(component.classes()).not.toContain('bg-transparent')
    expect(component.classes()).toContain('bg-primary-50')
  })
})


describe('Footer', () => {
  it.skip('should render the footer component', async () => {
    const component = await mountSuspended(BaseFooter)
    // Check if the component is rendered
    expect(component.exists()).toBe(true)

    // Check for presence of key elements in the footer
    expect(component.get('footer')).toBeDefined()
    expect(component.get('a[href="/"]')).toBeDefined() // Logo link
    expect(component.get('a[href="/privacy-policy"]')).toBeDefined() // Privacy Policy link
    expect(component.get('a[href="/terms-of-service"]')).toBeDefined() // Terms of Service link
  })
})
