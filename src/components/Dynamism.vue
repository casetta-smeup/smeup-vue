<style lang="scss" scoped>
.container {
  display: flex;

  > .child {
    padding: 1rem;
    flex-grow: 1;
  }
}
</style>

<template>
  <div class="container">
    <div class="child">
      <Matrix
        :grouping="true"
        :sortable="false"
        :filterable="false"
        :columns="columns"
        :rows="$store.state.groupedRows"
        @rowselected="onRowSelected"
        />
    </div>

    <div class="child">
      <Matrix
        :grouping="false"
        :sortable="false"
        :filterable="false"
        :columns="columns"
        :rows="rows"
        />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Matrix from "./comp/matrix/Matrix.vue";

import _ from "lodash";

@Component({
  name: "dyn",

  components: {
    Matrix
  }
})
export default class Dynamism extends Vue {
  columns = this.$store.state.dataTableCols;
  rows = this.$store.state.dataTableFewRows;

  onRowSelected($event: any) {
    const clonedRow = _.cloneDeep($event.row);
    clonedRow.selected = false;
    this.$store.commit("rowSelected", clonedRow);
  }
}
</script>
