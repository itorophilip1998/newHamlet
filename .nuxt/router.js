import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e2399584 = () => interopDefault(import('..\\pages\\all-employees.vue' /* webpackChunkName: "pages/all-employees" */))
const _e8dddfd2 = () => interopDefault(import('..\\pages\\company-details.vue' /* webpackChunkName: "pages/company-details" */))
const _66543ed6 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _48208279 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _d553bc5c = () => interopDefault(import('..\\pages\\directory.vue' /* webpackChunkName: "pages/directory" */))
const _7b8ea559 = () => interopDefault(import('..\\pages\\employee.vue' /* webpackChunkName: "pages/employee" */))
const _6e00674e = () => interopDefault(import('..\\pages\\employee-details.vue' /* webpackChunkName: "pages/employee-details" */))
const _3ee645b2 = () => interopDefault(import('..\\pages\\manager-account.vue' /* webpackChunkName: "pages/manager-account" */))
const _498b3d0d = () => interopDefault(import('..\\pages\\signin.vue' /* webpackChunkName: "pages/signin" */))
const _5e219383 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _951cef2a = () => interopDefault(import('..\\pages\\company\\company-overview.vue' /* webpackChunkName: "pages/company/company-overview" */))
const _5df1fea8 = () => interopDefault(import('..\\pages\\company\\locations.vue' /* webpackChunkName: "pages/company/locations" */))
const _97887fb2 = () => interopDefault(import('..\\pages\\company\\taxinfo.vue' /* webpackChunkName: "pages/company/taxinfo" */))
const _5938e1bb = () => interopDefault(import('..\\pages\\department\\add-department.vue' /* webpackChunkName: "pages/department/add-department" */))
const _5e62ff5c = () => interopDefault(import('..\\pages\\employees\\employmentdetails.vue' /* webpackChunkName: "pages/employees/employmentdetails" */))
const _590bc32a = () => interopDefault(import('..\\pages\\google\\site.vue' /* webpackChunkName: "pages/google/site" */))
const _6eeb854b = () => interopDefault(import('..\\pages\\profile\\profile.vue' /* webpackChunkName: "pages/profile/profile" */))
const _09de3747 = () => interopDefault(import('..\\pages\\contactinfo\\_name.vue' /* webpackChunkName: "pages/contactinfo/_name" */))
const _9d19da92 = () => interopDefault(import('..\\pages\\editEmployee\\_name.vue' /* webpackChunkName: "pages/editEmployee/_name" */))
const _7d2e1e20 = () => interopDefault(import('..\\pages\\employees\\_name.vue' /* webpackChunkName: "pages/employees/_name" */))
const _22562eca = () => interopDefault(import('..\\pages\\jobdetails\\_name.vue' /* webpackChunkName: "pages/jobdetails/_name" */))
const _2ea92037 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/all-employees",
    component: _e2399584,
    name: "all-employees"
  }, {
    path: "/company-details",
    component: _e8dddfd2,
    name: "company-details"
  }, {
    path: "/contact-us",
    component: _66543ed6,
    name: "contact-us"
  }, {
    path: "/dashboard",
    component: _48208279,
    name: "dashboard"
  }, {
    path: "/directory",
    component: _d553bc5c,
    name: "directory"
  }, {
    path: "/employee",
    component: _7b8ea559,
    name: "employee"
  }, {
    path: "/employee-details",
    component: _6e00674e,
    name: "employee-details"
  }, {
    path: "/manager-account",
    component: _3ee645b2,
    name: "manager-account"
  }, {
    path: "/signin",
    component: _498b3d0d,
    name: "signin"
  }, {
    path: "/signup",
    component: _5e219383,
    name: "signup"
  }, {
    path: "/company/company-overview",
    component: _951cef2a,
    name: "company-company-overview"
  }, {
    path: "/company/locations",
    component: _5df1fea8,
    name: "company-locations"
  }, {
    path: "/company/taxinfo",
    component: _97887fb2,
    name: "company-taxinfo"
  }, {
    path: "/department/add-department",
    component: _5938e1bb,
    name: "department-add-department"
  }, {
    path: "/employees/employmentdetails",
    component: _5e62ff5c,
    name: "employees-employmentdetails"
  }, {
    path: "/google/site",
    component: _590bc32a,
    name: "google-site"
  }, {
    path: "/profile/profile",
    component: _6eeb854b,
    name: "profile-profile"
  }, {
    path: "/contactinfo/:name?",
    component: _09de3747,
    name: "contactinfo-name"
  }, {
    path: "/editEmployee/:name?",
    component: _9d19da92,
    name: "editEmployee-name"
  }, {
    path: "/employees/:name?",
    component: _7d2e1e20,
    name: "employees-name"
  }, {
    path: "/jobdetails/:name?",
    component: _22562eca,
    name: "jobdetails-name"
  }, {
    path: "/",
    component: _2ea92037,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
