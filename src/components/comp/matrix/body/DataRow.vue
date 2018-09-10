<style lang="scss" scoped>
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
</style>

<template>
  <tr
    class="data-row"
    :class="{selected: row.selected}"
  >
    <td
      v-for="column in columns"
      :key="column.c"
      @click="onCellClick(column)"
    >
      {{ getCellValue(column.c) }}
    </td>
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class DataRow extends Vue {
  // props
  @Prop() private columns!: any[];

  @Prop() private row!: any;

  // methods
  getCellValue(columnCode: string) {
    return this.row.content[columnCode].c;
  }

  onCellClick(column: any) {
    this.$emit("rowselect", { column, row: this.row });
  }
}
</script>
