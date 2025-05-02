import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default (ssr: true), to enable SPA mode set `ssr` to `false`
  ssr: false,
  future: {
    unstable_optimizeDeps: true
  },
} satisfies Config;
