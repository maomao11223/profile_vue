<template>
	<div class="common-layout">
		<el-container>
			<el-aside width="220px"
				><el-menu
					:router="true"
					active-text-color="#993313"
					background-color="#080212"
					class="el-menu-vertical-demo border-0"
					default-active="2"
					text-color="#F9A825"
					:collapse="isCollapse"
					:unique-opened="true"
				>
					<el-menu-item :index="'home'">
						<el-icon><Menu /></el-icon>

						<span>LOGO</span>
					</el-menu-item>
					<el-sub-menu index="1">
						<template #title>
							<el-icon><Box /></el-icon>
							<span>元件管理</span>
						</template>

						<el-menu-item :index="'charts'" :route="{ name: 'charts' }">
							charts
						</el-menu-item>
						<el-menu-item :index="'tables'" :route="{ name: 'tables' }">
							tables
						</el-menu-item>
					</el-sub-menu>
					<el-sub-menu index="2">
						<template #title>
							<el-icon><Collection /></el-icon>
							<span>頁面展示</span>
						</template>

						<el-menu-item :index="'youtube'" :route="{ name: 'youtube' }">
							youtube
						</el-menu-item>
						<el-menu-item :index="'music'" :route="{ name: 'music' }">
							music
						</el-menu-item>
					</el-sub-menu>
				</el-menu></el-aside
			>
			<el-container class="text-white">
				<el-header
					><el-menu
						class="el-menu-demo border-0"
						:ellipsis="false"
						mode="horizontal"
					>
						<div class="d-flex">
							<BreadCrumb class="my-auto"></BreadCrumb>
						</div>

						<div class="flex-grow" />
						<el-menu-item index="1"> {{ userName }} </el-menu-item>
						<el-button
							@click="logOut"
							class="align-self-center"
							type="warning"
							text
							icon="SwitchButton"
						>
							<!-- <el-icon color="" class="no-inherit"> <SwitchButton /> </el-icon> -->
						</el-button>
					</el-menu></el-header
				>
				<el-main><RouterView></RouterView></el-main>
				<el-footer class="d-flex flex-column"
					><div class="text-muted text-center mt-auto">
						版本號:{{ version }}v
					</div></el-footer
				>
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
import { Menu, User, SwitchButton } from '@element-plus/icons-vue';
//**********************************/
import BreadCrumb from '@/components/base/breadCrumb/index.vue';

export default defineComponent({
	components: { Menu, User, SwitchButton, BreadCrumb },

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
	},
	computed: {
		getUserInfo() {
			this.userName = window.$cookies.get('userName');
		},
	},
	mounted() {
		this.getUserInfo;
		// this.getPrograms;
		this.version = packageJson.version;
	},
});
</script>
<style scoped>
.el-menu-vertical-demo {
	height: 100vh;
}
.flex-grow {
	flex-grow: 1;
}

.common-layout,
.el-menu-demo {
	background-color: #080212;
}

.login_bg {
	background-image: url('@/assets/images/login_bg.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	/* height: 100vh; */
}
</style>
