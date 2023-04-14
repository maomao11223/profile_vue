<template>
	<el-table
		v-loading="isLoading"
		element-loading-background="rgba(0, 0, 0, 0.5)"
		:data="tableData.data"
	>
		<template v-for="(col, index) in tableData.columns" :key="index">
			<el-table-column v-if="col.type === 'checkbox'">
				<template #header>
					<div>
						<el-checkbox
							v-model="col.isSelected"
							@change="toggleAllSelection(col, index)"
							>{{ col.label }}</el-checkbox
						>
					</div>
				</template>
				<template #default="{ row }">
					<div>
						<el-checkbox
							v-model="row[col.value]"
							@change="rowSelected(row)"
						></el-checkbox>
					</div>
				</template>
			</el-table-column>
			<el-table-column v-else-if="col.type === 'input'">
				<template #header>
					<div>
						{{ col.label }}
					</div>
				</template>
				<template #default="scope">
					<div>
						<el-input
							v-if="scope.row.editStatus"
							v-model="scope.row[col.value]"
						/><span v-else>{{ scope.row[col.value] }}</span>
					</div>
				</template>
			</el-table-column>
			<el-table-column
				v-else-if="col.type == 'Btn'"
				class="text-no-warp"
				:prop="col.value"
				:label="col.label"
			>
				<template #header>
					<div>
						{{ col.label }}
					</div>
				</template>
				<template #default="scope">
					<template v-for="b in col.btns">
						<el-button
							v-if="b.value == 'edit'"
							type="success"
							@click="b.function(scope.row, scope.$index)"
							>{{ b.label }}</el-button
						>
						<el-button
							v-if="b.value == 'save'"
							type="primary"
							@click="b.function(scope.row, scope.$index)"
							>{{ b.label }}</el-button
						>
						<el-button
							v-if="b.value == 'delete'"
							type="danger"
							@click="b.function(scope.row, scope.$index)"
							>{{ b.label }}</el-button
						>
					</template>
				</template>
			</el-table-column>
			<el-table-column v-else>
				<template #header>
					<div>
						{{ col.label }}
					</div>
				</template>
				<template #default="{ row }">
					{{ row[col.value] }}
				</template>
			</el-table-column>
		</template>
	</el-table>
</template>
<script>
export default {
	props: {
		isLoading: {
			type: Boolean,
			default: false,
		},
		tableData: {
			type: Object,
		},
	},
	data() {
		return {
			selected: [],
		};
	},
	methods: {
		toggleAllSelection(e, index) {
			console.log('e', e);
			console.log('index', index);

			this.tableData.data.forEach((row) => {
				console.log('row', row);
				row[e.value] = e.isSelected;
			});
			console.log('this.table.data', this.tableData.data);
		},
	},
};
</script>
<style>
.el-checkbox__label {
	display: inline-block;
}
</style>
