### 使用组件

```html
<time-picker-popup ref="TimePickerPopupRef" :value="value" @confirm="confirm"></time-picker-popup>
```

### 引入组件

```javascript
import TimePickerPopup from '@/components/time-picker-popup/time-picker-popup.vue';
```

### 注册组件

```javascript
export default {
    components: { TimePickerPopup },
    data() {
        return {
            value: ['00', '00', '00', '00']
        }
    },
	onReady() {
		this.open();
	},
    methods: {
        confirm(data) {
			uni.showToast({
				title: `${data[0]}:${data[1]}-${data[2]}:${data[3]}`
			})
        },
		open() {
			this.$refs.TimePickerPopupRef.open();
		}
    }
}
```

### 参数

```javascript
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
```
