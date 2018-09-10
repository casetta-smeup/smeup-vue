<style lang="scss" scoped>
</style>

<template>
  <tbody>
    <template v-for="(row, index) in rows">
      <GroupRow
        v-if="row.group"
        :key="index"
        :columns="columns"
        :row="row"
        @rowtoggled="onRowToggled"
      />

      <DataRow
        v-else
        :key="index"
        :columns="columns"
        :row="row"
        @rowselect="onRowSelect"
      />
    </template>
  </tbody>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import DataRow from "./DataRow.vue";
import GroupRow from "./GroupRow.vue";

@Component({
  components: {
    DataRow,
    GroupRow
  }
})
export default class MatrixBody extends Vue {
  // props
  @Prop() private columns!: any[];

  @Prop() private rows!: any[];

  @Prop() private filterable!: boolean;

  @Prop() private sortable!: boolean;

  @Prop() private grouping!: boolean;

  // methods
  getCellValue(columnCode: string, row: any) {
    return row.content[columnCode].c;
  }

  onRowSelect($event: any) {
    // unselecting all rows
    this.rows
      .filter(row => row.selected)
      .forEach(row => (row.selected = false));

    $event.row.selected = true;
  }

  onRowToggled($event: any) {
    this.$emit("rowtoggled", $event);
  }
}
</script>
