/**
 * Filters research papers based on a search query.
 * @param query - The search query string used to filter research papers.
 */
export function filterFunc<T extends ResearchPaper>(query: string | undefined) {
  return (item: T) => {
    if (!item) return false
    if (!query) return true

    return (
      item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
  }
}
