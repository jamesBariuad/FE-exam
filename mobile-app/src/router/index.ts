import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LoyaltyPointsPage from '../views/LoyaltyPointsPage.vue'
import StartScreen from '../views/StartPage.vue'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/loyaltyPoints'
  },
  {
    path: '/loyaltyPoints',
    name: 'LoyaltyPoints',
    component: LoyaltyPointsPage
  },
  {
    path: '/start',
    name: 'Start',
    component: StartScreen
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
