import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import BaseFooter from '../../app/components/base/Footer.vue'

describe('Footer', () => {
  it('should render the footer component', async () => {
    const wrapper = await mountSuspended(BaseFooter)
    expect(wrapper.exists()).toBe(true)
  })
})
