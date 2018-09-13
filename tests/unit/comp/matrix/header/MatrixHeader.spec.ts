import { shallowMount } from "@vue/test-utils";

import MatrixHeader from "@/components/comp/matrix/header/MatrixHeader.vue";

import { dataTableCols } from "@/mock/dataTable";

const spanSelector = "tr > th > span";

describe("MatrixHeader.vue", () => {
  let defaultProps: any;

  beforeEach(() => {
    defaultProps = {
      columns: dataTableCols,
      rows: [],
      filterable: false,
      sortable: false,
      grouping: false
    };
  });

  it("number of td should be 5", () => {
    const wrapper = shallowMount(MatrixHeader, {
      propsData: defaultProps
    });

    const tds = wrapper.findAll("tr > th");

    expect(tds.length).toBe(8);
  });

  it("number of td should be 0", () => {
    // forcing no columns
    defaultProps.columns = [];

    const wrapper = shallowMount(MatrixHeader, {
      propsData: defaultProps
    });

    const tds = wrapper.findAll("tr > th");

    expect(tds.length).toBe(0);
  });

  it("columns width should be 'auto'", () => {
    const wrapper = shallowMount(MatrixHeader, {
      propsData: defaultProps
    });

    const tds = wrapper.findAll("tr > th");

    for (let i = 0; i < tds.length; i++) {
      expect(tds.at(i).attributes().style).toBe("width: auto;");
    }
  });

  it("column header should be correct", () => {
    const wrapper = shallowMount(MatrixHeader, {
      propsData: defaultProps
    });

    const headers = wrapper.findAll(spanSelector);

    expect(headers.length).toBe(8);

    expect(headers.at(0).text()).toBe("NR");
    expect(headers.at(2).text()).toBe("NR neg.(-n)");
    expect(headers.at(5).text()).toBe("Oggetto");
  });

  it("click on header should not trigger sort", () => {
    const wrapper = shallowMount(MatrixHeader, {
      propsData: defaultProps
    });

    const headers = wrapper.findAll(spanSelector);

    headers.at(0).trigger("click");

    expect(wrapper.emitted().sortby).toBeFalsy();
  });

  it("click on header should trigger sort", () => {
    // forcing sort
    defaultProps.sortable = true;

    const wrapper = shallowMount(MatrixHeader, {
      propsData: defaultProps
    });

    const headers = wrapper.findAll(spanSelector);

    headers.at(0).trigger("click");

    expect(wrapper.emitted().sortby).toBeTruthy();
  });
});
