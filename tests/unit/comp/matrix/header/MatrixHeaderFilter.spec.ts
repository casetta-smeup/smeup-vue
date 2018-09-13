import { Input, Select } from "element-ui";

import { createLocalVue, mount } from "@vue/test-utils";

import MatrixHeaderFilter from "@/components/comp/matrix/header/MatrixHeaderFilter.vue";

import { dataTableCols } from "@/mock/dataTable";

describe("Input is a inputtext", () => {
  let defaultProps: any;

  let localVue: any;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Input);
    localVue.use(Select);

    defaultProps = {
      column: dataTableCols[0],
      rows: []
    };
  });

  it("filter is an input", () => {
    const wrapper = mount(MatrixHeaderFilter, {
      propsData: defaultProps,
      localVue
    });

    const field = wrapper.find(".filter-container > div");

    expect(field.classes()).toContain("el-input");
    expect(field.classes()).not.toContain("el-select");
  });

  it("changing filter value should not change column filter value", () => {
    const wrapper = mount(MatrixHeaderFilter, {
      propsData: defaultProps,
      localVue
    });

    const input = wrapper.find("input.el-input__inner");

    input.setValue("pippo");

    expect(defaultProps.column.filterValue).not.toBe("pippo");

    expect(wrapper.emitted().filterby).toBeTruthy();
  });
});
