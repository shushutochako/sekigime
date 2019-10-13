import Vue from 'vue';
import Vuex from 'vuex';

import {TableSetting} from './modules/table-setting';
import {Persons} from './modules/persons';
import {Project} from './modules/project';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TableSetting,
    Persons,
    Project
  },
  actions: {
    clearAll({ commit }){
      commit("TableSetting/clear")
      commit("Persons/clear")
      commit("Project/clear")
    }
  }
});
