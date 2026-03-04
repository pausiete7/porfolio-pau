// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

import tailwind from "@astrojs/tailwind";

const root = fileURLToPath(new URL("./src/", import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://pausevilla.com",
  vite: {
    resolve: {
      alias: {
        "@": root,
        "@components": fileURLToPath(new URL("./src/components/", import.meta.url)),
        "@layouts": fileURLToPath(new URL("./src/layouts/", import.meta.url)),
        "@icons": fileURLToPath(new URL("./src/icons/", import.meta.url)),
        "@data": fileURLToPath(new URL("./src/data/", import.meta.url)),
      },
    },
  },
});
