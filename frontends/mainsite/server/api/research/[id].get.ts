import type { ResearchPaper } from '~~/types'

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string }

  // Simulate fetching research data by ID
  const researchData: ResearchPaper[] = [
    {
      id: null,
      category: 'Cancer',
      title: 'Yoga has a solid effect on cancer-related fatigue in patients with breast cancer: a meta-analysis.',
      authors: 'Dong B, Xie C, Jing X, Lin L, Tian L.',
      journal: 'Support Care Cancer. 2018 Mar;26(3):811-820.',
      link: 'https://pubmed.ncbi.nlm.nih.gov/29049020/',
      isAbstract: false
    },
    {
      id: null,
      category: 'Cancer',
      title: 'Effects of physical and mind-body exercise on sleep problems during and after breast cancer treatment: a systematic review and meta-analysis.',
      authors: 'Kreutz C, Schmidt ME, Steindorf K.',
      journal: 'Breast Cancer Res Treat. 2019 Jan;173(2):247-261.',
      link: 'https://pubmed.ncbi.nlm.nih.gov/30448620/',
      isAbstract: false
    }
  ]

  return researchData.filter(paper => paper.category?.toLocaleLowerCase() === id)
})
