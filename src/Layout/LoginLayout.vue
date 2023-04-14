<template>
	<div class="bg d-flex flex-column">
		<div class="m-auto">
			<RouterView></RouterView>
		</div>

		<div class="mt-auto container mb-5">
			<footer
				class="d-flex flex-wrap justify-content-center align-items-center"
			>
				<span class="text-muted">版本號:{{ version }}v</span>
			</footer>
		</div>
	</div>
</template>
<script>
import { defineComponent } from 'vue';

import packageJson from '../../package.json';

export default defineComponent({
	// name: 'loginLayout',
	data() {
		return {
			version: '',
		};
	},
	mounted() {
		this.version = packageJson.version;
		// console.log('login');
	},
});
</script>

<style scoped>
.bg {
	background-image: url('@/assets/img/loginBg5.jpg');
	background-repeat: no-repeat;
	min-height: 100vh;
	background-size: cover;
}
</style>
