import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _26f285a6 = () => interopDefault(import('..\\pages\\all-employees.vue' /* webpackChunkName: "pages/all-employees" */))
const _5d0de67f = () => interopDefault(import('..\\pages\\company-details.vue' /* webpackChunkName: "pages/company-details" */))
const _580f723e = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _212de63a = () => interopDefault(import('..\\pages\\directory.vue' /* webpackChunkName: "pages/directory" */))
const _1cf8b3f1 = () => interopDefault(import('..\\pages\\employee.vue' /* webpackChunkName: "pages/employee" */))
const _67c34434 = () => interopDefault(import('..\\pages\\employee-details.vue' /* webpackChunkName: "pages/employee-details" */))
const _10631c1a = () => interopDefault(import('..\\pages\\manager-account.vue' /* webpackChunkName: "pages/manager-account" */))
const _0ad811a5 = () => interopDefault(import('..\\pages\\signin.vue' /* webpackChunkName: "pages/signin" */))
const _1f6e681b = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _f379065a = () => interopDefault(import('..\\pages\\company\\company-overview.vue' /* webpackChunkName: "pages/company/company-overview" */))
const _1f81b144 = () => interopDefault(import('..\\pages\\company\\locations.vue' /* webpackChunkName: "pages/company/locations" */))
const _1259b6bf = () => interopDefault(import('..\\pages\\company\\taxinfo.vue' /* webpackChunkName: "pages/company/taxinfo" */))
const _bab50b5a = () => interopDefault(import('..\\pages\\department\\add-department.vue' /* webpackChunkName: "pages/department/add-department" */))
const _01e85c18 = () => interopDefault(import('..\\pages\\employees\\employmentdetails.vue' /* webpackChunkName: "pages/employees/employmentdetails" */))
const _65ed083a = () => interopDefault(import('..\\pages\\profile\\profile.vue' /* webpackChunkName: "pages/profile/profile" */))
const _5858e7df = () => interopDefault(import('..\\pages\\contactinfo\\_name.vue' /* webpackChunkName: "pages/contactinfo/_name" */))
const _324e751f = () => interopDefault(import('..\\pages\\editEmployee\\_name.vue' /* webpackChunkName: "pages/editEmployee/_name" */))
const _1f86e788 = () => interopDefault(import('..\\pages\\employees\\_name.vue' /* webpackChunkName: "pages/employees/_name" */))
const _6d462a44 = () => interopDefault(import('..\\pages\\google\\_name.vue' /* webpackChunkName: "pages/google/_name" */))
const _f011e99c = () => interopDefault(import('..\\pages\\jobdetails\\_name.vue' /* webpackChunkName: "pages/jobdetails/_name" */))
const _2ca3589f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _26f285a6,
    name: "all-employees"
  }, {
    path: "/company-details",
    component: _5d0de67f,
    name: "company-details"
  }, {
    path: "/dashboard",
    component: _580f723e,
    name: "dashboard"
  }, {
    path: "/directory",
    component: _212de63a,
    name: "directory"
  }, {
    path: "/employee",
    component: _1cf8b3f1,
    name: "employee"
  }, {
    path: "/employee-details",
    component: _67c34434,
    name: "employee-details"
  }, {
    path: "/manager-account",
    component: _10631c1a,
    name: "manager-account"
  }, {
    path: "/signin",
    component: _0ad811a5,
    name: "signin"
  }, {
    path: "/signup",
    component: _1f6e681b,
    name: "signup"
  }, {
    path: "/company/company-overview",
    component: _f379065a,
    name: "company-company-overview"
  }, {
    path: "/company/locations",
    component: _1f81b144,
    name: "company-locations"
  }, {
    path: "/company/taxinfo",
    component: _1259b6bf,
    name: "company-taxinfo"
  }, {
    path: "/department/add-department",
    component: _bab50b5a,
    name: "department-add-department"
  }, {
    path: "/employees/employmentdetails",
    component: _01e85c18,
    name: "employees-employmentdetails"
  }, {
    path: "/profile/profile",
    component: _65ed083a,
    name: "profile-profile"
  }, {
    path: "/contactinfo/:name?",
    component: _5858e7df,
    name: "contactinfo-name"
  }, {
    path: "/editEmployee/:name?",
    component: _324e751f,
    name: "editEmployee-name"
  }, {
    path: "/employees/:name?",
    component: _1f86e788,
    name: "employees-name"
  }, {
    path: "/google/:name?",
    component: _6d462a44,
    name: "google-name"
  }, {
    path: "/jobdetails/:name?",
    component: _f011e99c,
    name: "jobdetails-name"
  }, {
    path: "/",
    component: _2ca3589f,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
