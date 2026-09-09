export type Nullable<T> = T | null

export interface ResearchPaper {
  id: number
  category: string
  title: string
  authors: string
  journal: string
  link: string
  slug: string
  isAbstract: boolean
}
