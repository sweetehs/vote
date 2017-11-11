import Vue from 'vue'
import Router from 'vue-router'
import Activity from '../components/Activity.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/Activity',
			name: 'Activity',
			component: Activity
		}
	]
})
