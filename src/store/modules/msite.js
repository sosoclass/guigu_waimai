/**
 * Created by 93659 on 2018/12/25.
 */
import {
  reqAddress,
  reqCategorys,
  reqShops,
}from '../../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
}from'../mutation-types'

const state = {
  latitude: 40.10038,
  longitude: 116.36867,
  address:{},
  categorys:[],
  shops:[],
}
const mutations = {
  [RECEIVE_ADDRESS](state, {address}){
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}){
    state.shops = shops
  },
}
const actions = {
  async getAddress ({commit, state}){
    const {longitude, latitude} = state;
    const result = await reqAddress(longitude, latitude)
    if (result.code === 0) {
      const address = result.data;
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  async getCategorys ({commit}){
    const result = await reqCategorys()
    if (result.code === 0) {
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  async getShops ({commit, state}){
    const {longitude, latitude} = state;
    const result = await reqShops(longitude, latitude);
    if (result.code === 0) {
      const shops = result.data;
      commit(RECEIVE_SHOPS, {shops})
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
