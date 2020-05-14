import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Account from '../views/Account.vue'
import Manga from '../views/Manga.vue'
import Anime from '../views/Anime.vue'

import {AxiosServices} from '../services/axios'
import {DexieServices} from '../services/dexie'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/user/:user',
    name: 'Account',
    component: Account,
    props: true,
    beforeEnter: async(to, from, next) =>{
      const connected = await isConnected()
    if(connected) next(vm =>{/* access granted */})
    if(!connected) next('/login')
    }
  },
  {
    path: '/mangas',
    name: 'Manga',
    component: Manga
  },
  {
    path: '/animes',
    name: 'Anime',
    component: Anime
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

async function isConnected(){
  if(await DexieServices.getToken() === undefined) return false
  const localToken = await DexieServices.getToken()
  let servToken
  if(localToken) servToken = await AxiosServices.instance.post('/user/token', {username: localToken.username})
  if(localToken.token === servToken.data) return true
  else return false
}

export default router
