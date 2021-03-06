import Vue from "vue";
import App from "./App.vue";

import "./plugins/Element";

import "vue-material-design-icons/styles.css";

import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
