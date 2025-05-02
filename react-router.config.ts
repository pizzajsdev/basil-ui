import type { Config } from '@react-router/dev/config'

export default {
  // Config options...
  // Server-side render by default (ssr: true), to enable SPA mode set `ssr` to `false`
  ssr: false,
  future: {
    unstable_optimizeDeps: true,
  },
  basename: import.meta.env.VITE_APP_BASE_PATH,
} satisfies Config
