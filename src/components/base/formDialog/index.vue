<template>
	<el-dialog v-model="dialogFormVisible">
		<el-form :model="form" label-width="120px">
			<el-form-item
				v-for="col in form.columns"
				:label="col.label"
				:label-width="formLabelWidth"
			>
				{{ col.value }}
				<el-input v-model:value="col.value" autocomplete="off" />
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">
					保存
				</el-button>
			</span>
		</template>
	</el-dialog>
</template>
<script>
export default {
	props: {
		form: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			dialogFormVisible: false,
		};
	},
};
</script>
