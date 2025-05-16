// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";
//
// // https://vitejs.dev/config/
// // export default defineConfig(({ mode }) => ({
// //   server: {
// //     host: "::",
// //     port: 8080,
// //   },
// //   plugins: [
// //     react(),
// //     mode === 'development' &&
// //     componentTagger(),
// //   ].filter(Boolean),
// //   resolve: {
// //     alias: {
// //       "@": path.resolve(__dirname, "./src"),
// //     },
// //   },
// // }));
// // vite.config.ts
// export default defineConfig(({ mode }) => ({
//   base: './', // 👈 Add this line
//   server: {
//     host: "::",
//     port: 8080,
//   },
//   plugins: [
//     react(),
//     mode === 'development' &&
//     componentTagger(),
//   ].filter(Boolean),
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// }));

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// vite.config.ts
const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;

export default defineConfig(({ mode }) => ({
  base: './',
  server: {
    host: "::",
    port: PORT,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
