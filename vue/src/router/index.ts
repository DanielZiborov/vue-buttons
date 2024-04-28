import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import { RouteNames } from './routes'
import TravelWebsiteHomePage from '../components/pages/TravelWebsite/components/pages/TravelWebsiteHomePage.vue'
import TravelWebsiteNewsPage from '../components/pages/TravelWebsite/components/pages/TravelWebsiteNewsPage.vue'
import TravelWebsiteCreatePage from '../components/pages/TravelWebsite/components/pages/TravelWebsiteCreatePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage,
  },
    {
          path: '/TravelWebsiteHomePage',
          name: RouteNames.TRAVELWEBSITEHOMEPAGE,
          component: TravelWebsiteHomePage
      },
      {
          path: '/TravelWebsiteCreatePage',
          name: RouteNames.TRAVELWEBSITECREATEPAGE,
          component: TravelWebsiteCreatePage
      },
      {
          path: '/TravelWebsiteNewsPage/:id',
          name: RouteNames.TRAVELWEBSITENEWSPAGE,
          component: TravelWebsiteNewsPage
      },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
