<template>
  <div id="app">
    <div>
      <el-radio-group
        v-model="dataType"
        @change="onDataTypeChange"
      >
        <el-radio :label="0">Test #1</el-radio>
        <el-radio :label="1">Test #2 (raggruppamento 1 livello)</el-radio>
        <el-radio :label="2">Test #3 (raggruppamento 2 livelli)</el-radio>
      </el-radio-group>
    </div>

    <div
      class="playground"
      v-if="false"
    >
      <el-checkbox
        v-model="sorting"
        border
      >Abilita sorting</el-checkbox>

      <el-checkbox
        v-model="filter"
        border
      >Abilita filtri</el-checkbox>

      <el-checkbox
        v-if="false"
        v-model="grouping"
        border
        @change="onGroupingChange"
      >Abilita raggruppamenti</el-checkbox>
    </div>

    <Matrix
      :grouping="grouping"
      :sortable="sorting"
      :filterable="filter"
      :columns="columns"
      :rows="rows" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Matrix from "./components/comp/matrix/Matrix.vue";

import { comuniCols, comuniRows } from "./mock/dataTable";

@Component({
  components: {
    Matrix
  }
})
export default class App extends Vue {
  grouping = false;
  sorting = false;
  filter = false;

  dataType = 0;

  columns: any[] = this.$store.state.dataTableCols;

  rows: any[] = this.$store.state.dataTableFewRows;

  onDataTypeChange() {
    switch (this.dataType) {
      case 1:
        this.grouping = true;
        this.columns = this.$store.state.dataTableCols;
        this.rows = this.$store.state.groupedRows;
        break;

      case 2:
        this.grouping = true;
        this.columns = comuniCols;
        this.rows = comuniRows;
        break;

      default:
        this.grouping = false;
        this.columns = this.$store.state.dataTableCols;
        this.rows = this.$store.state.dataTableFewRows;
        break;
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
    margin: 1rem 0;
  }
}
</style>
