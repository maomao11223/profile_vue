import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@/assets/css/site.css';
import 'bootstrap';
import '@/assets/css/variables.css';
import VueCookies from 'vue-cookies';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import App from './App.vue';
import permission from '@/utils/directives/permissions';

const app = createApp(App);
// 注册Icons 全局组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}

app
	.use(createPinia())
	.use(Router)
	.use(VueCookies, { expires: '1d' })
	.use(permission)
	.use(ElementPlus)
	.mount('#app');
