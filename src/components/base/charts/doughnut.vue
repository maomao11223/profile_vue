<template>
	<DoughnutChart :chartData="testData" :options="options" />
</template>

<script>
import { defineComponent } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default defineComponent({
	name: 'Home',
	components: { DoughnutChart },
	props: {
		testData: { type: Object },
		testOptions: {
			type: Object,
			default: () => ({
				responsive: true, //顯示在畫面置中位置
				legendPosition: 'top', //分類標籤顯示位置 top|right|left|bottom
				//標題
				titleDisplay: false, //是否顯示
				titleText: 'Chart.js Doughnut Chart', //顯示內容
			}),
		},
	},
	data() {
		return {
			options: {
				responsive: this.testOptions.responsive, //顯示在畫面置中位置
				plugins: {
					legend: {
						position: this.testOptions.legendPosition, //分類標籤顯示位置 top|right|left|bottom
					},
					title: {
						//標題
						display: this.testOptions.titleDisplay, //是否顯示
						text: this.testOptions.titleText, //顯示內容
					},
				},
			},
		};
	},
});
</script>
