import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import { Input, Option, Select } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

Vue.use(Input);
Vue.use(Option);
Vue.use(Select);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
