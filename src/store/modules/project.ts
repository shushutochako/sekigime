export const Project = {
  namespaced: true,
  state: {
    name: "",
    editId: "",
    referenceId: ""
  },
  mutations: {
    create (state: any, newProject: any) {
      state.name = newProject.name;
      state.editId = newProject.editId;
      state.referenceId = newProject.referenceId;
    },
  },
  actions: {
  },
  getters: {
    getName: (state:any, getters:any) => () => {
      return state.name;
    },
    getEditId: (state:any, getters:any) => () => {
      return state.editId;
    },
    getReferenceId: (state:any, getters:any) => () => {
      return state.referenceId;
    }
  }
}