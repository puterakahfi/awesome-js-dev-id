export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/mnt/DATA/www/puterakahfi/awesome-js-dev-id/src/pages/About.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/mnt/DATA/www/puterakahfi/awesome-js-dev-id/src/pages/Index.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/mnt/DATA/www/puterakahfi/awesome-js-dev-id/node_modules/gridsome/app/pages/404.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/mnt/DATA/www/puterakahfi/awesome-js-dev-id/node_modules/gridsome/app/pages/404.vue"),
    meta: {
      data: true
    }
  }
]

