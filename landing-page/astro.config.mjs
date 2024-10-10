import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https/zulker0010.github.io',
  base: '/zulkeryusuf.github.io',
  integrations: [tailwind({
    applyBaseStyles: false, //change to False after shadecn config
  }), react(), vue()],
  image: {
    domains: ["astro.build"],
    remotePatterns: [{ protocol: "https"}],
  }
});