// apps/app/vite.config.ts
import * as path from "node:path";
import analog from "file:///Volumes/SnyderDev/@benpsnyder/nx-bun-testing/node_modules/@analogjs/platform/src/index.js";
import { nxViteTsPaths } from "file:///Volumes/SnyderDev/@benpsnyder/nx-bun-testing/node_modules/@nx/vite/plugins/nx-tsconfig-paths.plugin.js";
import { visualizer } from "file:///Volumes/SnyderDev/@benpsnyder/nx-bun-testing/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { defineConfig, splitVendorChunkPlugin } from "file:///Volumes/SnyderDev/@benpsnyder/nx-bun-testing/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "/Volumes/SnyderDev/@benpsnyder/nx-bun-testing/apps/app";
var vite_config_default = defineConfig(({ mode }) => {
  return {
    root: __vite_injected_original_dirname,
    publicDir: "src/public",
    optimizeDeps: {
      include: ["@spartan-ng/trpc", "@angular/common", "@angular/forms", "isomorphic-fetch"]
    },
    ssr: {
      noExternal: [
        "@spartan-ng/**",
        "@angular/cdk/**",
        "@ng-icons/**",
        "ngx-scrollbar/**",
        "ng-signal-forms/**",
        "@analogjs/trpc",
        "@trpc/server"
      ]
    },
    build: {
      outDir: "../../dist/apps/app/client",
      reportCompressedSize: true,
      commonjsOptions: { transformMixedEsModules: true },
      target: ["es2020"]
    },
    resolve: {
      alias: {
        "~": path.resolve(__vite_injected_original_dirname, "./src")
      }
    },
    plugins: [
      {
        name: "custom-url-and-date-replacer",
        // replaced @rollup/plugin-replace given compatability issues with latest vite
        transform(code, id) {
          try {
            if (id.endsWith(".js") || id.endsWith(".html")) {
              const transformedCode = code.replace(/http:\/\/127\.0\.0\.1:4200/g, "https://www.spartan.ng").replace(/__LASTMOD__/g, JSON.stringify((/* @__PURE__ */ new Date()).toISOString()));
              return {
                code: transformedCode,
                map: null
              };
            }
          } catch (error) {
            console.error("Error in custom-url-and-date-replacer:", error);
            throw error;
          }
          return null;
        }
      },
      analog({
        prerender: {
          routes: [
            "/",
            "/documentation/introduction",
            "/documentation/about",
            "/documentation/cli",
            "/components/accordion",
            "/components/alert",
            "/components/alert-dialog",
            "/components/aspect-ratio",
            "/components/avatar",
            "/components/badge",
            "/components/button",
            "/components/card",
            "/components/checkbox",
            "/components/collapsible",
            "/components/combobox",
            "/components/command",
            "/components/context-menu",
            "/components/data-table",
            "/components/dialog",
            "/components/dropdown-menu",
            "/components/hover-card",
            "/components/input",
            "/components/label",
            "/components/menubar",
            "/components/popover",
            "/components/progress",
            "/components/radio-group",
            "/components/scroll-area",
            "/components/separator",
            "/components/sheet",
            "/components/skeleton",
            "/components/switch",
            "/components/table",
            "/components/tabs",
            "/components/textarea",
            "/components/toggle",
            "/components/tooltip",
            "/stack/overview",
            "/stack/technologies",
            "/stack/installation",
            "/examples/notes",
            "/examples/typography"
          ],
          sitemap: {
            host: "https://www.spartan.ng"
          }
        },
        nitro: {
          rollupConfig: {
            plugins: []
          }
        }
      }),
      nxViteTsPaths(),
      visualizer(),
      splitVendorChunkPlugin()
    ],
    test: {
      reporters: ["default"],
      coverage: {
        reportsDirectory: "../../coverage/apps/app",
        provider: "v8"
      },
      globals: true,
      environment: "jsdom",
      setupFiles: ["src/test-setup.ts"],
      include: ["**/*.spec.ts"],
      cache: {
        dir: "../../node_modules/.vitest"
      }
    },
    define: {
      "import.meta.vitest": mode !== "production"
    },
    server: {
      fs: {
        allow: ["../.."]
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYXBwcy9hcHAvdml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVm9sdW1lcy9TbnlkZXJEZXYvQGJlbnBzbnlkZXIvbngtYnVuLXRlc3RpbmcvYXBwcy9hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Wb2x1bWVzL1NueWRlckRldi9AYmVucHNueWRlci9ueC1idW4tdGVzdGluZy9hcHBzL2FwcC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVm9sdW1lcy9TbnlkZXJEZXYvQGJlbnBzbnlkZXIvbngtYnVuLXRlc3RpbmcvYXBwcy9hcHAvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5cbmltcG9ydCAqIGFzIHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCBhbmFsb2cgZnJvbSAnQGFuYWxvZ2pzL3BsYXRmb3JtJztcbmltcG9ydCB7IG54Vml0ZVRzUGF0aHMgfSBmcm9tICdAbngvdml0ZS9wbHVnaW5zL254LXRzY29uZmlnLXBhdGhzLnBsdWdpbic7XG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJztcbmltcG9ydCB7IHR5cGUgUGx1Z2luLCBkZWZpbmVDb25maWcsIHNwbGl0VmVuZG9yQ2h1bmtQbHVnaW4gfSBmcm9tICd2aXRlJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcblx0cmV0dXJuIHtcblx0XHRyb290OiBfX2Rpcm5hbWUsXG5cdFx0cHVibGljRGlyOiAnc3JjL3B1YmxpYycsXG5cdFx0b3B0aW1pemVEZXBzOiB7XG5cdFx0XHRpbmNsdWRlOiBbJ0BzcGFydGFuLW5nL3RycGMnLCAnQGFuZ3VsYXIvY29tbW9uJywgJ0Bhbmd1bGFyL2Zvcm1zJywgJ2lzb21vcnBoaWMtZmV0Y2gnXSxcblx0XHR9LFxuXHRcdHNzcjoge1xuXHRcdFx0bm9FeHRlcm5hbDogW1xuXHRcdFx0XHQnQHNwYXJ0YW4tbmcvKionLFxuXHRcdFx0XHQnQGFuZ3VsYXIvY2RrLyoqJyxcblx0XHRcdFx0J0BuZy1pY29ucy8qKicsXG5cdFx0XHRcdCduZ3gtc2Nyb2xsYmFyLyoqJyxcblx0XHRcdFx0J25nLXNpZ25hbC1mb3Jtcy8qKicsXG5cdFx0XHRcdCdAYW5hbG9nanMvdHJwYycsXG5cdFx0XHRcdCdAdHJwYy9zZXJ2ZXInLFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdGJ1aWxkOiB7XG5cdFx0XHRvdXREaXI6ICcuLi8uLi9kaXN0L2FwcHMvYXBwL2NsaWVudCcsXG5cdFx0XHRyZXBvcnRDb21wcmVzc2VkU2l6ZTogdHJ1ZSxcblx0XHRcdGNvbW1vbmpzT3B0aW9uczogeyB0cmFuc2Zvcm1NaXhlZEVzTW9kdWxlczogdHJ1ZSB9LFxuXHRcdFx0dGFyZ2V0OiBbJ2VzMjAyMCddLFxuXHRcdH0sXG5cdFx0cmVzb2x2ZToge1xuXHRcdFx0YWxpYXM6IHtcblx0XHRcdFx0J34nOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRwbHVnaW5zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdjdXN0b20tdXJsLWFuZC1kYXRlLXJlcGxhY2VyJywgLy8gcmVwbGFjZWQgQHJvbGx1cC9wbHVnaW4tcmVwbGFjZSBnaXZlbiBjb21wYXRhYmlsaXR5IGlzc3VlcyB3aXRoIGxhdGVzdCB2aXRlXG5cdFx0XHRcdHRyYW5zZm9ybShjb2RlLCBpZCkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRpZiAoaWQuZW5kc1dpdGgoJy5qcycpIHx8IGlkLmVuZHNXaXRoKCcuaHRtbCcpKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRyYW5zZm9ybWVkQ29kZSA9IGNvZGVcblx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgvaHR0cDpcXC9cXC8xMjdcXC4wXFwuMFxcLjE6NDIwMC9nLCAnaHR0cHM6Ly93d3cuc3BhcnRhbi5uZycpXG5cdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoL19fTEFTVE1PRF9fL2csIEpTT04uc3RyaW5naWZ5KG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSkpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvZGU6IHRyYW5zZm9ybWVkQ29kZSxcblx0XHRcdFx0XHRcdFx0XHRtYXA6IG51bGwsXG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGN1c3RvbS11cmwtYW5kLWRhdGUtcmVwbGFjZXI6JywgZXJyb3IpO1xuXHRcdFx0XHRcdFx0Ly8gT3B0aW9uYWxseSByZXRocm93IG9yIGhhbmRsZSB0aGUgZXJyb3IgZnVydGhlclxuXHRcdFx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBudWxsOyAvLyBObyB0cmFuc2Zvcm1hdGlvbiBhcHBsaWVkXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YW5hbG9nKHtcblx0XHRcdFx0cHJlcmVuZGVyOiB7XG5cdFx0XHRcdFx0cm91dGVzOiBbXG5cdFx0XHRcdFx0XHQnLycsXG5cblx0XHRcdFx0XHRcdCcvZG9jdW1lbnRhdGlvbi9pbnRyb2R1Y3Rpb24nLFxuXHRcdFx0XHRcdFx0Jy9kb2N1bWVudGF0aW9uL2Fib3V0Jyxcblx0XHRcdFx0XHRcdCcvZG9jdW1lbnRhdGlvbi9jbGknLFxuXG5cdFx0XHRcdFx0XHQnL2NvbXBvbmVudHMvYWNjb3JkaW9uJyxcblx0XHRcdFx0XHRcdCcvY29tcG9uZW50cy9hbGVydCcsXG5cdFx0XHRcdFx0XHQnL2NvbXBvbmVudHMvYWxlcnQtZGlhbG9nJyxcblx0XHRcdFx0XHRcdCcvY29tcG9uZW50cy9hc3BlY3QtcmF0aW8nLFxuXHRcdFx0XHRcdFx0Jy9jb21wb25lbnRzL2F2YXRhcicsXG5cdFx0XHRcdFx0XHQnL2NvbXBvbmVudHMvYmFkZ2UnLFxuXHRcdFx0XHRcdFx0Jy9jb21wb25lbnRzL2J1dHRvbicsXG5cdFx0XHRcdFx0XHQnL2NvbXBvbmVudHMvY2FyZCcsXG5cdFx0XHRcdFx0XHQnL2NvbXBvbmVudHMvY2hlY2tib3gnLFxuXHRcdFx0XHRcdFx0Jy9jb21wb25lbnRzL2NvbGxhcHNpYmxlJyxcblx0XHRcdFx0XHRcdCcvY29tcG9uZW50cy9jb21ib2JveCcsXG5cdFx0XHRcdFx0XHQnL2NvbXBvbmVudHMvY29tbWFuZCcsXG5cdFx0XHRcdFx0XHQnL2NvbXBvbmVudHMvY29udGV4dC1tZW51Jyxcblx0XHRcdFx0XHRcdCcvY29tcG9uZW50cy9kYXRhLXRhYmxlJyxcblx0XHRcdFx0XHRcdCcvY29tcG9uZW50cy9kaWFsb2cnLFxuXHRcdFx0XHRcdFx0Jy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUnLFxuXHRcdFx0XHRcdFx0Jy9jb21wb25lbnRzL2hvdmVyLWNhcmQnLFxuXHRcdFx0XHRcdFx0Jy9jb21wb25lbnRzL2lucHV0Jyxcblx0XHRcdFx0XHRcdCcvY29tcG9uZW50cy9sYWJlbCcsXG5cdFx0XHRcdFx0XHQnL2NvbXBvbmVudHMvbWVudWJhcicsXG5cdFx0XHRcdFx0XHQnL2NvbXBvbmVudHMvcG9wb3ZlcicsXG5cdFx0XHRcdFx0XHQnL2NvbXBvbmVudHMvcHJvZ3Jlc3MnLFxuXHRcdFx0XHRcdFx0Jy9jb21wb25lbnRzL3JhZGlvLWdyb3VwJyxcblx0XHRcdFx0XHRcdCcvY29tcG9uZW50cy9zY3JvbGwtYXJlYScsXG5cdFx0XHRcdFx0XHQnL2NvbXBvbmVudHMvc2VwYXJhdG9yJyxcblx0XHRcdFx0XHRcdCcvY29tcG9uZW50cy9zaGVldCcsXG5cdFx0XHRcdFx0XHQnL2NvbXBvbmVudHMvc2tlbGV0b24nLFxuXHRcdFx0XHRcdFx0Jy9jb21wb25lbnRzL3N3aXRjaCcsXG5cdFx0XHRcdFx0XHQnL2NvbXBvbmVudHMvdGFibGUnLFxuXHRcdFx0XHRcdFx0Jy9jb21wb25lbnRzL3RhYnMnLFxuXHRcdFx0XHRcdFx0Jy9jb21wb25lbnRzL3RleHRhcmVhJyxcblx0XHRcdFx0XHRcdCcvY29tcG9uZW50cy90b2dnbGUnLFxuXHRcdFx0XHRcdFx0Jy9jb21wb25lbnRzL3Rvb2x0aXAnLFxuXG5cdFx0XHRcdFx0XHQnL3N0YWNrL292ZXJ2aWV3Jyxcblx0XHRcdFx0XHRcdCcvc3RhY2svdGVjaG5vbG9naWVzJyxcblx0XHRcdFx0XHRcdCcvc3RhY2svaW5zdGFsbGF0aW9uJyxcblxuXHRcdFx0XHRcdFx0Jy9leGFtcGxlcy9ub3RlcycsXG5cdFx0XHRcdFx0XHQnL2V4YW1wbGVzL3R5cG9ncmFwaHknLFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0c2l0ZW1hcDoge1xuXHRcdFx0XHRcdFx0aG9zdDogJ2h0dHBzOi8vd3d3LnNwYXJ0YW4ubmcnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG5pdHJvOiB7XG5cdFx0XHRcdFx0cm9sbHVwQ29uZmlnOiB7XG5cdFx0XHRcdFx0XHRwbHVnaW5zOiBbXSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSksXG5cdFx0XHRueFZpdGVUc1BhdGhzKCksXG5cdFx0XHR2aXN1YWxpemVyKCkgYXMgUGx1Z2luLFxuXHRcdFx0c3BsaXRWZW5kb3JDaHVua1BsdWdpbigpLFxuXHRcdF0sXG5cdFx0dGVzdDoge1xuXHRcdFx0cmVwb3J0ZXJzOiBbJ2RlZmF1bHQnXSxcblx0XHRcdGNvdmVyYWdlOiB7XG5cdFx0XHRcdHJlcG9ydHNEaXJlY3Rvcnk6ICcuLi8uLi9jb3ZlcmFnZS9hcHBzL2FwcCcsXG5cdFx0XHRcdHByb3ZpZGVyOiAndjgnLFxuXHRcdFx0fSxcblx0XHRcdGdsb2JhbHM6IHRydWUsXG5cdFx0XHRlbnZpcm9ubWVudDogJ2pzZG9tJyxcblx0XHRcdHNldHVwRmlsZXM6IFsnc3JjL3Rlc3Qtc2V0dXAudHMnXSxcblx0XHRcdGluY2x1ZGU6IFsnKiovKi5zcGVjLnRzJ10sXG5cdFx0XHRjYWNoZToge1xuXHRcdFx0XHRkaXI6ICcuLi8uLi9ub2RlX21vZHVsZXMvLnZpdGVzdCcsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0ZGVmaW5lOiB7XG5cdFx0XHQnaW1wb3J0Lm1ldGEudml0ZXN0JzogbW9kZSAhPT0gJ3Byb2R1Y3Rpb24nLFxuXHRcdH0sXG5cdFx0c2VydmVyOiB7XG5cdFx0XHRmczoge1xuXHRcdFx0XHRhbGxvdzogWycuLi8uLiddLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsWUFBWSxVQUFVO0FBQ3RCLE9BQU8sWUFBWTtBQUNuQixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLGtCQUFrQjtBQUMzQixTQUFzQixjQUFjLDhCQUE4QjtBQU5sRSxJQUFNLG1DQUFtQztBQVN6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN6QyxTQUFPO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsSUFDWCxjQUFjO0FBQUEsTUFDYixTQUFTLENBQUMsb0JBQW9CLG1CQUFtQixrQkFBa0Isa0JBQWtCO0FBQUEsSUFDdEY7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNKLFlBQVk7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLHNCQUFzQjtBQUFBLE1BQ3RCLGlCQUFpQixFQUFFLHlCQUF5QixLQUFLO0FBQUEsTUFDakQsUUFBUSxDQUFDLFFBQVE7QUFBQSxJQUNsQjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1IsT0FB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
