export default [
	{
		path: '/components',
		meta: {
			breadcrumb: [
				{
					name: '元件管理',
				},
			],
		},
		children: [
			{
				name: 'components',
				path: '',
				meta: {
					breadcrumb: [
						{
							name: '',
						},
					],
				},
			},
			{
				name: 'charts',
				component: () => import('@/views/components/charts.vue'),
				path: 'charts',
				meta: {
					breadcrumb: [
						{
							name: 'charts',
						},
					],
				},
			},
			{
				name: 'tables',
				component: () => import('@/views/components/tables.vue'),
				path: 'tables',
				meta: {
					breadcrumb: [
						{
							name: 'tables',
						},
					],
				},
			},
		],
	},
];
