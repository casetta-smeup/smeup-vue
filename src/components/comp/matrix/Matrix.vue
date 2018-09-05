<style lang="scss" scoped>
.MAT {
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  .scrollable-header {
    overflow: hidden;
  }

  .scroll-radio {
    margin-top: 1rem;
  }
}
</style>

<template>
  <div class="MAT">
    <table>
      <MatrixHeader
        :columns="columns"
        :rows="rows"
        :filterable="filterable"
        :sortable="sortable"
        :scroll="scroll"
        @sortby="onSort($event)"
      ></MatrixHeader>

      <MatrixBody
        :columns="columns"
        :rows="filteredRows"
      ></MatrixBody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import MatrixBody from "./MatrixBody.vue";
import MatrixHeader from "./header/MatrixHeader.vue";

import mockedData from "@/mock/dataTable";

@Component({
  components: {
    MatrixBody,
    MatrixHeader
  }
})
export default class Matrix extends Vue {
  // data
  manyRows: boolean = false;

  filterable: boolean = true;

  sortable: boolean = false;

  sortByColumn: any = null;

  pagination = {
    enabled: false,
    pageSize: 5,
    currentPage: 1
  };

  scroll = {
    enabled: false,
    scrollMode: 0,
    scrollWidth: 0,
    scrollHeight: 0,
    columnsWidth: [],
    scrollLeft: 0
  };

  columns: any[] = mockedData.dataTableCols;

  rows: any[] = mockedData.dataTableFewRows;

  // computed props
  get filteredRows() {
    console.log("calculate filteredRows");

    const filteredRows = this.rows.filter(r => {
      const columnsWithFilter = this.columns.filter(
        c => c.filterValue.length > 0
      );
      if (columnsWithFilter.length > 0) {
        // there is atleast a filter
        return (
          columnsWithFilter.filter(c => {
            console.log("column", c.filterValue);
            let rowCell = r.content[c.c];
            if (rowCell) {
              return rowCell.c.includes(c.filterValue);
            } else {
              return false;
            }
          }).length == columnsWithFilter.length
        );
      }
      return true;
    });
    // check sorting
    if (this.sortByColumn) {
      return filteredRows.sort((r1, r2) => {
        const val1 = r1.content[this.sortByColumn].c;
        const val2 = r2.content[this.sortByColumn].c;
        // check if ascending or descending sort
        const sortMode = this.columns.filter(c => c.c === this.sortByColumn)[0]
          .sortMode;
        const compare = val1.localeCompare(val2);
        return sortMode === "A" ? compare : compare * -1;
      });
    }
    // check pagination
    if (this.pagination.enabled) {
      const start =
        (1 * this.pagination.pageSize - this.pagination.pageSize) *
        this.pagination.currentPage;
      const end = this.pagination.pageSize * this.pagination.currentPage;
      // console.log("start", start);
      // console.log("end", end);
      return filteredRows.splice(start, end);
    }
    return filteredRows;
  }

  // methods
  onSort($event: any) {
    this.sortByColumn = $event.c;
  }
}
</script>
