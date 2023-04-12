import { defineStore } from 'pinia';

//用戶權限狀態
export const usePermissionStore = defineStore('permission', {
	//狀態(類似data)
	state: () => {
		return {
			permissions: window.sessionStorage.getItem('userPrograms'),
		};
	},
	//(類似methods)
	actions: {},
	//(類似computed)
	getters: {},
});
