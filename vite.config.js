import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  // Relative base so the built site works from any location: a subpath,
  // a zipped static-host upload, or even opened directly as a local file
  // (file://) - not just when served from a domain root.
  base: "./",
  // Bind the dev server to the IPv4 loopback explicitly. Vite's default
  // ("localhost") resolved to ::1 only on this machine, so Chrome asking for
  // 127.0.0.1 got ERR_CONNECTION_REFUSED. 127.0.0.1 serves both spellings.
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        menu: resolve(import.meta.dirname, "menu.html"),
      },
    },
  },
});
