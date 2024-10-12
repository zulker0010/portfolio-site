import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import vue from "@astrojs/vue";

const server_port = 3000;
const localhost_url = 'http://localhost:${server_port}';
const live_url = 'https://zulkeryusuf.github.io';
//astro command for running npm script

const script = process.env.npm_lifestyle_script || "";
const isBuild = script.includes('astro build');
let base_url = live_url;

if (isBuild){
  base_url = live_url;
}


// https://astro.build/config
export default defineConfig({  
  server: {port: server_port},
  site: base_url,
  integrations: [tailwind({
    applyBaseStyles: false, //change to False after shadecn config
  }), react(), vue()],
  image: {
    domains: ["astro.build"],
    remotePatterns: [{ protocol: "https"}],
  }
});