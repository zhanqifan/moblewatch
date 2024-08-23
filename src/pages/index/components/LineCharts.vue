<template>
  <view>
    <view v-if="isShow" class="charts-box">
      <qiun-data-charts
        type="line"
        :opts="opts"
        :ontouch="true"
        :canvas2d="true"
        :chartData="chartData"
      />
    </view>
    <view v-else>
      <emptyBox mode="data" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ref, watch } from 'vue'
import type { RealTimeHeartRate } from '@/types/home'
import emptyBox from '@/components/emptyBox/index.vue'
const props = defineProps<{ realHeart: RealTimeHeartRate[] }>()
const isShow = ref(false)
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
  dataLabel: false,
  padding: [15, 10, 0, 15],
  // enableScroll: true,
  legend: {},
  xAxis: {
    disableGrid: true,
    // scrollShow: true,
    labelCount: 7,
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
  isShow.value = props.realHeart.length !== 0 ? true : false
  if (!isShow.value) return
  let res = {
    categories: props.realHeart.reverse().map((item) => item.time),
    series: [
      {
        name: '最高心率',
        data: props.realHeart.map((item) => item.avgHeartRate),
      },
      {
        name: '最低心率',
        data: props.realHeart.map((item) => item.minHeartRate),
      },
    ],
  }
  chartData.value = res
}
onMounted(() => {
  getServerData()
})
watch(
  () => props.realHeart,
  () => {
    getServerData()
  },
)
</script>

<style lang="scss" scoped>
.charts-box {
  width: 100%;
  height: 500rpx;
}
</style>
