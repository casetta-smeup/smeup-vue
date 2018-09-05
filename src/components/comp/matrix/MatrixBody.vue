<style lang="scss" scoped>
tbody {
  tr {
    margin: 0px;

    &:nth-child(even) {
      background-color: #f2f2f2;
    }

    &:hover {
      background-color: lightyellow;
    }

    &.selected {
      background-color: lightslategrey;
    }

    td {
      padding: 5px;
      border: 1px solid black;
    }
  }
}
</style>

<template>
  <tbody>
    <tr
      v-for="(row, index) in rows"
      :key="index"
      :class="{ selected: row.selected }"
    >
      <td
        v-for="column in columns"
        :key="column.c"
        @click="onCellClick(column, row)"
      >
        {{ getCellValue(column.c, row) }}
      </td>
    </tr>
  </tbody>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MatrixBody extends Vue {
  // props
  @Prop() private columns!: any[];

  @Prop() private rows!: any[];

  @Prop() private filterable!: boolean;

  @Prop() private sortable!: boolean;

  // methods
  getCellValue(columnCode: string, row: any) {
    return row.content[columnCode].c;
  }

  onCellClick(column: any, row: any) {
    // unselecting all rows
    this.rows
      .filter(row => row.selected)
      .forEach(row => (row.selected = false));
    row.selected = true;
  }
}
</script>
