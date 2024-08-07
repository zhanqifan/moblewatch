// 心率传参
export interface HeartParams {
  type: string
  startTime: string
  endTime: string
}
// 实时心率分布图 响应体
export interface HeartData {
  maxHeartRate: number
  minHeartRate: number
  avgHeartRate: number
  realTimeHeartRate: RealTimeHeartRate[]
}
// 实时心率分布echart
export interface RealTimeHeartRate {
  time: string
  maxHeartRate: number
  minHeartRate: number
}

// 心率分部图
export interface HeartMap {
  grade: 'LOW' | 'MIDDLE' | 'HIGH' | 'HIGHER' | 'HIGHEST' | 'HIGHEST_HIGHER'
  time?: number
}
