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