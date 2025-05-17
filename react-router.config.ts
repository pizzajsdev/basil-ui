import type { Config } from '@react-router/dev/config'
import { blocksList, componentsList } from './app/components/components-list'

export default {
  // Config options...
  // To enable SPA mode we set this to `false`, otherwise it will be SSR by default
  ssr: false,
  future: {
    unstable_optimizeDeps: true,
  },
  // If defined, the base path should contain start + end slashes, e.g. PIZZA_APP_BASE_PATH=/foo/
  basename: process.env['PIZZA_APP_BASE_PATH'],
  async prerender({ getStaticPaths }) {
    return [
      ...getStaticPaths(),
      ...Object.entries(componentsList).map(([id]) => `/components/${id}`),
      ...Object.entries(blocksList).map(([id]) => `/blocks/${id}`),
    ]
  },
} satisfies Config
