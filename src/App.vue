<template>
  <div id="app">
    <div class="playground">
      <el-checkbox
        v-model="sorting"
        border
      >Abilita sorting</el-checkbox>

      <el-checkbox
        v-model="grouping"
        border
        @change="onGroupingChange"
      >Abilita raggruppamenti</el-checkbox>
    </div>

    <Matrix
      :grouping="grouping"
      :sortable="sorting"
      :rows="rows" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Matrix from "./components/comp/matrix/Matrix.vue";

import { dataTableFewRows, groupedRows } from "./mock/dataTable";

@Component({
  components: {
    Matrix
  }
})
export default class App extends Vue {
  grouping = false;
  sorting = false;

  rows: any[] = dataTableFewRows;

  onGroupingChange() {
    if (this.grouping) {
      this.rows = groupedRows;
    } else {
      this.rows = dataTableFewRows;
    }
  }
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

  .playground {
    margin-bottom: 1rem;
  }
}
</style>
