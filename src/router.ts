import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dyn",
      name: "dyn",
      component: () => import(/* webpackChunkName: "dyn" */ "./views/Dyn.vue")
    },
    {
      path: "/electron",
      name: "electron",
      component: () =>
        import(/* webpackChunkName: "electron" */ "./views/Electron.vue")
    }
  ]
});
