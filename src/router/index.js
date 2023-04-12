import { createRouter, createWebHistory } from 'vue-router';

import Components from './components';
import Pages from './pages';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/login',
			name: 'Login',
			component: () => import('@/views/login.vue'),
			meta: {
				breadcrumb: [
					{
						name: '',
					},
				],
				layout: 'Login',
			},
		},
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/home.vue'),
			meta: {
				breadcrumb: [
					{
						name: '首頁',
					},
				],
			},
		},

		...Components,
		...Pages,
	],
});
export default router;
