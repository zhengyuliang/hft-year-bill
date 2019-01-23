import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'
import echartsDemo from './views/echarts-demo.vue'
import BillHasOpen from './views/bill-has-open.vue'
import SalesAmountBill from './views/sales-amount-bill.vue'
import DataList from './views/dataList.vue'
import Download from './views/download.vue'

Vue.use(Router)

let router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/bill-has-open',
      name: 'BillHasOpen',
      component: BillHasOpen
    },
    {
      path: '/echarts-demo',
      name: 'echartsDemo',
      component: echartsDemo
    },
    {
      path: '/sales-amount-bill',
      name: 'SalesAmountBill',
      component: SalesAmountBill
    },
    {
      path: '/dataList',
      name: 'DataList',
      component: DataList
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    }
  ]
});
// 全局路由守卫
// router.beforeEach((to, from, next) => {
//   var info = sessionStorage.getItem("USERINFO")
//   if (!info && to['name'] !== 'Home' && to['name'] !== 'Login') {
//     next({
//       name: 'Home'
//     })
//   } else {
//     next();
//   }
// });

export default router;