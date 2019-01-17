import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'
import echartsDemo from './views/echarts-demo.vue'
import BillHasOpen from './views/bill-has-open.vue'
import SalesAmountBill from './views/sales-amount-bill.vue'
import DataList from './views/dataList.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
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
    }
  ]
})
