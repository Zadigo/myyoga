import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import Booking from '../../app/pages/booking.vue'

describe('Booking page', () => {
  it('should load the booking page', async () => {
    const component = await mountSuspended(Booking)

    // Has page title
    expect(component.get('h1')).toBeDefined()

    // Has booking form
    const form = component.get('form#booking-form')
    expect(form).toBeDefined()

    const inputs = ['input[name="firstname"]', 'input[name="lastname"]', 'input[name="email"]']
    inputs.forEach((selector) => {
      const input = form.get(selector)

      expect(input).toBeDefined()

      // Has correct placeholder
      const placeholder = input.attributes('placeholder')
      expect(placeholder).toBeDefined()
      expect(placeholder?.toLowerCase()).toContain(selector.match(/name="(\w+)"/)?.[1] || '')

      // Is empty by default
      expect((input.element as HTMLInputElement).value).toBe('')

      // Can type into input
      input.setValue('TestValue')
      expect((input.element as HTMLInputElement).value).toBe('TestValue')
    })

    // Has submit button
    const submitButton = form.get('button#cta-book-meeting')
    expect(submitButton).toBeDefined()
    expect(submitButton.attributes('disabled')).toBeUndefined()

    await submitButton.trigger('click')
  })
})
