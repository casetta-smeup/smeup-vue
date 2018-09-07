<style lang="scss" scoped>
.filter-container {
  margin: 5px 0px;
}
</style>

<template>
  <div class="filter-container">
    <el-input
      v-if="isNumber"
      v-model="column.filterValue"
    ></el-input>

    <el-select
      v-else
      placeholder="Choose one"
      :multiple="true"
      v-model="column.filterValue">

      <el-option
        v-for="(value, index) in comboValues"
        :key="index"
        :label="value"
        :value="value"
      ></el-option>
    </el-select>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MatrixHeaderFilter extends Vue {
  // props
  @Prop() private column!: any;

  @Prop() private rows!: any[];

  // computed
  get isNumber() {
    return "NR" === this.column.t;
  }

  get comboValues() {
    // distinct values + sort
    const values: any[] = new Array();

    this.rows
      .map(r => this.getComboValuesRic(r))
      .forEach(_values => _values.forEach(_value => values.push(_value)));

    return ["", ...new Set(values)].sort();
  }

  // methods
  getComboValuesRic(_row: any): any[] {
    const values = new Array();

    if (_row.group) {
      // TODO
      if (_row.children) {
        _row.children
          .map((child: any) => this.getComboValuesRic(child))
          .forEach((_values: any) =>
            _values.forEach((_value: any) => values.push(_value))
          );
      }
    } else {
      values.push(_row.content[this.column.c].c);
    }

    return values;
  }
}
</script>
