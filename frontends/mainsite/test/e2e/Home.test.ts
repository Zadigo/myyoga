import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('Generaal navigation', async ({ page }) => {
    // Visit your Nuxt app (make sure it's running)
    await page.goto('http://localhost:3000')
  
    // Test actual rendered content
    await expect(page.locator('h1')).toBeVisible()
  
    // Or check for specific content
    // const content = await page.content()
  })
})
