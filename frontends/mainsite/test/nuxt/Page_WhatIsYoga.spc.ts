import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import WhatIsYoga from '../../app/pages/what-is-yoga.vue'
import BaseOverview from '../../app/components/base/Overview.vue'
import BaseBottomCta from '../../app/components/base/BottomCta.vue'
import BaseSliderPriceCard from '../../app/components/base/slider/PriceCard.vue'

describe('Page: WhatIsYoga', () => {
  it('should render the page correctly', async () => {
    const wrapper = await mountSuspended(WhatIsYoga)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findComponent(BaseOverview).exists()).toBe(true)
    expect(wrapper.findComponent(BaseBottomCta).exists()).toBe(true)
    expect(wrapper.findComponent(BaseSliderPriceCard).exists()).toBe(true)
  })
})
