<template>
	<el-breadcrumb separator="/">
		<el-breadcrumb-item
			v-for="(breadcrumb, idx) in breadcrumbList"
			:key="idx"
			@click="routeTo(idx)"
			>{{ breadcrumb.routeName }}</el-breadcrumb-item
		>
	</el-breadcrumb>
</template>
<script>
export default {
	data() {
		return {
			breadcrumbList: [],
		};
	},
	mounted() {
		this.updateList();
	},
	watch: {
		$route() {
			this.breadcrumbList.length = 0;
			this.updateList();
		},
	},
	methods: {
		routeTo(pRouteTo) {
			// console.log('pRouteTo', pRouteTo);
			if (pRouteTo != 0) {
				if (this.breadcrumbList[pRouteTo].routePath) {
					this.$router.push(this.breadcrumbList[pRouteTo].routePath);
					// console.log('in if');
				}
			}
		},
		updateList() {
			// console.log(this.$route.matched);
			this.$route.matched.forEach((el) => {
				let tmpObj = { routeName: '', routePath: '' };
				if (el.meta.breadcrumb[0].name != '') {
					tmpObj.routeName = el.meta.breadcrumb[0].name;
					tmpObj.routePath = el.path;

					this.breadcrumbList.push(tmpObj);
				}
			});
			// this.$route.matched.pop(1);
		},
	},
};
</script>
<style>
.el-breadcrumb__inner {
	color: #845913 !important;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
	color: #f9a825 !important;
}
</style>
