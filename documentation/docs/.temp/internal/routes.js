/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\PROJECT\\PERSONAL\\learnVuePress\\learnVuePress\\documentation\\docs\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-3e491893",
    path: "/config/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3e491893").then(next)
    },
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-eb11b0b8",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-eb11b0b8").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-e432f31a",
    path: "/onlineform/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-e432f31a").then(next)
    },
  },
  {
    path: "/onlineform/index.html",
    redirect: "/onlineform/"
  },
  {
    name: "v-244e3910",
    path: "/onlineform/ip.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-244e3910").then(next)
    },
  },
  {
    name: "v-2f6d34dc",
    path: "/onlineform/spi.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2f6d34dc").then(next)
    },
  },
  {
    name: "v-16d757d0",
    path: "/onlineform/spkl.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-16d757d0").then(next)
    },
  },
  {
    name: "v-5bf1e578",
    path: "/onlineform/stpd.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5bf1e578").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]