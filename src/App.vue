<script>
import { h } from 'vue';
import { ElNotification } from 'element-plus';
import zhTw from 'element-plus/lib/locale/lang/zh-cn';
import LoginLayout from '@/Layout/LoginLayout.vue';
import defaultLayout from '@/Layout/DefaultLayout.vue';
import youtubeLayout from '@/Layout/youtubeLayout.vue';
export default {
	components: {
		LoginLayout,
		defaultLayout,
		youtubeLayout,
	},
	data() {
		return {
			/** 将 Element Plus 的语言设置为中文 */
			locale: zhTw,
			defaultLayout: 'default', //設置layout
		};
	},
	computed: {
		layout() {
			return (this.$route.meta.layout || this.defaultLayout) + 'Layout';
		},
	},
};
</script>

<template>
	<ElConfigProvider :locale="locale">
		<component :is="layout">
			<router-view />
		</component>
	</ElConfigProvider>
</template>
