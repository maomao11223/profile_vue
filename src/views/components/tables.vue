<template>
	<el-card class="mb-4">
		<template #header
			><el-row>
				<h5 class="me-3">呼叫modal修改的版本</h5>
				<el-button type="warning" @click.prevent="addDialogTableRow"
					>新增</el-button
				>
			</el-row>
		</template>
		<BaseTable
			:tableData="modalTable"
			:isLoading="modalTable.isLoading"
		></BaseTable>

		<el-dialog v-model="dialogFormVisible" title="Shipping address">
			<el-form :model="dialogForm">
				<el-form-item label="姓名" :label-width="formLabelWidth">
					<el-input v-model="dialogForm.name" autocomplete="off" />
				</el-form-item>
				<el-form-item label="年紀" :label-width="formLabelWidth">
					<el-select
						v-model="dialogForm.age"
						placeholder="Please select a zone"
					>
						<el-option v-for="count in 5" :label="count" :value="count" />
					</el-select>
				</el-form-item>
				<el-form-item label="地址" :label-width="formLabelWidth">
					<el-input v-model="dialogForm.add" autocomplete="off" />
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取消</el-button>
					<el-button type="primary" @click="saveDialogForm"> 保存 </el-button>
				</span>
			</template>
		</el-dialog>
	</el-card>
	<el-card>
		<template #header>
			<el-row>
				<h5 class="me-3">直接修改的版本</h5>
				<el-button type="warning" @click.prevent="addEditTableRow"
					>新增</el-button
				>
			</el-row>
		</template>
		<BaseTable
			:tableData="editTable"
			:isLoading="editTable.isLoading"
		></BaseTable>
	</el-card>
</template>
<script>
import BaseTable from '@/components/base/table/index.vue';
import { random } from 'lodash';
export default {
	components: {
		BaseTable,
	},
	data() {
		return {
			dialogFormVisible: false,
			dialogForm: {
				name: null,
				age: null,
				add: null,
				index: null,
			},
			modalTable: {
				columns: [
					{ label: '姓名', value: 'name' },
					{ label: '年紀', value: 'age' },
					{ label: '地址', value: 'add', type: 'input' },
					{
						type: 'Btn',
						value: 'edit',
						label: '動作',
						btns: [
							{
								value: 'edit',
								label: '修改',
								function: this.openFormDialog,
							},
							{
								value: 'delete',
								label: '刪除',
								function: this.deleteModalTableRow,
							},
						],
					},
				],
				data: [
					{ name: 'Jane', age: 30, add: 'New York' },
					{ name: 'John', age: 20, add: 'New York' },
					{ name: 'Mary', age: 19, add: 'New York' },
				],
				isLoading: false,
			},
			editTable: {
				columns: [
					{ label: '姓名', value: 'name', type: 'input' },
					{ label: '年紀', value: 'age', type: 'input' },
					{ label: '地址', value: 'add', type: 'input' },
					{
						type: 'Btn',
						value: 'edit',
						label: '動作',
						btns: [
							{
								value: 'edit',
								label: '修改',
								function: this.editTableRow,
							},
							{ value: 'save', label: '保存', function: this.saveTableRow },
							{
								value: 'delete',
								label: '刪除',
								function: this.deleteEditTableRow,
							},
						],
					},
				],
				data: [
					{ name: 'Jane', age: 30, add: 'New York', editStatus: false },
					{ name: 'John', age: 20, add: 'New York', editStatus: false },
					{ name: 'Mary', age: 19, add: 'New York', editStatus: false },
				],
				isLoading: false,
			},
		};
	},
	methods: {
		openFormDialog(e, index) {
			console.log(e);
			console.log(index);
			this.dialogFormVisible = true;
			this.dialogForm.name = e.name;
			this.dialogForm.age = e.age;
			this.dialogForm.add = e.add;
			this.dialogForm.index = index;
		},
		saveDialogForm() {
			this.dialogFormVisible = false;
			this.modalTable.data[`${this.dialogForm.index}`].name =
				this.dialogForm.name;
			this.modalTable.data[`${this.dialogForm.index}`].age =
				this.dialogForm.age;
			this.modalTable.data[`${this.dialogForm.index}`].add =
				this.dialogForm.add;
		},
		editTableRow(e, index) {
			console.log(e, index);
			this.editTable.data[`${index}`].editStatus = true;
		},
		saveTableRow(e, index) {
			this.editTable.data[`${index}`].editStatus = false;
		},
		deleteModalTableRow(e, index) {
			console.log(e, index);
			this.modalTable.data.splice(index, 1);
		},
		deleteEditTableRow(e, index) {
			this.editTable.data.splice(index, 1);
		},
		addEditTableRow() {
			let randomNum = Math.floor(Math.random() * 6) + 1;
			this.editTable.data.push({
				name: `Jane ${randomNum}`,
				age: randomNum,
			});
		},
		addDialogTableRow() {
			let randomNum = Math.floor(Math.random() * 6) + 1;
			this.modalTable.data.push({
				name: `Jane ${randomNum}`,
				age: randomNum,
				add: `New York ${randomNum}`,
			});
		},
	},
};
</script>
