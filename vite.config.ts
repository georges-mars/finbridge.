import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    client: {
      entry: "./src/client-entry.tsx",
    },
  },
});
