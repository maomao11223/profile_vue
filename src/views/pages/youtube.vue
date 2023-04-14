<template>
	<el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
		<el-tab-pane v-for="tab in tabs" :label="tab.label" :name="tab.value">
			<el-row :gutter="20">
				<el-col :span="8" v-for="(o, index) in 10" :key="o">
					<div
						:body-style="{ padding: '0px' }"
						class="my-3 mycard"
						:shadow="false"
					>
						<img
							src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
							class="image"
						/>
						<div style="padding: 14px" class="d-flex">
							<el-avatar
								src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
							/>
							<div class="ms-3">
								<h5>Yummy hamburger</h5>
								<p class="mb-0">Burger</p>
								<p class="mb-0">7000人觀看</p>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
		</el-tab-pane>
	</el-tabs>
</template>
<script>
export default {
	data() {
		return {
			activeName: 'all',
			tabs: [
				{
					label: '全部',
					value: 'all',
				},
				{
					label: '音樂',
					value: 'music',
				},
				{
					label: '電影',
					value: 'movie',
				},
				{
					label: '觀光',
					value: 'travel',
				},
				{
					label: 'News',
					value: 'News',
				},
			],
		};
	},
	methods: {
		handleClick(tab, e) {
			console.log(tab, e);
		},
	},
};
</script>
<style scoped>
.time {
	font-size: 12px;
	color: #999;
}

.bottom {
	margin-top: 13px;
	line-height: 12px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.button {
	padding: 0;
	min-height: auto;
}
.mycard {
	border-radius: 20px;
}
.image {
	height: 100%;
	display: block;
	border-radius: 20px;
}
</style>
