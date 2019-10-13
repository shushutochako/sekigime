export const TableSetting = {
  namespaced: true,
  state: {
    numberOfPerTables: 1,
  },
  mutations: {
    updateNumberOfPersons (state: any, newValue: number) {
      state.numberOfPersons = newValue;
    },
    updateNumberOfPerTables (state: any, newValue: number) {
      state.numberOfPerTables = newValue;
    },
    clear(state: any, index: number) {
      state.numberOfPerTables = 1;
    }
  },
  actions: {
  },
  getters: {
    getNumberOfPerTables: (state:any, getters:any) => () => {
      return state.numberOfPerTables;
    },
  }
}