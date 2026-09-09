import type { ResearchPaper } from '#shared/types/research'
import { useLoadFixtures } from '../testing'

export default defineEventHandler(async (event) => {
  const { fixtures } = useLoadFixtures<ResearchPaper>()
  const { id } = getRouterParams(event) as { id: string }

  return fixtures.value.filter((item) => item.slug.toString() === id)
})
