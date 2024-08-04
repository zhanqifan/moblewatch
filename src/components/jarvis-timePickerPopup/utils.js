// 组件props
const props = {
	// 当前选中的值
	value: {
		type: Array,
		default: () => (['00', '00', '00', '00'])
	},
	// 标题
	title: {
		type: String,
		default: '时间'
	},
	// 取消按钮文字
	cancelText: {
		type: String,
		default: '取消'
	},
	// 取消按钮颜色
	canceColor: {
		type: String,
		default: '#666666'
	},
	// 确定按钮文字
	confirmText: {
		type: String,
		default: '确定'
	},
	// 确定按钮颜色
	confirmColor: {
		type: String,
		default: '#2bb781'
	},
	// 分割符
	segmentation: {
		type: String,
		default: '-'
	},
	// 设置选择器中间选中框的类名 注意页面或组件的style中写了scoped时，需要在类名前写/deep/
	indicatorClass: {
		type: String,
		default: 'picker-view__indicator'
	},
	// 设置选择器中间选中框的样式
	indicatorStyle: {
		type: String,
		default: ''
	},
}

// 滚动数据
let range = [
	[],
	[],
	[],
	[]
];
for (let i = 0; i < 24; i++) {
	range[0].push(i >= 10 ? String(i) : `0${i}`);
	range[2].push(i >= 10 ? String(i) : `0${i}`);
}
for (let i = 0; i < 60; i++) {
	range[1].push(i >= 10 ? String(i) : `0${i}`);
	range[3].push(i >= 10 ? String(i) : `0${i}`);
}

export default {
	props,
	range
}