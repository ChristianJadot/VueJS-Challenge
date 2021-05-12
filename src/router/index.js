import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LaCarte from '../views/laCarte.vue'
import Restaurants from '../views/Restaurants.vue'
import Galerie from '../views/Galerie.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/laCarte',
    name: 'LaCarte',
    component: LaCarte
  },
  {
    path: '/Restaurants',
    name: 'Restaurants',
    component: Restaurants
  },
  {
    path: '/Galerie',
    name: 'Galerie',
    component: Galerie
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
    mode: "history",
  routes
})

export default router
