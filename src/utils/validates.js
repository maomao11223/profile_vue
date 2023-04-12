// 只能輸入英文和數字
export function inputEngAndNumber(value) {
	console.log('validate', value);
	!value || /[A-Za-z0-9_]+/.test(value);
}
