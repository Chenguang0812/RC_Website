import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Views/HomeView.vue';
import About from '../Views/About.vue';
import Case from '../Views/Case.vue'
import JoinUS from '../Views/JoinUS.vue';

const routes = [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Case',
      name: 'Case',
      component: Case
    },
    {
      path: '/JoinUS',
      name: 'JoinUS',
      component: JoinUS
    },
    {
     path: "/news",
     component: () => import("../Views/News.vue"),
     children:[
        {
            path: 'new1',
            component: () => import("../Views/News/New1.vue"),
        },
        {
            path: 'new2',
            component: () => import("../Views/News/New2.vue"),
        },
        {
            path: 'new3',
            component: () => import("../Views/News/New3.vue"),
        },
      ],
    }
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router