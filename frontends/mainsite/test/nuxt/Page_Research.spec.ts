import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it, vi } from 'vitest'
import ResearchId from '../../app/pages/research/[id].vue'
import type { ResearchPaper } from '../../types'
import { faker } from '@faker-js/faker'

const researchPaper: ResearchPaper[] = [
  {
    id: faker.number.int({ min: 1, max: 1000 }),
    category: faker.lorem.word(5),
    title: faker.lorem.sentence(),
    authors: `${faker.person.firstName()} ${faker.person.lastName()}`,
    journal: faker.lorem.words(2),
    link: faker.internet.url(),
    isAbstract: faker.datatype.boolean()
  }
] 

const fetchMock = vi.fn().mockResolvedValue(researchPaper)
vi.stubGlobal('$fetch', fetchMock)

describe('Page: Research', () => {
  it('should render the page correctly', async () => {
    const wrapper = await mountSuspended(ResearchId)
    
    const articles = wrapper.findAll('article')
    expect(articles.length).toBe(researchPaper.length)
    expect(wrapper.text()).toContain(researchPaper[0]?.title)
    expect(wrapper.text()).toContain(researchPaper[0]?.authors)
  })
})
