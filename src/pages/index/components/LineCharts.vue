<template>
  <view class="charts-box">
    <qiun-data-charts type="line" :opts="opts" :chartData="chartData" />
  </view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'
import type { RealTimeHeartRate } from '@/types/home'
const props = defineProps<{ realHeart: RealTimeHeartRate[] }>()
const opts = ref({
  color: [
    '#1890FF',
    '#91CB74',
    '#FAC858',
    '#EE6666',
    '#73C0DE',
    '#3CA272',
    '#FC8452',
    '#9A60B4',
    '#ea7ccc',
  ],
  padding: [15, 10, 0, 15],
  enableScroll: true,
  legend: {},
  xAxis: {
    disableGrid: true,
    scrollShow: true,
    itemCount: 4,
  },
  yAxis: {
    gridType: 'dash',
    dashLength: 2,
  },
  extra: {
    line: {
      type: 'straight',
      width: 2,
      activeType: 'hollow',
    },
  },
})
const chartData = ref()
const getServerData = () => {
  //模拟从服务器获取数据时的延时

  let res = {
    categories: props.realHeart.map((item) => item.time),
    series: [
      {
        name: '最大值',
        data: props.realHeart.map((item) => item.maxHeartRate),
      },
      {
        name: '最小值',
        data: props.realHeart.map((item) => item.minHeartRate),
      },
    ],
  }
  chartData.value = res
}
onMounted(() => {
  getServerData()
})
</script>

<style lang="scss" scoped>
.charts-box {
  width: 100%;
  height: 500rpx;
  overflow-y: scroll;
}
</style>
