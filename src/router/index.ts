import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../pages/Layout/LayoutView.vue'

const HelloWorld = () => import("../views/HelloWorld.vue")
const ToDoList = () => import("@/pages/ToDoList/ToDoList.vue")

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
      }
    ]
  },

  {
    path: "/hello",
    name: "hello",
    component: () => import("../views/indexView.vue"),
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
          component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
          name:'home',
          path:'home',
          component: () => import("../views/HomeView.vue")
      },

  ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
