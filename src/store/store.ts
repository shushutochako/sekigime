import Vue from 'vue';
import Vuex from 'vuex';

import {TableSetting} from './modules/table-setting';
import {Persons} from './modules/persons';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TableSetting,
    Persons,
  }
});