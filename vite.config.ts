import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  // If defined, the base path should contain start + end slashes, e.g. PIZZA_APP_BASE_PATH=/foo/
  base: process.env['PIZZA_APP_BASE_PATH'] || '/',
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
})
