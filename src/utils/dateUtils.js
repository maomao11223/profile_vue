let currentYear = new Date().getFullYear();
let lastYear = currentYear - 1;
export let presetEndDate = new Date(`${currentYear}/12/31`).getTime();
export let presetStartDate = new Date(`${lastYear}/1/1`).getTime();

/** yearType: start是開始(起)，end是結束(迄) */
export function convertToDate(time, yearType) {
	// console.log(time);
	let date = new Date(time);
	let y = date.getFullYear();
	let m = yearType == 'startYear' ? '01' : '12';
	let d = yearType == 'startYear' ? '01' : '31';
	return y + '-' + m + '-' + d;
}

export function convertToYear(time) {
	let date = new Date(time);
	return date.getFullYear();
}

export function formateToYMD(inDate) {
	let date = new Date(inDate);
	let y = date.getFullYear();
	let m = date.getMonth() + 1;
	let d = date.getDate();
	return y + '-' + m + '-' + d;
}
