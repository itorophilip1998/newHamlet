import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_25352aec from 'nuxt_plugin_plugin_25352aec' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_bootstrapvue_346f003e from 'nuxt_plugin_bootstrapvue_346f003e' // Source: .\\bootstrap-vue.js (mode: 'all')
import nuxt_plugin_templatesplugin78bae0a7_07fdfcbe from 'nuxt_plugin_templatesplugin78bae0a7_07fdfcbe' // Source: .\\templates.plugin.78bae0a7.js (mode: 'all')
import nuxt_plugin_axios_d1f6bde2 from 'nuxt_plugin_axios_d1f6bde2' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_veevalidate_b83c3a38 from 'nuxt_plugin_veevalidate_b83c3a38' // Source: ..\\plugins\\vee-validate.js (mode: 'client')
import nuxt_plugin_toast_336cba36 from 'nuxt_plugin_toast_336cba36' // Source: ..\\plugins\\toast.js (mode: 'client')
import nuxt_plugin_elementui_432a08cc from 'nuxt_plugin_elementui_432a08cc' // Source: ..\\plugins\\element-ui.js (mode: 'client')
import nuxt_plugin_aos_46381b18 from 'nuxt_plugin_aos_46381b18' // Source: ..\\plugins\\aos.js (mode: 'client')
import nuxt_plugin_plugin_54156d04 from 'nuxt_plugin_plugin_54156d04' // Source: .\\auth\\plugin.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"hamlet","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"```bash\r # install dependencies\r $ npm install"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":""},{"rel":"stylesheet","href":"https:\u002F\u002Fstackpath.bootstrapcdn.com\u002Ffont-awesome\u002F4.7.0\u002Fcss\u002Ffont-awesome.min.css"},{"rel":"stylesheet","type":"font","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Overpass&display=swap"},{"href":"https:\u002F\u002Funpkg.com\u002Felement-ui\u002Flib\u002Ftheme-chalk\u002Findex.css","rel":"stylesheet"}],"script":[{"src":"https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.5.1.slim.min.js","type":"text\u002Fjavascript"},{"src":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fpopper.js@1.16.1\u002Fdist\u002Fumd\u002Fpopper.min.js","type":"text\u002Fjavascript"},{"src":"https:\u002F\u002Fstackpath.bootstrapcdn.com\u002Fbootstrap\u002F4.5.2\u002Fjs\u002Fbootstrap.min.js","type":"text\u002Fjavascript"},{"scr":"https:\u002F\u002Funpkg.com\u002Felement-ui\u002Flib\u002Findex.js","type":"text\u002Fjavascript"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_25352aec === 'function') {
    await nuxt_plugin_plugin_25352aec(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_346f003e === 'function') {
    await nuxt_plugin_bootstrapvue_346f003e(app.context, inject)
  }

  if (typeof nuxt_plugin_templatesplugin78bae0a7_07fdfcbe === 'function') {
    await nuxt_plugin_templatesplugin78bae0a7_07fdfcbe(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_d1f6bde2 === 'function') {
    await nuxt_plugin_axios_d1f6bde2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_veevalidate_b83c3a38 === 'function') {
    await nuxt_plugin_veevalidate_b83c3a38(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_toast_336cba36 === 'function') {
    await nuxt_plugin_toast_336cba36(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_elementui_432a08cc === 'function') {
    await nuxt_plugin_elementui_432a08cc(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_aos_46381b18 === 'function') {
    await nuxt_plugin_aos_46381b18(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_54156d04 === 'function') {
    await nuxt_plugin_plugin_54156d04(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.3.4/src/history/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 1 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
