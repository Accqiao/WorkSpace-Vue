import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../Layout/LayoutView.vue'

const HelloWorld = () => import("@/pages/HelloWorld/HelloWorld.vue")
const ToDoList = () => import("@/pages/ToDoList/ToDoList.vue")
const ByValue = () => import("@/pages/ByValue/BoxView.vue")
const ByWatch = () => import("@/pages/ByWatch/WatchView.vue")
const routes: Array<RouteRecordRaw> = [
  // { path: "/", redirect: "/home" },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path:'todolist',
        name:'todolist',
        component: ToDoList
      },
      {
        path:'byvalue',
        name:'byvalue',
        component: ByValue
      },
      {
        path:'bywatch',
        name:'bywatch',
        component: ByWatch
      },

    ]
  },

  {
    path: "/hello",
    name: "hello",
    component: () => import("@/pages/HelloWorld/indexView.vue"),
    children: [
      {
        path:'/hello',
        redirect:"/hello/world"
      },
      {
          path:'world',
          name:'world',
          component: HelloWorld
      },
      {
          path:'about',
          name:'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '@/pages/HelloWorld/AboutView.vue')
      },
      {
          name:'home',
          path:'home',
          component: () => import("@/pages/HelloWorld/HomeView.vue")
      },

  ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
