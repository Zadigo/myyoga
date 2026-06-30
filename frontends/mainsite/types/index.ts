export type Nullable<T> = T | null

export interface ResearchPaper {
  id: Nullable<number>
  category: string
  title: string
  authors: string
  journal: string
  link: string
  isAbstract: boolean
}
