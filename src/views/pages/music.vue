<template>
	<el-row :gutter="50">
		<el-col :span="5">
			<div class="cover-wrap">
				<img class="cover" :src="selectedAlbum.cover" alt="" />
			</div>
		</el-col>
		<el-col :span="19">
			<h2 class="mb-3">{{ selectedAlbum.song }}</h2>
			<h5>{{ selectedAlbum.artist }}</h5>
			<p>
				專輯：<span> {{ selectedAlbum.name }} </span>
			</p>
			<el-button type="warning" icon="Star" circle />
		</el-col>
	</el-row>
	<hr />
	<!-- <el-card class="mt-1 cardBg border-0"> -->
	<div class="container-fluid px-4 album-bg">
		<div class="row gx-5">
			<h5>相關專輯</h5>
			<div
				class="col p-3"
				v-for="i in albumDatas"
				:key="i.name"
				@click.prevent="getAlbum(i)"
			>
				<el-avatar shape="square" :size="100">
					<img :src="i.cover"
				/></el-avatar>
				<h5>{{ i.name }}</h5>
				<p>{{ i.artist }}</p>
			</div>
		</div>
	</div>

	<!-- </el-card> -->
</template>
<script>
import { Star } from '@element-plus/icons-vue';
let albumData = [
	{
		name: 'Native',
		artist: 'OneRepublic',
		cover: '../src/assets/img/loginBg4.jpg',
		song: 'Counting Stars',
	},
];
export default {
	components: { Star },
	data() {
		return {
			activeName: 'all',
			albumDatas: null,
			selectedAlbum: {
				name: 'Native',
				artist: 'OneRepublic',
				cover: '../src/assets/img/loginBg4.jpg',
				song: 'Counting Stars',
			},
		};
	},
	methods: {
		handleClick(tab, e) {
			console.log(tab, e);
		},
		getAlbum(e) {
			console.log(e);
			this.selectedAlbum = e;
		},
	},
	mounted() {
		for (let i = 0; i < 6; i++) {
			albumData.push({
				name: `Native ${i}`,
				artist: 'OneRepublic',
				cover: '../src/assets/img/loginBg4.jpg',
				song: `Counting Stars ${i}`,
			});
		}
		this.albumDatas = albumData;
	},
};
</script>
<style scoped>
.cover-wrap {
	width: 200px;
	height: 200px;
	border-radius: 50%;
	overflow: hidden;
	border: 2px solid rgb(208, 208, 208);
}
@keyframes playmusic {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
.cover {
	width: 100%;
	height: 100%;
	object-fit: cover;

	/* 动画属性 */
	animation-name: playmusic;
	animation-duration: 10s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
}

.album-bg {
	background-color: #3e3e3e81;
	padding: 5px;
	border-radius: 5px;
}
</style>
