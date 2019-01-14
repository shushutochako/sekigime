export const Persons = {
  namespaced: true,
  state: {
    persons: [],
  },
  mutations: {
    add (state: any, newPerson: any) {
      state.persons.push(newPerson);
    },
    remove (state: any, index: number) {
      state.persons.splice(index,1);
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