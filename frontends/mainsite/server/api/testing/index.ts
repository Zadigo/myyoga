import { computed, ref, toValue } from 'vue'
import jsonFixtures from '../../../public/fixtures.json'
import type { H3Event } from 'h3'
import { getRouterParam } from 'h3'
import { getQuery } from 'h3'
import { filterFunc } from '#shared/reasearches'
 
/**
 * Utility functions for loading and manipulating research paper fixtures for testing purposes.
 */
export function useLoadFixtures<T extends ResearchPaper>() {
  const fixtures = computed(() => jsonFixtures as T[])

  function getItem(event: H3Event) {
    const id = getRouterParam(event, 'id')

    if (!id) return undefined
    return fixtures.value.find((item) => item.slug.toString() === id)
  }

  function raw() {
    return toValue(fixtures)
  }

  function singleItem() {
    return raw().at(0) as T
  }
  
  function search(event: H3Event) {
    const query = getQuery<{ q: string }>(event)
    return fixtures.value.filter(filterFunc(query.q))
  }

  function toNodes<T>(values: T[] | undefined): { node: T }[] {
    if (!values) return []
    return values.map((item) => ({
      node: item
    }))
  }

  function toPaginated(values: T[]) {
    return {
      edges: toNodes(values),
    }
  }

  return {
    /**
     * Returns the computed array of item fixtures loaded from the JSON file. 
     * This can be used to access the entire set of items for testing or 
     * demonstration purposes.
     */
    fixtures,
    /**
     * Retrieves a specific item from the loaded 
     * fixtures based on the 'id' parameter in the event.
     */
    getItem,
    /**
     * Returns the first item from the loaded fixtures, 
     * which can be useful for testing or demonstration purposes.
     */
    singleItem,
    /**
     * Returns the raw array of loaded fixtures without any filtering or transformation.
     */
    raw,
    /**
     * Filters the loaded fixtures based on a search query extracted from the event's parameters.
     * @param event - The H3Event from which to extract the search query.
     */
    search,
    /**
     * Converts an array of items into a structure that mimics the Relay pagination format.
     */
    toNodes,
    /**
     * Simulates the graphene pagination structure by 
     * converting an array of items into a paginated format which
     * relies on Relay specifications.
     */
    toPaginated
  }
}

export function useFirebaseSessionCollectionFixture() {
  const template = ref<SessionData>({
    language: { choice: 'en', selected: false }
  })
  return template
}
