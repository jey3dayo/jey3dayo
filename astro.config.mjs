import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    preact(),
    image(),
  ],
  vite: {
    ssr: {
      noExternal: ["astro", "@astrojs/image"],
    },
  },
  markdown: {
    shikiConfig: {
      theme: "rose-pine-moon",
      langs: ["json"],
      wrap: true,
    },
  },
});
