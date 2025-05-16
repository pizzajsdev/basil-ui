import type { Config } from '@react-router/dev/config'

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
    // const demos = ['demo-1', 'demo-2', 'demo-3']
    return [...getStaticPaths()] // ...demos.map((demo) => `/demos/${demo}`)]
  },
} satisfies Config
