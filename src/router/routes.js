/**
 * Created by 93659 on 2018/12/21.
 */
import Msite from '../pages/MSite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

export default [
  {
    path:'/msite',
    component:Msite,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/search',
    component:Search,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/order',
    component:Order,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/login',
    component:Login,
  },
  {
    path:'/',
    redirect:'./msite'
  },
]
