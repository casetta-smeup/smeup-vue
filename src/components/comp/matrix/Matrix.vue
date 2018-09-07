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
        :grouping="grouping"
        @sortby="onSort($event)"
      ></MatrixHeader>

      <MatrixBody
        :columns="columns"
        :rows="filteredRows"
        :grouping="grouping"
      ></MatrixBody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import MatrixBody from "./body/MatrixBody.vue";
import MatrixHeader from "./header/MatrixHeader.vue";

import { dataTableCols } from "@/mock/dataTable";

@Component({
  components: {
    MatrixBody,
    MatrixHeader
  }
})
export default class Matrix extends Vue {
  // props
  @Prop() private filterable!: boolean;

  @Prop() private sortable!: boolean;

  @Prop() private grouping!: boolean;

  @Prop() private rows!: any[];

  // data
  manyRows: boolean = false;

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

  columns: any[] = dataTableCols;

  // computed props
  get filteredRows(): any[] {
    if (this.grouping) {
      // trasformo l'albero in una lista
      const filteredRows: any[] = [];

      this.rows.forEach(r => {
        // add row
        filteredRows.push(r);

        if (r.group && !r.collapsed) {
          // adding children
          let _tempRows: any[];

          // filter
          const filteredChildren = this.filterRows(r.children);

          if (this.sortable) {
            _tempRows = this.sortRows(filteredChildren);
          } else {
            _tempRows = filteredChildren;
          }
          _tempRows.forEach((child: any) => filteredRows.push(child));
        }
      });

      return filteredRows;
    }

    // filter row
    const filteredRows = this.filterRows(this.rows);

    // check sorting
    if (this.sortByColumn) {
      return this.sortRows(filteredRows);
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
  filterRows(_rows: any[]) {
    return _rows.filter(r => {
      const columnsWithFilter = this.columns.filter(
        c => c.filterValue.length > 0
      );
      if (columnsWithFilter.length > 0) {
        // there is atleast a filter
        return (
          columnsWithFilter.filter(c => {
            let rowCell = r.content[c.c];
            if (rowCell) {
              // checking if filter is an array
              if (Array.isArray(c.filterValue)) {
                for (let i = 0; i < c.filterValue.length; i++) {
                  if (rowCell.c.includes(c.filterValue[i])) {
                    return true;
                  }
                }
              } else {
                return rowCell.c.includes(c.filterValue);
              }
            }

            return false;
          }).length == columnsWithFilter.length
        );
      }
      return true;
    });
  }

  onSort($event: any) {
    this.sortByColumn = $event.c;
  }

  sortRows(_rows: any[]) {
    return _rows.sort((r1, r2) => {
      const val1 = r1.content[this.sortByColumn].c;
      const val2 = r2.content[this.sortByColumn].c;
      // check if ascending or descending sort
      const sortMode = this.columns.filter(c => c.c === this.sortByColumn)[0]
        .sortMode;

      const compare = val1.localeCompare(val2);
      return sortMode === "A" ? compare : compare * -1;
    });
  }
}
</script>
