/**
 * Created by 93659 on 2018/12/25.
 */
import {
  reqUserInfo,
  reqLogout
}from '../../api'

import {
  RECEIVE_USER,
  RESET_USER
}from'../mutation-types'

const state = {
  user:{}
}
const mutations = {
  [RECEIVE_USER](state, {user}){
    state.user = user
  },
  [RESET_USER](state){
    state.user = {}
  },
}
const actions = {
  saveUser({commit}, user) {
    commit(RECEIVE_USER, {user})
  },
  async getUser({commit}){
    const result = await reqUserInfo()
    if(result.code ===0){
      const user = result.data
      commit(RECEIVE_USER,{user})
    }
  },
  async logout({commit}){
    const result = await reqLogout()
    if(result.code ===0){
      commit(RESET_USER)
    }
  },
}
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters
}
