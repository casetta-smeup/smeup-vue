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

    &.groupRow {
      background-color: yellow;

      td {
        border-left: none;
        border-right: none;
        text-align: left;
      }
    }
  }
}
</style>

<template>
  <tbody>
    <tr
      v-for="(row, index) in rows"
      :key="index"
      :class="{ selected: row.selected, groupRow: row.group }"
    >
      <template v-if="row.group">
        <td>
          <div @click="row.collapsed = !row.collapsed">
            <chevron-right />
          </div>
        </td>

        <td
          :colspan="columns.length"
        >
          {{ row.text }}
        </td>
      </template>

      <template v-else>
        <td></td>
        <td
          v-for="column in columns"
          :key="column.c"
          @click="onCellClick(column, row)"
        >
          {{ getCellValue(column.c, row) }}
        </td>
      </template>
    </tr>
  </tbody>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";

@Component({
  components: {
    ChevronRight
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

  onCellClick(column: any, row: any) {
    // unselecting all rows
    this.rows
      .filter(row => row.selected)
      .forEach(row => (row.selected = false));
    row.selected = true;
  }
}
</script>
