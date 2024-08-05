// 心率传参
export interface HeartParams {
  startTime: number
  endTime: number
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
// 心率分布数据传参
export interface HeartCondition extends HeartParams {
  studentId: string
}
