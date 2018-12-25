/**
 * Created by 93659 on 2018/12/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getter from './getters'
import msite from'./modules/msite'
import user from'./modules/user'
import shop from './modules/shop'

Vue.use(Vuex);


export default new Vuex.Store({
  modules:{
    msite,
    user,
    shop
  },
  actions,
  getter,
})
