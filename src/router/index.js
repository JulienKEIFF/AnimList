import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import Account from '../views/Account.vue'
import Manga from '../views/Manga.vue'
import Anime from '../views/Anime.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/user',
    name: 'Account',
    component: Account
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

export default router
