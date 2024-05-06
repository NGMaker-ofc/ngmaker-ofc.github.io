// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "@nuxt/icon"],
  devtools: { enabled: false },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === "search",
    },
  },
  experimental: {
    viewTransition: true,
  },
  tailwindcss: {
    viewer: false,
    config: {
      theme: {
        fontFamily: {
          sans: ["Open Sans", "sans-serif"],
        },
        extend: {
          fontSize: {
            xxs: "0.5rem",
          },

          animation: {
            modalf: "modalf 0.35s ease-in-out",
          },
          keyframes: {
            modalf: {
              "0%": {
                scale: "0",
                opacity: "0",
              },
              "100%": {
                scale: "1",
                opacity: "1",
              },
            },
          },
        },
      },
    },
  },
});
