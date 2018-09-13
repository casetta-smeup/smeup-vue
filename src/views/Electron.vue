<style lang="scss" scoped>
</style>

<template>
  <div class="electron">
    <h1>Welcome in electron!</h1>

    <button
      @click="showNotification"
    >Show notification</button>

    <div class="write-to-file">
      <el-input
        v-model="text"
      />

      <button
        @click="writeToFile"
      >Write to file</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { Electron } from "../electron/electron.js";

@Component
export default class Elec extends Vue {
  text: String = "";

  showNotification() {
    const myNotification = new Notification("Title", {
      body: "Uomo focaccina is very beatiful"
    });

    myNotification.onclick = () => {
      console.log(myNotification);
    };
  }

  writeToFile() {
    const electron = new Electron();
    electron.writeToFile(this.text);
  }
}
</script>
