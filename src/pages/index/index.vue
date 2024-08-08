<script setup lang="ts">
import dayjs from 'dayjs'
import { onMounted } from 'vue'
import { getChildHearts, getDistribution } from '@/api/heart'
import LineCharts from './components/LineCharts.vue'
import type { HeartData, HeartMap } from '@/types/home'
import heartMapVue from './components/heartMap.vue'
import { customOrder, categorySort } from './utils/sort'
import { getWeekRange, getDayOfWeek } from './utils/timeControl'
import skeleton from './components/skeleton/skeleton.vue'
const isShow = ref(false)
const list = ref(['日', '周', '月'])
const currentExchange = reactive(['day', 'week', 'month']) //传参类型
const current = ref<number>(0) // 默认选中日
const heartObject = ref<HeartData>() //实时心率
const heartMap = ref<HeartMap[]>() //心率分布
const formatArray = ['H时', '周', 'D日'] //返回不同格式轴名映射到uchart
const date = ref(dayjs()) //时间 默认当天
// 默认选中日
const heartParams = ref<{ startTime: string; endTime: string }>({
  startTime: date.value.startOf('day').format('YYYY-MM-DD HH:mm:ss'),
  endTime: date.value.endOf('day').format('YYYY-MM-DD HH:mm:ss'),
})
// 日月年 时间切换 传参使用
const updateHeartParams = () => {
  let startTime: string, endTime: string
  if (current.value === 0) {
    startTime = date.value.startOf('day').format('YYYY-MM-DD HH:mm:ss')
    endTime = date.value.endOf('day').format('YYYY-MM-DD HH:mm:ss')
  } else if (current.value === 1) {
    startTime = date.value.startOf('isoWeek').format('YYYY-MM-DD HH:mm:ss')
    endTime = date.value.endOf('isoWeek').format('YYYY-MM-DD HH:mm:ss')
  } else {
    startTime = date.value.startOf('month').format('YYYY-MM-DD HH:mm:ss')
    endTime = date.value.endOf('month').format('YYYY-MM-DD HH:mm:ss')
  }

  heartParams.value = { startTime, endTime }
}
// 日期计算函数
type unitType = 'day' | 'week' | 'month'
const adjustDate = (type: 'add' | 'subtract', unit: unitType) => {
  date.value = dayjs(date.value)[type](1, unit) //dayjs处理 日 周 月的加减
  updateHeartParams()
  getHeartRange()
  getHeartCondition()
}
// 获取实时心率图
const getHeartRange = async () => {
  const res = await getChildHearts({ type: currentExchange[current.value], ...heartParams.value })
  if (current.value !== 1) {
    res.data.realTimeHeartRate.forEach(
      (item) => (item.time = dayjs(item.time).format(formatArray[current.value])),
    )
  } else {
    res.data.realTimeHeartRate.forEach((item) => (item.time = getDayOfWeek(item.time)))
  }
  heartObject.value = res.data
  console.log(heartObject.value)
}

// 获取心率分布图
const getHeartCondition = async () => {
  const res = await getDistribution({ type: currentExchange[current.value], ...heartParams.value })
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
      return dayjs(date.value).format('MM月DD日')
    case 1: {
      const { currentWeek } = getWeekRange(date.value)
      console.log(currentWeek)
      return currentWeek.start + '至' + currentWeek.end
    }
    case 2:
      return dayjs(date.value).format('M月')
    default:
      return '请选择日期'
  }
})
// 新增计算属性
// const isFutureDisabled = computed(() => {
//   const today = dayjs()
//   switch (current.value) {
//     case 0:
//       return date.value.isSameOrAfter(today, 'day')
//     case 1: {
//       return date.value.isSameOrAfter(today, 'week')
//     }
//     case 2:
//       return date.value.isSameOrAfter(today, 'month')
//     default:
//       return false
//   }
// })

// 切换日周月 请求刷新数据
const changeCurrent = (e: number) => {
  current.value = e
  date.value = dayjs() //切换初始化日期
  updateHeartParams()
  getHeartRange()
  getHeartCondition()
}
onMounted(() => {
  isShow.value = false
  console.log(date.value)
  updateHeartParams()
  getHeartRange()
  getHeartCondition()
  isShow.value = true
})
</script>

<template>
  <view>
    <view class="index" v-if="isShow">
      <!-- 分段器 -->
      <view class="top">
        <up-subsection
          :list="list"
          activeColor="#1f2328"
          :current="current"
          @change="changeCurrent"
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
          <view class="rate">{{ heartObject?.maxHeartRate }}</view>
        </view>
      </view>
      <view style="margin-top: 20rpx">
        <view style="font-size: 20rpx; color: gray; margin-left: 30rpx">心率历程(次/分)</view>
        <LineCharts v-if="heartObject" :realHeart="heartObject?.realTimeHeartRate" />
      </view>
      <view>
        <view style="font-weight: 500; color: #c4c1c1">心率分布</view>
        <view>
          <heartMapVue v-if="heartMap" :heartMap="heartMap" />
          <!-- <BarCharts v-if="heartMap" :heartMap="heartMap" /> -->
        </view>
      </view>
    </view>
    <view v-else><skeleton /></view>
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
