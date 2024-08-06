<script setup lang="ts">
import { ref, computed } from 'vue'
import dayjs from 'dayjs'
import { onMounted } from 'vue'
import { getChildHearts, getDistribution } from '@/api/heart'
import LineCharts from './components/LineCharts.vue'
import type { HeartData, HeartParams, HeartMap } from '@/types/home'
import BarCharts from './components/BarCHarts.vue'
import { customOrder, categorySort } from './utils/sort'
import { getWeekRange } from './utils/timeControl'
const list = ref(['日', '周', '月'])
const currentExchange = ref(['day', 'week', 'month'])
const current = ref<number>(1)
const heartObject = ref<HeartData>() //实时心率
const heartMap = ref<HeartMap[]>() //心率分布
const heartParams = ref<HeartParams>({ startTime: 1722816000, endTime: 1722902400 })
const date = ref(dayjs().unix())
// 日期计算函数
type unitType = 'day' | 'week' | 'month'
const adjustDate = (type: 'add' | 'subtract', unit: unitType) => {
  date.value = dayjs.unix(date.value)[type](1, unit).unix()
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
// 改变时间展示
const computedMessage = computed(() => {
  switch (current.value) {
    case 0:
      console.log(current.value)
      return dayjs.unix(date.value).format('MM月DD日')
    case 1: {
      console.log(current.value)
      const { currentWeek } = getWeekRange(dayjs.unix(date.value))
      console.log('11')
      return currentWeek.start + '至' + currentWeek.end
    }
    case 2:
      return dayjs.unix(date.value).format('M月')
    default:
      return '请选择日期'
  }
})
onMounted(() => {
  getHeartRange()
  getHeartCondition()
})
</script>

<template>
  <view class="index">
    <!-- 分段器 -->
    <view class="top">
      <up-subsection
        :list="list"
        :current="current"
        @change="(e:number) => (current = e)"
      ></up-subsection>
    </view>

    <view class="date_title">
      <up-icon
        name="arrow-left"
        color="#909399"
        size="28"
        @click="adjustDate('subtract', currentExchange[current] as unitType)"
      ></up-icon>
      {{ computedMessage }}
      <up-icon
        name="arrow-right"
        color="#909399"
        size="28"
        @click="adjustDate('add', currentExchange[current] as unitType)"
      ></up-icon>
    </view>

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
    <view style="margin-top: 20rpx">
      <view style="font-size: 20rpx; color: gray; margin-left: 30rpx">实时心率(次/分)</view>
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

  .top {
    margin-top: 30rpx;
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
    display: flex;
    justify-content: space-between;
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
