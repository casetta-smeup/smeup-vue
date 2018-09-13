<template>
  <div id="app">
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/dyn">Dinamismo</router-link>
      <router-link to="/electron" v-if="inElectron">Electron!</router-link>
    </div>

    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { comuniCols, comuniRows } from "./mock/dataTable";

@Component
export default class App extends Vue {
  inElectron = navigator.userAgent.toLowerCase().indexOf(" electron/") != -1;
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .links {
    margin-bottom: 1rem;

    a {
      margin: 0 0.5rem;
    }
  }
}
</style>
