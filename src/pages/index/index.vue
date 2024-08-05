<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'
import { onMounted } from 'vue'
import { getChildHearts, getDistribution } from '@/api/heart'
import LineCharts from './components/LineCharts.vue'
import type { HeartData, HeartParams, HeartMap } from '@/types/home'
import BarCharts from './components/BarCHarts.vue'
import { customOrder, categorySort } from './utils/sort'
const time = ref({
  day: '日',
  month: '月',
  year: '年',
})
const heartObject = ref<HeartData>() //实时心率
const heartMap = ref<HeartMap[]>() //心率分布
const selectType = ref() //选择器选择
const heartParams = ref<HeartParams>({ startTime: 1722816000, endTime: 1722902400 })
const date = ref(dayjs().format('MM月DD日'))
const bindDateChange = (e: UniHelper.DatePickerOnChangeEvent, extraParam: string) => {
  selectType.value = extraParam
  date.value = e.detail.value
}
// 获取实时心率图
const getHeartRange = async () => {
  const res = await getChildHearts(heartParams.value)
  res.data.realTimeHeartRate.forEach((item) => (item.time = dayjs(item.time).format('HH时')))
  heartObject.value = res.data
}
// 获取心率分布图
const getHeartCondition = async () => {
  const res = await getDistribution(heartParams.value)
  customOrder.forEach((grade) => {
    const found = res.data.some((item) => item.grade === grade)
    if (!found) {
      res.data.push({
        grade,
        time: 0,
      })
    }
  })
  heartMap.value = categorySort(res.data, 'grade', customOrder)
}
onMounted(async () => {
  getHeartRange()
  getHeartCondition()
})
</script>

<template>
  <view class="index">
    <!-- 年月日 -->
    <view class="list_group">
      <view class="data_btn">
        <picker mode="date" :value="date" fields="day" @change="(e) => bindDateChange(e, 'day')">
          <view class="uni-input">{{ time.day }}</view>
        </picker>
      </view>
      <view class="line"> | </view>
      <view class="data_btn">
        <picker mode="date" fields="day" :value="date" @change="(e) => bindDateChange(e, 'month')">
          <view class="uni-input">{{ time.month }}</view>
        </picker>
      </view>
      <view class="line">|</view>
      <view class="data_btn">
        <picker mode="date" fields="month" :value="date" @change="(e) => bindDateChange(e, 'year')">
          <view class="uni-input">{{ time.year }}</view>
        </picker>
      </view>
    </view>
    <!-- 显示日期 -->
    <view class="date_title">
      {{ date }}
    </view>
    <!-- <view class="example-body">
      <uni-datetime-picker v-model="datetimerange" type="datetimerange" rangeSeparator="至" />
    </view>
    <uni-section :title="'时间:' + datetimerange[0]" type="line"></uni-section> -->
    <view class="heart_row">
      <view class="row_block">
        <view>心率范围(次/分)</view>
        <view class="rate">{{ heartObject?.minHeartRate }}-{{ heartObject?.maxHeartRate }}</view>
      </view>
      <view class="row_block">
        <view>平均心率(次/分)</view>
        <view class="rate">{{ heartObject?.avgHeartRate.toFixed(2) }}</view>
      </view>
      <view class="row_block">
        <view>最高心率(次/分)</view>
        <view class="rate">{{ heartObject?.minHeartRate }}</view>
      </view>
    </view>
    <view>
      <LineCharts v-if="heartObject" :realHeart="heartObject?.realTimeHeartRate" />
    </view>
    <view>
      <view>心率分布</view>
      <view>
        <BarCharts v-if="heartMap" :heartMap="heartMap" />
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
