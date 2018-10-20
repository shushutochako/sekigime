export const tableSetting = {
  namespaced: true,
  state: {
    numberOfPersons: 0,
    numberOfPerTables: 1,
  },
  mutations: {
    updateNumberOfPersons (state: any, newValue: number) {
      state.numberOfPersons = newValue;
    }
  },
  actions: {
  },
}