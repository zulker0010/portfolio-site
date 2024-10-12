import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import vue from "@astrojs/vue";

const server_port = 3000;
const local_host = "http://localhost:${server_port}";
const live_url = "https://zulker0010.github.io";

const script = process.env.npm_lifestyle_script || "";
const isBuild = script.includes("astro build")
let BASE_URL = local_host

if (isBuild) {
  BASE_URL = live_url;
}

// https://astro.build/config
export default defineConfig({  
  site: BASE_URL,
  integrations: [tailwind({
    applyBaseStyles: false, //change to False after shadecn config
  }), react(), vue()],
  image: {
    domains: ["astro.build"],
    remotePatterns: [{ protocol: "https"}],
  }
});