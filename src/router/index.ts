import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import AboutUs from '../views/AboutUS.vue'
import ContactUs from '../views/ContactUs.vue'
import CosplayGuests from '../views/cosplayGuests.vue'
import Photograhers from '../views/Photograhers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About Us',
      component: AboutUs
    },
    {
      path: '/cosplay-guests',
      name: 'Cosplay Guest',
      component: CosplayGuests
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      component: ContactUs
    },
    {
      path: '/photograhers',
      name: 'Photograhers',
      component: Photograhers
    }
  ]
})

export default router
