export const Persons = {
  namespaced: true,
  state: {
    persons: [],
  },
  mutations: {
    add (state: any, newPerson: any) {
      state.persons.push(newPerson);
    },
    remove (state: any, newValue: number) {
      // TODO:
      // state.numberOfPerTables = newValue;
    }
  },
  actions: {
  },
  getters: {
    getPersons: (state:any, getters:any) => () => {
      return state.persons;
    },
  }
}