// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },
  modules: [
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icon',
    ['@nuxtjs/google-fonts', {
      families: {
        Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
  }],
  ],
  css: [
    '~/assets/css/main.css',
    'aos/dist/aos.css',],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  }
})
