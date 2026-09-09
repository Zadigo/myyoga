import type { ResearchPaper } from '#shared/types/research'
import { useLoadFixtures } from '../testing'

export default defineEventHandler(async (event) => {
  const { getItem } = useLoadFixtures<ResearchPaper>()
  return getItem(event)
})
