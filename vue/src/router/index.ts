import Vue from 'vue'
import VueRouter from 'vue-router'
import { RouteNames } from './routes'
import HomePage from '../components/pages/Home.vue'
import OceanWebsiteHomePage from '../components/pages/OceanWebsite/components/pages/OceanWebsiteHomePage.vue'
import OceanWebsiteCreatePage from '../components/pages/OceanWebsite/components/pages/OceanWebsiteCreatePage.vue'
import OceanWebsiteNewsPage from '../components/pages/OceanWebsite/components/pages/OceanWebsiteNewsPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage,
  },
	{
		path: '/OceanWebsiteHomePage',
		name: RouteNames.OCEANWEBSITEHOMEPAGE,
		component: OceanWebsiteHomePage
	},
	{
		path: '/OceanWebsiteCreatePage',
		name: RouteNames.OCEANWEBSITECREATEPAGE,
		component: OceanWebsiteCreatePage
	},
	{
		path: '/OceanWebsiteNewsPage/:id',
		name: RouteNames.OCEANWEBSITENEWSPAGE,
		component: OceanWebsiteNewsPage
	},
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
