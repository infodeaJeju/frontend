import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // webpackPrefetch:true 캐쉬에 미리 넣어 놓는방식
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    // webpackPrefetch:true 캐쉬에 미리 넣어 놓는방식
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStringView.vue')
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    // webpackPrefetch:true 캐쉬에 미리 넣어 놓는방식
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingHtmlView.vue')
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    // webpackPrefetch:true 캐쉬에 미리 넣어 놓는방식
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingInputView.vue')
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    // webpackPrefetch:true 캐쉬에 미리 넣어 놓는방식
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingSelectView.vue')
  },
  {
    path: '/databinding/checkbox',
    name: 'DataBindingCheckboxView',
    // webpackPrefetch:true 캐쉬에 미리 넣어 놓는방식
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingCheckboxView.vue')
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    // webpackPrefetch:true 캐쉬에 미리 넣어 놓는방식
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingRadioView.vue')
  },
  {
    path: '/databinding/attribute',
    name: 'DataBindingAttributeView',
    // webpackPrefetch:true 캐쉬에 미리 넣어 놓는방식
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingAttributeView.vue')
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    // webpackPrefetch:true 캐쉬에 미리 넣어 놓는방식
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingListView.vue')
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClassView',
    // webpackPrefetch:true 캐쉬에 미리 넣어 놓는방식
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingClassView.vue')
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyleView',
    // webpackPrefetch:true 캐쉬에 미리 넣어 놓는방식
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingStyleView.vue')
  },
  {
    path: '/event/click',
    name: 'EventClickView',
    // webpackPrefetch:true 캐쉬에 미리 넣어 놓는방식
    component: () => import(/* webpackChunkName: "databinding" */ '../views/2_event/EventClickView.vue')
  },
  {
    path: '/event/change',
    name: 'EventChangeView',
    // webpackPrefetch:true 캐쉬에 미리 넣어 놓는방식
    component: () => import(/* webpackChunkName: "databinding" */ '../views/2_event/EventChangeView.vue')
  },
  {
    path: '/event/key',
    name: 'EventKeyView',
    // webpackPrefetch:true 캐쉬에 미리 넣어 놓는방식
    component: () => import(/* webpackChunkName: "databinding" */ '../views/2_event/EventKeyView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
