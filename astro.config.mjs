import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import icons from "astro-icon";
import mdi from "@iconify-json/mdi";
import { collections } from "./src/content/config";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost",
  integrations: [mdx(), sitemap(), vue(), icons({ collections: { mdi } })],
});
