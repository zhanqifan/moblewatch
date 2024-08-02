<template>
  <view class="charts-box">
    <qiun-data-charts type="bar" :opts="opts" :chartData="chartData" />
  </view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'
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
  padding: [15, 30, 0, 5],
  enableScroll: false,
  legend: {},
  xAxis: {
    boundaryGap: 'justify',
    disableGrid: false,
    min: 0,
    axisLine: false,
    max: 40,
  },
  yAxis: {},
  extra: {
    bar: {
      type: 'group',
      width: 30,
      meterBorde: 1,
      meterFillColor: '#FFFFFF',
      activeBgColor: '#000000',
      activeBgOpacity: 0.08,
      linearType: 'custom',
      barBorderCircle: true,
      seriesGap: 2,
      categoryGap: 2,
    },
  },
})
const chartData = ref()
const getServerData = () => {
  //模拟从服务器获取数据时的延时
  setTimeout(() => {
    let res = {
      categories: ['放松身体', '暖身激活', '2020', '2021', '2022', '2023'],
      series: [
        {
          name: '目标值',
          data: [35, 36, 31, 33, 13, 34],
        },
      ],
    }
    chartData.value = JSON.parse(JSON.stringify(res))
  }, 500)
}
onMounted(() => {
  getServerData()
})
</script>

<style scoped>
/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
.charts-box {
  width: 100%;
  height: 300px;
}
</style>
