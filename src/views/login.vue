<template>
	<div class="login-container">
		<div class="login-card">
			<div class="title">
				<el-avatar :size="80" @error="errorHandler">
					<img src="@/assets/img/loginLogo.jpg" />
				</el-avatar>
			</div>
			<div class="content">
				<el-form
					ref="loginFormRef"
					:model="loginForm"
					:rules="FormRules"
					@keyup.enter="handleLogin"
				>
					<el-form-item prop="userId">
						<el-input
							v-model.trim="loginForm.userId"
							placeholder="帳號"
							type="text"
							tabindex="1"
							:prefix-icon="User"
							size="large"
						/>
					</el-form-item>
					<el-form-item prop="encryptPw">
						<el-input
							v-model.trim="loginForm.encryptPw"
							placeholder="密碼"
							type="password"
							tabindex="2"
							:prefix-icon="Lock"
							size="large"
						/>
					</el-form-item>

					<el-button
						:loading="saveBtn.isLoading"
						:disabled="saveBtn.isDisabled"
						type="primary"
						size="large"
						@click.prevent="handleLogin"
					>
						登 入
					</el-button>
				</el-form>
			</div>
		</div>
	</div>
</template>
<script>
// import { useUserStore } from '@/store/modules/user';
import { User, Lock, Key, Loading } from '@element-plus/icons-vue';
// import serviceAxios from '@/http/index';

import { ElMessage } from 'element-plus';

export default {
	// eslint-disable-next-line vue/no-unused-components
	components: { User, Lock, Key, Loading },
	data() {
		return {
			loginFormRef: null,
			saveBtn: {
				isLoading: false,
				isDisabled: false,
			},
			codeUrl: '',
			loginForm: {
				userId: null,
				encryptPw: null,
			},
			FormRules: {
				userId: [{ required: true, message: '請輸入帳號', trigger: 'blur' }],
				encryptPw: [{ required: true, message: '請輸入密碼', trigger: 'blur' }],
			},
		};
	},
	mounted() {
		this.loginFormRef = this.$refs.loginFormRef;
	},
	methods: {
		handleLogin() {
			// let user = {
			// 	userId: this.loginForm.userId,
			// 	encryptPw: this.loginForm.encryptPw,
			// };
			// console.log('user', user);
			// this.loginFormRef?.validate((valid) => {
			// 	if (valid) {
			// 		this.saveBtn.isLoading = true;
			// 		this.saveBtn.isDisabled = true;
			// 		serviceAxios
			// 			.post('Account/Login', user)
			// 			.then((res) => {
			// 				console.log(res);
			// 				if (res.resultCode == '0000') {
			// 					ElMessage({
			// 						message: '登入成功',
			// 						type: 'success',
			// 					});
			// 					this.$cookies.set('token', `Bearer ${res.data.accessToken}`);
			// 					this.$cookies.set('userName', res.data.userName);
			// 					this.$cookies.set('userId', res.data.userId);
			// 					this.$cookies.set('deptNo', res.data.deptNo);
			// 					this.saveBtn.isLoading = false;
			// 					this.saveBtn.isDisabled = false;
			this.$router.push({ name: 'home' });
			// 				} else {
			// 					ElMessage.error(`${res.resultCode} :${res.resultMessage}`);
			// 					this.saveBtn.isLoading = false;
			// 					this.saveBtn.isDisabled = false;
			// 				}
			// 			})
			// 			.catch((err) => {
			// 				console.log(err);
			// 				ElMessage.error(`${err.resultCode} :${err.resultMessage}`);
			// 				this.saveBtn.isLoading = false;
			// 				this.saveBtn.isDisabled = false;
			// 			});
			// 	} else {
			// 		return false;
			// 	}
			// });
		},
	},
};
</script>

<style scoped>
.login-container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 100%;
	margin-top: 90px;
}
.theme-switch {
	position: fixed;
	top: 5%;
	right: 5%;
	cursor: pointer;
}
.login-card {
	width: 480px;
	border-radius: 20px;
	box-shadow: 0 0 10px #dcdfe6;
	background-color: #fff;
	overflow: hidden;
}
.title {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;
}

.content {
	padding: 20px 50px 50px 50px;
}
:deep(.el-input-group__append) {
	padding: 0;
	overflow: hidden;
}
.el-image {
	width: 100px;
	height: 40px;
	border-left: 0px;
	user-select: none;
	cursor: pointer;
	text-align: center;
}
.el-button {
	width: 100%;
	margin-top: 10px;
}
</style>
