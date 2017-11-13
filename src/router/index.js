import Vue from 'vue'
import Router from 'vue-router'
import Activity from '../components/Activity.vue'
import Pictures from '../components/Pictures.vue'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/Activity',
			name: 'Activity',
			component: Activity
		},
		{
			path: '/Pictures',
			name: 'Pictures',
			component: Pictures
		}
	]
})
