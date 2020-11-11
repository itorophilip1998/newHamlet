import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _017964fe = () => interopDefault(import('..\\pages\\all-employees.vue' /* webpackChunkName: "pages/all-employees" */))
const _9d4b6052 = () => interopDefault(import('..\\pages\\company-details.vue' /* webpackChunkName: "pages/company-details" */))
const _979bb1d4 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _6276db8e = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _1bfa3192 = () => interopDefault(import('..\\pages\\directory.vue' /* webpackChunkName: "pages/directory" */))
const _0c499d99 = () => interopDefault(import('..\\pages\\employee.vue' /* webpackChunkName: "pages/employee" */))
const _015f1f8e = () => interopDefault(import('..\\pages\\employee-details.vue' /* webpackChunkName: "pages/employee-details" */))
const _64af8572 = () => interopDefault(import('..\\pages\\manager-account.vue' /* webpackChunkName: "pages/manager-account" */))
const _5127454d = () => interopDefault(import('..\\pages\\signin.vue' /* webpackChunkName: "pages/signin" */))
const _65bd9bc3 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _3103cfaa = () => interopDefault(import('..\\pages\\company\\company-overview.vue' /* webpackChunkName: "pages/company/company-overview" */))
const _0798a8ec = () => interopDefault(import('..\\pages\\company\\locations.vue' /* webpackChunkName: "pages/company/locations" */))
const _479a7867 = () => interopDefault(import('..\\pages\\company\\taxinfo.vue' /* webpackChunkName: "pages/company/taxinfo" */))
const _68be49fb = () => interopDefault(import('..\\pages\\department\\add-department.vue' /* webpackChunkName: "pages/department/add-department" */))
const _bba150c8 = () => interopDefault(import('..\\pages\\employees\\employmentdetails.vue' /* webpackChunkName: "pages/employees/employmentdetails" */))
const _217ef6ab = () => interopDefault(import('..\\pages\\google\\site.vue' /* webpackChunkName: "pages/google/site" */))
const _024a3d8b = () => interopDefault(import('..\\pages\\profile\\profile.vue' /* webpackChunkName: "pages/profile/profile" */))
const _406fdf87 = () => interopDefault(import('..\\pages\\contactinfo\\_name.vue' /* webpackChunkName: "pages/contactinfo/_name" */))
const _4d167277 = () => interopDefault(import('..\\pages\\editEmployee\\_name.vue' /* webpackChunkName: "pages/editEmployee/_name" */))
const _54c7a930 = () => interopDefault(import('..\\pages\\employees\\_name.vue' /* webpackChunkName: "pages/employees/_name" */))
const _0a6302ec = () => interopDefault(import('..\\pages\\jobdetails\\_name.vue' /* webpackChunkName: "pages/jobdetails/_name" */))
const _8969e012 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _017964fe,
    name: "all-employees"
  }, {
    path: "/company-details",
    component: _9d4b6052,
    name: "company-details"
  }, {
    path: "/contact-us",
    component: _979bb1d4,
    name: "contact-us"
  }, {
    path: "/dashboard",
    component: _6276db8e,
    name: "dashboard"
  }, {
    path: "/directory",
    component: _1bfa3192,
    name: "directory"
  }, {
    path: "/employee",
    component: _0c499d99,
    name: "employee"
  }, {
    path: "/employee-details",
    component: _015f1f8e,
    name: "employee-details"
  }, {
    path: "/manager-account",
    component: _64af8572,
    name: "manager-account"
  }, {
    path: "/signin",
    component: _5127454d,
    name: "signin"
  }, {
    path: "/signup",
    component: _65bd9bc3,
    name: "signup"
  }, {
    path: "/company/company-overview",
    component: _3103cfaa,
    name: "company-company-overview"
  }, {
    path: "/company/locations",
    component: _0798a8ec,
    name: "company-locations"
  }, {
    path: "/company/taxinfo",
    component: _479a7867,
    name: "company-taxinfo"
  }, {
    path: "/department/add-department",
    component: _68be49fb,
    name: "department-add-department"
  }, {
    path: "/employees/employmentdetails",
    component: _bba150c8,
    name: "employees-employmentdetails"
  }, {
    path: "/google/site",
    component: _217ef6ab,
    name: "google-site"
  }, {
    path: "/profile/profile",
    component: _024a3d8b,
    name: "profile-profile"
  }, {
    path: "/contactinfo/:name?",
    component: _406fdf87,
    name: "contactinfo-name"
  }, {
    path: "/editEmployee/:name?",
    component: _4d167277,
    name: "editEmployee-name"
  }, {
    path: "/employees/:name?",
    component: _54c7a930,
    name: "employees-name"
  }, {
    path: "/jobdetails/:name?",
    component: _0a6302ec,
    name: "jobdetails-name"
  }, {
    path: "/",
    component: _8969e012,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
