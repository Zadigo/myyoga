export type Languages = 'fr' | 'en' | 'es'

export type LanguageOptions = {
  choice: Languages
  selected: boolean
}

export interface SessionData {
  /**
   * Used to store the language preference of the user
   */
  language: LanguageOptions
}
