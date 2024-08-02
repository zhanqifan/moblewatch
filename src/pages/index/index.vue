<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'
import { onMounted } from 'vue'
import { getChildHearts } from '@/api/heart'
import LineCharts from './components/LineCharts.vue'
import BarCharts from './components/BarCHarts.vue'
const time = ref({
  day: '日',
  month: '月',
  year: '年',
})
const date = ref(dayjs().format('MM月DD日'))
const bindDateChange = (e: UniHelper.DatePickerOnChangeEvent) => {
  console.log(e)
  date.value = e.detail.value
}
</script>

<template>
  <view class="index">
    <!-- 年月日 -->
    <view class="list_group">
      <view class="data_btn">
        <picker mode="date" :value="date" fields="day" @change="bindDateChange">
          <view class="uni-input">{{ time.day }}</view>
        </picker>
      </view>
      <view class="line"> | </view>
      <view class="data_btn">
        <picker mode="date" fields="month" :value="date" @change="bindDateChange">
          <view class="uni-input">{{ time.month }}</view>
        </picker>
      </view>
      <view class="line">|</view>
      <view class="data_btn">
        <picker mode="date" fields="year" :value="date" @change="bindDateChange">
          <view class="uni-input">{{ time.year }}</view>
        </picker>
      </view>
    </view>
    <!-- 显示日期 -->
    <view class="date_title">
      {{ date }}
    </view>
    <view class="heart_row">
      <view class="row_block">
        <view>心率范围(次/分)</view>
        <view class="rate">51-117</view>
      </view>
      <view class="row_block">
        <view>平均心率(次/分)</view>
        <view class="rate">76</view>
      </view>
      <view class="row_block">
        <view>最高心率(次/分)</view>
        <view class="rate">76</view>
      </view>
    </view>
    <view>
      <LineCharts />
    </view>
    <view>
      <view>心率分布</view>
      <view>
        <BarCharts />
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.index {
  margin: 0 60rpx;

  .list_group {
    background-color: #eeeeef;
    height: 80rpx;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20rpx;
    border-radius: 15rpx;
  }
  .data_btn {
    width: 70%;
    margin: 0 5rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85%;
    border-radius: 10rpx;
    color: black;
    font-weight: 700;
    box-shadow: 0rpx 0rpx 8rpx 0rpx rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  .line {
    color: #d3d2d2;
  }
  .date_title {
    margin: 30rpx;
    text-align: center;
    font-size: 40rpx;
    font-weight: 500;
  }
  .heart_row {
    margin-top: 60rpx;
    display: flex;
    font-size: 25rpx;
    justify-content: space-around;
    .rate {
      font-size: 40rpx;
      font-weight: 900;
      margin-top: 20rpx;
    }
  }
}
</style>
