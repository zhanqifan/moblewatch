// 心率分布图
export interface HeartData {
  maxHeartRate: number
  minHeartRate: number
  avgHeartRate: number
  realTimeHeartRate: RealTimeHeartRate[]
}
// 心率分布echart
export interface RealTimeHeartRate {
  time: string
  maxHeartRate: number
  minHeartRate: number
}
