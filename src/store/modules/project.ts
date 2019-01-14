export const Project = {
  namespaced: true,
  state: {
    name: "",
  },
  mutations: {
    updateName (state: any, newName: string) {
      state.name = newName;
    },
  },
  actions: {
  },
  getters: {
    getName: (state:any, getters:any) => () => {
      return state.name;
    },
  }
}