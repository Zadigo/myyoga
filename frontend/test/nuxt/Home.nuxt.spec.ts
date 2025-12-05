import { renderSuspended } from '@nuxt/test-utils/runtime'
import { describe, it } from 'vitest'
import Home from '../../app/pages/index.vue'

describe('Home Page', () => {
  it('renders properly', async () => {
    const { html } = await renderSuspended(Home)
    console.log(html())
  })
})
