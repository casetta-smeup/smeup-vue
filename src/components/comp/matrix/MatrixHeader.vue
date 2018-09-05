<style lang="scss" scoped>
th {
  padding: 5px;
}
</style>

<template>
  <thead>
    <tr>
      <th
        v-for="col in columns"
        :key="col.c"
        :style="{ width: col.width }">

        <span @click="onCellClick(col)">{{ col.d }}</span>
      </th>
    </tr>
  </thead>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MatrixHeader extends Vue {
  // props
  @Prop() private columns!: any[];

  @Prop() private filterable!: boolean;

  @Prop() private sortable!: boolean;

  // methods
  onCellClick(col: any) {
    if (this.sortable) {
      col.sortMode === "A" ? (col.sortMode = "D") : (col.sortMode = "A");
      this.$emit("sortby", col);
    }
  }
}
</script>
