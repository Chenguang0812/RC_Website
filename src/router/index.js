import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Views/HomeView.vue';
import AboutPage from '../Views/AboutPage.vue';
import CasePage from '../Views/CasePage.vue'
import JoinUS from '../Views/JoinUS.vue';
import No from '../Views/No.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/About',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/Case',
    name: 'Case',
    component: CasePage
  },
  {
    path: '/JoinUS',
    name: 'JoinUS',
    component: JoinUS
  },
  {
    path: '/contactUS',
    name: 'ContactUS',
    component: () => import('../Views/ContactUS.vue') // 确保路径正确
  },
  {
    path: '/No',
    name: 'No',
    component: No
  },
  {
    path: "/news",
    component: () => import("../Views/NewsPage.vue"),
    // children: [
    //   {
    //     path: 'new1',
    //     component: () => import("../Views/News/New1.vue"),
    //   },
    //   {
    //     path: 'new2',
    //     component: () => import("../Views/News/New2.vue"),
    //   },
    //   {
    //     path: 'new3',
    //     component: () => import("../Views/News/New3.vue"),
    //   },
    // ],
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;