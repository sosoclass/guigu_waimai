/**
 * Created by 93659 on 2018/12/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getter from './getters'

Vue.use(Vuex);


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getter
})
