import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/finbridge./",
  cloudflare: false,
  tanstackStart: {
    client: {
      entry: "./src/client-entry.tsx",
    },
  },
});
