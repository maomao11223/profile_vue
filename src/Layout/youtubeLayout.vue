<template>
	<div class="common-layout">
		<el-container
			><el-header class="">
				<el-menu class="el-menu-demo" :ellipsis="false" mode="horizontal">
					<el-button class="align-self-center" text icon="Menu"> </el-button>
					<el-menu-item index="0">LOGO</el-menu-item>
					<div class="flex-grow d-flex px-3 py-2">
						<el-input v-model="input3" class="input-with-select">
							<template #append>
								<el-button icon="Search" />
							</template>
						</el-input>
					</div>

					<el-sub-menu index="1"
						><template #title>
							<el-button class="align-self-center" text icon="VideoCamera">
							</el-button></template
					></el-sub-menu>
					<el-sub-menu index="2"
						><template #title>
							<el-button class="align-self-center" text icon="Bell">
							</el-button></template
					></el-sub-menu>

					<el-sub-menu index="3">
						<template #title>
							<el-avatar
								src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
						/></template>
						<el-menu-item index="2-1">item one</el-menu-item>
						<el-menu-item index="2-2">item two</el-menu-item>
						<el-menu-item index="2-3">item three</el-menu-item>
						<el-sub-menu index="2-4">
							<template #title>item four</template>
							<el-menu-item index="2-4-1">item one</el-menu-item>
							<el-menu-item index="2-4-2">item two</el-menu-item>
							<el-menu-item index="2-4-3">item three</el-menu-item>
						</el-sub-menu>
						<el-menu-item index="2-5">登出</el-menu-item>
					</el-sub-menu>
					<el-button
						@click="logOut"
						class="align-self-center"
						type="info"
						text
						icon="SwitchButton"
					>
					</el-button> </el-menu></el-header
			><el-container>
				<el-aside width="200px"
					><el-menu
						:router="true"
						active-text-color="#909090"
						class="el-menu-vertical-demo"
						default-active="2"
						text-color="#030303"
						:collapse="isCollapse"
						:unique-opened="true"
					>
						<el-menu-item index="home" :route="{ name: 'home' }">
							<el-icon><House /></el-icon>
							<span>首頁</span>
						</el-menu-item>
						<el-menu-item index="1">
							<el-icon><House /></el-icon>
							<span>Shorts</span>
						</el-menu-item>
						<el-menu-item index="1">
							<el-icon><House /></el-icon>
							<span>訂閱內容</span>
						</el-menu-item>
						<hr />
						<el-menu-item index="1">
							<el-icon><House /></el-icon>
							<span>媒體庫</span>
						</el-menu-item>
						<el-menu-item index="1">
							<el-icon><House /></el-icon>
							<span>觀看紀錄</span>
						</el-menu-item>
						<el-menu-item index="1">
							<el-icon><House /></el-icon>
							<span>你的影片</span>
						</el-menu-item>
						<el-menu-item index="1">
							<el-icon><House /></el-icon>
							<span>你的電影</span>
						</el-menu-item>
						<el-menu-item index="1">
							<el-icon><House /></el-icon>
							<span>稍後觀看</span>
						</el-menu-item>
						<el-sub-menu index="2">
							<template #title>
								<el-icon><Collection /></el-icon>
								<span>顯示更多</span>
							</template>

							<el-menu-item :index="'youtube'"> youtube </el-menu-item>
						</el-sub-menu>
						<hr /> </el-menu
				></el-aside>

				<el-main><RouterView></RouterView></el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import { defineComponent, ref, h } from 'vue';

//******************************** */

import { RouterLink } from 'vue-router';

/**********/
//同步版本號
import packageJson from '../../package.json';

//******************************** */
import {
	Menu,
	User,
	SwitchButton,
	Bell,
	VideoCamera,
	Search,
	House,
} from '@element-plus/icons-vue';
//**********************************/
import BreadCrumb from '@/components/base/breadCrumb/index.vue';

export default defineComponent({
	components: {
		Menu,
		User,
		SwitchButton,
		BreadCrumb,
		Bell,
		VideoCamera,
		Search,
		House,
	},

	data() {
		return {
			userName: null,

			version: '',
			isCollapse: false,
		};
	},
	methods: {
		logOut() {
			this.$cookies.keys().forEach((cookie) => this.$cookies.remove(cookie));
			sessionStorage.clear();
			this.$router.replace({ name: 'Login' });
		},
		controlIsCollapsed() {
			if (this.isCollapse) {
				this.isCollapse = false;
			} else {
				this.isCollapse = true;
			}
		},
	},
	computed: {
		getUserInfo() {
			this.userName = window.$cookies.get('userName');
		},
	},
	mounted() {
		console.log('youtubeLayout');
		this.getUserInfo;
		// this.getPrograms;
		this.version = packageJson.version;
	},
});
</script>
<style scoped>
.common-layout,
.el-menu-demo {
	background-color: #ffffff;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}
</style>
