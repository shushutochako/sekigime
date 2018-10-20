import Vue from 'vue';
import Vuex from 'vuex';

import {tableSetting} from './modules/table-setting';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tableSetting,
  }
});
