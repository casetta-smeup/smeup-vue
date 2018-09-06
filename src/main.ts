import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import "./plugins/Element"

import "vue-material-design-icons/styles.css"

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
