import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from'../views/Chatroom.vue'
import { projectAuth } from '@/firebase/config'

const requireAuth = (to, form, next) =>{
  let user = projectAuth.currentUser
  console.log( 'current user in auth: ', user)
  if (!user) {
    next({name: 'welcome'})
  }else{
    next()
  }

}

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
