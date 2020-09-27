export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      },
      {
        rel: "stylesheet",
        type: "font",
        href: "https://fonts.googleapis.com/css2?family=Overpass&display=swap",
        rel: "stylesheet"
      },
      {
        href: "https://unpkg.com/element-ui/lib/theme-chalk/index.css",
        rel: "stylesheet"
      },
      // {
      //   rel: "stylesheet",
      //   href: "https://use.fontawesome.com/releases/v5.8.1/css/solid.css"
      // }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js",
        type: "text/javascript"
      },
      {
        scr: "https://unpkg.com/element-ui/lib/index.js",
        type: "text/javascript"
      }
      // {
      //   src: "toastr.js",
      //   type: "text/javascript"
      // },
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: "./plugins/vee-validate.js",
      ssr: false
    },
    {
      src: "./plugins/toast.js",
      ssr: false
    },
    {
      src: "./plugins/element-ui.js",
      ssr: false
    },
    {
      src: "./plugins/aos.js",
      ssr: false
    },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    //  'vue-jwt-decode',
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ]
  ],
  axios: {
    baseURL: "https://hamlet.payfill.co/api"
    // requestInterceptor: (config, { store }) => {
    //    config.headers.common['Authorization'] = `Bearer ${store.getters['auth/token']}`;
    // }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  router: {
    middleware: ['auth']
  },
  auth: {
    redirect: {
      login: "/signin",
      logout: "/signin"
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: "/auth/login", method: "post", propertyName: "token" },
          //  user: false,
          user: { url: "/auth/admin", method: "get", propertyName: "user" },
          logout: { url: "/auth/logout", method: "post" }
        },
        // tokenRequired: true,
        tokenType: "bearer"
        // autoFetchUser : false,
        // globalToken: true,
      }
    }
  }
};
