export default [
	{
		path: '/pages',
		meta: {
			breadcrumb: [
				{
					name: '頁面展示',
				},
			],
		},
		children: [
			{
				name: 'pages',
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
				name: 'youtube',
				component: () => import('@/views/pages/youtube.vue'),
				path: 'youtube',
				meta: {
					breadcrumb: [
						{
							name: 'youtube',
						},
					],
					layout: 'youtube',
				},
			},
			{
				name: 'music',
				component: () => import('@/views/pages/music.vue'),
				path: 'music',
				meta: {
					breadcrumb: [
						{
							name: 'music',
						},
					],
				},
			},
		],
	},
];
