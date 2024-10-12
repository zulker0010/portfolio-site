import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({  
  integrations: [tailwind({
    applyBaseStyles: false, //change to False after shadecn config
  }), react(), vue()],
  image: {
    domains: ["astro.build"],
    remotePatterns: [{ protocol: "https"}],
  }
});