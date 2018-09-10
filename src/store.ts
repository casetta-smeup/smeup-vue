import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { dataTableCols, dataTableFewRows, groupedRows } from "@/mock/dataTable";

export default new Vuex.Store({
  state: {
    dataTableCols,
    dataTableFewRows,
    groupedRows
  },
  mutations: {},
  actions: {}
});
