import { defineConfig } from '@playwright/test'

export default defineConfig({
    testDir: 'tests',
    timeout: 2 * 60 * 1000,
})