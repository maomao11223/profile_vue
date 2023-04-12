import { usePermissionStore } from '../../stores/permissionStore.js';

/**自定义按钮权限指令 用來判斷使用者是否有按鈕權限 */
export default (Vue) => {
	Vue.directive('hasPrem', {
		mounted(el, binding) {
			// console.log('permission', el, binding);
			// console.log('binding.value', binding.value);

			//获取按钮权限
			if (!Vue.config.globalProperties.$_has(binding.value)) {
				// console.log('111', el);
				//disabled不匹配的按钮
				el.disabled = true;

				//增加disabled class
				el.classList.add('n-button--disabled');
				el.classList.add('n-switch--disabled');
				el.style.cssText += 'pointer-events: none;';

				// console.log(Vue.config.globalProperties.$_has(binding.value));
			}
		},
	});

	//检查权限方法
	Vue.config.globalProperties.$_has = function (inValue) {
		let isExist = false;
		let permissions = usePermissionStore();
		const currentPageArr = this.$route.path.split('/');
		// console.table('currentPageArr', currentPageArr);

		let currentPage = currentPageArr[currentPageArr.length - 1];
		if (['Detail', 'Edit', 'Import', 'Create'].includes(currentPage)) {
			currentPage = currentPageArr[currentPageArr.length - 2];
		}
		// console.table('currentPage', currentPage);

		const currentFrm = currentPageArr[1];
		// console.table('currentFrm', currentFrm);
		let btnPermsArr = JSON.parse(permissions.permissions);
		// console.table('btnPermsArr');
		// console.table(btnPermsArr);
		//找到menu level-1
		let frmObj = btnPermsArr.find(function (item) {
			return item.frmCid === currentFrm;
		});
		// console.log('frmObj', frmObj);
		//找到menu level-2
		if (frmObj.userRolePrograms) {
			let btnPermsObj = frmObj.userRolePrograms.find(function (item) {
				// console.log('item progEng', item.programEngName);
				return item.programEngName == currentPage;
			});
			console.log('btnPermsObj', btnPermsObj);
			// console.log('[inVale]', btnPermsObj[inValue]);
			if (btnPermsObj[inValue]) {
				isExist = true;
			}
		} else {
			let btnPermsObj = frmObj.userPrograms.find(function (item) {
				// console.log('item userPrograms', item.programEngName);
				return item.programEngName == currentPage;
			});
			// console.log('btnPermsObj', btnPermsObj);
			// console.log('[inVale]', btnPermsObj[inValue]);
			if (btnPermsObj[inValue]) {
				isExist = true;
			}
		}

		return isExist;
	};
};
