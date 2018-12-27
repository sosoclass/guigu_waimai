/**
 * Created by 93659 on 2018/12/25.
 */

import Vue from 'vue'
import {
  reqGoods,
  reqRatings,
  reqInfo
}from '../../api'

import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT
}from'../mutation-types'

const state = {
  goods: [],
  ratings: [],
  info: {},
  cartFoods: []
};
const mutations = {
  [RECEIVE_GOODS](state, {goods}){
    state.goods = goods
  },
  [RECEIVE_RATINGS](state, {ratings}){
    state.ratings = ratings
  },
  [RECEIVE_INFO](state, {info}){
    state.info = info
  },
  [ADD_FOOD_COUNT](state, {food}){
    if (!food.count) {
      Vue.set(food, 'count', 1)
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  [REDUCE_FOOD_COUNT](state, {food}){
    if (food.count > 0) {
      food.count--

      if (food.count === 0) {

        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
}
const actions = {
  async getGoods({commit}, cb){
    const result = await reqGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      typeof cb === 'function' && cb()
    }
  },
  async getRatings({commit}){
    const result = await reqRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },
  async getInfo({commit}){
    const result = await reqInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
  updateFoodCount({commit}, {food, isAdd}){
    if (isAdd) {
      commit(ADD_FOOD_COUNT, {food})
    } else {
      commit(REDUCE_FOOD_COUNT, {food})
    }
  }
}
const getters = {
  // cartFoods(state){
  //   const foods = []
  //   state.goods.forEach(good=>{
  //     good.foods.forEach(food=>{
  //       if(food.count>0){
  //         foods.push(food)
  //       }
  //     })
  //   })
  //   return foods
  // }

  totalCount(state){
    return state.cartFoods.reduce((pre, food) => pre + food.count, 0)
  },
  totalPrice(state){
    return state.cartFoods.reduce((pre, food) => pre + food.count * food.price, 0)
  },
}
export default {
  state,
  mutations,
  actions,
  getters
}

