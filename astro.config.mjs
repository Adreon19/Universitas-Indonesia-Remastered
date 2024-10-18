import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import icons from "astro-icon";
import * as mdi from "@iconify-json/mdi";

export default defineConfig({
  site: "http://localhost",
  integrations: [mdx(), sitemap(), vue(), icons({ collections: { mdi } })],
});
