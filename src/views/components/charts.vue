<template>
	<el-row :gutter="20">
		<el-col :span="12">
			<el-card>
				<DoughnutChart
					:chartData="doughnut.data"
					:testOptions="doughnut.options"
				/>
			</el-card>
		</el-col>
		<el-col :span="12">
			<el-card>
				<BarChart :testData="bar.data" :testOptions="bar.options" />
			</el-card>
		</el-col>
	</el-row>
</template>

<script>
import DoughnutChart from '@/components/base/charts/doughnut.vue';
import BarChart from '@/components/base/charts/bar.vue';

export default {
	components: { DoughnutChart, BarChart },
	data() {
		return {
			doughnut: {
				// options: { legendPosition: 'left' },
				data: {
					labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
					datasets: [
						{
							data: [30, 40, 60, 70, 500],
							backgroundColor: [
								'#77CEFF',
								'#0079AF',
								'#123E6B',
								'#97B0C4',
								'#A5C8ED',
							],
						},
					],
				},
			},
			bar: {
				data: {
					labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre', 'ken'],
					datasets: [
						{
							label: 'My First Dataset',
							data: [65, 59, 80, 81, 56, 55],
							backgroundColor: [
								'rgba(255, 99, 132, 0.2)',
								// 'rgba(255, 159, 64, 0.2)',
								// 'rgba(255, 205, 86, 0.2)',
								// 'rgba(75, 192, 192, 0.2)',
								// 'rgba(54, 162, 235, 0.2)',
								// 'rgba(153, 102, 255, 0.2)',
								// 'rgba(201, 203, 207, 0.2)',
							],
							borderColor: [
								'rgb(255, 99, 132)',
								// 'rgb(255, 159, 64)',
								// 'rgb(255, 205, 86)',
								// 'rgb(75, 192, 192)',
								// 'rgb(54, 162, 235)',
								// 'rgb(153, 102, 255)',
								// 'rgb(201, 203, 207)',
							],
							borderWidth: 1,
						},
						{
							label: 'My Second Dataset',
							data: [100, 59, 50, 70, 10],
							backgroundColor: [
								// 'rgba(255, 99, 132, 0.2)',
								'rgba(255, 159, 64, 0.2)',
								// 'rgba(255, 205, 86, 0.2)',
								// 'rgba(75, 192, 192, 0.2)',
								// 'rgba(54, 162, 235, 0.2)',
								// 'rgba(153, 102, 255, 0.2)',
								// 'rgba(201, 203, 207, 0.2)',
							],
							borderColor: [
								// 'rgb(255, 99, 132)',
								'rgb(255, 159, 64)',
								// 'rgb(255, 205, 86)',
								// 'rgb(75, 192, 192)',
								// 'rgb(54, 162, 235)',
								// 'rgb(153, 102, 255)',
								// 'rgb(201, 203, 207)',
							],
							borderWidth: 1,
						},
					],
				},
			},
		};
	},
};
</script>
