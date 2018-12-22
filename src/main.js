/**
 * Created by 93659 on 2018/12/21.
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NavHeader from './compoents/NavHeader/NavHeader.vue'
import stars from './compoents/star/star.vue'

Vue.component('NavHeader',NavHeader);
Vue.component('stars',stars);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  stars
});

