export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/puterakahfi/www/awesome-js-dev-id/src/pages/About.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/puterakahfi/www/awesome-js-dev-id/src/pages/Index.vue"),
    meta: {
      data: [1,"21e7e51a"]
    }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/puterakahfi/www/awesome-js-dev-id/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/puterakahfi/www/awesome-js-dev-id/node_modules/gridsome/app/pages/404.vue")
  }
]

