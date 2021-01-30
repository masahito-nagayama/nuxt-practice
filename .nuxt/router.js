import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _47e921c9 = () => interopDefault(import('../pages/page1.vue' /* webpackChunkName: "pages/page1" */))
const _47f7394a = () => interopDefault(import('../pages/page2.vue' /* webpackChunkName: "pages/page2" */))
const _480550cb = () => interopDefault(import('../pages/page3.vue' /* webpackChunkName: "pages/page3" */))
const _34a199ce = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/page1",
    component: _47e921c9,
    name: "page1"
  }, {
    path: "/page2",
    component: _47f7394a,
    name: "page2"
  }, {
    path: "/page3",
    component: _480550cb,
    name: "page3"
  }, {
    path: "/",
    component: _34a199ce,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
