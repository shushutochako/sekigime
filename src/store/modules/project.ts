export const Project = {
  namespaced: true,
  state: {
    id: 0,
    name: "",
    editId: "",
    referenceId: ""
  },
  mutations: {
    create (state: any, newProject: any) {
      state.id = newProject.id;
      state.name = newProject.name;
      state.editId = newProject.editId;
      state.referenceId = newProject.referenceId;
    },
    clear(state: any, index: number) {
      state.id = 0;
      state.name = "";
      state.editId = "";
      state.referenceId = "";
    }
  },
  actions: {
  },
  getters: {
    getId: (state:any, getters:any) => () => {
      return state.id;
    },
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