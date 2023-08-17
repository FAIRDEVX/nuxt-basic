// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "FAIR'S SHOP",
      meta: [
        {name:"descrition", content:"รายละเอียดของเว็บไซต์"}
      ]
    }
  }
})
