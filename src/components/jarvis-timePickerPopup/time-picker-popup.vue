<template>
	<!-- 时间选择器弹窗 -->
	<uni-popup ref="popup" type="bottom" :safe-area="false">
		<view class="custom-picker">
			<view class="custom-picker__header">
				<view class="cancel" :style="{ color: canceColor }" @tap="onCancel">{{ cancelText }}</view>
				<view class="title">{{ title }}</view>
				<view class="confirm" :style="{ color: confirmColor }" @tap="onConfirm">{{ confirmText }}</view>
			</view>
			<picker-view :indicator-class="indicatorClass" :indicator-style="indicatorStyle" class="picker-view"
				:value="value" @change="bindChange" @pickstart="pickstart" @pickend="pickend">
				<picker-view-column>
					<view class="picker-view__item" v-for="(item,index) in rangeList[0]" :key="index">{{item}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="picker-view__item" v-for="(item,index) in rangeList[1]" :key="index">{{item}}</view>
				</picker-view-column>
				<view class="picker-view__segmentation">{{ segmentation }}</view>
				<picker-view-column>
					<view class="picker-view__item" v-for="(item,index) in rangeList[2]" :key="index">{{item}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="picker-view__item" v-for="(item,index) in rangeList[3]" :key="index">{{item}}</view>
				</picker-view-column>
			</picker-view>
		</view>
	</uni-popup>
</template>

<script>
	import {
		props,
		range
	} from './utils.js';
	export default {
		name: 'TimePickerPopup',
		props: props,
		data() {
			return {
				rangeList: range,
				pickerValue: [0, 0, 0, 0],
				isScoll: false, // 是否正在滚动
			}
		},
		methods: {
			/**
			 * 开启弹窗
			 */
			open() {
				// 判断是否传入props -> value
				if (Array.isArray(this.value) && this.value.length) {
					this.pickerValue = this.value.map((item, index) => this.rangeList[index].findIndex(child =>
						child == this.value[index]));
				} else {
					this.pickerValue = [0, 0, 0, 0];
				}
				this.$refs.popup.open();
			},
			/**
			 * 关闭弹窗
			 */
			close() {
				this.$refs.popup.close();
				// 重置选中数据
				this.pickerValue = [0, 0, 0, 0];
			},
			/**
			 * 点击确定
			 */
			onConfirm() {
				if (!this.isScoll) {
					let data = this.value || ['00', '00', '00', '00'];
					if (this.pickerValue && this.pickerValue.length) {
						data = this.pickerValue.map((item, index) => String(this.rangeList[index][item]));
					}
					this.$emit('confirm', data);
					this.close();
				}
			},
			/**
			 * 点击取消
			 */
			onCancel() {
				this.close();
			},
			/**
			 * 滚动开始
			 */
			pickstart() {
				this.isScoll = true;
			},
			/**
			 * 滚动结束
			 */
			pickend() {
				this.isScoll = false;
			},
			/**
			 * 选择器改变
			 * @param {Object} e
			 */
			bindChange(e) {
				this.pickerValue = e.detail.value;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.custom-picker {
		width: 100%;
		height: 620rpx;
		background-color: #fff;
		padding-bottom: 0;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);

		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 30rpx 40rpx;

			.cancel {
				color: #666;
			}

			.title {
				font-size: 32rpx;
				color: #333;
			}

			.confirm {
				color: #2bb781;
			}
		}
	}

	.picker-view {
		width: 100%;
		height: 100%;
		margin-top: 20rpx;

		&__item {
			line-height: 100rpx;
			text-align: center;
		}

		/deep/ &__indicator {
			height: 100rpx;
			color: #2bb781;
		}

		&__segmentation {
			display: flex;
			align-items: center;
		}
	}
</style>